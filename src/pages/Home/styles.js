import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: #fbfbfb;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: #1f87c3;
  margin-bottom: 5px;
`;

export const InputUser = styled.TextInput`
  padding: 10px;
  border: 1px solid #d3d5f9;
  border-radius: 8px;
`;

export const BtnFindUser = styled.TouchableOpacity`
  background: #1f87c3;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 8px;
  margin: 10px 0;
  height: 50px;
`;

export const BtnTextFindUser = styled.Text`
  color: #ffffff;
  font-size: 16px;
`;

export const UsersFound = styled.View``;

export const UserNotFound = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
`;

export const UserNotFoundText = styled.Text`
  color: #999;
`;

export const User = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  height: 120px;
  border-radius: 8px;
`;

export const UserInfo = styled.View`
  margin-left: 10px;
  flex: 1;
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export const Username = styled.Text`
  color: #1f87c3;
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 2px;
`;

export const Bio = styled.Text`
  color: #999;
`;
