import { DynamicBackground } from '@components/dynamic-background/dynamic-background.comp'
import { SearchCityInput } from '@components/search-city-input/search-city-input.comp'
import { Box } from '@components/ui'
import { useDevice } from '@hooks/useDevice'

export const Home: React.FC = () => {
    const { device } = useDevice()

    return (
        <DynamicBackground>
            <Box
                justifyContent="center"
                alignItems="center"
                width="100%"
                height="100%"
            >
                <Box
                    direction="column"
                    width={device === 'desktop' ? '50%' : '90%'}
                >
                    <SearchCityInput />
                </Box>
            </Box>
        </DynamicBackground>
    )
}
