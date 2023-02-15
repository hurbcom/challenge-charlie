import { Input } from '~/components';
import CompassIcon from '~/assets/compass.svg';

import * as S from './styles';

function Home() {
  return (
    <S.Container>
      <S.Content>
        <Input placeholder="Testing" icon={{ svg: CompassIcon, alt: 'Ícone de compasso' }} />
      </S.Content>
    </S.Container>
  );
}

export default Home;
