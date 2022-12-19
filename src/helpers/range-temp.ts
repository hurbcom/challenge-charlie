export const getRangeTemp = (list: any, sum: number) => {

    const today = new Date()
    const tomorrow = new Date(today.setDate(today.getDate() + sum))

    const filteredList = list.filter((item: any) => {
        return new Date(item.dt_txt).toDateString() == tomorrow.toDateString()
    })


    const maxTemp = filteredList.reduce(function (prev: any, current: any) {

        return (prev.main.temp_max > current.main.temp_max) ? prev : current
    })

    const minTemp = filteredList.reduce(function (prev: any, current: any) {
        return (prev.main.temp_min < current.main.temp_min) ? prev : current
    })

    const icon = filteredList[3].weather[0].icon

    return {
        min: minTemp.main.temp_min,
        max: maxTemp.main.temp_max,
        icon
    }
}