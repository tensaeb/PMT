import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { verify } from "../actions/verify";

import { Container, Paper, Typography } from "@material-ui/core";
import { Button } from "react-scroll";

const Activate = ({ verify, match }) => {
  const [verified, setVerified] = useState(false);

  const verifyAccount = (e) => {
    const token = match.params.token;
    verify(token);
    setVerified(true);
  };

  if (verified) {
    return <Redirect to="/home" />;
  }

  return (
    <Container>
      <Paper elevation={3} m={4}>
        <Typography variant="h1">Verify Your Account</Typography>
        <Button onClick={verifyAccount} color="primary" variant="contained">
          Verify
        </Button>
      </Paper>
    </Container>
  );
};

export default connect(null, { verify })(Activate);
