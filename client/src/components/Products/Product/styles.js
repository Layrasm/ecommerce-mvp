import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    maxWidth: '100%',
  },
  media: {
    height: 0,
    paddingTop: '55%'
  },
  cardActions: {
    display: 'flex',
    justiftyContent: 'flex-end'
  },
  cardContent: {
    display: 'flex',
    justiftyContent: 'space-between'
  },

}));