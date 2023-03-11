import { IconRender } from '../IconRender'
import { ReactComponent as LocationIcon} from '../../assets/location.svg'
import * as  S from './style'
import { useLocation } from '../../../helpers'

export const SearchBar = () => {
    const { location: locationName, handleChangeLocation} = useLocation();
    return (
        <S.LocationInput>
            <S.InputContainer >
                <IconRender 
                    size='45px'
                    responsiveSize='60px'
                    icon={LocationIcon}
                />
                <S.Input type="text"
                    defaultValue={locationName}
                    onChange={e => handleChangeLocation(e)}
                />
            </S.InputContainer>
        </S.LocationInput>
    )
}