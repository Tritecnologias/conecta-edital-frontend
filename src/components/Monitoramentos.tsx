import React from 'react';

export default function Monitoramentos({ onNew }: { onNew: () => void }) {
  return (
    <>
      {/* Header */}
      <header className="h-20 flex items-center justify-between px-8 border-b border-border bg-surface/80 backdrop-blur-sm z-10 shrink-0">
        <div className="flex flex-col">
          <h1 className="text-xl font-bold text-text-main tracking-tight">Meus Monitoramentos</h1>
          <p className="text-sm text-text-muted">Gerencie seus rastreadores ativos e acompanhe novas ocorrências.</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-3 py-2 bg-white border border-border rounded-lg text-sm font-medium text-text-muted hover:text-text-main hover:border-slate-300 transition-colors shadow-sm">
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>calendar_today</span>
            <span>Últimos 30 dias</span>
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_drop_down</span>
          </button>
          <button 
            onClick={onNew}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary-hover transition-colors shadow-sm active:translate-y-0.5"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>add</span>
            Novo Monitoramento
          </button>
        </div>
      </header>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-8">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Stat Card 1 */}
            <div className="bg-surface rounded-xl p-5 border border-border shadow-soft">
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 rounded-lg bg-blue-50 text-primary">
                  <span className="material-symbols-outlined">data_usage</span>
                </div>
                <span className="text-xs font-semibold px-2 py-1 rounded-full bg-green-100 text-green-700">+2% essa semana</span>
              </div>
              <p className="text-sm font-medium text-text-muted">Slots Utilizados</p>
              <div className="flex items-end gap-2 mt-1">
                <span className="text-2xl font-bold text-text-main">24</span>
                <span className="text-sm text-text-muted mb-1 font-medium">/ 1000</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-1.5 mt-3 overflow-hidden">
                <div className="bg-success h-1.5 rounded-full" style={{ width: '2.4%' }}></div>
              </div>
            </div>

            {/* Stat Card 2 */}
            <div className="bg-surface rounded-xl p-5 border border-border shadow-soft">
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 rounded-lg bg-blue-50 text-primary">
                  <span className="material-symbols-outlined">radar</span>
                </div>
              </div>
              <p className="text-sm font-medium text-text-muted">Monitoramentos Ativos</p>
              <div className="flex items-end gap-2 mt-1">
                <span className="text-2xl font-bold text-text-main">24</span>
                <span className="text-sm text-success mb-1 font-medium flex items-center gap-1">
                  <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>trending_up</span>
                  +1 hoje
                </span>
              </div>
            </div>

            {/* Stat Card 3 */}
            <div className="bg-surface rounded-xl p-5 border border-border shadow-soft relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-amber-100 rounded-full blur-2xl opacity-50"></div>
              <div className="flex items-start justify-between mb-4 relative z-10">
                <div className="p-2 rounded-lg bg-amber-50 text-amber-600">
                  <span className="material-symbols-outlined">notifications_active</span>
                </div>
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
                </span>
              </div>
              <p className="text-sm font-medium text-text-muted relative z-10">Novas Ocorrências</p>
              <div className="flex items-end gap-2 mt-1 relative z-10">
                <span className="text-2xl font-bold text-text-main">5</span>
                <span className="text-sm text-amber-600 mb-1 font-medium">Requer atenção</span>
              </div>
            </div>
          </div>

          {/* Monitoring Cards Grid */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-text-main">Rastreadores Ativos</h2>
              <div className="flex gap-2">
                <button className="p-2 text-text-muted hover:bg-slate-100 rounded-lg transition-colors" title="Visualização em lista">
                  <span className="material-symbols-outlined">view_list</span>
                </button>
                <button className="p-2 text-primary bg-blue-50 rounded-lg transition-colors" title="Visualização em grade">
                  <span className="material-symbols-outlined">grid_view</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Card 1 */}
              <div className="group bg-surface border border-border rounded-xl p-5 shadow-soft hover:shadow-hover hover:border-blue-200 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-slate-100 rounded-lg p-2 text-slate-600 border border-slate-200 group-hover:bg-blue-50 group-hover:text-primary group-hover:border-blue-100 transition-colors">
                      <span className="material-symbols-outlined">location_on</span>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-text-main leading-tight">Diário Oficial - MG</h3>
                      <p className="text-xs text-text-muted mt-0.5">Uberlândia</p>
                    </div>
                  </div>
                  <button className="text-text-muted hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">more_horiz</span>
                  </button>
                </div>
                <div className="bg-slate-50 rounded-lg px-3 py-2 border border-slate-100 mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-text-muted" style={{ fontSize: '16px' }}>search</span>
                  <code className="text-sm font-mono text-text-main">"Wanderson Souza"</code>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-border/50">
                  <div className="flex items-center gap-1.5">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-success"></span>
                    </span>
                    <span className="text-xs font-semibold text-text-main">Monitorando</span>
                  </div>
                  <span className="text-xs text-text-muted flex items-center gap-1">
                    <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>history</span>
                    Verificado há 5 min
                  </span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group bg-surface border border-border rounded-xl p-5 shadow-soft hover:shadow-hover hover:border-blue-200 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-slate-100 rounded-lg p-2 text-slate-600 border border-slate-200 group-hover:bg-blue-50 group-hover:text-primary group-hover:border-blue-100 transition-colors">
                      <span className="material-symbols-outlined">location_city</span>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-text-main leading-tight">Diário Oficial da União</h3>
                      <p className="text-xs text-text-muted mt-0.5">Nacional</p>
                    </div>
                  </div>
                  <button className="text-text-muted hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">more_horiz</span>
                  </button>
                </div>
                <div className="bg-slate-50 rounded-lg px-3 py-2 border border-slate-100 mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-text-muted" style={{ fontSize: '16px' }}>search</span>
                  <code className="text-sm font-mono text-text-main">CNPJ 12.345.678/0001-90</code>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-border/50">
                  <div className="flex items-center gap-1.5">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-success"></span>
                    </span>
                    <span className="text-xs font-semibold text-text-main">Monitorando</span>
                  </div>
                  <span className="text-xs text-text-muted flex items-center gap-1">
                    <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>history</span>
                    Verificado há 12 min
                  </span>
                </div>
              </div>

              {/* Card 3 */}
              <div className="group bg-surface border border-border rounded-xl p-5 shadow-soft hover:shadow-hover hover:border-blue-200 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-slate-100 rounded-lg p-2 text-slate-600 border border-slate-200 group-hover:bg-blue-50 group-hover:text-primary group-hover:border-blue-100 transition-colors">
                      <span className="material-symbols-outlined">account_balance</span>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-text-main leading-tight">Tribunal de Justiça - SP</h3>
                      <p className="text-xs text-text-muted mt-0.5">São Paulo</p>
                    </div>
                  </div>
                  <button className="text-text-muted hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">more_horiz</span>
                  </button>
                </div>
                <div className="bg-slate-50 rounded-lg px-3 py-2 border border-slate-100 mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-text-muted" style={{ fontSize: '16px' }}>search</span>
                  <code className="text-sm font-mono text-text-main">"Licitação 88/2023"</code>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-border/50">
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined animate-spin text-primary" style={{ fontSize: '14px' }}>sync</span>
                    <span className="text-xs font-semibold text-primary">Verificando agora...</span>
                  </div>
                  <span className="text-xs text-text-muted flex items-center gap-1">
                    <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>history</span>
                    Conectando
                  </span>
                </div>
              </div>

              {/* Card 4 */}
              <div className="group bg-surface border border-amber-200 rounded-xl p-5 shadow-soft hover:shadow-hover hover:border-amber-300 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-400 rounded-l-xl"></div>
                <div className="flex justify-between items-start mb-3 pl-2">
                  <div className="flex items-center gap-3">
                    <div className="bg-amber-50 rounded-lg p-2 text-amber-600 border border-amber-100 group-hover:bg-amber-100 group-hover:text-amber-700 transition-colors">
                      <span className="material-symbols-outlined">warning</span>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-text-main leading-tight">Diário da Justiça - RJ</h3>
                      <p className="text-xs text-text-muted mt-0.5">Rio de Janeiro</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="bg-amber-100 text-amber-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">3 Novas</span>
                    <button className="text-text-muted hover:text-primary transition-colors">
                      <span className="material-symbols-outlined">more_horiz</span>
                    </button>
                  </div>
                </div>
                <div className="bg-slate-50 rounded-lg px-3 py-2 border border-slate-100 mb-4 flex items-center gap-2 ml-2">
                  <span className="material-symbols-outlined text-text-muted" style={{ fontSize: '16px' }}>search</span>
                  <code className="text-sm font-mono text-text-main">Processo Nº 4281/22</code>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-border/50 ml-2">
                  <div className="flex items-center gap-1.5">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-success"></span>
                    </span>
                    <span className="text-xs font-semibold text-text-main">Monitorando</span>
                  </div>
                  <span className="text-xs text-text-muted flex items-center gap-1">
                    <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>history</span>
                    Verificado há 1h
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
