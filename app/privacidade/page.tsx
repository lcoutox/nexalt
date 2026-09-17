import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Privacidade — Nexalt",
  description: "Como funciona o contato e a navegação no site da Nexalt.",
  alternates: { canonical: "/privacidade" },
  openGraph: {
    title: "Privacidade — Nexalt",
    description: "Como funciona o contato e a navegação no site da Nexalt.",
    url: "https://nexalt.com.br/privacidade",
  },
};

export default function Privacy() {
  return (
    <>
      <header className="header">
        <a className="brand" href="/">
          <img
            src="/assets/logo-principal-escuro.webp"
            alt="Nexalt — voltar ao início"
            width="166"
            height="31"
          />
        </a>
        <a href="/">{"Voltar ao site"}</a>
      </header>
      <main className="legal">
        <div className="section-label">{"INFORMAÇÕES SOBRE ESTE SITE"}</div>
        <h1>{"Privacidade"}</h1>
        <p>{"Atualizado em 17 de setembro de 2026."}</p>
        <h2>{"Navegação"}</h2>
        <p>
          {
            "Este site apresenta os serviços da Nexalt. Sua implementação não utiliza formulários de coleta, ferramentas de publicidade, análise de audiência ou cookies próprios. O provedor de hospedagem pode processar informações técnicas necessárias para servir e proteger as páginas."
          }
        </p>
        <h2>{"Contato pelo WhatsApp"}</h2>
        <p>
          {
            "Ao escolher conversar pelo WhatsApp, você será direcionado a um serviço externo. A mensagem sugerida pode ser editada antes do envio. O uso do WhatsApp está sujeito às condições e práticas de privacidade desse serviço."
          }
        </p>
        <p>
          {
            "As informações que você enviar à Nexalt serão utilizadas para responder ao contato e avaliar a necessidade apresentada. Evite encaminhar senhas, documentos pessoais ou dados sensíveis na conversa inicial."
          }
        </p>
        <h2>{"Solicitações sobre seus dados"}</h2>
        <p>
          {"Você pode entrar em contato pelo "}
          <a
            href="https://wa.me/5537984269679?text=Ol%C3%A1%2C%20quero%20falar%20sobre%20privacidade%20e%20meus%20dados."
            target="_blank"
            rel="noopener noreferrer"
          >
            {"WhatsApp da Nexalt"}
          </a>
          {
            " para esclarecer o tratamento das informações compartilhadas e solicitar a avaliação de acesso, correção ou exclusão."
          }
        </p>
        <h2>{"Identificação"}</h2>
        <p>
          {"Nexalt · ORBIT HUB SOFTWARE LTDA"}
          <br />
          {"CNPJ 54.414.617/0001-82"}
          <br />
          {"Nova Serrana, MG."}
        </p>
      </main>
    </>
  );
}
