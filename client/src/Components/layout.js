import styled from 'styled-components';

const DesktopWrapper = styled.div`
  @media (max-width: 767px) {
    display: none;
   
  }
`;

const MobileWrapper = styled.div`
  @media (min-width: 768px) {
    
    display: none;
  }
`;

const TextWeb = styled(Text)`
  @media (max-width: 767px) {
    display: none;
  }
`;

const TextMobile = styled(Text)`
  @media (min-width: 768px) {
    display: none;
  }
`;

const Separator = styled('div')`
    height: ${props => (props.height ? `${props.height}px` : `20px`)}
`;

export {
    DesktopWrapper,
    MobileWrapper,
    TextWeb,
    TextMobile,
    Separator,
};