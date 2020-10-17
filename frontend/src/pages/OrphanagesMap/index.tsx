import React from 'react';
import { FiPlus } from 'react-icons/fi';

import mapMarketImg from '../../assets/icons/MapMarker.svg';

import { 
  Container,
  SideBar,
  Map,
  LinkButton,
} from './styles';

const OrphanagesMap: React.FC = () => {
  return (
    <Container>
      <SideBar>
        <header>
          <img src={mapMarketImg} alt="Happy" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Tatuí</strong>
          <span>São Paulo</span>
        </footer>
      </SideBar>

      <Map></Map>

      <LinkButton to="a" >
        <FiPlus size={32} color="#FFF" />
      </LinkButton>
    </Container>
  );
};

export default OrphanagesMap;
