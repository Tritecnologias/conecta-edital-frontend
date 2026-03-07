import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Monitoramentos from './components/Monitoramentos';
import Resultados from './components/Resultados';
import Planos from './components/Planos';
import Configuracoes from './components/Configuracoes';
import NovoMonitoramentoModal from './components/NovoMonitoramentoModal';
import ActivationModal from './components/ActivationModal';

export default function App() {
  const [currentView, setCurrentView] = useState<'monitoramentos' | 'resultados' | 'planos' | 'configuracoes'>('monitoramentos');
  const [isNewModalOpen, setIsNewModalOpen] = useState(false);
  const [isActivationOpen, setIsActivationOpen] = useState(false);

  const handleStartMonitoramento = () => {
    setIsNewModalOpen(false);
    setIsActivationOpen(true);
  };

  const handleActivationComplete = () => {
    // Optional: do something when activation is complete, like switching view
    // setCurrentView('resultados');
  };

  return (
    <div className="bg-background-light text-text-main h-screen w-full overflow-hidden flex selection:bg-primary/20 selection:text-primary font-display">
      <Sidebar currentView={currentView} setCurrentView={setCurrentView} />

      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        {currentView === 'monitoramentos' && (
          <Monitoramentos onNew={() => setIsNewModalOpen(true)} />
        )}
        {currentView === 'resultados' && (
          <Resultados />
        )}
        {currentView === 'planos' && (
          <Planos />
        )}
        {currentView === 'configuracoes' && (
          <Configuracoes />
        )}
      </main>

      {isNewModalOpen && (
        <NovoMonitoramentoModal
          onClose={() => setIsNewModalOpen(false)}
          onStart={handleStartMonitoramento}
        />
      )}

      {isActivationOpen && (
        <ActivationModal
          onClose={() => {
            setIsActivationOpen(false);
            setCurrentView('resultados');
          }}
          onComplete={handleActivationComplete}
        />
      )}
    </div>
  );
}
