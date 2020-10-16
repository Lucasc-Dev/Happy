import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import logoImg from '../../assets/images/Logo.svg';

import { 
  Container,
  Content,
  Image,
  TitleContainer,
  Location,
  Link,
} from './styles';

const LandingPage: React.FC = () => {
  return (
    <Container>
      <Content>
        <Image src={logoImg} />

        <TitleContainer>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </TitleContainer>

        <Location>
          <strong>Tatuí</strong>
          <span>São Paulo</span>
        </Location>

        <Link >
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </Link>
      </Content>
    </Container>
  );
};

export default LandingPage;
