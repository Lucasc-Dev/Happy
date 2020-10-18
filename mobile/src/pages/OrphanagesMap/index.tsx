import React, { useCallback, useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import api from '../../services/api';

import mapMarker from '../../assets/map-marker.png';

import { 
  Container,
  Map,
  CalloutContainer,
  CalloutText,
  Footer,
  FooterText,
  CreateOrphanage,
} from './styles';

interface Orphanage {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
}

const OrphanagesMap: React.FC = () => {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);
  const navigation = useNavigation();

  useFocusEffect(() => {
    api.get('orphanages').then(response => {
      const orphanages = response.data.map((orphanage: Orphanage) => ({
        id: orphanage.id,
        name: orphanage.name,
        latitude: Number(orphanage.latitude),
        longitude: Number(orphanage.longitude)
      }));

      setOrphanages(orphanages);
    });
  });

  const handleNavigateToOrphanageDetails = useCallback((id: string) => {
    navigation.navigate('OrphanageDetails', { id });
  }, []);

  const handleNavigateToCreateOrphanage = useCallback(() => {
    navigation.navigate('SelectMapPosition');
  }, []);

  return (
    <Container>
      <Map
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: -23.354972,
          longitude: -47.8526106,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }} 
      >
        {orphanages.map(orphanage => (
          <Marker 
            key={orphanage.id}
            icon={mapMarker}
            calloutAnchor={{
              x: 2.7,
              y: 0.8,
            }}
            coordinate={{
              latitude: orphanage.latitude,
              longitude: orphanage.longitude,
            }}
          >
            <Callout tooltip={true} onPress={() => handleNavigateToOrphanageDetails(orphanage.id)}>
              <CalloutContainer style={{paddingHorizontal: 16}} >
                <CalloutText>{orphanage.name}</CalloutText>
              </CalloutContainer>
            </Callout>
          </Marker>
        ))}
      </Map>

      <Footer style={{ elevation: 3 }}>
        <FooterText>{orphanages.length} orfanatos encontrados</FooterText>

        <CreateOrphanage onPress={handleNavigateToCreateOrphanage}>
            <Feather name="plus" size={20} color="#FFF" />
        </CreateOrphanage>
      </Footer>
    </Container>
  );
};

export default OrphanagesMap;
