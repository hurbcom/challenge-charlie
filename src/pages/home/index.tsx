import Input from "~/components/Input";
import CompassIcon from '~/assets/compass.svg';

import * as S from './styles';

function Home() {
  return (
    <S.Container>
      <Input placeholder="Testing" icon={{ svg: CompassIcon, alt: 'Ícone de compasso' }} />
    </S.Container>
  );
}

export default Home;
