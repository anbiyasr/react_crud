import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Home1() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          ini ceritanya halaman utama
        </Typography>
        <Typography variant="h5" component="h2">
          Halaman
          {bull}
          pertama
          {bull}o{bull}
          Home
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          .
        </Typography>
        <Typography variant="body2" component="p">
          .
          <br />
          {'"klik start untuk masuk"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
            <Link to="/login">
            Start
            </Link>
            </Button>
      </CardActions>
    </Card>
  );
}