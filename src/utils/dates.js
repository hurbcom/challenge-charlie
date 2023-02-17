import moment from 'moment'

export const filterNextDays = (list) => {
    const tomorrow =  moment().add(1, 'day').startOf('day').unix();
    const afterTomorrow =  moment().add(2, 'day').startOf('day').unix();
    const results = []
    results.push(list.filter(x =>{
        return  tomorrow === x.dt || afterTomorrow === x.dt
    }))
    return {tomorrow: results[0][0], afterTomorrow: results[0][1]}
}
