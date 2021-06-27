
import express from 'express'

import 'express-async-error'

import routes from './routes'
import cors from 'cors'

import assignRequestId from '@middlewares/assignRequestId'
import exceptionHandler from '@middlewares/exceptionHandler'

const app = express()

app.use(cors())

app.use(assignRequestId)

app.use(routes)

app.use(exceptionHandler)

export default app
