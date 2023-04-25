import { api } from '../api'
import { env } from '@config/env'
import { positionStack } from './position-stack.service'

jest.mock('../api')

describe('positionStack', () => {
    afterEach(() => {
        jest.resetAllMocks()
    })

    describe('getCities', () => {
        it('should return an array of cities', async () => {
            const expectedResponse = {
                data: {
                    data: [
                        {
                            type: 'locality',
                            name: 'City A',
                        },
                        {
                            type: 'other-type',
                            name: 'Other Place',
                        },
                        {
                            type: 'locality',
                            name: 'City B',
                        },
                    ],
                },
            }
            const search = 'some search'
            const params = {
                access_key: env.POSITION_STACK_API_KEY,
                query: search,
                limit: 20,
            }

            jest.spyOn(api, 'get').mockResolvedValueOnce(expectedResponse)

            const result = await positionStack.getCities(search)

            expect(api.get).toHaveBeenCalledTimes(1)
            expect(api.get).toHaveBeenCalledWith(
                `${env.CORS_PROXY}/${env.POSITION_STACK_API_URL}/v1/forward`,
                {
                    params,
                }
            )
            expect(result).toEqual(
                expectedResponse.data.data.filter(
                    (locale) => locale.type === 'locality'
                )
            )
        })
    })
})
