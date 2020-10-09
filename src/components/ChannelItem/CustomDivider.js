import styled from 'styled-components';

const CustomDivider = styled.div`
  display: block;
  width: 0.0625rem;
  height: 5rem;
  background-color: #2c3137;
  border-right: 0.125rem solid #1f232a;
  position: absolute;
  left: ${props => (props.leftPosition ? props.leftPosition : '')}%;
  right: ${props => (props.rightPosition ? props.rightPosition : '')}%;
  top: ${props => (props.topPosition ? props.topPosition : 0)}%;
  transform: ${props => (props.rotate ? `rotate(${props.rotate}deg)` : '')};
`;

export default CustomDivider;
