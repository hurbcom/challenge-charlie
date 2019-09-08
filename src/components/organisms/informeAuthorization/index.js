// Import Styled
import {
    Section, Alert, Icon, Text,
} from './styled';

const InformeAuthorization = () => (
    <Section>
        <Alert>
            <Icon src="/static/images/up-arrow.svg" />
            <Text>Habilite sua localização,<br />para uma previsão precisa.</Text>
        </Alert>
    </Section>
);

export default InformeAuthorization;