import styled from 'styled-components';

const NavbarHeader = styled.div`
  display: flex;
  align-items: center;
  background-color: #20262d;
  border: 0.125rem solid #2c333a;
  border-radius: 0.19rem;
  height: 2.5rem;
  margin: 0 0.625rem;
  padding: 0 0.625rem;
  &:hover,
  &:active,
  &: focus {
    background-color: ${props =>
      props.backgroundcolor ? props.backgroundcolor : ''};
    color: ${props => (props.color ? props.color : '')};
  }
  &: hover {

  }
`;

export default NavbarHeader;
