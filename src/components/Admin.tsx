import React, { useState } from 'react';

const API_BASE = 'http://127.0.0.1:8000';

interface RouteConfig {
  id: string;
  method: 'GET' | 'POST';
  path: string;
  label: string;
  description: string;
  icon: string;
  color: string;
  fields?: { key: string; label: string; placeholder: string; type?: string }[];
  pathParam?: string;
}

const ROUTES: RouteConfig[] = [
  {
    id: 'iniciar',
    method: 'POST',
    path: '/1-iniciar-busca',
    label: 'Iniciar Busca',
    description: 'Dispara o robô para uma cidade. Retorna um protocolo para acompanhar o status.',
    icon: 'rocket_launch',
    color: 'blue',
    fields: [
      { key: 'cidade', label: 'Cidade', placeholder: 'Ex: Campinas' },
      { key: 'url_alvo', label: 'URL do Diário', placeholder: 'https://imprensaoficialmunicipal.com.br/...' },
      { key: 'palavras_chave', label: 'Palavras-chave', placeholder: 'Ex: Licitação, Contrato' },
    ],
  },
  {
    id: 'status',
    method: 'GET',
    path: '/2-verificar-resultado/{protocolo}',
    label: 'Verificar Status',
    description: 'Consulta o resultado de uma busca pelo protocolo retornado ao iniciar.',
    icon: 'manage_search',
    color: 'violet',
    pathParam: 'protocolo',
    fields: [
      { key: 'protocolo', label: 'Protocolo (UUID)', placeholder: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx' },
    ],
  },
  {
    id: 'listar',
    method: 'GET',
    path: '/3-listar-pdfs',
    label: 'Listar PDFs',
    description: 'Retorna todos os arquivos PDF já baixados pelo robô no servidor.',
    icon: 'folder_open',
    color: 'emerald',
  },
  {
    id: 'baixar',
    method: 'GET',
    path: '/4-baixar-pdf/{nome_arquivo}',
    label: 'Baixar PDF',
    description: 'Faz o download de um PDF específico pelo nome do arquivo.',
    icon: 'download',
    color: 'amber',
    pathParam: 'nome_arquivo',
    fields: [
      { key: 'nome_arquivo', label: 'Nome do arquivo', placeholder: 'Ex: Campinas_2026-03-29_1.pdf' },
    ],
  },
];

const METHOD_STYLE: Record<string, string> = {
  GET: 'bg-emerald-100 text-emerald-700',
  POST: 'bg-blue-100 text-blue-700',
};

const COLOR_ICON: Record<string, string> = {
  blue: 'bg-blue-50 text-blue-600',
  violet: 'bg-violet-50 text-violet-600',
  emerald: 'bg-emerald-50 text-emerald-600',
  amber: 'bg-amber-50 text-amber-600',
};

const COLOR_BORDER: Record<string, string> = {
  blue: 'border-blue-200',
  violet: 'border-violet-200',
  emerald: 'border-emerald-200',
  amber: 'border-amber-200',
};

type RouteState = {
  loading: boolean;
  response: string | null;
  status: number | null;
  elapsed: number | null;
  error: string | null;
};

export default function Admin() {
  const [selected, setSelected] = useState<string>('iniciar');
  const [formValues, setFormValues] = useState<Record<string, Record<string, string>>>({});
  const [forcar, setForcar] = useState(false);
  const [routeStates, setRouteStates] = useState<Record<string, RouteState>>({});
  const [apiBase, setApiBase] = useState(API_BASE);

  const route = ROUTES.find(r => r.id === selected)!;
  const state = routeStates[selected] ?? { loading: false, response: null, status: null, elapsed: null, error: null };
  const values = formValues[selected] ?? {};

  const setField = (key: string, val: string) => {
    setFormValues(prev => ({ ...prev, [selected]: { ...prev[selected], [key]: val } }));
  };

  const setState = (patch: Partial<RouteState>) => {
    setRouteStates(prev => ({ ...prev, [selected]: { ...prev[selected], ...patch } }));
  };

  const handleRun = async () => {
    setState({ loading: true, response: null, status: null, elapsed: null, error: null });
    const t0 = performance.now();

    try {
      let url = apiBase + route.path;
      let options: RequestInit = { method: route.method };

      if (route.method === 'POST') {
        const body: Record<string, unknown> = { ...values, forcar_reprocessamento: forcar };
        options.headers = { 'Content-Type': 'application/json' };
        options.body = JSON.stringify(body);
      } else if (route.pathParam && values[route.pathParam]) {
        url = url.replace(`{${route.pathParam}}`, encodeURIComponent(values[route.pathParam]));
      }

      // PDF download — abre em nova aba
      if (route.id === 'baixar') {
        window.open(url, '_blank');
        setState({ loading: false, response: '✅ Download iniciado em nova aba.', status: 200, elapsed: Math.round(performance.now() - t0), error: null });
        return;
      }

      const res = await fetch(url, options);
      const elapsed = Math.round(performance.now() - t0);
      let text = '';
      try { text = JSON.stringify(await res.json(), null, 2); } catch { text = await res.text(); }
      setState({ loading: false, response: text, status: res.status, elapsed, error: null });
    } catch (e: unknown) {
      const elapsed = Math.round(performance.now() - t0);
      setState({ loading: false, response: null, status: null, elapsed, error: String(e) });
    }
  };

  const statusColor = (s: number | null) => {
    if (!s) return 'text-text-muted';
    if (s < 300) return 'text-emerald-600';
    if (s < 400) return 'text-amber-600';
    return 'text-red-500';
  };

  return (
    <div className="flex h-full w-full overflow-hidden bg-background-light">
      {/* Left: Route List */}
      <aside className="w-72 shrink-0 border-r border-border bg-surface flex flex-col h-full overflow-hidden">
        <div className="px-5 py-4 border-b border-border">
          <h2 className="text-base font-semibold text-text-main">Painel Admin</h2>
          <p className="text-xs text-text-muted mt-0.5">Endpoints da API do Robô</p>
        </div>

        {/* API Base URL */}
        <div className="px-4 py-3 border-b border-border bg-surface-highlight">
          <label className="text-[10px] font-bold uppercase tracking-wider text-text-muted block mb-1">Base URL</label>
          <input
            value={apiBase}
            onChange={e => setApiBase(e.target.value)}
            className="w-full text-xs font-mono bg-white border border-border rounded-lg px-2.5 py-1.5 text-text-main focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          />
        </div>

        <nav className="flex-1 overflow-y-auto p-3 flex flex-col gap-1">
          {ROUTES.map(r => (
            <button
              key={r.id}
              onClick={() => setSelected(r.id)}
              className={`w-full text-left flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all ${
                selected === r.id
                  ? `bg-primary/10 border ${COLOR_BORDER[r.color]}`
                  : 'hover:bg-background-light border border-transparent'
              }`}
            >
              <div className={`p-1.5 rounded-lg ${COLOR_ICON[r.color]}`}>
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>{r.icon}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${METHOD_STYLE[r.method]}`}>{r.method}</span>
                  <span className="text-sm font-medium text-text-main truncate">{r.label}</span>
                </div>
                <span className="text-[11px] text-text-muted font-mono truncate block mt-0.5">{r.path}</span>
              </div>
            </button>
          ))}
        </nav>
      </aside>

      {/* Right: Detail + Runner */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Header */}
        <div className="px-8 py-5 border-b border-border bg-surface shrink-0">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-xl ${COLOR_ICON[route.color]}`}>
              <span className="material-symbols-outlined">{route.icon}</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className={`text-xs font-bold px-2 py-0.5 rounded ${METHOD_STYLE[route.method]}`}>{route.method}</span>
                <code className="text-sm font-mono text-text-main">{route.path}</code>
              </div>
              <p className="text-sm text-text-muted mt-0.5">{route.description}</p>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-8 flex flex-col gap-6">
          {/* Form */}
          {(route.fields && route.fields.length > 0) && (
            <div className="bg-surface border border-border rounded-2xl p-6 shadow-soft">
              <h3 className="text-sm font-semibold text-text-main mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-text-muted" style={{ fontSize: '18px' }}>tune</span>
                Parâmetros
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {route.fields.map(f => (
                  <div key={f.key}>
                    <label className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-1.5">{f.label}</label>
                    <input
                      type={f.type ?? 'text'}
                      value={values[f.key] ?? ''}
                      onChange={e => setField(f.key, e.target.value)}
                      placeholder={f.placeholder}
                      className="w-full px-3 py-2.5 bg-background-light border border-border rounded-lg text-sm font-mono text-text-main placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                  </div>
                ))}
                {route.id === 'iniciar' && (
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input type="checkbox" checked={forcar} onChange={e => setForcar(e.target.checked)} className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary" />
                    <span className="text-sm text-text-main">Forçar reprocessamento</span>
                  </label>
                )}
              </div>
            </div>
          )}

          {/* Run Button */}
          <button
            onClick={handleRun}
            disabled={state.loading}
            className="self-start flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-primary-hover transition-colors shadow-sm disabled:opacity-60 disabled:cursor-not-allowed active:translate-y-0.5"
          >
            {state.loading
              ? <><span className="material-symbols-outlined spinner" style={{ fontSize: '18px' }}>sync</span> Executando...</>
              : <><span className="material-symbols-outlined" style={{ fontSize: '18px' }}>play_arrow</span> Executar</>
            }
          </button>

          {/* Response */}
          {(state.response !== null || state.error) && (
            <div className="bg-surface border border-border rounded-2xl overflow-hidden shadow-soft">
              {/* Response Header */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-surface-highlight">
                <span className="text-sm font-semibold text-text-main">Resposta</span>
                <div className="flex items-center gap-4 text-xs">
                  {state.status && (
                    <span className={`font-bold font-mono ${statusColor(state.status)}`}>
                      HTTP {state.status}
                    </span>
                  )}
                  {state.elapsed !== null && (
                    <span className="text-text-muted font-mono">{state.elapsed}ms</span>
                  )}
                  {state.response && (
                    <button
                      onClick={() => navigator.clipboard.writeText(state.response!)}
                      className="flex items-center gap-1 text-text-muted hover:text-text-main transition-colors"
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>content_copy</span>
                      Copiar
                    </button>
                  )}
                </div>
              </div>
              <pre className="p-5 text-xs font-mono text-text-main overflow-x-auto leading-relaxed bg-slate-950 text-emerald-300 max-h-96">
                {state.error
                  ? <span className="text-red-400">{state.error}</span>
                  : state.response
                }
              </pre>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
