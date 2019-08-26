
function Place(obj) {
    let address = new Address();
    let latitude = null;
    let longitude = null;

    this.getAddress = () => { return address };
    this.setAddress = (addr) => { address = addr };
    this.getLatitude = () => { return latitude };
    this.setLatitude = (lat) => { latitude = lat };
    this.getLongitude = () => { return longitude };
    this.setLongitude = (lat) => { longitude = lat };

    return this;
}

function Address() {
    let city = null;
    let town = null;
    let village = null;
    let state = null;
    let county = null;
    let hamlet = null;

    this.getHamlet = () => { return hamlet };
    this.setHamlet = (hm) => { hamlet = hm };
    this.getCity = () => { return city };
    this.setCity = (ct) => { city = ct };
    this.getTown = () => { return town };
    this.setTown = (tw) => { town = tw };
    this.getVillage = () => { return village };
    this.setVillage = (vl) => { village = vl };
    this.getState = () => { return state };
    this.setState = (st) => { state = st };
    this.getCounty = () => { return county };
    this.setCounty = (cy) => { county = cy };

    return this;
}

function Weather() {
    let today = new Today();
    let tomorrow = new NotToday();
    let dayAfter = new NotToday();

    this.getToday = () => { return today };
    this.setToday = (td) => { today = td };
    this.getTomorrow = () => { return tomorrow };
    this.setTomorrow = (tm) => { tomorrow = tm };
    this.getDayAfter = () => { return dayAfter };
    this.setDayAfter = (da) => { dayAfter = dayAfter };

    return this;
}

function NotToday() {
    let temperature = null;

    this.getTemperature = () => { return temperature };
    this.setTemperature = (tm) => { temperature = tm };

    return this;
}

function Today() {
    let temperature = null;
    let icon = null;
    let description = null;
    let humidity = null;
    let pressure = null;
    let wind = new Wind();

    this.getTemperature = () => { return temperature };
    this.setTemperature = (tmp) => { temperature = tmp };
    this.getIcon = () => { return icon };
    this.setIcon = (ic) => { icon = ic };
    this.getDescription = () => { return description };
    this.setDescription = (dc) => { description = dc };
    this.getHumidity = () => { return humidity };
    this.setHumidity = (hm) => { humidity = hm };
    this.getPressure = () => { return pressure };
    this.setPressure = (ps) => { pressure = ps };
    this.getWind = () => { return wind };
    this.setWind = (wd) => { wind = wd };

    return this;
}

function Wind() {
    let direction = null;
    let speed = null;
    this.getDirection = () => { return direction };
    this.setDirection = (dr) => { direction = dr };
    this.getSpeed = () => { return speed };
    this.setSpeed = (sp) => { speed = sp };
    return this;
}
