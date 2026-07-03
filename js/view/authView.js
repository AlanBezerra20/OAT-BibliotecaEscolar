import { escapeHtml } from './helpers.js';

export const AuthView = {
    login(message = '', isError = false) {
        return `
      <section class="page-section">
        <article class="form-card narrow">
          <span class="eyebrow">Acesso</span>
          <h2>Entrar no sistema</h2>
          <p>Informe seu e-mail e senha para continuar.</p>

          ${message ? `<div class="message ${isError ? 'error' : ''}">${escapeHtml(message)}</div>` : ''}

          <form id="login-form">
            <div class="form-group">
              <label for="email">E-mail</label>
              <input id="email" name="email" type="email" required>
            </div>

            <div class="form-group">
              <label for="senha">Senha</label>
              <input id="senha" name="senha" type="password" required>
            </div>

            <button class="btn" type="submit">Entrar</button>
          </form>

          <p class="helper-text">Não possui cadastro? <a href="#/cadastro">Criar conta</a></p>

          <div class="helper-box">
            Use o e-mail e a senha cadastrados no Supabase.
          </div>
        </article>
      </section>
    `;
    },

    register(message = '', isError = false) {
        return `
      <section class="page-section">
        <article class="form-card narrow">
          <span class="eyebrow">Novo usuário</span>
          <h2>Criar conta</h2>
          <p>Preencha os dados abaixo para realizar seu cadastro.</p>

          ${message ? `<div class="message ${isError ? 'error' : ''}">${escapeHtml(message)}</div>` : ''}

          <form id="register-form">
            <div class="form-group">
              <label for="nome">Nome</label>
              <input id="nome" name="nome" required>
            </div>

            <div class="form-group">
              <label for="register-email">E-mail</label>
              <input id="register-email" name="email" type="email" required>
            </div>

            <div class="form-group">
              <label for="register-password">Senha</label>
              <input id="register-password" name="senha" type="password" minlength="4" required>
            </div>

            <button class="btn" type="submit">Cadastrar</button>
          </form>

          <p class="helper-text">Já possui conta? <a href="#/login">Fazer login</a></p>
        </article>
      </section>
    `;
    },

    account(user) {
        const firstLetter = escapeHtml(user.nome.charAt(0).toUpperCase());

        return `
      <section class="page-section">
        <article class="form-card narrow account-card">
          <div class="account-avatar">${firstLetter}</div>
          <span class="eyebrow">Minha conta</span>
          <h2>${escapeHtml(user.nome)}</h2>
          <p>${escapeHtml(user.email)}</p>

          <div class="helper-box">
            Seu cadastro e sua sessão são gerenciados pelo Supabase.
          </div>

          <div class="form-actions">
            <a class="btn" href="#/produtos">Consultar acervo</a>
            <button class="btn btn-secondary" id="logout-button" type="button">Sair da conta</button>
          </div>
        </article>
      </section>
    `;
    }
};
