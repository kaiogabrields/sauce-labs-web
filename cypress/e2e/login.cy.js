import Login from '../support/pages/login/page-login.js'

describe('LOGIN', () => {
  
    beforeEach(() => {
      Login.acessarPaginaLogin();
    });

    it('LG-01 Login com credenciais válidas', () => {
      Login.realizarLoginComDadosValidos();
    });

    it('LG-02 Validar erro ao não preencher campo obrigatório username', () => {
      Login.semPreencherCampoUsername();
    });

    it('LG-03 Validar erro ao não preencher campo obrigatório password', () => {
      Login.semPreencherCampoPassword();
    });

    it('LG-04 Login com username correto e senha inválida', () => {
      Login.realizarLoginComPasswordIncorreto()
    });

    it('LG-05 Login com username incorreto e senha válida', () => {
      Login.realizarLoginComUsernameIncorreto()
    });

});