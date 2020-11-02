class CacheService {
  public static setCacheData = (
    key: string,
    value,
    ttl: number,
    type = 'DAYS'
  ) => {
    let ttlInMs = 1 * 86400000
    switch (type) {
      case 'SECONDS':
        ttlInMs = ttl * 1000
        break
      case 'MINUTES':
        ttlInMs = ttl * 60 * 1000
        break
      case 'HOURS':
        ttlInMs = ttl * 60 * 60 * 1000
        break
      case 'DAYS':
        ttlInMs = ttl * 86400000
        break
      default:
        break
    }

    const now = new Date()
    const item = {
      value,
      ttl: now.getTime() + ttlInMs
    }
    localStorage.setItem(`_CACHE_DATA_RENATO_${key}`, JSON.stringify(item))
  }

  public static getCacheData = (key) => {
    const itemStr = localStorage.getItem(`_CACHE_DATA_RENATO_${key}`)
    // if is expired return null
    if (!itemStr) {
      return null
    }

    const item = JSON.parse(itemStr)
    const now = new Date()
    // compare the expiry time of the item with the current time
    if (now.getTime() > item.ttl) {
      // If the item is expired, remove item from storage
      // and return null
      localStorage.removeItem(`_CACHE_DATA_RENATO_${key}`)
      return null
    }
    // cache is not expired
    return item.value
  }
}

export default CacheService
