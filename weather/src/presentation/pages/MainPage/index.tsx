import { useQuery } from 'react-query';
import { getBackgroundImage } from '../../../helpers';
import { SearchBar } from '../../components/SearchBar';
import { Weather } from '../../components/Weather';
import * as S from './style';


export const MainPage = () => {
    const { data: imgUrl } = useQuery('bg-image', async () => {
        const data = await getBackgroundImage()
        return data
    })

    return (
        <S.MainContainer
            imageURL={imgUrl}
        >
            <S.Content>
                <SearchBar />
                <Weather />
            </S.Content>
        </S.MainContainer>
    )
}