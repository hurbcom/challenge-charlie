export const compareDates = date => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    date.setHours(0, 0, 0, 0);

    const day_duration = 1000 * 60 * 60 * 24;

    const date_difference = date.getTime() - today.getTime();

    if (date_difference / day_duration === 1) return "tomorrow";
    else if (date_difference / day_duration === 2) return "dayAfterTomorrow";
    else return "other";
};

export const reduceForecast = forecast => {
    return forecast.list.reduce(
        (prevForecast, currentItem) => {
            const date = new Date(currentItem.dt_txt.split(" ")[0]);
            const comparedDate = compareDates(date);

            if (comparedDate === "other") return prevForecast;

            prevForecast[comparedDate] = Math.max(
                prevForecast[comparedDate],
                currentItem.main.temp_max
            );

            return prevForecast;
        },
        {
            tomorrow: 0,
            dayAfterTomorrow: 0
        }
    );
};
