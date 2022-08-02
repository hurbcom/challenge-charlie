// ***********************************************************
// This example support/component.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";

// Alternatively you can use CommonJS syntax:
// require('./commands')
import { AppProvider } from "../../src/context/weatherLocation.provider";
import GlobalStyles from "../../src/global-styles";

import { mount } from "cypress/react";

Cypress.Commands.add("mount", (component, options) => {
    return mount(
        <AppProvider>
            <GlobalStyles />
            {component}
        </AppProvider>,
        options
    );
});
Cypress.Commands.add("mockLocation", (latitude, longitude) => {
    return {
        onBeforeLoad(win) {
            cy.stub(win.navigator.geolocation, "getCurrentPosition").callsFake(
                (cb, err) => {
                    if (latitude && longitude) {
                        return cb({ coords: { latitude, longitude } });
                    }

                    throw err({ code: 1 });
                }
            );
        },
    };
});

// Example use:
// cy.mount(<MyComponent />)
