import supertest from 'supertest'
import app from '../../startup/app'

export const request = supertest(app.callback())
