import { escapeHtml, productCards } from './helpers.js';

export const PublicView = {
    home() {
        return `
      <section class="hero">
        <div class="container hero-content">
          <div>
            <span class="eyebrow">Leitura e conhecimento</span>
            <h1>Encontre livros e serviços da biblioteca escolar.</h1>
            <p>
              Consulte o acervo disponível e conheça os serviços oferecidos
              aos alunos e professores.
            </p>
            <div class="hero-actions">
              <a class="btn" href="#/produtos">Consultar acervo</a>
              <a class="btn btn-outline" href="#/sobre">Conhecer a biblioteca</a>
            </div>
          </div>

          <div class="hero-visual" aria-hidden="true">
            <div class="book-stack">
              <div class="book">Literatura</div>
              <div class="book">Conhecimento</div>
              <div class="book">Imaginação</div>
            </div>
          </div>
        </div>
      </section>

      <section class="page-section">
        <div class="container">
          <div class="section-heading center">
            <span class="eyebrow">Nossa biblioteca</span>
            <h2>Um espaço para aprender</h2>
            <p>Recursos simples para facilitar o acesso ao acervo escolar.</p>
          </div>

          <div class="grid">
            <article class="card">
              <div class="card-icon">📚</div>
              <h3>Livros</h3>
              <p>Obras de literatura, livros infantis e materiais de apoio escolar.</p>
            </article>

            <article class="card">
              <div class="card-icon">🔎</div>
              <h3>Pesquisa</h3>
              <p>Busca por nome, categoria ou tipo para encontrar materiais com facilidade.</p>
            </article>

            <article class="card">
              <div class="card-icon">🤝</div>
              <h3>Atendimento</h3>
              <p>Apoio para localizar livros e conhecer os serviços da biblioteca.</p>
            </article>
          </div>
        </div>
      </section>
    `;
    },

    about() {
        return `
      <section class="page-section">
        <div class="container two-columns">
          <article class="content-card">
            <span class="eyebrow">Sobre nós</span>
            <h2>Biblioteca Escolar</h2>
            <p>
              A biblioteca foi criada para facilitar o acesso dos alunos a livros,
              materiais de estudo e atividades de pesquisa.
            </p>
            <p>
              Este site apresenta o acervo e também possui uma área administrativa
              para organizar os produtos e serviços cadastrados.
            </p>
          </article>

          <article class="content-card">
            <h2>Nossos objetivos</h2>
            <ul class="info-list">
              <li>Incentivar o hábito da leitura.</li>
              <li>Facilitar a consulta aos materiais disponíveis.</li>
              <li>Ajudar alunos e professores em pesquisas.</li>
              <li>Manter o acervo organizado e atualizado.</li>
            </ul>
          </article>
        </div>
      </section>
    `;
    },

    products(products, search = '') {
        return `
      <section class="page-section">
        <div class="container">
          <div class="section-heading">
            <span class="eyebrow">Consulta</span>
            <h2>Produtos e Serviços</h2>
            <p>Pesquise livros, materiais e serviços cadastrados na biblioteca.</p>
          </div>

          <form id="search-form" class="search-row">
            <input
              id="search"
              type="search"
              placeholder="Digite um nome, tipo ou categoria"
              value="${escapeHtml(search)}"
              aria-label="Pesquisar no acervo"
            >
            <button class="btn" type="submit">Pesquisar</button>
            ${search ? '<a class="btn btn-outline" href="#/produtos">Limpar</a>' : ''}
          </form>

          <div id="product-list">
            ${productCards(products)}
          </div>
        </div>
      </section>
    `;
    },

    contact(message = '') {
        return `
      <section class="page-section">
        <div class="container two-columns">
          <article class="content-card">
            <span class="eyebrow">Fale conosco</span>
            <h2>Contato</h2>
            <p>
              Envie uma mensagem para tirar dúvidas ou solicitar informações
              sobre o acervo da biblioteca.
            </p>

            <div class="contact-info">
              <div class="contact-item">
                <strong>Horário</strong>
                <span>Segunda a sexta, das 8h às 17h</span>
              </div>
              <div class="contact-item">
                <strong>E-mail</strong>
                <span>biblioteca@escola.com</span>
              </div>
              <div class="contact-item">
                <strong>Local</strong>
                <span>Bloco principal da escola</span>
              </div>
            </div>
          </article>

          <article class="form-card">
            <h2>Enviar mensagem</h2>
            ${message ? `<div class="message">${escapeHtml(message)}</div>` : ''}

            <form id="contact-form">
              <div class="form-group">
                <label for="contact-name">Nome</label>
                <input id="contact-name" name="nome" required>
              </div>

              <div class="form-group">
                <label for="contact-email">E-mail</label>
                <input id="contact-email" name="email" type="email" required>
              </div>

              <div class="form-group">
                <label for="contact-message">Mensagem</label>
                <textarea id="contact-message" name="mensagem" required></textarea>
              </div>

              <button class="btn" type="submit">Enviar mensagem</button>
            </form>
          </article>
        </div>
      </section>
    `;
    },

    notFound() {
        return `
      <section class="page-section">
        <article class="form-card narrow account-card">
          <span class="eyebrow">Erro 404</span>
          <h2>Página não encontrada</h2>
          <p>O endereço informado não existe neste site.</p>
          <a class="btn" href="#/">Voltar ao início</a>
        </article>
      </section>
    `;
    }
};
