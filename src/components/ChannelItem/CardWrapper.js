import styled from 'styled-components';
import media from 'lib/MediaQuery';

const CardWrapper = styled.div`
  display: inline-block;
  width: 18%;
  margin: 0.625rem 1%;
  outline: 0.125rem solid #2b323a;
  ${media.desktop`
    width: 23%;
    margin: 0.625rem 1%;
  `}
  ${media.laptop`
    width: 31.333%;
    margin: 0.625rem 1%;
  `}
  ${media.tablet`
    width: 48%;
    margin: 0.625rem 1%;
  `}
  ${media.phone`
    width: 98%;
    margin: 0.625rem 1%;
  `}
`;

export default CardWrapper;
