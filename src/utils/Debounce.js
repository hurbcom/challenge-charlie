/**
 * Referência: https://github.com/vuejs-tips/tiny-debounce/blob/master/index.js
*/
export const DEFAULT_DELAY = 500

const debounce = (callback, delay = DEFAULT_DELAY) => {
  let timeoutId = null
  return function () {
    clearTimeout(timeoutId)
    let instancia = this
    timeoutId = setTimeout(() => {
      callback.apply(instancia, arguments)
    }, delay)
  }
}

export default debounce
