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
  height: 40px;
  border-radius: 5px;
  padding: 0 15px;
  background: #eee;
  border: 1px solid #ddd;
  font-size: 18px;
`;

export const SubmitButton = styled.TouchableOpacity`
  padding: 0 20px;
  justify-content: center;
  align-items: center;
  background: #111;
  border-radius: 5px;
  margin-left: 5px;
  opacity: ${props => (props.loading ? 0.7 : 1)};
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const User = styled.View`
  align-items: center;
  margin: 0 10px 30px;

  padding: 10px;
  border-radius: 5px;
`;

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  margin-top: 10px;
  background: #fff;
  border-radius: 32px;
`;

export const Name = styled.Text`
  font-size: 18px;
  font-weight: bold;
  align-items: center;
  margin-top: 5px;
`;

export const Bio = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 14px;
  color: #999;
  align-items: center;
  margin: 10px 0;
  text-align: center;
`;

export const ProfileButton = styled.TouchableOpacity`
  padding: 15px;
  align-items: center;
  justify-content: center;
  align-self: stretch;
  margin-top: 5px;
  border-radius: 5px;
  background: #000;
`;

export const TextButton = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #fff;
`;
