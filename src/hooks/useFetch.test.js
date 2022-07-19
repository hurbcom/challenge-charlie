import { renderHook } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { act } from "react-dom/test-utils";
import useFetch from "./useFetch";

const handlers = [
  rest.get("https:link.com/data", async (req, res, ctx) => {
    return res(ctx.json({ title: "foo" }));
  }),
  rest.get("https:link.com/dat", async (req, res, ctx) => {
    return res(
      // Send a valid HTTP status code
      ctx.status(403)
      // And a response body, if necessary
    );
  }),
];

const server = setupServer(...handlers);

describe("useFetch", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  beforeAll(() => {
    server.listen();
  });

  afterEach(() => server.resetHandlers());

  afterAll(() => {
    server.close();
  });

  it("should return data with a successful api request", async () => {
    const { result } = renderHook(() => useFetch());
    // Calling the api via the `callApi` function
    await act(async () => {
      result.current.fetchUrl("https:link.com/data");
    });
    expect(result.current.result.title).toEqual("foo");
  });
  it("should rejected api request", async () => {
    const { result } = renderHook(() => useFetch());

    await act(async () => {
      result.current.fetchUrl("https:link.com/dat");
    });
    expect(result.current.error).toEqual("Request failed with status code 403");
  });
});
