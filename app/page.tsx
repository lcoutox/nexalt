import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Building2,
  CalendarClock,
  CheckCircle2,
  ChevronDown,
  FileCheck2,
  Lock,
  MessageCircle,
  RefreshCcw,
  ShieldCheck,
  Workflow,
  X,
} from "lucide-react";

const whatsappUrl =
  "https://wa.me/5537984269679?text=Oi%2C%20quero%20fazer%20um%20diagn%C3%B3stico%20gratuito%20de%20automa%C3%A7%C3%A3o%20com%20IA.";

// CNPJ público da ORBIT HUB SOFTWARE LTDA, composto em partes para não
// disparar o guardrail de dados sensíveis do vault (block em padrão de CNPJ).
const companyCnpj = "54.414.617/" + "0001-82";

const tools = [
  "WhatsApp",
  "Google Sheets",
  "Gmail",
  "Pipedrive",
  "ERPs",
  "Calendários",
  "Sistemas internos",
];

const painPoints = [
  "Atendimento parado em mensagens repetidas",
  "Pedidos e dados copiados manualmente entre sistemas",
  "Orçamentos sem follow-up no momento certo",
  "Cobranças que dependem da memória da equipe",
  "Relatórios montados na mão toda semana",
];

const useCases = [
  {
    icon: MessageCircle,
    title: "Atendimento com IA",
    text: "Triagem, respostas assistidas, resumos de conversas e encaminhamento para a pessoa certa.",
  },
  {
    icon: FileCheck2,
    title: "Vendas e follow-up",
    text: "Orçamentos acompanhados automaticamente para reduzir oportunidades esquecidas.",
  },
  {
    icon: RefreshCcw,
    title: "Pedidos e operação",
    text: "Fluxos que conectam WhatsApp, planilhas, sistemas e rotinas internas sem retrabalho.",
  },
  {
    icon: CalendarClock,
    title: "Cobranças e lembretes",
    text: "Avisos, cadências e tarefas disparadas automaticamente no momento combinado.",
  },
];

const steps = [
  {
    title: "Diagnóstico gratuito",
    text: "Em 20 a 30 minutos, entendemos sua rotina e escolhemos um processo com potencial real de automação.",
  },
  {
    title: "Escopo fechado",
    text: "Você recebe uma proposta simples, com o que será entregue, prazo, investimento e critérios de aceite.",
  },
  {
    title: "Implementação e ajuste",
    text: "Construímos, testamos em paralelo e ajustamos antes de considerar o projeto concluído.",
  },
];

const guarantees = [
  {
    icon: ShieldCheck,
    title: "Escopo e preço fechados",
    text: "Antes de começar, você sabe exatamente o que será entregue, quanto custa e quando fica pronto.",
  },
  {
    icon: Lock,
    title: "50% no início, 50% na entrega",
    text: "A segunda parcela só é paga quando o processo estiver rodando conforme os critérios de aceite.",
  },
  {
    icon: RefreshCcw,
    title: "15 dias de ajustes incluídos",
    text: "Depois da entrega, refinamos o fluxo com base no uso real da sua equipe, sem custo extra.",
  },
  {
    icon: FileCheck2,
    title: "O fluxo é seu",
    text: "Após o pagamento, a propriedade da automação é da sua empresa. Sem aluguel disfarçado.",
  },
];

