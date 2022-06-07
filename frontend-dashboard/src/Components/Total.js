import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";

const useStyles = makeStyles({
  totalContext: {
    flex: 1
  }
});

export default function Total() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Total Countries</Title>
      <Typography component="p" variant="h4">
        263
      </Typography>
      <Typography color="textSecondary" className={classes.totalContext}>
        from year 1960 to 2017
      </Typography>

    </React.Fragment>
  );
}
