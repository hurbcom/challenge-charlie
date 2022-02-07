class Cache {
  public static set = (
    cacheKey: string,
    cacheContent: any,
    minutes: number = 1
  ) => {
    window.localStorage.setItem(
      cacheKey,
      JSON.stringify({
        exprires_at: new Date().getTime() + 60000 * minutes,
        data: cacheContent,
      })
    )
  }
  public static get = (cacheKey: string) => {
    let rawContent = window.localStorage.getItem(cacheKey)
    if (rawContent) {
      const content = JSON.parse(rawContent)
      if (!content.expires_at || content.expires_at < new Date().getTime()) {
        window.localStorage.removeItem(cacheKey)
        return null
      }
      return content
    }
    return null
  }
}

export default Cache
