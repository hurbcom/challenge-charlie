import { compareDates } from "../forecast";

describe("compare dates", () => {
    const originalDate = Date;
    const mockedDate = new Date(2019, 11, 20);

    beforeEach(() => {
        global.Date = jest.fn(() => mockedDate);
        global.Date.setDate = originalDate.setDate;
        global.Date.getHours = originalDate.getHours;
        global.Date.getTime = originalDate.getTime;
    });

    afterEach(() => {
        global.Date = originalDate;
    });

    it("should return tomorrow", () => {
        expect(compareDates(new originalDate(2019, 11, 21))).toBe("tomorrow");
    });

    it("should return dayAfterTomorrow", () => {
        expect(compareDates(new originalDate(2019, 11, 22))).toBe(
            "dayAfterTomorrow"
        );
    });

    it("should return other for next days", () => {
        expect(compareDates(new originalDate(2019, 11, 23))).toBe("other");
    });

    it("should return other for past days", () => {
        expect(compareDates(new originalDate(2019, 11, 19))).toBe("other");
    });
});
