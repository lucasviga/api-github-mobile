import React, {useEffect, useState} from 'react';
import {ActivityIndicator} from 'react-native';
import api from '../../services/api';

import {
  Avatar,
  Bio,
  BtnFindUser,
  BtnTextFindUser,
  Container,
  Description,
  InputUser,
  ListRepos,
  Reponame,
  Repository,
  Title,
  User,
  UserInfo,
  Username,
  UserNotFound,
  UserNotFoundText,
  UsersFound,
} from './styles';

export function Repositories({route}) {
  const [repos, setRepos] = useState(null);
  const [loading, setLoading] = useState(false);

  const {username} = route.params;

  useEffect(() => {
    async function loadReposFromGithub() {
      try {
        setLoading(true);
        const response = await api.get(`/users/${username}/repos`);

        setRepos(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    loadReposFromGithub();
  }, []);

  function RenderRepoItem({item}) {
    return (
      <Repository>
        <Reponame>{item.name}</Reponame>
        <Description>{item.description}</Description>
      </Repository>
    );
  }

  return (
    <Container>
      <Title>Repositories of lucasviga</Title>

      {loading ? (
        <ActivityIndicator color="#1f87c3" />
      ) : (
        <ListRepos
          data={repos}
          renderItem={RenderRepoItem}
          keyExtractor={repo => repo.id}
        />
      )}
    </Container>
  );
}
