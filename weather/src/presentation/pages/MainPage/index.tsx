import { useQuery } from 'react-query';
import { getBackgroundImage, notify, useLocation } from '../../../helpers';
import { SearchBar } from '../../components/SearchBar';
import { Weather } from '../../components/Weather';
import * as S from './style';


export const MainPage = () => {
    const { error } = useLocation();
    const { data: imgUrl } = useQuery('bg-image', async () => {
        const data = await getBackgroundImage()
        return data
    })

    if(error){
        console.log('errorrr', error);
        notify('errorr', 'error')
    }

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