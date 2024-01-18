import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

import {
  Container,
  ContentHeader,
  ContentBody,
  Title,
  Description,
  ViewButton,
  ContentFooter
} from './styles';

const Login: React.FC = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <Container>
          <ContentHeader>
            <Title>Seja bem vindo(a) {"\n"} a App Carteira</Title>

            <Description>Entrar com redes sociais</Description>

            <ViewButton></ViewButton>
          </ContentHeader>

          <ContentBody>

          </ContentBody>

          <ContentFooter>

          </ContentFooter>
        </Container>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    marginTop: "5%",
  },
});

export { Login };
