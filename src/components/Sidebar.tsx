import React from 'react';

interface SidebarProps {
  currentView: 'monitoramentos' | 'resultados' | 'planos' | 'configuracoes' | 'admin';
  setCurrentView: (view: 'monitoramentos' | 'resultados' | 'planos' | 'configuracoes' | 'admin') => void;
}

export default function Sidebar({ currentView, setCurrentView }: SidebarProps) {
  return (
    <aside className="w-64 h-full bg-surface border-r border-border flex flex-col flex-shrink-0 z-20 hidden md:flex">
      {/* Logo */}
      <div className="h-16 flex items-center gap-3 px-6 border-b border-border/50">
        <div className="size-8 rounded-lg bg-primary flex items-center justify-center text-white">
          <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>gavel</span>
        </div>
        <span className="text-base font-semibold tracking-tight text-text-main">Conecta Edital</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-6 px-3 flex flex-col gap-1">
        <button
          onClick={() => setCurrentView('monitoramentos')}
          className={`flex items-center gap-3 px-3 py-2 rounded-lg group transition-colors ${currentView === 'monitoramentos'
            ? 'bg-primary/10 text-primary border-l-[3px] border-primary'
            : 'text-text-muted hover:bg-background-light hover:text-text-main border-l-[3px] border-transparent'
            }`}
        >
          <span className={`material-symbols-outlined ${currentView === 'monitoramentos' ? 'filled' : ''}`}>dashboard</span>
          <span className="text-sm font-medium">Monitoramentos</span>
        </button>

        <button
          onClick={() => setCurrentView('resultados')}
          className={`flex items-center gap-3 px-3 py-2 rounded-lg group transition-colors ${currentView === 'resultados'
            ? 'bg-primary/10 text-primary border-l-[3px] border-primary'
            : 'text-text-muted hover:bg-background-light hover:text-text-main border-l-[3px] border-transparent'
            }`}
        >
          <span className={`material-symbols-outlined ${currentView === 'resultados' ? 'filled' : ''}`}>list_alt</span>
          <span className="text-sm font-medium">Resultados</span>
        </button>

        <button
          onClick={() => setCurrentView('planos')}
          className={`flex items-center gap-3 px-3 py-2 rounded-lg group transition-colors ${currentView === 'planos'
            ? 'bg-primary/10 text-primary border-l-[3px] border-primary'
            : 'text-text-muted hover:bg-background-light hover:text-text-main border-l-[3px] border-transparent'
            }`}
        >
          <span className={`material-symbols-outlined ${currentView === 'planos' ? 'filled' : ''}`}>credit_card</span>
          <span className="text-sm font-medium">Planos</span>
        </button>

        <button
          onClick={() => setCurrentView('configuracoes')}
          className={`flex items-center gap-3 px-3 py-2 rounded-lg group transition-colors ${currentView === 'configuracoes'
              ? 'bg-primary/10 text-primary border-l-[3px] border-primary'
              : 'text-text-muted hover:bg-background-light hover:text-text-main border-l-[3px] border-transparent'
            }`}
        >
          <span className={`material-symbols-outlined ${currentView === 'configuracoes' ? 'filled' : ''}`}>settings</span>
          <span className="text-sm font-medium">Configurações</span>
        </button>

        <div className="my-2 border-t border-border/50" />

        <button
          onClick={() => setCurrentView('admin')}
          className={`flex items-center gap-3 px-3 py-2 rounded-lg group transition-colors ${currentView === 'admin'
              ? 'bg-primary/10 text-primary border-l-[3px] border-primary'
              : 'text-text-muted hover:bg-background-light hover:text-text-main border-l-[3px] border-transparent'
            }`}
        >
          <span className={`material-symbols-outlined ${currentView === 'admin' ? 'filled' : ''}`}>terminal</span>
          <span className="text-sm font-medium">Admin API</span>
        </button>
      </nav>

      {/* Bottom Actions & User */}
      <div className="p-4 border-t border-border bg-background-light/30">
        {/* Plan Widget */}
        <div className="bg-surface border border-border rounded-xl p-4 shadow-sm mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="material-symbols-outlined text-primary" style={{ fontSize: '20px' }}>diamond</span>
            <span className="text-sm font-semibold text-text-main">Plano Premium</span>
          </div>
          <div className="w-full bg-background-light rounded-full h-1.5 mb-2 overflow-hidden border border-border/50">
            <div className="bg-primary h-1.5 rounded-full" style={{ width: '24%' }}></div>
          </div>
          <div className="flex justify-between items-center text-xs">
            <span className="text-text-muted font-mono">24/1000 slots</span>
            <a href="#" className="text-primary font-medium hover:underline">Gerenciar</a>
          </div>
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-3 px-1">
          <div className="size-9 rounded-full bg-slate-200 border border-slate-300 overflow-hidden shrink-0">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGQ6Le6Deyx1TK95pJaJZgXWPnPo6iGnioWdlk7nwfaE5Bnk_I-2Pd9av28C-yvJzuSyuK9q3sbtUlNsKmKlhC3goX5rD9s9hrEHJg0-zcBQPwvf6Xyo1FnzM-esy3X-IyqP14jmvY1crVFjJD4hgL8YS3DTk85zSrnpCzBrm5V-9bmsdZna40Yk1_qboTz56rQDhr7nGnCtxCL3Zs5XEM_a20XXNs5O9LZ7xQ1FsbDl_dtjFlLVltFTLBewpDxWsYRkMm95N66A"
              alt="User"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col overflow-hidden">
            <span className="text-sm font-medium text-text-main truncate">Dr. Ricardo Silva</span>
            <span className="text-xs text-text-muted truncate">ricardo@legal.adv.br</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
