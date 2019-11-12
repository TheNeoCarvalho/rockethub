import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const Header = styled.View`
  background: #fff;
  border-radius: 5px;
  align-items: center;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #eee;
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  margin-top: 10px;
  border-radius: 50px;
  background: #eee;
`;

export const Name = styled.Text`
  font-weight: bold;
  font-size: 18px;
  margin-top: 10px;
  text-align: center;
  color: #333;
`;

export const Bio = styled.Text`
  font-size: 14px;
  line-height: 15px;
  margin-top: 5px;
  text-align: center;
  color: #999;
`;

export const Stars = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const Starred = styled.View`
  background: #eee;
  padding: 10px 15px;
  border-radius: 5px;
  margin-bottom: 10px;
  flex-direction: row;
  align-items: center;
`;

export const OwnerAvatar = styled.Image`
  width: 42px;
  height: 42px;
  border-radius: 21px;
  background: #fff;
`;

export const Info = styled.View`
  margin-left: 10px;
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #666;
`;

export const Author = styled.Text`
  font-size: 13px;
  color: #666;
  margin-top: 1px;
`;
