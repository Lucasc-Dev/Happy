import React, { useCallback } from 'react';
import { Feather } from '@expo/vector-icons';
import { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';

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

const OrphanagesMap: React.FC = () => {
  const navigation = useNavigation();

  const handleNavigateToOrphanageDetails = useCallback(() => {
    navigation.navigate('OrphanageDetails');
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
        <Marker 
          icon={mapMarker}
          calloutAnchor={{
            x: 2.7,
            y: 0.8,
          }}
          coordinate={{
            latitude: -23.354972,
            longitude: -47.8526106,
          }}
        >
          <Callout tooltip={true} onPress={handleNavigateToOrphanageDetails}>
            <CalloutContainer style={{paddingHorizontal: 16}} >
              <CalloutText>Lar das crianaças</CalloutText>
            </CalloutContainer>
          </Callout>
        </Marker>
      </Map>

      <Footer style={{ elevation: 3 }}>
        <FooterText>2 orfanatos encontrados</FooterText>

        <CreateOrphanage onPress={() => {}}>
            <Feather name="plus" size={20} color="#FFF" />
        </CreateOrphanage>
      </Footer>
    </Container>
  );
};

export default OrphanagesMap;
