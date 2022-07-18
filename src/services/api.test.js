import { rest } from "msw";
import { setupServer } from "msw/node";
import { getWeather } from "./api";

const handlers = [
  rest.get(
    "https://api.openweathermap.org/data/2.5/weather",
    async (req, res, ctx) => {
      const city = req.url.searchParams.get("q");
      if (city) {
        return res(ctx.json({ name: city, lon: 10, lat: 10 }));
      } else {
        return res(ctx.status(403), ctx.json({ message: "city not found" }));
      }
    }
  ),
  rest.get(
    "https://api.openweathermap.org/data/2.5/onecall",
    async (req, res, ctx) => {
      const lon = req.url.searchParams.get("lon");
      const lat = req.url.searchParams.get("lat");
      return res(ctx.json({ name: "rio", lon: lon, lat: lat }));
    }
  ),
];

const server = setupServer(...handlers);

describe("api", () => {
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => server.resetHandlers());

  afterAll(() => {
    server.close();
  });

  it("should return weather data", async () => {
    const result = await getWeather({ q: "rio" });
    expect(result.name).toEqual("rio");
  });

  it("should return error ", async () => {
    try {
      await getWeather();
    } catch (e) {
      expect(e.message).toBe("city not found");
    }
  });
});
