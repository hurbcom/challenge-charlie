import { DynamicBackground } from '@components/dynamic-background/dynamic-background.comp'
import { SearchCityInput } from '@components/search-city-input/search-city-input.comp'
import { Box } from '@components/ui'

export const Home: React.FC = () => {
    return (
        <DynamicBackground>
            <Box
                justifyContent="center"
                alignItems="center"
                width="100%"
                height="100%"
            >
                <Box direction="column" width="50%">
                    <SearchCityInput />
                </Box>
            </Box>
        </DynamicBackground>
    )
}
