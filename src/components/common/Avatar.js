import styled from 'styled-components';

const Avatar = styled.img`
  width: ${props => (props.width ? props.width : '80')}%;
  border-radius: 50%;
`;

export default Avatar;
