import { EditableProfileCard } from '../../src/features/EditableProfileCard';
import { TestProvider } from '../../src/shared/lib/test/componentRender/componentRender';

const USER_ID = '1';

describe('EditableProfileCard.cy.tsx', () => {
    it('playground', () => {
        cy.intercept('GET', '**/profile/*', { fixture: 'profile.json' });
        cy.mount(
            <TestProvider
                options={{
                    initialState: {
                        user: {
                            authData: {
                                id: USER_ID,
                            },
                        },
                    },
                }}
            >
                <EditableProfileCard id={USER_ID} />
            </TestProvider>,
            // описываем тест кейс
        );
    });
});
