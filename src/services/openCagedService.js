import { client } from 'utils/client'

const { OPEN_CAGED_API_KEY, OPEN_CAGED_API_URL } = process.env

export function OpenCagedService({ latitude, longitude }) {
  const queryString = `?q=${latitude}+${longitude}&key=${OPEN_CAGED_API_KEY}&language=en`

  this.getLocale = function () {
    return client(`${OPEN_CAGED_API_URL}${queryString}`).then(data => {
      const [results] = data.results
      const { components } = results

      return {
        city: components.city,
        state: components.state,
      }
    })
  }
}
