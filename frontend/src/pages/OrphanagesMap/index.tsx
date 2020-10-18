import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiPlus } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import mapIcon from '../../utils/mapIcon';
import api from '../../services/api';

import mapMarkerImg from '../../assets/icons/MapMarker.svg';

import { 
  Container,
  SideBar,
  LinkButton,
} from './styles';

interface Orphanage {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: boolean;
  images: {
    url: string;
  }
}

const OrphanagesMap: React.FC = () => {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  useEffect(() => {
    api.get('orphanages').then(response => {
      const orphanages = response.data;

      setOrphanages(orphanages);
    });
  }, []);

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

        {
          orphanages.map(orphanage => (
            <Marker 
              key={orphanage.id}
              icon={mapIcon}
              position={[orphanage.latitude, orphanage.longitude]}
            >
              <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup" >
                {orphanage.name}
                <Link to={`/orphanages/${orphanage.id}`}>
                  <FiArrowRight size={20} color="#FFF" />
                </Link>
              </Popup>
            </Marker>
          ))
        }

      </Map>

      <LinkButton to="/orphanages/create" >
        <FiPlus size={32} color="#FFF" />
      </LinkButton>
    </Container>
  );
};

export default OrphanagesMap;
