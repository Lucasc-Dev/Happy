import React, { useCallback } from 'react';
import { Feather } from '@expo/vector-icons';

import { 
  Container,
  HeaderText,
  Button,
} from './styles';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';

interface HeaderProps {
  title: string;
  showCancel?: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, showCancel = true }) => {
  const { navigate, goBack } = useNavigation();

  const handleGoBackToStart = useCallback(() => {
    navigate('OrphanagesMap');
  }, []);

  return (
    <Container>
      <Button onPress={goBack}>
        <Feather name="arrow-left" size={24} color="#15b6d6" />
      </Button>

      <HeaderText>{title}</HeaderText>

      { showCancel ? (
        <Button onPress={handleGoBackToStart}>
          <Feather name="x" size={24} color="#ff669d" />
        </Button>
      ) : (
        <View />
      ) }
    </Container>
  );
};

export default Header;
