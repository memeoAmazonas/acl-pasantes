import Container from '@material-ui/core/Container';
import styled from 'styled-components';

/* const CustomCard = styled(Card)((props) => (`
    &.MuiCard-root {
      align-items: center;
      display: ${props.display || 'block'};
      flex-direction: column;
      height: ${props.height || 'inherit'};
      max-height: ${props.maxheight || 'inherit'};
      justify-content: center;
      padding: ${props.padding || '0'};
      width: ${props.width || 'inherit'};
      max-width:${props.maxwidth || 'inherit'};
      margin-right: ${props.marginr || '0'};
      margin-left: ${props.marginl || '0'};
      margin-top: ${props.margint || '0'};
      margin-bottom: ${props.marginb || '0'};
    }
  `));
export default CustomCard; */

// sobrescribir class component
// .MuiContainer-root
const CustomContainer = styled(Container)((props) => (`
&.MuiContainer-root {
  border: 1px ${props.bg} solid;
  min-height: 500px;
}
`));

export default CustomContainer;

/*
const RootContainer = styled(Container)`
  &.MuiContainer-root {
  min-height: calc( 100vh - 64px);
  padding-right: ${(props) => (props.padding ? props.padding : '0')};
  padding-left: ${(props) => (props.padding ? props.padding : '0')};
  background-color: ${theme.palette.grey1};
  }
`;
 */
