export const updateProfile = (firstname: string, lastname: string) => {
    cy.getByTestId('EditableProfileCardHeader.EditButton').click();
    cy.getByTestId('ProfileCard.firstname').clear().type(firstname);
    cy.getByTestId('ProfileCard.lastname').clear().type(lastname);
    cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export function resetProfile(profileId: string) {
    return cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/${profileId}`,
        headers: { Authorization: 'asasf' },
        body: {
            id: '4',
            first: 'test',
            lastname: 'test',
            age: 18,
            currency: 'RUB',
            country: 'Russia',
            city: 'Moscow',
            username: 'ulbi tv',
            avatar: 'https://xakep.ru/wp-content/uploads/2018/05/171485/KuroiSH-hacker.jpg',
        },
    });
}

declare global {
    namespace Cypress {
        interface Chainable {
            resetProfile(profileId: string): Chainable<void>;
            updateProfile(firstname: string, lastname: string): Chainable<void>;
        }
    }
}
