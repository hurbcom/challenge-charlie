import { compareDates, reduceForecast } from "../forecast";
describe("Forecast utils", () => {
    const originalDate = Date;
    const mockedDate = new Date(2019, 11, 20).getTime();

    beforeEach(() => {
        global.Date.now = jest.fn(() => mockedDate);
    });

    afterEach(() => {
        global.Date = originalDate;
    });

    describe("compare dates", () => {
        it("should return tomorrow", () => {
            expect(compareDates(new Date(2019, 11, 21))).toBe("tomorrow");
        });

        it("should return dayAfterTomorrow", () => {
            expect(compareDates(new Date(2019, 11, 22))).toBe(
                "dayAfterTomorrow"
            );
        });

        it("should return other for next days", () => {
            expect(compareDates(new Date(2019, 11, 23))).toBe("other");
        });

        it("should return other for past days", () => {
            expect(compareDates(new Date(2019, 11, 19))).toBe("other");
        });
    });

    describe("Reduce forecast", () => {
        const mockedForecast = {
            list: [
                {
                    dt_txt: "2019-12-21 02:00:00",
                    main: { temp_max: 20 }
                },
                {
                    dt_txt: "2019-12-21 06:00:00",
                    main: { temp_max: 30 }
                },
                {
                    dt_txt: "2019-12-22 02:00:00",
                    main: { temp_max: 20 }
                },
                {
                    dt_txt: "2019-12-22 06:00:00",
                    main: { temp_max: 40 }
                }
            ]
        };

        it("should get the major temperature for each day", () => {
            expect(reduceForecast(mockedForecast)).toStrictEqual({
                tomorrow: 30,
                dayAfterTomorrow: 40
            });
        });
    });
});
