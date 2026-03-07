import React, { useState } from 'react';

interface Props {
  onClose: () => void;
  onStart: () => void;
}

export default function NovoMonitoramentoModal({ onClose, onStart }: Props) {
  const [source, setSource] = useState('Uberlândia, Minas Gerais');
  const [keyword, setKeyword] = useState('"Wanderson Souza"');
  const [confirm, setConfirm] = useState(false);

  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-surface w-full max-w-[520px] rounded-2xl shadow-modal border border-border flex flex-col animate-in zoom-in-95 duration-300 transform">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <div>
            <h2 className="text-lg font-semibold text-text-main leading-tight">Novo Monitoramento</h2>
            <p className="text-sm text-text-muted mt-0.5">Configure onde e o que o robô deve buscar.</p>
          </div>
          <button onClick={onClose} className="text-text-muted hover:text-text-main hover:bg-slate-100 rounded-lg p-1 transition-colors">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          {/* Step 1: Source */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-text-main">
              Onde devemos procurar? <span className="text-red-500">*</span>
            </label>
            <div className="relative group">
              <span className="absolute left-3 top-2.5 text-text-muted">
                <span className="material-symbols-outlined text-[20px]">location_on</span>
              </span>
              <input 
                type="text" 
                value={source}
                onChange={(e) => setSource(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 bg-white border border-border rounded-lg text-sm text-text-main placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm" 
                placeholder="Ex: Uberlândia, Minas Gerais..." 
              />
              <span className="absolute right-3 top-2.5 text-text-muted cursor-pointer hover:text-text-main">
                <span className="material-symbols-outlined text-[20px]">expand_more</span>
              </span>
            </div>
            <p className="text-xs text-text-muted">A fonte será verificada a cada 24 horas.</p>
          </div>

          {/* Step 2: Keyword */}
          <div className="space-y-2">
            <div className="flex justify-between">
              <label className="block text-sm font-medium text-text-main">
                Termo de busca exato <span className="text-red-500">*</span>
              </label>
              <span className="text-xs text-text-muted uppercase tracking-wide font-medium">Obrigatório</span>
            </div>
            <div className="relative">
              <span className="absolute left-3 top-2.5 text-text-muted">
                <span className="material-symbols-outlined text-[20px]">search</span>
              </span>
              <input 
                type="text" 
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                className="w-full pl-10 pr-3 py-2.5 bg-white border border-border rounded-lg text-sm font-mono text-text-main placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm" 
                placeholder="Digite o nome ou termo..." 
              />
            </div>
            <div className="flex items-start gap-2 mt-1.5">
              <span className="material-symbols-outlined text-[14px] text-primary mt-0.5">info</span>
              <p className="text-xs text-text-muted leading-relaxed">
                Use aspas para termos compostos (ex: <span className="font-mono bg-slate-100 px-1 rounded text-text-main">"Nome Sobrenome"</span>). Termos sem aspas buscarão qualquer ocorrência das palavras.
              </p>
            </div>
          </div>

          {/* Confirmation */}
          <div className="bg-surface-highlight rounded-lg p-3 border border-border/60 flex items-start gap-3">
            <div className="flex h-5 items-center">
              <input 
                type="checkbox" 
                id="slots" 
                checked={confirm}
                onChange={(e) => setConfirm(e.target.checked)}
                className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary cursor-pointer" 
              />
            </div>
            <div className="text-sm">
              <label htmlFor="slots" className="font-medium text-text-main cursor-pointer">Confirmar consumo de slot</label>
              <p className="text-text-muted text-xs mt-0.5">Estou ciente que este termo consumirá <strong>1 slot</strong> do meu plano Premium.</p>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-border rounded-b-2xl flex items-center justify-end gap-3">
          <button 
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-text-main bg-white border border-border rounded-lg hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-slate-200 transition-colors shadow-sm"
          >
            Cancelar
          </button>
          <button 
            onClick={onStart}
            disabled={!confirm}
            className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary transition-colors shadow-sm flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span>Iniciar Monitoramento</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
}
