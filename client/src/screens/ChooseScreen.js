import {
  Box,
  CardActionArea,
  CardContent,
  CardMedia,
  Fade,
  Typography,
  Card,
} from "@material-ui/core";
import Logo from "../components/Logo";
import { useStyles } from "../styles";

const ChooseScreen = () => {
  const styles = useStyles();
  return (
    <Fade in={true}>
      <Box className={[styles.root, styles.navy]}>
        <Box className={[styles.main, styles.center]}>
          <Logo large></Logo>
          <Typography
            variant='h3'
            component='h3'
            className={styles.center}
            gutterBottom
          >
            Where will you be eating today?
          </Typography>
          <Box className={styles.cards}>
            <Card className={[styles.cards, styles.space]}>
              <CardActionArea>
                <CardMedia
                  component='img'
                  alt='For Here'
                  image='/images/forHere.png'
                  className={styles.media}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h4'
                    component='p'
                    color='textPrimary'
                  >
                    For Here
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>

            <Card className={[styles.cards, styles.space]}>
              <CardActionArea>
                <CardMedia
                  component='img'
                  alt='To go'
                  image='/images/toGo.png'
                  className={styles.media}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h4'
                    component='p'
                    color='textPrimary'
                  >
                    To Go
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
        </Box>
      </Box>
    </Fade>
  );
};
export default ChooseScreen;
