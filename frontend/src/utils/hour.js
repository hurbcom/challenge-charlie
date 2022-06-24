var today = new Date();
var hour = today.getHours();
var time; 
    if(hour > 4 && hour < 10) {
        time = 'morn'
    } else if (hour > 10 && hour < 16) {
        time = 'day'
    } else if(hour > 16 && hour < 22) {
        time = 'eve'
    } else {
        time = 'night'
    }
export default time; 