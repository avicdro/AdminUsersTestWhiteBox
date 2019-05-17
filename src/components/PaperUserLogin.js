import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Avatar from '@material-ui/core/Avatar'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 4,
  },
  imgPerfil: {
    maxWidth: '50%',
    maxHeigh: '50%',
  },
  dataContent: {
    display: 'grid',
    marginTop: '40px',
    gridTemplateColumns: '100px 1fr',
  }
  
});

 


function PaperUserLogin(props){
  const [dataUser,setDataUser] = useState({})
  const { classes } = props;
  
  setTimeout(() => {
    setDataUser({
      name: localStorage.getItem('nameUser'),
      email: localStorage.getItem('emailUser'),
      image: localStorage.getItem('imageUser'),
    })
  }, 1000)

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
      <Typography variant="title" component="h1">
        Your account information
      </Typography>
      <div className={classes.dataContent}>
        <Avatar   src={dataUser.image} className={classes.imgPerfil}/>
        <div>
          <Typography variant="title" component="h2">
            {dataUser.name}
          </Typography>
          <Typography component="p">
            {dataUser.email}
          </Typography>
        </div>
      </div>
      </Paper>
    </div>  
  );
}

PaperUserLogin.propTypes = {
  classes: PropTypes.object.isRequired,
}; 

export default withStyles(styles)(PaperUserLogin);
