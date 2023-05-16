import glob from 'glob'
import j2s from 'joi-to-swagger'
import swaggerAutogen from 'swagger-autogen'
import Logger from '../infrastructure/logger'

const swaggerJsonPath = 'src/startup/swagger.json'
const routePaths = glob.sync('**/*.routes.ts')
const validationPaths = glob.sync('**/*.validation.ts')

const getSchemas = async () => {
  const paths = await validationPaths
  if (paths.length === 0) return {}
  const validation = await import(`../../${paths[0]}`)
  const schemasNames = Object.getOwnPropertyNames(validation)
  schemasNames.shift()
  return schemasNames.reduce((schemas, schemaName) => ({
    ...schemas,
    [schemaName]: j2s(validation[schemaName]).swagger,
  }), {})
}

const doc = {
  info: {
    title: 'Node Sample',
    description: 'Um exemplo de backend completo em Node',
  },
  basePath: '/api/v1',
  host: '',
  components: { },
}

export default async (host) => {
  doc.host = host
  doc.components['@schemas'] = await getSchemas()

  try {
    await routePaths
  } catch (ex) {
    Logger.info('Ocorreu erro ao obter rotas para o Swagger', ex)
  }

  try {
    await swaggerAutogen({ openapi: '3.0.0' })(swaggerJsonPath, routePaths, doc)
  } catch (ex) {
    Logger.info('Ocorreu erro ao gerar swagger.json', ex)
  }
}