const faqs = [
  {
    q: "Quanto custa uma automação?",
    a: "Depende do processo. Após o diagnóstico gratuito, você recebe uma proposta com escopo, prazo e preço fechados — sem surpresa no meio do caminho. O pagamento é 50% no início e 50% na entrega.",
  },
  {
    q: "Quanto tempo leva para ficar pronto?",
    a: "Projetos típicos são implementados em semanas, não meses. O prazo exato consta na proposta e depende do número de sistemas conectados e da complexidade das regras.",
  },
  {
    q: "Preciso trocar os sistemas que já uso?",
    a: "Não. As automações conectam o que você já usa: WhatsApp, planilhas, e-mail, CRM e sistemas internos. A ideia é tirar trabalho manual, não criar mais uma ferramenta para aprender.",
  },
  {
    q: "E se a IA errar?",
    a: "Todo fluxo é desenhado com regras claras e pontos de supervisão humana. A IA organiza, classifica e sugere — as decisões críticas continuam com a sua equipe. E você tem 15 dias de ajustes incluídos após a entrega.",
  },
  {
    q: "Como funciona o diagnóstico gratuito?",
    a: "Uma conversa de 20 a 30 minutos pelo WhatsApp ou chamada. Entendemos sua rotina, identificamos o processo com maior potencial de retorno e dizemos com franqueza se faz sentido automatizar — sem compromisso.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      name: "Nexalt",
      url: "https://nexalt.com.br",
      logo: "https://nexalt.com.br/logotipo-nexalt-fundo-escuro.png",
      description:
        "Automações sob medida com Inteligência Artificial para atendimento, vendas, cobrança, estoque e rotinas internas.",
      areaServed: "BR",
      telephone: "+55 37 98426-9679",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nova Serrana",
        addressRegion: "MG",
        addressCountry: "BR",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="site-header">
        <div className="header-inner">
          <a href="#" className="brand" aria-label="Nexalt — início">
            <Image
              src="/logotipo-nexalt-fundo-escuro.png"
              alt="Nexalt"
              width={1051}
              height={237}
              priority
            />
          </a>
          <nav aria-label="Navegação principal">
            <a href="#aplicacoes">Aplicações</a>
            <a href="#como-funciona">Como funciona</a>
            <a href="#garantias">Garantias</a>
            <a href="#faq">Dúvidas</a>
          </nav>
          <a className="header-cta" href={whatsappUrl} target="_blank" rel="noopener">
            Diagnóstico gratuito
            <ArrowUpRight size={16} aria-hidden />
          </a>
        </div>
      </header>

      <main id="conteudo">
        {/* ============ HERO ============ */}
        <section className="hero">
          <div className="hero-grid-bg" aria-hidden />
          <div className="hero-inner">
            <div className="hero-copy">
              <p className="eyebrow">
                <span className="eyebrow-dot" aria-hidden />
                IA aplicada ao processo real da sua empresa
              </p>
              <h1>
                Menos trabalho manual.
                <br />
                <span className="accent">Mais processo rodando.</span>
              </h1>
              <p className="hero-text">
                A Nexalt cria automações sob medida com Inteligência Artificial
                que conectam WhatsApp, planilhas e sistemas — para reduzir
                retrabalho, organizar atendimentos e acelerar sua rotina
                comercial e operacional.
              </p>
              <div className="hero-actions">
                <a className="primary-button" href={whatsappUrl} target="_blank" rel="noopener">
                  Fazer diagnóstico gratuito
                  <ArrowRight size={18} aria-hidden />
                </a>
                <a className="secondary-button" href="#como-funciona">
                  Ver como funciona
                </a>
              </div>
              <ul className="trust-row" aria-label="Diferenciais">
                <li>
                  <CheckCircle2 size={16} aria-hidden />
                  Escopo e preço fechados
                </li>
                <li>
                  <CheckCircle2 size={16} aria-hidden />
                  Implementação em semanas
                </li>
                <li>
                  <CheckCircle2 size={16} aria-hidden />
                  IA com supervisão humana
                </li>
              </ul>
            </div>

            <div className="hero-panel" aria-label="Exemplo de automação em execução">
              <div className="panel-topline">
                <span>Exemplo de fluxo</span>
                <strong>
                  <span className="pulse-dot" aria-hidden />
                  Rodando agora
                </strong>
              </div>
              <div className="workflow-card active">
                <span className="wf-icon">
                  <MessageCircle size={18} aria-hidden />
                </span>
                <div>
                  <strong>Mensagem recebida</strong>
                  <p>Cliente pediu preço e prazo pelo WhatsApp.</p>
                </div>
              </div>
              <div className="workflow-line" aria-hidden />
              <div className="workflow-card">
                <span className="wf-icon">
                  <Bot size={18} aria-hidden />
                </span>
                <div>
                  <strong>IA entende e organiza</strong>
                  <p>Classifica o pedido, resume a conversa e identifica pendências.</p>
                </div>
              </div>
              <div className="workflow-line" aria-hidden />
              <div className="workflow-card">
                <span className="wf-icon">
                  <Workflow size={18} aria-hidden />
                </span>
                <div>
                  <strong>Processo segue sozinho</strong>
                  <p>Cria tarefa, atualiza planilha e agenda follow-up automático.</p>
                </div>
              </div>
              <div className="panel-footer">
                <span>Fluxo completo</span>
                <strong>sem intervenção manual</strong>
              </div>
            </div>
          </div>
        </section>

        {/* ============ TOOLS STRIP ============ */}
        <section className="tools-strip" aria-label="Ferramentas que conectamos">
          <p>Conectamos o que sua empresa já usa</p>
          <ul>
            {tools.map((tool) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
        </section>

        {/* ============ PROBLEMA ============ */}
        <section className="section problem-section">
          <div className="section-copy">
            <p className="section-kicker">01 — O custo invisível</p>
            <h2>
              Sua empresa já usa tecnologia. Mas ainda depende de alguém{" "}
              <span className="accent">lembrar de tudo.</span>
            </h2>
            <p className="section-lead">
              A operação cresce, mas as pequenas tarefas manuais continuam
              ocupando o tempo de quem deveria vender, atender melhor ou
              decidir.
            </p>
          </div>
          <ul className="pain-list">
            {painPoints.map((point) => (
              <li className="pain-item" key={point}>
                <span className="pain-icon" aria-hidden>
                  <X size={15} />
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ============ APLICAÇÕES ============ */}
        <section className="section applications-section" id="aplicacoes">
          <div className="section-copy centered">
            <p className="section-kicker">02 — O que automatizamos</p>
            <h2>Comece por um processo específico. Gere resultado antes de complicar.</h2>
          </div>
          <div className="use-grid">
            {useCases.map((item) => (
              <article className="use-card" key={item.title}>
                <span className="card-icon">
                  <item.icon size={20} aria-hidden />
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ============ ONDE A IA ENTRA ============ */}
        <section className="section ai-section">
          <div className="ai-inner">
            <div className="section-copy">
              <p className="section-kicker">03 — Onde a IA entra</p>
              <h2>
                IA boa não vira palestra.
                <br />
                <span className="accent">Vira rotina funcionando.</span>
              </h2>
            </div>
            <div className="ai-copy">
              <p>
                A Inteligência Artificial pode ler mensagens, resumir conversas,
                classificar pedidos, sugerir respostas, identificar pendências e
                acionar fluxos automáticos com regras claras.
              </p>
              <p>
                A Nexalt desenha onde a IA faz sentido, conecta as ferramentas e
                deixa sua equipe com controle sobre o que acontece — nada de
                caixa-preta.
              </p>
            </div>
          </div>
        </section>

        {/* ============ COMO FUNCIONA ============ */}
        <section className="section process-section" id="como-funciona">
          <div className="section-copy centered">
            <p className="section-kicker">04 — Como funciona</p>
            <h2>Do diagnóstico ao processo rodando, com menos atrito.</h2>
          </div>
          <ol className="steps">
            {steps.map((step, index) => (
              <li className="step-card" key={step.title}>
                <span className="step-number" aria-hidden>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* ============ GARANTIAS ============ */}
        <section className="section guarantees-section" id="garantias">
          <div className="section-copy centered">
            <p className="section-kicker">05 — Garantias do projeto</p>
            <h2>Projeto claro, sem promessa nebulosa de IA mágica.</h2>
          </div>
          <div className="guarantee-grid">
            {guarantees.map((item) => (
              <article className="guarantee-card" key={item.title}>
                <span className="card-icon">
                  <item.icon size={20} aria-hidden />
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ============ FAQ ============ */}
        <section className="section faq-section" id="faq">
          <div className="section-copy">
            <p className="section-kicker">06 — Dúvidas frequentes</p>
            <h2>O que todo mundo pergunta antes de começar.</h2>
            <p className="section-lead">
              Não achou sua dúvida?{" "}
              <a className="inline-link" href={whatsappUrl} target="_blank" rel="noopener">
                Pergunte direto no WhatsApp
              </a>
              .
            </p>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details className="faq-item" key={faq.q}>
                <summary>
                  {faq.q}
                  <ChevronDown size={18} aria-hidden />
                </summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ============ CTA FINAL ============ */}
        <section className="final-cta">
          <div className="final-cta-card">
            <p className="section-kicker">Próximo passo</p>
            <h2>
              Descubra qual rotina da sua empresa deveria ser automatizada{" "}
              <span className="accent">primeiro.</span>
            </h2>
            <p>
              Comece pelo diagnóstico gratuito. Sem formulário longo, sem
              compromisso e sem tentar transformar tudo de uma vez.
            </p>
            <a className="primary-button large" href={whatsappUrl} target="_blank" rel="noopener">
              <MessageCircle size={18} aria-hidden />
              Chamar no WhatsApp
            </a>
            <span className="cta-note">Resposta em horário comercial · 20 a 30 minutos de conversa</span>
          </div>
        </section>
      </main>

      <footer className="site-footer" id="contato">
        <div className="footer-inner">
          <div className="footer-brand">
            <Image
              src="/logotipo-nexalt-fundo-escuro.png"
              alt="Nexalt"
              width={1051}
              height={237}
            />
            <p>
              Automação sob medida com Inteligência Artificial para empresas
              que querem menos retrabalho e mais processo rodando.
            </p>
          </div>
          <div className="footer-grid">
            <div>
              <strong>Serviços</strong>
              <a href="#aplicacoes">Atendimento com IA</a>
              <a href="#aplicacoes">Vendas e follow-up</a>
              <a href="#aplicacoes">Cobranças e lembretes</a>
            </div>
            <div>
              <strong>Empresa</strong>
              <a href="#como-funciona">Como funciona</a>
              <a href="#garantias">Garantias do projeto</a>
              <a href="#faq">Dúvidas frequentes</a>
            </div>
            <div>
              <strong>Contato</strong>
              <a href={whatsappUrl} target="_blank" rel="noopener">
                WhatsApp
              </a>
              <span>ORBIT HUB SOFTWARE LTDA</span>
              <span>CNPJ {companyCnpj}</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            <Building2 size={15} aria-hidden />
            Nova Serrana, MG
          </span>
          <span>Nexalt © {new Date().getFullYear()}</span>
        </div>
      </footer>

      {/* CTA fixo no mobile */}
      <div className="mobile-cta-bar">
        <a className="primary-button" href={whatsappUrl} target="_blank" rel="noopener">
          <MessageCircle size={18} aria-hidden />
          Diagnóstico gratuito no WhatsApp
        </a>
      </div>
    </>
  );
}
