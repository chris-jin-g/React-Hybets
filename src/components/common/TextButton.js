import styled from 'styled-components';

const TextButton = styled.div`
  display: flex;
  align-items: center;
  color: ${props => (props.color ? props.color : '')};
  cursor: pointer;
  &: hover {
    transform: scale(1.05);
  }
`;

export default TextButton;
