import styled from 'styled-components';

const EdgeAvatar = styled.img`
  position: absolute;
  top: ${props => (props.position ? props.position : '-5')}%;
  left: ${props => (props.position ? props.position : '-5')}%;
  width: 40%;
  border-radius: 50%;
`;

export default EdgeAvatar;
