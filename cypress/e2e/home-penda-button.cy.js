describe('test the home button on "PENDA"', () => {
    beforeEach(() => {
        cy.visit("http://localhost:4200/te-dhe-tek");
    });

    it("will click on penda which redirects to home", () => {
        cy.get(".penda-header-logo").click();
        cy.url().should("include", "");
    });
});
