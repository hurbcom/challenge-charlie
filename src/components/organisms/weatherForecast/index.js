// Imports Redux Defaults
import { connect } from 'react-redux';

// Import Utils
import { days, checkColorDay } from '../../../utils/helpers';

// Import Componentes
import DayItem from '../../molecules/DayItem';

// Import styled
import {
    Section, Wrapper, Header, IconHeader, UserState, BoxDays,
    BoxSpinner, Spinner, TextLoad,
} from './styled';

const WeatherForecast = ({
    user_location, user_state, user_city, background, climate,
}) => (
    <>
        {
            user_location ? (
                <Section bg={background}>
                    <Wrapper>
                        <Header>
                            <IconHeader data-icon="(" />
                            <UserState>{user_state}, {user_city}</UserState>
                        </Header>
                        <BoxDays>
                            {
                                Object.keys(climate).map( ( day, key ) => {
                                    const curClimate = climate[day];
                                    return(
                                        <DayItem 
                                            key={key}
                                            tempTip={days[key]}
                                            climate={curClimate}
                                            colors={checkColorDay(climate.today.temp)}
                                        />
                                    )
                                })
                            }
                        </BoxDays>
                    </Wrapper>
                </Section>
            ) : (
                <BoxSpinner>
                    <Spinner />
                    <TextLoad>Carregando previsão do tempo, aguarde...</TextLoad>
                </BoxSpinner>
            )
        }
    </>
);

// Carrega states
function mapStateToProps ( state ) {
    const { user_location, user_state, user_city, background, climate } = state;
    return { user_location, user_state, user_city, background, climate }
}

// Conecta a provider, fazendo a ponte entre o react e redux
export default connect(
    mapStateToProps,
)(WeatherForecast);
