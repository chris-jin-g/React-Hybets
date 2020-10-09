import styled from 'styled-components';

const AvatarContainer = styled.div`
  position: relative;
  margin: ${props => (props.margin ? props.margin : '0.9375rem auto')};
  display: flex;
  width: 70%;
  justify-content: center;
  align-items: center;
`;

export default AvatarContainer;
