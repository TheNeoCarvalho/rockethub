import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Keyboard, ActivityIndicator } from 'react-native';
import Asyncstarage from '@react-native-community/async-storage';
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

export default function Main({ navigation }) {
  const [user, setUser] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    async function loadUsers() {
      const us = await Asyncstarage.getItem('users');
      if (us) {
        setUsers(JSON.parse(us));
      }
    }
    loadUsers();
  }, [users]);

  function handleNavite(user) {
    navigation.navigate('User', { user });
  }

  async function findUser() {
    setloading(true);
    const response = await api.get(`/${user}`);

    const data = {
      name: response.data.name,
      login: response.data.login,
      bio: response.data.bio,
      avatar: response.data.avatar_url,
    };

    Asyncstarage.setItem('users', JSON.stringify([...users, data]));
    setUsers([...users, data]);
    setUser('');
    setloading(false);

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
        <SubmitButton loading={loading} onPress={findUser}>
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Icon name="person-add" size={20} color="#fff" />
          )}
        </SubmitButton>
      </Form>

      <List
        data={users}
        keyExtractor={item => item.name}
        renderItem={({ item }) => {
          return (
            <User>
              <Avatar source={{ uri: item.avatar }} />
              <Name>{item.name}</Name>
              <Bio>{item.bio}</Bio>
              <ProfileButton onPress={() => handleNavite(item)}>
                <TextButton>Visualizar perfil</TextButton>
              </ProfileButton>
            </User>
          );
        }}
      />
    </Container>
  );
}

Main.navigationOptions = {
  title: 'Rockethub',
};
