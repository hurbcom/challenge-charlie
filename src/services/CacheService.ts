class CacheService {
    private static minutsToTTL = (ttl: number) => {
        const newTTL = Date.now() + ttl * 60000;
        return new Date(newTTL).toUTCString();
    };

    public static setCookie = (key: string, data: string, ttl?: number) => {
        let timeToLive = ttl;
        if (!timeToLive) timeToLive = 30;
        document.cookie = `${key}=${data}; expires=${this.minutsToTTL(
            timeToLive
        )};`;
    };

    public static getCookie = (key: string): string => {
        const name = `${key}=`;
        const decodedCookie = decodeURIComponent(document.cookie);
        const cookieArray = decodedCookie.split(';');

        for (let i = 0; i < cookieArray.length; i += 1) {
            let currentCookie = cookieArray[i];
            while (currentCookie.charAt(0) === ' ') {
                currentCookie = currentCookie.substring(1);
            }
            if (currentCookie.indexOf(name) === 0) {
                return currentCookie.substring(
                    name.length,
                    currentCookie.length
                );
            }
        }
        return '';
    };
}

export default CacheService;
