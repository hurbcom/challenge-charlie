import Joi from 'joi'
import { LocationRequest, WeatherRequest } from './weather.types'

export const getLocationSchema = Joi.object<LocationRequest>({
  latitude: Joi.number().required().messages({ 'any.required': '"latitude" é obrigatória' }),
  longitude: Joi.number().required().messages({ 'any.required': '"longitude" é obrigatório' }),
})

export const getWeatherSchema = Joi.object<WeatherRequest>({
  city: Joi.string().required().messages({ 'any.required': '"city" é obrigatório' }),
})
