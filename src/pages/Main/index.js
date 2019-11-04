import React, { useState, useEffect } from 'react';
import { Keyboard } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';

import {
  Container,
  Form,
  Input,
  SubmitButton,
  List,
  User,
  Avatar,
  Name,
  Bio,
  ProfileButton,
  TextButton,
} from './styles';

export default function Main() {
  const [user, setUser] = useState('');
  const [users, setUsers] = useState([]);

  async function findUser() {
    const response = await api.get(`/${user}`);

    const data = {
      name: response.data.name,
      login: response.data.login,
      bio: response.data.bio,
      avatar: response.data.avatar_url,
    };

    setUsers([...users, data]);
    setUser('');

    Keyboard.dismiss();
  }

  return (
    <Container>
      <Form>
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Buscar Usuário"
          value={user}
          onChangeText={text => setUser(text)}
          returnKeyType="send"
          onSubmitEditing={findUser}
        />
        <SubmitButton onPress={findUser}>
          <Icon name="add" size={20} color="#fff" />
        </SubmitButton>
      </Form>

      <List
        data={users}
        keyExtractor={item => item.login}
        renderItem={({ item }) => (
          <User>
            <Avatar source={{ uri: item.avatar }} />
            <Name>{item.name}</Name>
            <Bio>{item.bio}</Bio>
            <ProfileButton onPress={() => {}}>
              <Icon name="add" size={20} color="#fff" />
              <TextButton>Visualizar perfil</TextButton>
            </ProfileButton>
          </User>
        )}
      />
    </Container>
  );
}

Main.navigationOptions = {
  title: 'Rockethub',
};
