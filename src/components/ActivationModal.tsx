import React, { useEffect, useState } from 'react';

interface Props {
  onClose: () => void;
  onComplete: () => void;
}

export default function ActivationModal({ onClose, onComplete }: Props) {
  const [step, setStep] = useState(1); // 1: params, 2: connecting, 3: activating, 4: done

  useEffect(() => {
    const timer1 = setTimeout(() => setStep(2), 1500);
    const timer2 = setTimeout(() => setStep(3), 3000);
    const timer3 = setTimeout(() => {
      setStep(4);
      onComplete();
    }, 4500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/20 backdrop-blur-sm">
      <div className="bg-surface w-full max-w-[520px] rounded-lg shadow-modal border border-border overflow-hidden flex flex-col transition-all duration-300 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-text-muted hover:text-text-main transition-colors">
          <span className="material-symbols-outlined">close</span>
        </button>

        {step < 4 ? (
          <div className="p-8">
            <div className="flex items-start gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-primary text-[24px]">radar</span>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-text-main mb-1">Criando monitoramento...</h2>
                <p className="text-text-muted text-sm">Aguarde enquanto configuramos seu alerta para "Wanderson Souza".</p>
              </div>
            </div>

            <div className="space-y-0 relative pl-2">
              <div className="absolute left-[19px] top-3 bottom-8 w-[2px] bg-border -z-10"></div>

              {/* Step 1 */}
              <div className="flex items-start gap-4 pb-8 group">
                <div className={`relative z-10 flex items-center justify-center w-9 h-9 rounded-full ring-4 ring-white transition-all ${step >= 1 ? 'bg-success text-white' : 'bg-slate-100 border-2 border-border'}`}>
                  {step > 1 ? (
                    <span className="material-symbols-outlined text-[18px] font-bold">check</span>
                  ) : (
                    <span className="material-symbols-outlined text-primary text-[20px] spinner">progress_activity</span>
                  )}
                </div>
                <div className="pt-1.5">
                  <p className={`text-sm font-semibold ${step >= 1 ? 'text-text-main' : 'text-text-muted'}`}>Parâmetros configurados</p>
                  <p className="text-xs text-text-muted mt-0.5">Definições de escopo e palavras-chave salvas.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-4 pb-8 group">
                <div className={`relative z-10 flex items-center justify-center w-9 h-9 rounded-full ring-4 ring-white transition-all ${step > 2 ? 'bg-success text-white' : step === 2 ? 'bg-surface border-2 border-primary' : 'bg-slate-100 border-2 border-border'}`}>
                  {step > 2 ? (
                    <span className="material-symbols-outlined text-[18px] font-bold">check</span>
                  ) : step === 2 ? (
                    <span className="material-symbols-outlined text-primary text-[20px] spinner">progress_activity</span>
                  ) : (
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                  )}
                </div>
                <div className="pt-1.5">
                  <p className={`text-sm font-semibold ${step > 2 ? 'text-text-main' : step === 2 ? 'text-primary' : 'text-text-muted font-medium'}`}>Conectando ao Diário Oficial...</p>
                  {step >= 2 && <p className="text-xs text-text-muted mt-0.5">Estabelecendo conexão segura com MG/Uberlândia.</p>}
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-4 group">
                <div className={`relative z-10 flex items-center justify-center w-9 h-9 rounded-full ring-4 ring-white transition-all ${step > 3 ? 'bg-success text-white' : step === 3 ? 'bg-surface border-2 border-primary' : 'bg-slate-100 border-2 border-border'}`}>
                  {step > 3 ? (
                    <span className="material-symbols-outlined text-[18px] font-bold">check</span>
                  ) : step === 3 ? (
                    <span className="material-symbols-outlined text-primary text-[20px] spinner">progress_activity</span>
                  ) : (
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                  )}
                </div>
                <div className="pt-1.5">
                  <p className={`text-sm font-semibold ${step > 3 ? 'text-text-main' : step === 3 ? 'text-primary' : 'text-text-muted font-medium'}`}>Ativando alertas</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-8 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-[32px]">check</span>
            </div>
            <h2 className="text-xl font-semibold text-text-main mb-2">Monitoramento Ativo!</h2>
            <p className="text-text-muted text-sm mb-6 max-w-[80%]">
              Você receberá um alerta assim que encontrarmos publicações para <span className="font-mono text-text-main bg-slate-100 px-1 py-0.5 rounded">"Wanderson Souza"</span>.
            </p>
            <button onClick={onClose} className="w-full bg-primary hover:bg-primary-hover text-white font-medium py-2.5 px-4 rounded-lg transition-colors">
              Ver Resultados
            </button>
          </div>
        )}

        {/* Loading Bar */}
        {step < 4 && (
          <div className="h-1 w-full bg-slate-100 mt-2">
            <div 
              className="h-full bg-primary rounded-r-full transition-all duration-1000 ease-out"
              style={{ width: `${(step / 3) * 100}%` }}
            ></div>
          </div>
        )}
      </div>
    </div>
  );
}
