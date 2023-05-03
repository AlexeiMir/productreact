import { User } from '../../../src/entities/User/model/types/userSchema';
import { USER_LOCALSTORAGE_KEY } from '../../../src/shared/const/localstorage';
import { selectByTestId } from '../../helpers/selectByTestId';

export function login(username: string = 'testuser', password: string = '123') {
    return cy.request({
        method: 'POST',
        url: 'http://localhost:8000/login',
        body: {
            username,
            password,
        },
    }).then(({ body }) => {
        window.localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(body));
        return body;
    });
}

export const getByTestId = (testId: string) => {
    return cy.get(selectByTestId(testId));
};

declare global {
  namespace Cypress {
    interface Chainable {
      login(email?: string, password?: string): Chainable<User>,
      getByTestId(testId: string): Chainable<JQuery<HTMLElement>>
    }
  }
}
