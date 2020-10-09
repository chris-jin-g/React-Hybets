import styled from 'styled-components';

const CustomButton = styled.button`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
  background-color: ${props =>
    props.backgroundcolor ? props.backgroundcolor : ''};
  color: ${props => (props.color ? props.color : '')};
  border: none;
  border-radius: 0.19rem;
  outline: none;
  cursor: pointer;
  margin: 0 0.625rem;
  padding: 0 1.25rem;
  &:hover,
  &:active,
  &: focus {
    background-color: ${props =>
      props.backgroundcolor ? props.backgroundcolor : ''};
    color: '#aab2b6';
  }
  &: hover {
    background-color: ${props => (props.hovercolor ? props.hovercolor : '')};
  }
`;

export default CustomButton;
