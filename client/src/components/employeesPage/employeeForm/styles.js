import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },

  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 10,
    boxShadow: '0px 0px 25px 0px rgba(0, 0, 0, .7)',
  },

  title: {
    margin: 5,
  },

  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },

  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
    padding: 10,
    borderColor: theme.palette.action.disabled
  },

  submitButton: {
    margin: 5,
    marginBottom: 10,
    width: '90%',
  },

  clearButton: {
    margin: 5,
    marginBottom: 15,
    width: '90%',
  },

}));