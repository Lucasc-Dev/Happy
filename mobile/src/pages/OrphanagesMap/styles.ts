import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import MapView from 'react-native-maps';

export const Container = styled.View`
    flex: 1;
    background-color: #fff;
    align-items: center;
    justify-content: center;
`;

export const Map = styled(MapView)`
    width: ${Dimensions.get('window').width};
    height: ${Dimensions.get('window').height};
`;

export const CalloutContainer = styled.View`
    width: 160px;
    height: 56px;
    background-color: rgba(255,255,255,0.8);
    border-radius: 16px;
    justify-content: center;
`;

export const CalloutText = styled.Text`
    font-family: 'Nunito_700Bold';
    color: #0089a5;
    font-size: 14px;
`;

export const Footer = styled.View`
    position: absolute;
    left: 24px;
    right: 24px;
    bottom: 32px;

    background-color: #FFF;
    border-radius: 20px;
    height: 56px;
    padding-left: 24px;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const FooterText = styled.Text`
    font-family: 'Nunito_700Bold';
    color: #8fa7b3;
`;

export const CreateOrphanage = styled.TouchableOpacity`
    width: 56px;
    height: 56px;
    background-color: #15c3d6;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
`;
