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
    console.log("googleUser:", googleUser);

    // Reed's code, but Google APIs changed the structure of its returned user
    //const idToken = googleUser.getAuthResponse().id_Token;
    const idToken = googleUser.tokenId;

    if (!idToken) {
      console.log("idToken is null");
    }
    console.log("idToken:", idToken);

    const endpoint = 'http://localhost:4000/graphql';
    const client = new GraphQLClient(endpoint, {
      mode: 'cors',
      headers: { authorization: idToken }
    });
    console.log("client:", client);

    try {
      const data = await client.request(ME_QUERY);
      console.log({ data });
      //console.log(JSON.stringify(data, undefined, 2));
    }
    catch (err) {
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
