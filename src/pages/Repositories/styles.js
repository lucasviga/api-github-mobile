import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: #f6f6f6;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: #1f87c3;
  margin-bottom: 5px;
`;

export const ListRepos = styled.FlatList``;

export const Repository = styled.View`
  background-color: #ffffff;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 15px;
`;

export const Reponame = styled.Text`
  color: #1f87c3;
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 2px;
`;

export const Description = styled.Text`
  color: #999;
`;
