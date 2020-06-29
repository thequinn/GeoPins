import React from "react";
import { GraphQLClient }  from 'graphql-request';
import { GoogleLogin } from 'react-google-login';

import { withStyles } from "@material-ui/core/styles";
// import Typography from "@material-ui/core/Typography";

const ME_QUERY = `
{
  me {
  	_id
    name
    email
    picture
  }
}
`;

const Login = ({ classes }) => {

  const onSuccess = async googleUser => {
    const idToken = googleUser.getAuthResponse().id_Token;

    const client = new GraphQLClient('http://localhost/4000/graphql', {
      headers: { authorization: idToken }
    });

    try {
      await client.request(ME_QUERY);
    } catch (err) {
      console.error(`(ln-31, Login.js) ${err}`);
    }
  };

  return <GoogleLogin
    clientId="120459532094-5brqr70nqhvof64jpkkif7rru776qsfs.apps.googleusercontent.com"
    onSuccess={onSuccess}
    isSignedIn={true}
  />;
};

const styles = {
  root: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center"
  }
};

export default withStyles(styles)(Login);
