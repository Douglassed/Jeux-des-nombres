describe('Make sure our game app is working well', () => {
    it('Test that we can open a browser and load our app', () => {
        cy.visit("http://172.30.60.23:8080/")
    }),
    it('Test that the start button game leads to an input field', () => {
        cy.get('#cp_btn_startGame').click();
        cy.get('input').should('be.visible')
    }),
    it('Test that the input "1001" results in a print of "C\'est moins"', () => {
        cy.get('input').type("1001")
        cy.get('#button-addon2').click()
        cy.contains("C'est moins")
    }),
    it('Test that the input "-1" results in a print of "C\'est plus"', () => {
        cy.get('input').type("-1")
        cy.get('#button-addon2').click()
        cy.contains("C'est plus")
    }),
    it('Test that the abandon button leads to a defeat page', () => {
        cy.get('#cp_btn_abandon').click()
        cy.wait(1000);
        cy.get('#cp_btn_validAbandon').click()
        cy.contains('Vous avez perdu')
    }),
    it('Test that stats nav button leads to the stats page', () => {
        cy.get('#cp_link_stats').click()
        cy.contains('Statistiques')
        cy.contains('Retour accueil')
        cy.contains('Nombre de tentatives moyen par partie')
    })
})