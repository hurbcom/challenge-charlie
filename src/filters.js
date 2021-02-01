import Vue from 'vue'
import moment from 'moment'

/**
 * You can register global filters here and use them as a plugin in your main Vue instance
 */


Vue.filter('formatMoney', (value) => {
    value = parseFloat(value)
    if (value || value === 0 || value === '0'){
        return `R$ ${value.toFixed(2).replace('.', ',')}`
    }
});
Vue.filter('formatDate', (value, time=true) => {
    if (!time){
        return moment(String(value)).format('DD/MM/YYYY')
    }
    return moment(String(value)).format('DD/MM/YYYY H:mm:ss')
});
Vue.filter('ageFromBirthday', (value, datetime=false) => {
    if (value) {
        const timestamp = datetime ? value : `${value} 00:00:00`
        const birthday = moment(String(timestamp))
        return moment().diff(birthday, 'years')
    }
    return null
});
Vue.filter('jsonParse', (value, attribute=null) => {
    if (value) {
        const objectParsed = JSON.parse(value)
        if (attribute){
            return objectParsed[attribute]
        }
        return objectParsed
    }
    return null
});