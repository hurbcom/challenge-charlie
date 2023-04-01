import { IconRender } from '../IconRender'
import { ReactComponent as LocationIcon} from '../../assets/location.svg'
import * as  S from './style'
import { useLocation } from '../../../helpers'

export const SearchBar = () => {
    const { location: locationName, setLocation } = useLocation();
    return (
        <S.LocationInput>
            <S.InputContainer >
                <IconRender 
                    size='45px'
                    responsiveSize='60px'
                    icon={LocationIcon}
                />
                <S.Input type="text"
                    value={locationName}
                    onChange={e => setLocation(e.target.value)}
                    onClick={() => setLocation('')}
                />
            </S.InputContainer>
        </S.LocationInput>
    )
}