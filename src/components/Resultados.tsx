import React from 'react';

export default function Resultados() {
  return (
    <div className="flex h-full w-full overflow-hidden p-0 md:p-4 gap-4 bg-background-light">
      {/* MASTER PANE: List of Results */}
      <section className="flex flex-col w-full md:w-[380px] lg:w-[420px] bg-white md:rounded-2xl border-r md:border border-border shadow-card overflow-hidden shrink-0 z-10 h-full">
        {/* Search & Filters Header */}
        <div className="p-4 border-b border-border bg-white sticky top-0 z-10">
          <div className="relative mb-3">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-muted text-[20px]">search</span>
            <input 
              type="text" 
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-text-main placeholder-text-muted" 
              placeholder="Buscar nos resultados..." 
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-xs text-text-muted font-medium">
              <span>Ordenar:</span>
              <button className="flex items-center gap-0.5 text-text-main hover:bg-slate-50 px-1.5 py-0.5 rounded">
                Mais recentes <span className="material-symbols-outlined text-[14px]">expand_more</span>
              </button>
            </div>
            <div className="text-xs text-text-muted">
              <span className="font-mono text-text-main font-semibold">124</span> resultados
            </div>
          </div>
        </div>

        {/* Scrollable List */}
        <div className="overflow-y-auto custom-scrollbar flex-1 pb-4">
          {/* List Item 1 (Active) */}
          <div className="group cursor-pointer border-b border-border hover:bg-slate-50 transition-colors bg-blue-50/50 relative">
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-primary"></div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-1.5">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span className="text-xs font-semibold text-primary uppercase tracking-wide">DOU - Seção 3</span>
                </div>
                <span className="text-[11px] text-text-muted font-medium whitespace-nowrap">Hoje, 09:30</span>
              </div>
              <h3 className="text-sm font-semibold text-text-main mb-1 line-clamp-1 leading-snug">Nomeação Cargo Efetivo</h3>
              <p className="text-xs text-text-muted line-clamp-2 leading-relaxed">
                ...resolve nomear o candidato <strong className="text-text-main bg-yellow-100 px-0.5 rounded">Wanderson Souza</strong> para exercer o cargo de Analista Judiciário, Área Administrativa...
              </p>
            </div>
          </div>

          {/* List Item 2 */}
          <div className="group cursor-pointer border-b border-border hover:bg-slate-50 transition-colors">
            <div className="p-4 opacity-70 group-hover:opacity-100 transition-opacity">
              <div className="flex justify-between items-start mb-1.5">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-slate-300"></span>
                  <span className="text-xs font-semibold text-text-muted uppercase tracking-wide">TJ - MG</span>
                </div>
                <span className="text-[11px] text-text-muted font-medium whitespace-nowrap">Ontem, 16:45</span>
              </div>
              <h3 className="text-sm font-semibold text-text-main mb-1 line-clamp-1 leading-snug">Intimação Processual</h3>
              <p className="text-xs text-text-muted line-clamp-2 leading-relaxed">
                ...Fica intimado o advogado, referente ao processo nº 2342-99.2023, onde consta o nome de <strong className="text-text-main font-medium">Wanderson Souza</strong> como parte interessada...
              </p>
            </div>
          </div>

          {/* List Item 3 */}
          <div className="group cursor-pointer border-b border-border hover:bg-slate-50 transition-colors">
            <div className="p-4 opacity-70 group-hover:opacity-100 transition-opacity">
              <div className="flex justify-between items-start mb-1.5">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-slate-300"></span>
                  <span className="text-xs font-semibold text-text-muted uppercase tracking-wide">DOE - SP</span>
                </div>
                <span className="text-[11px] text-text-muted font-medium whitespace-nowrap">12 Ago, 10:15</span>
              </div>
              <h3 className="text-sm font-semibold text-text-main mb-1 line-clamp-1 leading-snug">Licitação Pública - Aviso</h3>
              <p className="text-xs text-text-muted line-clamp-2 leading-relaxed">
                ...convocação para assinatura de contrato. A empresa representada por <strong className="text-text-main font-medium">Wanderson Souza</strong> deve comparecer em até 5 dias úteis...
              </p>
            </div>
          </div>

          {/* List Item 4 */}
          <div className="group cursor-pointer border-b border-border hover:bg-slate-50 transition-colors">
            <div className="p-4 opacity-70 group-hover:opacity-100 transition-opacity">
              <div className="flex justify-between items-start mb-1.5">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-slate-300"></span>
                  <span className="text-xs font-semibold text-text-muted uppercase tracking-wide">Junta Comercial</span>
                </div>
                <span className="text-[11px] text-text-muted font-medium whitespace-nowrap">10 Ago, 14:20</span>
              </div>
              <h3 className="text-sm font-semibold text-text-main mb-1 line-clamp-1 leading-snug">Alteração Contratual</h3>
              <p className="text-xs text-text-muted line-clamp-2 leading-relaxed">
                ...arquivamento de ato constitutivo referente à sociedade limitada onde figura como sócio <strong className="text-text-main font-medium">Wanderson Souza</strong>...
              </p>
            </div>
          </div>

          {/* List Item 5 */}
          <div className="group cursor-pointer border-b border-border hover:bg-slate-50 transition-colors">
            <div className="p-4 opacity-70 group-hover:opacity-100 transition-opacity">
              <div className="flex justify-between items-start mb-1.5">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-slate-300"></span>
                  <span className="text-xs font-semibold text-text-muted uppercase tracking-wide">TRT - 3ª Região</span>
                </div>
                <span className="text-[11px] text-text-muted font-medium whitespace-nowrap">08 Ago, 09:00</span>
              </div>
              <h3 className="text-sm font-semibold text-text-main mb-1 line-clamp-1 leading-snug">Acórdão Publicado</h3>
              <p className="text-xs text-text-muted line-clamp-2 leading-relaxed">
                ...negado provimento ao recurso ordinário interposto. Advogado: Dr. <strong className="text-text-main font-medium">Wanderson Souza</strong> (OAB/MG 123456)...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DETAIL PANE: Document Preview */}
      <section className="hidden md:flex flex-1 bg-white rounded-2xl border border-border shadow-card flex-col overflow-hidden h-full">
        {/* Document Header */}
        <div className="h-16 border-b border-border px-6 flex items-center justify-between bg-white shrink-0">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-primary flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined">description</span>
            </div>
            <div className="flex flex-col">
              <h2 className="text-sm font-bold text-text-main leading-tight">Diário Oficial da União</h2>
              <span className="text-xs text-text-muted">Edição Nº 3421 • Seção 3</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border hover:bg-slate-50 text-text-muted transition-colors text-xs font-medium">
              <span className="material-symbols-outlined text-[16px]">share</span>
              <span className="hidden lg:inline">Compartilhar</span>
            </button>
            <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary hover:bg-primary-hover text-white shadow-sm transition-colors text-xs font-medium">
              <span className="material-symbols-outlined text-[16px]">download</span>
              <span className="hidden lg:inline">Baixar PDF</span>
            </button>
            <div className="h-6 w-[1px] bg-border mx-1"></div>
            <div className="flex bg-slate-100 rounded-lg p-0.5">
              <button className="p-1 hover:bg-white rounded text-text-muted hover:text-text-main transition-colors">
                <span className="material-symbols-outlined text-[18px]">keyboard_arrow_up</span>
              </button>
              <button className="p-1 hover:bg-white rounded text-text-muted hover:text-text-main transition-colors">
                <span className="material-symbols-outlined text-[18px]">keyboard_arrow_down</span>
              </button>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto bg-slate-50/50 p-6 md:p-10 custom-scrollbar">
          {/* Metadata Block */}
          <div className="max-w-3xl mx-auto bg-white border border-border rounded-xl p-5 mb-8 shadow-sm">
            <div className="grid grid-cols-3 gap-6">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase font-bold text-text-muted tracking-wider">Publicado em</span>
                <span className="text-sm font-medium text-text-main">14 de Agosto, 2023</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase font-bold text-text-muted tracking-wider">Página</span>
                <span className="text-sm font-medium text-text-main">42</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase font-bold text-text-muted tracking-wider">Link Original</span>
                <a href="#" className="text-sm font-medium text-primary hover:underline truncate">in.gov.br/web/dou/...</a>
              </div>
            </div>
          </div>

          {/* Document Text */}
          <div className="max-w-3xl mx-auto bg-white shadow-card border border-border/50 rounded-xl min-h-[500px] p-8 md:p-12">
            <div className="prose prose-sm prose-slate max-w-none font-serif leading-relaxed text-text-main/90">
              <div className="flex justify-center mb-8 opacity-70">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaW4Cr3fNe-jxUXMuWtZGKj68xZR600KDtErkneUGrvpfxMglT_JD7NGxrsIi4f7s1x2IAHVRow-fyf_cXLcxI2zIjadZ2h5B-dknNev5FM8kQ8Rt23cDa-hRJohs7GNh3D269sq64BUUFHuMHzWWjqsJtqI9aAZ1nTZcpHu2nS7u44KNbzMBGdalMpc4-zI2xMow9K8VctL1v-EvJqiwYIr7Yj6UIrWebucrOuzWHmomBtYmBaXm6PrjQ2eTnwc_PpihpvAIxcQ" 
                  alt="Brasão Oficial" 
                  className="h-16 w-auto grayscale"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <p className="text-center font-bold text-xs uppercase tracking-widest text-text-muted mb-8">
                Ministério da Educação / Secretaria Executiva
              </p>
              
              <p className="text-justify indent-8 mb-4">
                O SECRETÁRIO EXECUTIVO DO MINISTÉRIO DA EDUCAÇÃO, no uso da competência que lhe foi subdelegada pela Portaria nº 123, de 10 de janeiro de 2023, publicada no Diário Oficial da União de 11 de janeiro de 2023, e considerando o disposto no art. 93 da Lei nº 8.112, de 11 de dezembro de 1990, com a redação conferida pelo art. 22 da Lei nº 8.270, de 17 de dezembro de 1991, resolve:
              </p>
              
              <p className="text-justify indent-8 mb-4">
                <strong>Nº 1.234</strong> - Efetivar a nomeação dos candidatos aprovados no concurso público conforme edital nº 55/2022. Fica convocado o senhor <strong>JOÃO DA SILVA</strong> para o cargo de Técnico.
              </p>

              {/* Highlighted Section */}
              <div className="relative group my-6">
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-yellow-400 rounded-full opacity-100"></div>
                <p className="text-justify indent-8 bg-yellow-50 p-2 rounded-lg border border-yellow-100/50">
                  <strong>Nº 1.235</strong> - Nomear, em caráter efetivo, sujeito ao estágio probatório, <span className="bg-yellow-200 px-1 py-0.5 rounded text-slate-900 font-bold border-b-2 border-yellow-300">Wanderson Souza</span>, candidato habilitado em concurso público, classificado em 4º lugar, para exercer o cargo de Analista Judiciário, Área Administrativa, Classe A, Padrão 1, do Quadro de Pessoal deste Ministério, em vaga decorrente da aposentadoria de Maria Oliveira, código de vaga nº 234567. A posse deverá ocorrer no prazo de 30 (trinta) dias contados da publicação deste ato.
                </p>
                <div className="absolute right-0 top-0 -mt-3 -mr-2 bg-yellow-100 text-yellow-800 text-[10px] font-bold px-2 py-0.5 rounded-full border border-yellow-200 shadow-sm">
                  Match 1/1
                </div>
              </div>

              <p className="text-justify indent-8 mb-4">
                <strong>Nº 1.236</strong> - Conceder aposentadoria voluntária a servidora <strong>ANA PEREIRA</strong>, ocupante do cargo de Agente Administrativo, matrícula SIAPE nº 987654, com fundamento no art. 3º da Emenda Constitucional nº 47/2005, com proventos integrais e paridade.
              </p>
              
              <p className="text-justify indent-8 mb-4">
                <strong>Nº 1.237</strong> - Designar <strong>CARLOS ALMEIDA</strong> para a função de Chefe de Setor, código FC-2.
              </p>
              
              <br/><br/>
              
              <p className="text-center italic text-text-muted mt-12 border-t border-border pt-8 w-1/2 mx-auto">
                Documento assinado digitalmente conforme MP nº 2.200-2 de 24/08/2001, que institui a Infraestrutura de Chaves Públicas Brasileira - ICP-Brasil.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
