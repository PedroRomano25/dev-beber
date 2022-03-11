import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { CardDrinkProps } from "../../Types/allTypes";


const CardDrink: React.FC<CardDrinkProps> = (props) => {
  return (
    <>
      {props.value.map((i, index) => {
        return (
          <Link key={index} to="/verDrink">
            <Card sx={{ minWidth: "190px",maxWidth: "250px" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="230"
                  image={i.strDrinkThumb as string}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {i.strDrink}
                  </Typography>
                  {i.strAlcoholic}
                  <br />
                  {i.strCategory}
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        );
      })}
    </>
  );
};

export default CardDrink;
