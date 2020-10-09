import ItemBackground from 'assets/icon/item_back.png';
import FlowerBackground from 'assets/icon/flower_back.png';

const styles = theme => ({
  root: {
    display: 'inline-block',
    width: '18%',
    margin: '0.625rem 1%',
    outline: '0.125rem solid #2b323a'
  },
  container: {
    height: '100%',
    position: 'relative'
  },
  itemBody1: {
    backgroundImage: `url(${ItemBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    paddingTop: '1.875rem'
  },
  itemBody2: {
    backgroundImage: `url(${FlowerBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    paddingTop: '1.875rem'
  },
  itemWrapper: {
    marginBottom: '1.875rem'
  },
  itemWrapper1: {
    marginBottom: '1.875rem',
    borderRight: '0.0625rem solid #181a1e'
  },
  avatar: {
    margin: 10
  },
  headLogo: {
    marginLeft: '0.625rem'
  },
  headTitle: {
    fontSize: '0.75rem',
    color: 'white',
    textTransform: 'uppercase',
    margin: '0 0.625rem 0 0.375rem',
    padding: '0.375rem 0'
  },
  headTime: {
    fontSize: '0.75rem',
    color: '#50565a',
    textTransform: 'uppercase',
    margin: '0.375rem 0.625rem 0.375rem 0.625rem'
  },
  headRight: {
    backgroundColor: '#191e24'
  },
  bodyPart: {
    borderRight: '0.0625rem solid #181a1e'
  },
  footer: {
    fontSize: '0.75rem',
    color: '#82888c',
    margin: '0.625rem 0'
  },
  footerWrapper: {
    position: 'absolute',
    bottom: '-0.3125rem'
  },
  coinWrapper: {
    position: 'absolute',
    bottom: '1.25rem'
  },
  coinIcon: {
    marginRight: '0.3125rem'
  },
  edgeNumber: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '0.6875rem'
  }
});

export default styles;
