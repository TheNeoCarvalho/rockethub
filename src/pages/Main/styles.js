import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const Form = styled.View`
  flex-direction: row;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #ddd;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#666',
})`
  flex: 1;
  height: 60px;
  border-radius: 5px;
  padding: 015px
  background: #eee;
  border: 1px solid #ddd;
  font-size: 18px
`;

export const SubmitButton = styled.TouchableOpacity`
  padding: 0 20px;
  justify-content: center;
  align-items: center;
  background: #111;
  border-radius: 5px;
  margin-left: 5px;
`;

export const List = styled.FlatList``;

export const Avatar = styled.Image``;

export const User = styled.Text``;

export const Name = styled.Text``;

export const Bio = styled.Text``;

export const ProfileButton = styled.TouchableOpacity``;

export const TextButton = styled.Text``;
