const useDateComparsion = () => {
    const isSameDay = (date: Date, daysToAdd: number = 0) => {
        const desiredDay = new Date();
        if (daysToAdd > 0) {
            desiredDay.setDate(desiredDay.getDate() + daysToAdd);
        }
        return desiredDay.toDateString() === date.toDateString();
    }

    return {
        isSameDay
    }
}

export default useDateComparsion