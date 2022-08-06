export const validLocalStorage = () => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem('language')
  } else {
    return '"pt_br"'
  }
}