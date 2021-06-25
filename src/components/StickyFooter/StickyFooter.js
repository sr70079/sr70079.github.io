import React from 'react';
// import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Sarah Marshall
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
 
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">
          <a href="mailto:sr70079@gmail.com"><EmailIcon /></a>
          <a href="https://github.com/sr70079"> <GitHubIcon /></a>
          <a href="https://www.linkedin.com/in/sarah-marshall-47773978/"><LinkedInIcon /></a>
          </Typography>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}


// import React from "react";
// // import "./style.css";

// function Footer(props) {
//   return (
//     <footer className="footer fixed">
//     <div className="row">
//       <div className="col-lg-6">
//         <p className="text-center text-muted">
//          Copyright Sarah Marshall
//         </p>        
//       </div>
      
//       <div className="col-lg-6 p-2">
//         <a href="mailto:sr70079@gmail.com"> <i className="fas fa-envelope fa-lg"></i></a>
//         <a href="https://github.com/sr70079"> <i className="fab fa-github fa-lg"></i></a>
//         <a href="https://www.linkedin.com/in/sarah-marshall-47773978/"> <i className="fab fa-linkedin-in fa-lg"></i></a>
//         <a href="tel:+3364037330"> <i className="fas fa-mobile-alt fa-lg"></i></a>        
//       </div>
//     </div>    
//   </footer>
//   );
// }

// export default Footer;
