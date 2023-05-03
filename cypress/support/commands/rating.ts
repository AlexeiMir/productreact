export const setRate = (starCount: number, feedBack: string) => {
    cy.getByTestId(`StarRating.${starCount}`).click();
    cy.getByTestId('RatingCard.Input').type(feedBack);
    cy.getByTestId('RatingCard.Send').click();
};

declare global {
  namespace Cypress {
    interface Chainable {
      setRate(starCount: number, feedBack: string): Chainable<void>,
    }
  }
}
