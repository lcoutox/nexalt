import MenuEnhancement from "./menu-enhancement";

export default function Home() {
  return (
    <>
      <MenuEnhancement />
      <a className="skip" href="#conteudo">
        {"Pular para o conteúdo"}
      </a>
      <header className="header">
        <a href="#" className="brand" aria-label="Nexalt, início">
          <img
            src="/assets/logo-principal-escuro.webp"
            alt="Nexalt"
            width="166"
            height="31"
          />
        </a>
        <button
          className="menu-toggle"
          aria-controls="navigation"
          aria-expanded="false"
        >
          {"Menu "}
          <span aria-hidden="true">{"+"}</span>
        </button>
        <nav id="navigation" aria-label="Principal">
          <a href="#atuacao">{"O que fazemos"}</a>
          <a href="#metodo">{"Como trabalhamos"}</a>
          <a href="#sobre">{"A Nexalt"}</a>
          <a className="nav-contact" href="#conversa">
            {"Vamos conversar "}
            <span aria-hidden="true">{"↗"}</span>
          </a>
        </nav>
      </header>
      <main id="conteudo">
        <section className="hero">
          <div className="eyebrow">
            <span className="small-mark" aria-hidden="true"></span>
            {" ESTRATÉGIA & DESENVOLVIMENTO DE TECNOLOGIA"}
          </div>
          <h1>
            {"Tecnologia para"}
            <br />
            {"o seu próximo "}
            <span className="step-word">
              {"passo"}
              <span className="orange-period">{"."}</span>
            </span>
          </h1>
          <div className="hero-bottom">
            <p>
              {
                "Desenvolvemos software, conectamos sistemas e melhoramos processos para sua empresa seguir em frente."
              }
            </p>
            <a className="button dark" href="#conversa">
              {"Conte seu desafio "}
              <span aria-hidden="true">{"↗"}</span>
            </a>
            <span className="hero-note">
              {"Da primeira conversa"}
              <br />
              {"à solução em uso."}
            </span>
          </div>
          <div
            className="hero-graphic"
            aria-label="Direção, construção e evolução: as três bases do trabalho da Nexalt"
          >
            <div className="graphic-label">
              {"NEXALT / CONSTRUINDO O PRÓXIMO"}
            </div>
            <div className="graphic-main">
              <span className="graphic-caption">
                {"Uma boa ideia precisa"}
                <br />
                {"de uma boa estrutura."}
              </span>
              <img
                src="/assets/simbolo-laranja.webp"
                width="296"
                height="296"
                alt=""
                className="hero-symbol"
              />
              <div className="graphic-steps">
                <span>{"01 / ENTENDER"}</span>
                <span>{"02 / CONSTRUIR"}</span>
                <span>{"03 / EVOLUIR"}</span>
              </div>
            </div>
            <div className="graphic-footer">
              <span>{"NEGÓCIO + TECNOLOGIA"}</span>
              <span>{"UM PASSO BEM CONSTRUÍDO DE CADA VEZ"}</span>
            </div>
          </div>
        </section>
        <section className="intro section" id="atuacao">
          <div className="section-label">{"01 / O QUE FAZEMOS"}</div>
          <div>
            <h2>
              {"Seu negócio tem"}
              <br />
              {"um próximo passo."}
              <br />
              <span className="muted">{"A gente constrói com você."}</span>
            </h2>
            <p className="intro-copy">
              {
                "Um sistema que falta. Ferramentas que não conversam. Um processo que já pede outra estrutura. Começamos por entender o que precisa mudar."
              }
            </p>
          </div>
        </section>
        <div className="services">
          <article className="service">
            <span className="service-number">{"01"}</span>
            <h3>
              {"Estratégia de"}
              <br />
              {"tecnologia"}
            </h3>
            <div>
              <p>
                {
                  "Clareza para decidir o que construir, integrar ou melhorar. Entendemos o contexto e organizamos um caminho viável."
                }
              </p>
              <ul>
                <li>{"Diagnóstico de processos e sistemas"}</li>
                <li>{"Prioridades e plano de implementação"}</li>
              </ul>
            </div>
          </article>
          <article className="service">
            <span className="service-number">{"02"}</span>
            <h3>
              {"Software"}
              <br />
              {"sob medida"}
            </h3>
            <div>
              <p>
                {
                  "Sistemas que acompanham a forma como sua empresa trabalha. Da necessidade inicial à ferramenta em uso."
                }
              </p>
              <ul>
                <li>{"Sistemas internos e aplicações web"}</li>
                <li>{"Portais para clientes e parceiros"}</li>
              </ul>
            </div>
          </article>
          <article className="service">
            <span className="service-number">{"03"}</span>
            <h3>
              {"Integração"}
              <br />
              {"e automação"}
            </h3>
            <div>
              <p>
                {
                  "Informações no lugar certo, sem repetir o mesmo trabalho. Conectamos ferramentas e organizamos o fluxo entre elas."
                }
              </p>
              <ul>
                <li>{"Integrações entre sistemas"}</li>
                <li>{"Rotinas e fluxos operacionais"}</li>
              </ul>
            </div>
          </article>
          <article className="service">
            <span className="service-number">{"04"}</span>
            <h3>
              {"Sustentação"}
              <br />
              {"e evolução"}
            </h3>
            <div>
              <p>
                {
                  "Acompanhamento para manter a solução útil e evoluir com novas necessidades, dentro de um plano definido."
                }
              </p>
              <ul>
                <li>{"Manutenção e melhorias priorizadas"}</li>
                <li>{"Documentação e acompanhamento técnico"}</li>
              </ul>
            </div>
          </article>
        </div>
        <section className="applications section">
          <div className="section-label">{"02 / NA PRÁTICA"}</div>
          <div>
            <h2>
              {"Começa com uma"}
              <br />
              {"necessidade real."}
            </h2>
            <p className="intro-copy">
              {"Algumas situações em que podemos ajudar."}
            </p>
            <div className="application-list">
              <details open>
                <summary>
                  {"“Nossos sistemas não conversam.”"}
                  <span aria-hidden="true">{"+"}</span>
                </summary>
                <div className="application-body">
                  <p>
                    {
                      "Um pedido chega por um canal, é copiado para uma planilha e depois digitado no sistema. Podemos conectar essas etapas e definir como lidar com as exceções."
                    }
                  </p>
                  <div
                    className="flow"
                    aria-label="Exemplo de fluxo: pedido, validação e sistema"
                  >
                    <span>{"Pedido"}</span>
                    <b aria-hidden="true">{"→"}</b>
                    <span>{"Validação"}</span>
                    <b aria-hidden="true">{"→"}</b>
                    <span>{"Sistema"}</span>
                  </div>
                </div>
              </details>
              <details>
                <summary>
                  {"“A ferramenta que precisamos ainda não existe.”"}
                  <span aria-hidden="true">{"+"}</span>
                </summary>
                <div className="application-body">
                  <p>
                    {
                      "Quando as soluções disponíveis não atendem uma necessidade específica, podemos desenvolver um sistema interno ou portal, começando pelas funções essenciais."
                    }
                  </p>
                  <div className="flow">
                    <span>{"Necessidade"}</span>
                    <b aria-hidden="true">{"→"}</b>
                    <span>{"Protótipo"}</span>
                    <b aria-hidden="true">{"→"}</b>
                    <span>{"Software"}</span>
                  </div>
                </div>
              </details>
              <details>
                <summary>
                  {"“Precisamos evoluir, mas falta um caminho.”"}
                  <span aria-hidden="true">{"+"}</span>
                </summary>
                <div className="application-body">
                  <p>
                    {
                      "Podemos mapear os processos, avaliar o que já existe e organizar as próximas entregas por prioridade, dependência e viabilidade."
                    }
                  </p>
                  <div className="flow">
                    <span>{"Contexto"}</span>
                    <b aria-hidden="true">{"→"}</b>
                    <span>{"Prioridades"}</span>
                    <b aria-hidden="true">{"→"}</b>
                    <span>{"Plano"}</span>
                  </div>
                </div>
              </details>
            </div>
            <p className="example-note">
              {
                "Exemplos ilustrativos de aplicação. O escopo é definido para cada projeto."
              }
            </p>
          </div>
        </section>
        <section className="method" id="metodo">
          <div className="method-heading">
            <div className="section-label">{"03 / COMO TRABALHAMOS"}</div>
            <h2>
              {"Um próximo passo claro."}
              <br />
              {"Em cada etapa."}
            </h2>
          </div>
          <div className="method-grid">
            <article>
              <span>{"01 / ENTENDER"}</span>
              <h3>
                {"O contexto"}
                <br />
                {"vem primeiro."}
              </h3>
              <p>
                {
                  "Ouvimos quem vive a operação, entendemos as ferramentas e definimos o problema a resolver."
                }
              </p>
              <small>{"SAÍDA / PRIORIDADE DEFINIDA"}</small>
            </article>
            <article>
              <span>{"02 / PLANEJAR"}</span>
              <h3>
                {"Um projeto"}
                <br />
                {"que faz sentido."}
              </h3>
              <p>
                {
                  "Combinamos o que será entregue, as dependências, o investimento e os critérios de aceite."
                }
              </p>
              <small>{"SAÍDA / ESCOPO E CAMINHO"}</small>
            </article>
            <article>
              <span>{"03 / CONSTRUIR"}</span>
              <h3>
                {"Você acompanha"}
                <br />
                {"a construção."}
              </h3>
              <p>
                {
                  "Desenvolvemos, demonstramos e testamos a solução com a participação de quem vai usá-la."
                }
              </p>
              <small>{"SAÍDA / SOLUÇÃO VALIDADA"}</small>
            </article>
            <article>
              <span>{"04 / EVOLUIR"}</span>
              <h3>
                {"Pronto para usar."}
                <br />
                {"Aberto a evoluir."}
              </h3>
              <p>
                {
                  "Organizamos a entrada em uso, a documentação e as condições para o acompanhamento."
                }
              </p>
              <small>{"SAÍDA / OPERAÇÃO ORIENTADA"}</small>
            </article>
          </div>
        </section>
        <section className="about section" id="sobre">
          <div className="section-label">{"04 / A NEXALT"}</div>
          <div>
            <h2>
              {"Boa tecnologia"}
              <br />
              {"começa com atenção"}
              <br />
              <span className="muted">{"ao seu negócio."}</span>
            </h2>
            <div className="about-copy">
              <p>
                {
                  "A Nexalt nasce para aproximar tecnologia e operação. Nosso trabalho começa por entender as pessoas, os processos e os sistemas que fazem sua empresa acontecer."
                }
              </p>
              <p>
                {
                  "Escolhemos as ferramentas a partir do problema. Software, integrações, automação e inteligência artificial entram quando contribuem para a solução."
                }
              </p>
            </div>
            <div className="principles">
              <span>{"Clareza para decidir."}</span>
              <span>{"Cuidado para construir."}</span>
              <span>{"Estrutura para continuar."}</span>
            </div>
          </div>
        </section>
        <section className="faq section">
          <div className="section-label">{"05 / ANTES DE COMEÇAR"}</div>
          <div>
            <h2>
              {"Perguntas que"}
              <br />
              {"valem uma conversa."}
            </h2>
            <div className="faq-list">
              <details>
                <summary>
                  {"Preciso saber exatamente o que construir?"}
                  <span aria-hidden="true">{"+"}</span>
                </summary>
                <p>
                  {
                    "Não. A conversa inicial ajuda a entender a necessidade. Quando é preciso investigar processos e alternativas em profundidade, propomos um diagnóstico com escopo próprio."
                  }
                </p>
              </details>
              <details>
                <summary>
                  {"Vocês trabalham com os sistemas que já usamos?"}
                  <span aria-hidden="true">{"+"}</span>
                </summary>
                <p>
                  {
                    "Avaliamos primeiro o que já existe. A integração depende dos acessos, recursos e condições de cada ferramenta. Essas dependências são verificadas antes de definir o projeto."
                  }
                </p>
              </details>
              <details>
                <summary>
                  {"Como são definidos investimento e prazo?"}
                  <span aria-hidden="true">{"+"}</span>
                </summary>
                <p>
                  {
                    "A partir do escopo, das dependências e dos critérios de entrega. A proposta separa o trabalho da Nexalt dos custos de infraestrutura, licenças e outros fornecedores."
                  }
                </p>
              </details>
              <details>
                <summary>
                  {"A Nexalt desenvolve apenas soluções com IA?"}
                  <span aria-hidden="true">{"+"}</span>
                </summary>
                <p>
                  {
                    "Atuamos com desenvolvimento de software, integrações e evolução tecnológica. Inteligência artificial é uma das ferramentas possíveis, escolhida quando faz sentido para a tarefa."
                  }
                </p>
              </details>
              <details>
                <summary>
                  {"Existe acompanhamento depois da entrega?"}
                  <span aria-hidden="true">{"+"}</span>
                </summary>
                <p>
                  {
                    "As condições de correção, manutenção e evolução são combinadas na proposta. Para necessidades contínuas, podemos estruturar um plano com capacidade, cobertura e prioridades definidas."
                  }
                </p>
              </details>
            </div>
          </div>
        </section>
        <section className="contact section" id="conversa">
          <div className="section-label">{"VAMOS CONVERSAR"}</div>
          <div>
            <h2>
              {"O que você precisa"}
              <br />
              {"colocar em movimento?"}
            </h2>
            <p>
              {"Conte o que acontece hoje e o que você quer mudar."}
              <br />
              {"O próximo passo começa por entender o seu."}
            </p>
            <a
              className="button dark"
              href="https://wa.me/5537984269679?text=Ol%C3%A1%2C%20quero%20conversar%20sobre%20um%20projeto%20de%20tecnologia%20com%20a%20Nexalt."
              target="_blank"
              rel="noopener noreferrer"
            >
              {"Conversar pelo WhatsApp "}
              <span aria-hidden="true">{"↗"}</span>
            </a>
            <p className="contact-note">
              {"Uma conversa inicial, sem compromisso."}
            </p>
          </div>
        </section>
      </main>
      <footer>
        <img
          src="/assets/logo-principal-claro.webp"
          alt="Nexalt"
          width="166"
          height="31"
        />
        <p>{"Estratégia e desenvolvimento de tecnologia."}</p>
        <div className="footer-bottom">
          <span>{"© 2026 Nexalt · Nova Serrana, MG"}</span>
          <span>{"ORBIT HUB SOFTWARE LTDA · CNPJ 54.414.617/0001-82"}</span>
          <a href="/privacidade">{"Privacidade"}</a>
        </div>
      </footer>
    </>
  );
}
