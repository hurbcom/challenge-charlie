import { render, screen } from "@testing-library/react";
import App from ".";

const image = {
    url: "/th?id=OHR.KiteDay_PT-BR2236604621_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
    copyrightlink:
        "https://www.bing.com/search?q=soltar+pipas&form=hpcapt&mkt=pt-br",
    copyright:
        "Adelaide Dia Internacional de Solte sua Pipa, na Australia (© Andrey Moisseyev/Alamy)",
};

jest.mock("../../hooks/useBingWallpapper", () => {
    return jest
        .fn()
        .mockImplementationOnce(() => ({
            wallpapper: {},
            loadWallpaperOfDay: jest.fn().mockImplementationOnce(() =>
                Promise.resolve({
                    json: () =>
                        Promise.resolve({
                            images: [image],
                        }),
                })
            ),
        }))
        .mockImplementationOnce(() => ({
            wallpapper: {
                ...image,
            },
            loadWallpaperOfDay: jest.fn().mockImplementationOnce(() =>
                Promise.resolve({
                    json: () =>
                        Promise.resolve({
                            images: [image],
                        }),
                })
            ),
        }));
});

describe("<App />", () => {
    test("renders the <App/> component without background", () => {
        const { asFragment } = render(<App />);
        expect(asFragment).toMatchSnapshot();
    });

    test("renders the <App/> component with background", () => {
        const { asFragment } = render(<App />);
        expect(asFragment).toMatchSnapshot();
    });
});
