import React, { useState } from 'react';

function Toggle({ enabled, onChange }: { enabled: boolean; onChange: (v: boolean) => void }) {
    return (
        <button
            onClick={() => onChange(!enabled)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${enabled ? 'bg-primary' : 'bg-slate-200'
                }`}
        >
            <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${enabled ? 'translate-x-6' : 'translate-x-1'
                    }`}
            />
        </button>
    );
}

export default function Configuracoes() {
    const [nome, setNome] = useState('Dr. Ricardo Silva');
    const [email, setEmail] = useState('ricardo@legal.adv.br');
    const [telefone, setTelefone] = useState('(34) 99999-0000');
    const [oab, setOab] = useState('OAB/MG 123456');

    const [notifEmail, setNotifEmail] = useState(true);
    const [notifWhatsApp, setNotifWhatsApp] = useState(false);
    const [notifResumoDiario, setNotifResumoDiario] = useState(true);
    const [notifNovasOcorrencias, setNotifNovasOcorrencias] = useState(true);

    const [saved, setSaved] = useState(false);

    const handleSave = () => {
        setSaved(true);
        setTimeout(() => setSaved(false), 2500);
    };

    return (
        <>
            {/* Header */}
            <header className="h-20 flex items-center justify-between px-8 border-b border-border bg-surface/80 backdrop-blur-sm z-10 shrink-0">
                <div className="flex flex-col">
                    <h1 className="text-xl font-bold text-text-main tracking-tight">Configurações</h1>
                    <p className="text-sm text-text-muted">Gerencie seu perfil e preferências da conta.</p>
                </div>
                <button
                    onClick={handleSave}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all shadow-sm active:translate-y-0.5 ${saved
                            ? 'bg-success text-white'
                            : 'bg-primary hover:bg-primary-hover text-white'
                        }`}
                >
                    <span className="material-symbols-outlined text-[18px]">
                        {saved ? 'check' : 'save'}
                    </span>
                    {saved ? 'Salvo!' : 'Salvar alterações'}
                </button>
            </header>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-8">
                <div className="max-w-3xl mx-auto space-y-8">

                    {/* Seção: Perfil */}
                    <section className="bg-surface border border-border rounded-2xl shadow-soft overflow-hidden">
                        <div className="px-6 py-4 border-b border-border flex items-center gap-3">
                            <div className="p-2 bg-blue-50 rounded-lg text-primary">
                                <span className="material-symbols-outlined">person</span>
                            </div>
                            <div>
                                <h2 className="text-base font-semibold text-text-main">Perfil</h2>
                                <p className="text-xs text-text-muted">Seus dados pessoais e profissionais.</p>
                            </div>
                        </div>

                        <div className="p-6 space-y-5">
                            {/* Avatar */}
                            <div className="flex items-center gap-5">
                                <div className="size-16 rounded-full bg-slate-200 border border-slate-300 overflow-hidden shrink-0">
                                    <img
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGQ6Le6Deyx1TK95pJaJZgXWPnPo6iGnioWdlk7nwfaE5Bnk_I-2Pd9av28C-yvJzuSyuK9q3sbtUlNsKmKlhC3goX5rD9s9hrEHJg0-zcBQPwvf6Xyo1FnzM-esy3X-IyqP14jmvY1crVFjJD4hgL8YS3DTk85zSrnpCzBrm5V-9bmsdZna40Yk1_qboTz56rQDhr7nGnCtxCL3Zs5XEM_a20XXNs5O9LZ7xQ1FsbDl_dtjFlLVltFTLBewpDxWsYRkMm95N66A"
                                        alt="Avatar"
                                        className="w-full h-full object-cover"
                                        referrerPolicy="no-referrer"
                                    />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-text-main mb-1">Foto de perfil</p>
                                    <button className="text-xs text-primary hover:underline font-medium flex items-center gap-1">
                                        <span className="material-symbols-outlined text-[14px]">upload</span>
                                        Alterar foto
                                    </button>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs font-semibold text-text-muted uppercase tracking-wide">Nome completo</label>
                                    <input
                                        type="text"
                                        value={nome}
                                        onChange={(e) => setNome(e.target.value)}
                                        className="w-full px-3 py-2.5 bg-white border border-border rounded-lg text-sm text-text-main focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                    />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs font-semibold text-text-muted uppercase tracking-wide">OAB / Registro</label>
                                    <input
                                        type="text"
                                        value={oab}
                                        onChange={(e) => setOab(e.target.value)}
                                        className="w-full px-3 py-2.5 bg-white border border-border rounded-lg text-sm text-text-main focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                    />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs font-semibold text-text-muted uppercase tracking-wide">E-mail</label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full px-3 py-2.5 bg-white border border-border rounded-lg text-sm text-text-main focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                    />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs font-semibold text-text-muted uppercase tracking-wide">Telefone / WhatsApp</label>
                                    <input
                                        type="tel"
                                        value={telefone}
                                        onChange={(e) => setTelefone(e.target.value)}
                                        className="w-full px-3 py-2.5 bg-white border border-border rounded-lg text-sm text-text-main focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Seção: Notificações */}
                    <section className="bg-surface border border-border rounded-2xl shadow-soft overflow-hidden">
                        <div className="px-6 py-4 border-b border-border flex items-center gap-3">
                            <div className="p-2 bg-amber-50 rounded-lg text-amber-600">
                                <span className="material-symbols-outlined">notifications</span>
                            </div>
                            <div>
                                <h2 className="text-base font-semibold text-text-main">Notificações</h2>
                                <p className="text-xs text-text-muted">Escolha como e quando quer ser alertado.</p>
                            </div>
                        </div>

                        <div className="p-6 divide-y divide-border">
                            {[
                                {
                                    label: 'Alertas por e-mail',
                                    desc: 'Receba um e-mail ao detectar novas ocorrências.',
                                    value: notifEmail,
                                    set: setNotifEmail,
                                    icon: 'mail',
                                },
                                {
                                    label: 'Alertas via WhatsApp',
                                    desc: 'Receba mensagens no WhatsApp configurado.',
                                    value: notifWhatsApp,
                                    set: setNotifWhatsApp,
                                    icon: 'chat',
                                },
                                {
                                    label: 'Resumo diário',
                                    desc: 'Receba um resumo consolidado todo dia às 8h.',
                                    value: notifResumoDiario,
                                    set: setNotifResumoDiario,
                                    icon: 'today',
                                },
                                {
                                    label: 'Novas ocorrências em tempo real',
                                    desc: 'Alerta imediato assim que uma publicação for encontrada.',
                                    value: notifNovasOcorrencias,
                                    set: setNotifNovasOcorrencias,
                                    icon: 'bolt',
                                },
                            ].map((item) => (
                                <div key={item.label} className="flex items-center justify-between py-4 first:pt-0 last:pb-0">
                                    <div className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-text-muted text-[20px] mt-0.5">{item.icon}</span>
                                        <div>
                                            <p className="text-sm font-medium text-text-main">{item.label}</p>
                                            <p className="text-xs text-text-muted mt-0.5">{item.desc}</p>
                                        </div>
                                    </div>
                                    <Toggle enabled={item.value} onChange={item.set} />
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Seção: Segurança */}
                    <section className="bg-surface border border-border rounded-2xl shadow-soft overflow-hidden">
                        <div className="px-6 py-4 border-b border-border flex items-center gap-3">
                            <div className="p-2 bg-green-50 rounded-lg text-success">
                                <span className="material-symbols-outlined">lock</span>
                            </div>
                            <div>
                                <h2 className="text-base font-semibold text-text-main">Segurança</h2>
                                <p className="text-xs text-text-muted">Gerencie sua senha e autenticação.</p>
                            </div>
                        </div>

                        <div className="p-6 space-y-4">
                            <div className="flex items-center justify-between py-3 px-4 bg-slate-50 rounded-xl border border-border">
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-text-muted">key</span>
                                    <div>
                                        <p className="text-sm font-medium text-text-main">Senha</p>
                                        <p className="text-xs text-text-muted">Última alteração há 30 dias</p>
                                    </div>
                                </div>
                                <button className="text-sm text-primary hover:underline font-medium">Alterar</button>
                            </div>

                            <div className="flex items-center justify-between py-3 px-4 bg-slate-50 rounded-xl border border-border">
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-text-muted">verified_user</span>
                                    <div>
                                        <p className="text-sm font-medium text-text-main">Autenticação em dois fatores</p>
                                        <p className="text-xs text-text-muted">Adicione uma camada extra de proteção</p>
                                    </div>
                                </div>
                                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-text-muted">Desativado</span>
                            </div>
                        </div>
                    </section>

                    {/* Zona de perigo */}
                    <section className="bg-red-50 border border-red-100 rounded-2xl overflow-hidden">
                        <div className="px-6 py-4 border-b border-red-100 flex items-center gap-3">
                            <div className="p-2 bg-red-100 rounded-lg text-red-600">
                                <span className="material-symbols-outlined">warning</span>
                            </div>
                            <div>
                                <h2 className="text-base font-semibold text-red-700">Zona de perigo</h2>
                                <p className="text-xs text-red-400">Ações irreversíveis da conta.</p>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-red-700">Excluir conta</p>
                                    <p className="text-xs text-red-400 mt-0.5">Remove permanentemente todos os seus dados e monitoramentos.</p>
                                </div>
                                <button className="px-4 py-2 text-sm font-semibold text-red-600 border border-red-200 rounded-lg hover:bg-red-100 transition-colors">
                                    Excluir conta
                                </button>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </>
    );
}
