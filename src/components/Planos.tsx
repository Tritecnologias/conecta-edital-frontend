import React, { useState } from 'react';

const plans = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Ideal para profissionais autônomos e pequenos escritórios.',
    monthlyPrice: 97,
    yearlyPrice: 77,
    slots: 50,
    color: 'slate',
    icon: 'rocket_launch',
    features: [
      '50 slots de monitoramento',
      'Diários Oficiais Municipais e Estaduais',
      'Alertas por e-mail',
      'Histórico de 30 dias',
      'Suporte por chat',
    ],
    notIncluded: [
      'Diário da União (DOU)',
      'Alertas via WhatsApp',
      'API de integração',
    ],
  },
  {
    id: 'premium',
    name: 'Premium',
    description: 'Para escritórios que precisam de cobertura completa.',
    monthlyPrice: 197,
    yearlyPrice: 157,
    slots: 1000,
    color: 'blue',
    icon: 'diamond',
    popular: true,
    features: [
      '1.000 slots de monitoramento',
      'Todos os Diários Oficiais (Municipal, Estadual e DOU)',
      'Alertas por e-mail e WhatsApp',
      'Histórico ilimitado',
      'Suporte prioritário',
      'Dashboard avançado',
    ],
    notIncluded: [
      'API de integração',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Solução completa para grandes operações e escritórios premium.',
    monthlyPrice: 497,
    yearlyPrice: 397,
    slots: 99999,
    color: 'violet',
    icon: 'corporate_fare',
    features: [
      'Slots ilimitados',
      'Todos os Diários Oficiais',
      'Alertas por e-mail, WhatsApp e SMS',
      'Histórico ilimitado',
      'Gerente de conta dedicado',
      'API de integração',
      'White-label disponível',
    ],
    notIncluded: [],
  },
];

const colorMap: Record<string, { badge: string; icon: string; button: string; ring: string; border: string }> = {
  slate: {
    badge: 'bg-slate-100 text-slate-700',
    icon: 'bg-slate-100 text-slate-600',
    button: 'bg-slate-800 hover:bg-slate-700 text-white',
    ring: 'ring-slate-200',
    border: 'border-border',
  },
  blue: {
    badge: 'bg-primary/10 text-primary',
    icon: 'bg-primary/10 text-primary',
    button: 'bg-primary hover:bg-primary-hover text-white',
    ring: 'ring-primary/30',
    border: 'border-primary/30',
  },
  violet: {
    badge: 'bg-violet-100 text-violet-700',
    icon: 'bg-violet-100 text-violet-600',
    button: 'bg-violet-600 hover:bg-violet-700 text-white',
    ring: 'ring-violet-200',
    border: 'border-violet-200',
  },
};

export default function Planos() {
  const [isYearly, setIsYearly] = useState(false);
  const [currentPlan] = useState('premium'); // plano atual simulado

  return (
    <>
      {/* Header */}
      <header className="h-20 flex items-center justify-between px-8 border-b border-border bg-surface/80 backdrop-blur-sm z-10 shrink-0">
        <div className="flex flex-col">
          <h1 className="text-xl font-bold text-text-main tracking-tight">Planos & Assinatura</h1>
          <p className="text-sm text-text-muted">Escolha o plano ideal para o seu escritório.</p>
        </div>
        {/* Toggle Mensal / Anual */}
        <div className="flex items-center gap-3 bg-slate-100 rounded-xl p-1">
          <button
            onClick={() => setIsYearly(false)}
            className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
              !isYearly ? 'bg-white shadow-soft text-text-main' : 'text-text-muted hover:text-text-main'
            }`}
          >
            Mensal
          </button>
          <button
            onClick={() => setIsYearly(true)}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
              isYearly ? 'bg-white shadow-soft text-text-main' : 'text-text-muted hover:text-text-main'
            }`}
          >
            Anual
            <span className="text-[10px] font-bold bg-green-100 text-green-700 px-1.5 py-0.5 rounded-full">-20%</span>
          </button>
        </div>
      </header>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-8">
        <div className="max-w-6xl mx-auto">

          {/* Current plan banner */}
          <div className="bg-blue-50 border border-blue-100 rounded-xl px-5 py-4 flex items-center gap-3 mb-8">
            <span className="material-symbols-outlined text-primary">info</span>
            <p className="text-sm text-text-main">
              Você está no plano <strong>Premium</strong> com <strong>24/1.000 slots</strong> utilizados.
              {isYearly && ' Troque para anual e economize 20%.'}
            </p>
          </div>

          {/* Plans Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {plans.map((plan) => {
              const c = colorMap[plan.color];
              const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
              const isCurrent = plan.id === currentPlan;

              return (
                <div
                  key={plan.id}
                  className={`relative bg-surface rounded-2xl border p-6 flex flex-col shadow-soft transition-all hover:shadow-hover ${
                    plan.popular
                      ? `${c.border} ring-2 ${c.ring}`
                      : 'border-border'
                  }`}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="bg-primary text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-sm uppercase tracking-wide">
                        Mais Popular
                      </span>
                    </div>
                  )}

                  {/* Plan header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-2.5 rounded-xl ${c.icon}`}>
                      <span className="material-symbols-outlined">{plan.icon}</span>
                    </div>
                    {isCurrent && (
                      <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide ${c.badge}`}>
                        Plano Atual
                      </span>
                    )}
                  </div>

                  <h2 className="text-lg font-bold text-text-main mb-1">{plan.name}</h2>
                  <p className="text-sm text-text-muted mb-5 leading-relaxed">{plan.description}</p>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-end gap-1">
                      <span className="text-3xl font-extrabold text-text-main">
                        R$ {price}
                      </span>
                      <span className="text-text-muted text-sm mb-1">/mês</span>
                    </div>
                    {isYearly && (
                      <p className="text-xs text-green-600 font-medium mt-1">
                        Cobrado R$ {price * 12}/ano — economize R$ {(plan.monthlyPrice - plan.yearlyPrice) * 12}/ano
                      </p>
                    )}
                    <div className="mt-2 flex items-center gap-1.5 text-xs text-text-muted">
                      <span className="material-symbols-outlined text-[14px]">radar</span>
                      {plan.slots >= 99999 ? 'Slots ilimitados' : `${plan.slots.toLocaleString('pt-BR')} slots`}
                    </div>
                  </div>

                  {/* CTA */}
                  <button
                    className={`w-full py-2.5 rounded-xl text-sm font-semibold transition-all mb-6 ${
                      isCurrent
                        ? 'bg-slate-100 text-text-muted cursor-default'
                        : `${c.button} shadow-sm active:translate-y-0.5`
                    }`}
                    disabled={isCurrent}
                  >
                    {isCurrent ? 'Plano atual' : `Assinar ${plan.name}`}
                  </button>

                  {/* Divider */}
                  <div className="border-t border-border mb-5" />

                  {/* Features */}
                  <ul className="space-y-2.5 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-text-main">
                        <span className="material-symbols-outlined text-success text-[18px] mt-0.5 shrink-0">check_circle</span>
                        {f}
                      </li>
                    ))}
                    {plan.notIncluded.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-text-muted">
                        <span className="material-symbols-outlined text-[18px] mt-0.5 shrink-0 text-slate-300">cancel</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* FAQ / Note */}
          <p className="text-center text-xs text-text-muted mt-10">
            Todos os planos incluem cancelamento a qualquer momento. Dúvidas?{' '}
            <a href="#" className="text-primary hover:underline font-medium">Fale com nosso time</a>.
          </p>
        </div>
      </div>
    </>
  );
}
