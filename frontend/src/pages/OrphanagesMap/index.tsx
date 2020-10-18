import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiPlus } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Leaflet from 'leaflet';

import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../../assets/icons/MapMarker.svg';

import { 
  Container,
  SideBar,
  LinkButton,
} from './styles';

const OrphanagesMap: React.FC = () => {
  const mapIcon = Leaflet.icon({
    iconUrl: mapMarkerImg,  

    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2],
  });

  return (
    <Container>
      <SideBar>
        <header>
          <img src={mapMarkerImg} alt="Happy" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Tatuí</strong>
          <span>São Paulo</span>
        </footer>
      </SideBar>

      <Map 
        center={[-23.3546962, -47.8518381]}
        zoom={15}
        style={{ width: '100%', height: '100%', zIndex: 5 }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} 
        />

        <Marker 
          icon={mapIcon}
          position={[-23.3546962, -47.8518381]}
        >
          <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup" >
            Lar das meninas
            <Link to="">
              <FiArrowRight size={20} color="#FFF" />
            </Link>
          </Popup>
        </Marker>
      </Map>

      <LinkButton to="" >
        <FiPlus size={32} color="#FFF" />
      </LinkButton>
    </Container>
  );
};

export default OrphanagesMap;
