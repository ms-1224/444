import React from "react";
import { makeStyles } from "@bit/mui-org.material-ui.styles";
import Card from "@bit/mui-org.material-ui.card";
import CardActionArea from "@bit/mui-org.material-ui.card-action-area";
import CardActions from "@bit/mui-org.material-ui.card-actions";
import CardContent from "@bit/mui-org.material-ui.card-content";
import CardMedia from "@bit/mui-org.material-ui.card-media";
import Button from "@bit/mui-org.material-ui.button";
import Typography from "@bit/mui-org.material-ui.typography";

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
});

export default function Item({ el }) {
  const c = useStyles();

  return (
    <Card className={c.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={`http://localhost:1337${el.classimg[0].url}`}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {el.classname}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          <b> Instructor: {el.Instructor}</b>
            <br/>
            Academic Leaders: {el.ALsName}
            <br />
            From {el.startDate} to {el.endDate}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
