let currentArticleId = '';
describe('Пользователь заходит на страницу со списком статей', () => {
    beforeEach(() => {
        cy.login();
        cy.createArticle().then((article) => {
            currentArticleId = article.id;
            cy.visit(`/articles/${currentArticleId}`);
        });
    });
    afterEach(() => {
        cy.removeArticle(currentArticleId);
    });
    it('И видит содержимое статьи', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist');
    });
    it('И видит список рекоммендаций', () => {
        cy.getByTestId('ArticleRecommendationsList').should('exist');
    });
    it('И оставляет комментарий', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist');
        cy.getByTestId('AddCommentForm').scrollIntoView();
        cy.addComment('text');
        cy.getByTestId('CommentCard.Content').should('have.length', 1);
    });
    it('И ставит оценку', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist');
        cy.getByTestId('RatingCard').scrollIntoView();
        cy.setRate(5, 'feedback');
        cy.get('[data-selected=true]').should('have.length', 5);
    });
});
