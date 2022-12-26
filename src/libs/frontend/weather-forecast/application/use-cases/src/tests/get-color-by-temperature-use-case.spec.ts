import { GetColorByTemperatureUseCaseInput } from "../../../contracts/use-cases/src/lib/get-color-by-temperature-use-case.contract"
import { GetColorByTemperatureUseCase } from "../lib/get-color-by-temperature.use-case"

describe('GetColorByTemperatureUseCase', () => {
    it('should return blue', () => {
        // arrange
        const useCase = new GetColorByTemperatureUseCase()
        const input: GetColorByTemperatureUseCaseInput = {
            temperature: 14
        }
        const expectedColor = 'blue'

        // act
        const { color } = useCase.execute(input)

        // assert
        expect(color).toBe(expectedColor)
    })

    it('should return red', () => {
        // arrange
        const useCase = new GetColorByTemperatureUseCase()
        const input: GetColorByTemperatureUseCaseInput = {
            temperature: 36
        }
        const expectedColor = 'red'

        // act
        const { color } = useCase.execute(input)

        // assert
        expect(color).toBe(expectedColor)
    })

    it('should return yellow', () => {
        // arrange
        const useCase = new GetColorByTemperatureUseCase()
        const input: GetColorByTemperatureUseCaseInput = {
            temperature: 25
        }
        const expectedColor = 'yellow'

        // act
        const { color } = useCase.execute(input)

        // assert
        expect(color).toBe(expectedColor)
    })
})