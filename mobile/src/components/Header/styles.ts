import { BorderlessButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
    padding: 24px;
    background-color: #f9fafc;
    border-bottom-width: 1;
    border-color: #ddedf0;
    padding-top: 44px;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const HeaderText = styled.Text`
    font-family: 'Nunito_600SemiBold';
    color: #8fa7b3;
    font-size: 16px;
`;

export const Button = styled(BorderlessButton)`
    
`;