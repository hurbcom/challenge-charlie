exports.mockGeoLocation = ({ latitude, longitude, disabled = false }) => ({
    onBeforeLoad(win) {
        cy.stub(win.navigator.geolocation, 'getCurrentPosition', (cb, err) => {
            // eslint-disable-next-line no-throw-literal
            if (disabled) throw err({ code: 1 });
            cb({ coords: { latitude, longitude } });
        });
    },
});
