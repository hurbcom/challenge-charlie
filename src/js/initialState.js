const initialState = {
    mainDeg:true,
    noLocation:false,
    findLocation:false,
    errorLocation: false,
    searching: false,
    weather: {
        city: '',
        condition: {code: "",
        date: "",
        temp: "",
        text: "",
    },
        wind:{},
        atmosphere:{},
        forecast: {
           amanha:{
            code: "",
            date: "",
            day:
                "",
            high:
                "",
            low:
                "",
            text:
                "",
           },
           depoisAmanha:{
            code: "",
            date: "",
            day:
                "",
            high:
                "",
            low:
                "",
            text:
                "",
           }
        }
    }

}

export default initialState