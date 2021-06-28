import * as yup from 'yup'

import HttpValidatorException from '@exceptions/HttpValidatorException'

class GetWeatherByLocationValidator {
  private schema: any;
  public latitude?: number;
  public longitude?: number;
  public cityName?: string;

  constructor (data: any) {
    this.setupSchema()

    this.latitude = data.latitude
    this.longitude = data.longitude
    this.cityName = data.cityName
  }

  private setupSchema () {
    const defaultMessage =
      'cityName or (latitude and longitude) was not informed in query string'

    this.schema = yup.object().shape({
      cityName: yup
        .string()
        .when('latitude', (latitude, schema) =>
          !latitude
            ? schema.required(defaultMessage)
            : schema
        )
        .when('longitude', (longitude, schema) =>
          !longitude
            ? schema.required(defaultMessage)
            : schema
        ),

      latitude: yup
        .number()
        .typeError('latitude param must be a number'),

      longitude: yup
        .number()
        .typeError('longitude param must be a number')
    })
  }

  public async validate () {
    await this.schema.validate(this).catch(function (err: any) {
      throw new HttpValidatorException(err.errors)
    })
  }

  public getExpectedParams (): Omit<GetWeatherByLocationValidator, 'validate'> {
    const {
      validate: validateFunction,
      ...expectedParams
    } = this

    return expectedParams
  }
}

export default GetWeatherByLocationValidator
