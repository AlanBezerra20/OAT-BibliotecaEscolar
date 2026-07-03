import { escapeHtml } from './helpers.js';

export const AdminView = {
    admin(products, editingProduct = null, search = '') {
        const item = editingProduct || {
            id: '',
            nome: '',
            tipo: 'Produto',
            categoria: '',
            descricao: ''
        };

        const totalProducts = products.filter((product) => product.tipo === 'Produto').length;
        const totalServices = products.filter((product) => product.tipo === 'Serviço').length;

        return `
      <section class="page-section compact">
        <div class="container">
          <div class="admin-header">
            <div class="admin-intro">
              <span class="eyebrow">Administração</span>
              <h2>Painel da Biblioteca</h2>
              <p>Cadastre e gerencie os produtos e serviços do site.</p>
            </div>
            <button class="btn btn-secondary" id="logout-button" type="button">Sair</button>
          </div>

          <div class="stats-grid">
            <div class="stat-card">
              <span>Total exibido</span>
              <strong>${products.length}</strong>
            </div>
            <div class="stat-card">
              <span>Produtos</span>
              <strong>${totalProducts}</strong>
            </div>
            <div class="stat-card">
              <span>Serviços</span>
              <strong>${totalServices}</strong>
            </div>
          </div>

          <div class="admin-layout">
            <article class="admin-card">
              <h3>${editingProduct ? 'Editar cadastro' : 'Novo cadastro'}</h3>
              <p class="helper-text">Preencha os campos para salvar um item no acervo.</p>

              <form id="product-form">
                <input type="hidden" name="id" value="${escapeHtml(item.id)}">

                <div class="form-group">
                  <label for="product-name">Nome</label>
                  <input id="product-name" name="nome" value="${escapeHtml(item.nome)}" required>
                </div>

                <div class="form-grid">
                  <div class="form-group">
                    <label for="product-type">Tipo</label>
                    <select id="product-type" name="tipo" required>
                      <option value="Produto" ${item.tipo === 'Produto' ? 'selected' : ''}>Produto</option>
                      <option value="Serviço" ${item.tipo === 'Serviço' ? 'selected' : ''}>Serviço</option>
                    </select>
                  </div>

                  <div class="form-group">
                    <label for="product-category">Categoria</label>
                    <input id="product-category" name="categoria" value="${escapeHtml(item.categoria)}" required>
                  </div>
                </div>

                <div class="form-group">
                  <label for="product-description">Descrição</label>
                  <textarea id="product-description" name="descricao" required>${escapeHtml(item.descricao)}</textarea>
                </div>

                <div class="form-actions">
                  <button class="btn" type="submit">
                    ${editingProduct ? 'Salvar alteração' : 'Cadastrar item'}
                  </button>
                  ${editingProduct ? '<a class="btn btn-outline" href="#/admin">Cancelar</a>' : ''}
                </div>
              </form>
            </article>

            <article class="admin-card">
              <h3>Itens cadastrados</h3>

              <form id="admin-search-form" class="search-row">
                <input
                  id="admin-search"
                  type="search"
                  placeholder="Pesquisar cadastro"
                  value="${escapeHtml(search)}"
                >
                <button class="btn" type="submit">Pesquisar</button>
              </form>

              <div class="table-wrapper">
                <table>
                  <thead>
                    <tr>
                      <th>Nome</th>
                      <th>Tipo</th>
                      <th>Categoria</th>
                      <th>Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${products.length ? products.map((product) => `
                      <tr>
                        <td>${escapeHtml(product.nome)}</td>
                        <td>${escapeHtml(product.tipo)}</td>
                        <td>${escapeHtml(product.categoria)}</td>
                        <td>
                          <div class="actions">
                            <a class="btn btn-outline small-btn" href="#/admin?editar=${product.id}">Editar</a>
                            <button
                              class="btn btn-danger small-btn delete-button"
                              data-id="${product.id}"
                              type="button"
                            >Excluir</button>
                          </div>
                        </td>
                      </tr>
                    `).join('') : `
                      <tr>
                        <td colspan="4">Nenhum cadastro encontrado.</td>
                      </tr>
                    `}
                  </tbody>
                </table>
              </div>
            </article>
          </div>
        </div>
      </section>
    `;
    }
};
