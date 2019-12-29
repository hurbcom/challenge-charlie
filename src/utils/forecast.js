const compareDates = date => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (date.getTime() - today.getTime() === 1) return "tomorrow";
    else if (date.getTime() - today.getTime() === 2) return "dayAfterTomorrow";
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
