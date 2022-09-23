import React, {useState} from 'react';
import {ActivityIndicator} from 'react-native';
import api from '../../services/api';

import {
  Avatar,
  Bio,
  BtnFindUser,
  BtnTextFindUser,
  Container,
  InputUser,
  Title,
  User,
  UserInfo,
  Username,
  UserNotFound,
  UserNotFoundText,
} from './styles';

export function Home({navigation}) {
  const [user, setUser] = useState(null);
  const [inputUser, setInputUser] = useState('');
  const [msgError, setMsgError] = useState('');

  const [loading, setLoading] = useState(false);

  async function getUserFromGithub() {
    try {
      setLoading(true);
      const response = await api.get(`/users/${inputUser}`);

      setUser(response.data);
      setLoading(false);
      setInputUser('');
      setMsgError('');
    } catch (error) {
      setLoading(false);
      setUser(null);
      setMsgError(error.response.data.message);
    }
  }

  const handleNavigateToRepositories = username => {
    navigation.navigate('Repositories', {
      username,
    });
  };

  return (
    <Container>
      <Title>Type username</Title>

      <InputUser onChangeText={setInputUser} value={inputUser} />

      <BtnFindUser onPress={() => getUserFromGithub()}>
        {loading ? (
          <ActivityIndicator color="white" />
        ) : (
          <BtnTextFindUser>Search</BtnTextFindUser>
        )}
      </BtnFindUser>

      {user && (
        <User onPress={() => handleNavigateToRepositories(user.login)}>
          <Avatar
            source={{
              uri: user.avatar_url,
            }}
          />
          <UserInfo>
            <Username>{user.login}</Username>
            <Bio>{user.bio}</Bio>
          </UserInfo>
        </User>
      )}

      {msgError.length >= 1 && (
        <UserNotFound>
          <UserNotFoundText>
            We don't find this user. Try again.
          </UserNotFoundText>
        </UserNotFound>
      )}
    </Container>
  );
}
