
describe("main test", () => {
  it("open main site and check console", () => {
    cy.visit("http://localhost:8080")
  });
});

beforeEach(() => {
  Cypress.on('window:before:load', (win) => {
    cy.spy(win.console, 'error');
    cy.spy(win.console, 'warn');
  });
});

afterEach(() => {
  cy.window().then((win) => {
    expect(win.console.error).to.have.callCount(0);
    expect(win.console.warn).to.have.callCount(0);
  });
});