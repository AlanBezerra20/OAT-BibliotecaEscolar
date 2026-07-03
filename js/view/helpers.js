export function escapeHtml(value = '') {
    return String(value)
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#039;');
}

export function productCards(products) {
    if (!products.length) {
        return `
      <div class="empty-state">
        <strong>Nenhum item encontrado.</strong>
        <p>Tente pesquisar usando outro nome, tipo ou categoria.</p>
      </div>
    `;
    }

    return `
    <div class="grid">
      ${products.map((item) => `
        <article class="card catalog-card">
          <div class="card-top">
            <div>
              <span class="eyebrow">${escapeHtml(item.categoria)}</span>
              <h3>${escapeHtml(item.nome)}</h3>
            </div>
            <span class="badge ${item.tipo === 'Serviço' ? 'service' : ''}">
              ${escapeHtml(item.tipo)}
            </span>
          </div>
          <p class="description">${escapeHtml(item.descricao)}</p>
        </article>
      `).join('')}
    </div>
  `;
}
