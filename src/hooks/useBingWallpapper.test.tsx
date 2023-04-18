import { renderHook, act } from "@testing-library/react-hooks";
import useBingWallpapper from "./useBingWallpapper";

const image = {
    url: "/th?id=OHR.KiteDay_PT-BR2236604621_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
    copyrightlink:
        "https://www.bing.com/search?q=soltar+pipas&form=hpcapt&mkt=pt-br",
    copyright:
        "Adelaide Dia Internacional de Solte sua Pipa, na Australia (© Andrey Moisseyev/Alamy)",
};

global.fetch = jest
    .fn()
    .mockImplementationOnce(() =>
        Promise.resolve({
            json: () =>
                Promise.resolve({
                    images: [image],
                }),
        })
    )
    .mockImplementationOnce(() => Promise.reject({ message: "api error" }));

describe("hooks/useBingWallpapper", () => {
    test("fetch daily wallpaper", async () => {
        const { result, rerender } = renderHook(() => useBingWallpapper());
        expect(result.current.wallpapper).toBeUndefined();
        expect(result.current.loadWallpaperOfDay).toBeDefined();
        await act(async () => {
            await result.current.loadWallpaperOfDay();
        });
        expect(result.current.wallpapper).toStrictEqual(image);
    });

    test("fetch daily wallpaper throws an error", async () => {
        const { result, rerender } = renderHook(() => useBingWallpapper());
        expect(result.current.wallpapper).toBeUndefined();
        expect(result.current.loadWallpaperOfDay).toBeDefined();
        await act(async () => {
            await result.current.loadWallpaperOfDay();
        });
        expect(result.current.error).toStrictEqual({ message: "api error" });
    });
});
