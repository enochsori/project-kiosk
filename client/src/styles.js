import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  // Global styles
  root: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  column: { flexDirection: "column" },
  main: {
    flex: 1,
    overflow: "auto",
    flexDirection: "column",
    display: "flex",
    color: "#ffffff",
  },
  navy: {
    backgroundColor: "#003080",
  },
  green: {
    backgroundColor: "#00b020",
  },
  footer: {},
  red: {
    backgroundColor: "#ff2040",
    color: "#ffffff",
  },

  logo: {
    height: 50,
  },
  largeLogo: {
    height: 100,
  },
  cards: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    margin: 10,
  },
  space: {
    padding: 10,
  },
  media: {
    width: 200,
  },
}));
