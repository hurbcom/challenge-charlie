const initialState = {
    mainDeg:true,
    findLocation:false,
    errorLocation: false,
    searching: false,
    weather: {
        city: '',
        condition: {},
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