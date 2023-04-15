const request = require("supertest");
import app from "./app";

describe("Testing the app routes", () => {
    describe("Testing the get-image route", () => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve({ images: [{ url: "/zucc" }] }),
            })
        ) as jest.Mock;

        beforeEach(() => {
            (fetch as jest.Mock).mockClear();
        });
        it("should respond with json", () => {
            request(app, { http2: true })
                .get("/get-image")
                .expect("Content-Type", /json/)
                .expect("Content-Length", "15")
                .expect(200)
                .end(function (err: Error) {
                    if (err) throw err;
                });
        });
    });
});
