import { useStyles } from "../styles";

const Logo = (props) => {
  const styles = useStyles();
  return (
    <img
      src='/images/logo.png'
      alt='Food Order Logo'
      className={props.large ? styles.largeLogo : styles.logo}
    />
  );
};

export default Logo;
