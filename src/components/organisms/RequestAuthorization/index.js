// Import React Defaults
import React, { Component } from 'react';

// Imports Redux Defaults
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import Actions Redux
import {
    setUserLocation,
    setUserAuthorization
} from '../../../redux/actions';

// Import Utils
import { states } from '../../../utils/helpers';

// Import Styled
import {
    Section, Alert, Icon, Text, Form, FieldSelect, ButtonCTA, Spinner,
} from './styled';

class RequestAuthorization extends Component {
    constructor( props ){
        super( props );

        this.state = {
            loading: false
        }
    }

    // Pega as informações de clima do usuário com base no estado escolhido
    getUserLocationByState = async ( form ) => {
        form.preventDefault();

        // Reducers
        const { setUserLocation, setUserAuthorization } = this.props;

        // Exibe o Loader
        this.setState({ loading: true });

        // Pega informações do usuário e clima para alimentar a aplicação 
        // Requisições feitas pelo lado so servidor para camuflar a API_KEY dos endpoints
        const response = await fetch( `/api/user/infos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_state: form.target[0].value,
            })
        });
        const userData = await response.json();

        console.log( userData );

        // Recupera informações do fetch
        const { user_state, user_city, background, climate } = userData.data;

        // Envia atualização para a store
        setUserLocation( user_state, user_city, background, climate );

        // Esconde o Loader
        this.setState({ loading: false });

        // Atualiza preferencia do usuário na store
        setUserAuthorization( 'authorized' );
    }
    
    render() {
        const { loading } = this.state;
        return(
            <Section>
                <Alert>
                    <Icon src="/static/images/cloud-computing.svg" />
                    <Text>Precisamos que selecione seu estado, com ele, nós saberemos qual é a sua região e poderemos fornecer uma previsão do tempo com exatidão.</Text>
                    <Form onSubmit={this.getUserLocationByState}>
                        <FieldSelect required={true} disabled={loading}>
                            {
                                states.map( (item, key) => {
                                    return (
                                        <option 
                                            key={key}
                                            value={item.state}
                                        >
                                            {item.state}
                                        </option>
                                    )
                                })
                            }
                        </FieldSelect>
                        <ButtonCTA
                            type="submit"
                            text="Iniciar Previsão"
                            disabled={loading}
                        />
                        {
                            loading && (
                                <Spinner />
                            )
                        }
                    </Form>
                </Alert>
            </Section>
        )
    }
};

// Carrega states
function mapStateToProps ( state ) {
    const { user_location, user_authorization } = state;
    return { user_location, user_authorization }
}

// Dispacha reducers
const mapDispatchToProps = dispatch => bindActionCreators({
    setUserLocation,
    setUserAuthorization,
}, dispatch)

// Conecta a provider, fazendo a ponte entre o react e redux
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RequestAuthorization);