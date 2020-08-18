import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    marginRight: "auto",
    marginLeft: "auto",
    width: "40%",
    marginTop: 150,
    display: "flex",
    justifyContent: "space-between"
  },
  button: {
    width: 180,
    height: 180,
    borderRadius: 130
  }
});

const Navigation = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Link to="/signup">
        <Button variant="contained" color="primary" className={classes.button}>
          Sign Up
        </Button>
      </Link>
      <Link to="/signin">
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          Sign In
        </Button>
      </Link>
    </div>
  );
};
export default withStyles(styles)(Navigation);
