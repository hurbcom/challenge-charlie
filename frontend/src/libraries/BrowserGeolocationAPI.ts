type Coordinates = {
  latitude?: number;
  longitude?: number;
}

class BrowserGeolocationAPI {
  private hasSupportToGeolocation: boolean;

  constructor() {
    this.hasSupportToGeolocation = 'geolocation' in navigator;

    this.checkIfBrowserSupports();
  }

  private checkIfBrowserSupports(): boolean {
    if (this.hasSupportToGeolocation) {
      console.log('Browser supports Geolocation API');
      return true;
    }

    console.log('Browser doesn\'t have support to Geolocation API');
    return false;
  }

  public async getActualCoordinates(): Promise<Coordinates | boolean> {
    if (!this.checkIfBrowserSupports()) {
      return false;
    }

    const getGeolocation = (): Promise<any> => new Promise(
      (resolve, reject) => {
        navigator
          .geolocation
          .getCurrentPosition(
            (position) => resolve(position),
            (error: any) => reject(error),
          );
      },
    );

    const { coords } = await getGeolocation();

    if (
      typeof coords.latitude === 'undefined'
      || typeof coords.longitude === 'undefined'
    ) {
      console.log('latitude or longitude is undefined in geolocation API');
      return false;
    }

    return {
      latitude: coords.latitude,
      longitude: coords.longitude,
    };
  }

  public async grantPermissions(): Promise<boolean> {
    if (!this.checkIfBrowserSupports()) {
      return false;
    }

    const result = await navigator.permissions.query({ name: 'geolocation' });

    result.onchange = () => {
      console.log(result.state);
    };

    if (result.state === 'granted') {
      console.log('granted', result.state);
      return false;
    } if (result.state === 'prompt') {
      console.log('prompt', result.state);
      return true;
    } if (result.state === 'denied') {
      console.log('denied', result.state);
      return false;
    }

    return true;
  }
}

export default new BrowserGeolocationAPI();
