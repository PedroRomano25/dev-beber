import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { CardDrinkProps } from "../../Types/allTypes";
import styles from './Card.module.scss'
import ReactCardFlip from 'react-card-flip';
import { styleCard } from "../../Data/allDatas";


const CardDrink: React.FC<CardDrinkProps> = (props) => {
  const [Flip, setFlip] = useState<boolean[]>([false])
  const changeFlip = (Flip: boolean[], index: number, check: boolean) => {
    Flip[index] = check
    setFlip([...Flip])
  }



  return (
    <>
      {props.value.map((i, index) => {
        return (
          <ReactCardFlip isFlipped={!!Flip[index]} key={index}>
            <Card sx={styleCard} onClick={() => changeFlip(Flip, index, true)}>
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
                  <br />
                  {i.strGlass}
                </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={styleCard} onClick={() => changeFlip(Flip, index, false)}>
              <CardActionArea>
                <div className={styles.flipCardContent}>
                  <span>{i.strIngredient1}</span> <span> {i.strMeasure1}</span>
                  <span>{i.strIngredient2}</span> <span> {i.strMeasure2}</span>
                  <span>{i.strIngredient3}</span> <span> {i.strMeasure3}</span>
                  <span>{i.strIngredient4}</span> <span> {i.strMeasure4}</span>
                  <span>{i.strIngredient5}</span> <span> {i.strMeasure5}</span>
                  <span>{i.strIngredient6}</span> <span> {i.strMeasure6}</span>
                  <span>{i.strIngredient7}</span> <span> {i.strMeasure7}</span>
                  <span>{i.strIngredient8}</span> <span> {i.strMeasure8}</span>
                  <span>{i.strIngredient9}</span> <span> {i.strMeasure9}</span>
                  <span>{i.strIngredient10}</span> <span> {i.strMeasure10}</span>
                  <span>{i.strIngredient11}</span> <span> {i.strMeasure11}</span>
                  <span>{i.strIngredient12}</span> <span> {i.strMeasure12}</span>
                  <span>{i.strIngredient13}</span> <span> {i.strMeasure13}</span>
                  <span>{i.strIngredient14}</span> <span> {i.strMeasure14}</span>
                  <span>{i.strIngredient15}</span> <span> {i.strMeasure15}</span>
                </div>


              </CardActionArea>
            </Card>
          </ReactCardFlip>

        );
      })}
    </>
  );
};

export default CardDrink;
