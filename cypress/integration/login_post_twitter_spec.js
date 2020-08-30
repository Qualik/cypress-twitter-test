beforeEach(() => {
    cy.visit('https://www.twitter.com/login');
});

describe('Testing Twitter', function () {
    it('Posts a tweet', function () {
        // cy.get('.loginButton').click()
        cy.get('[name="session[username_or_email]"]').first().type('qualik2ko@gmail.com');
        cy.get('[name="session[password]"]').first().type("The_Jump_test");
        cy.get('[data-testid="LoginForm_Login_Button"]').first().click();
        cy.get('[data-testid="SideNav_NewTweet_Button"]').click();
        cy.get('[data-testid="tweetTextarea_0"]').first().type('This is a test tweet');
        cy.get('[data-testid="tweetButton"]').first().click();
        cy.get('[data-testid="AppTabBar_More_Menu"]').click();
        cy.get('[data-testid="logout"]').click();
        cy.get('[data-testid="confirmationSheetConfirm"]').first().click();
    })
})