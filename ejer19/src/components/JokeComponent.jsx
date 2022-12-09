import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { getRandomJoke } from "../services/axiosServices";
import ThumbUpRoundedIcon from "@mui/icons-material/ThumbUpRounded";
import ThumbDownAltRoundedIcon from "@mui/icons-material/ThumbDownAltRounded";
import Button from "@mui/material/Button";
import { red, grey } from "@mui/material/colors";
import "../index.css";

const JokeComponent = () => {
  const [joke, setJoke] = useState({});
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  const [temp, setTemp] = useState(false);
  useEffect(() => {
    obtainJoke();
  }, []);
  const obtainJoke = () => {
    getRandomJoke()
      .then((response) => {
        setJoke(response.data);
        console.log(response.data, response.data.icon_url);
      })
      .catch((error) => {
        console.log(`error to response data, error,${error}`);
      });
    // setTemp(false);
  };
  function addLike(a) {
    if(temp ===false){
        if (a){
            setLike(like + 1);
            setTemp(true)
        }
        else {
            console.log(temp)
            setDislike(dislike + 1);
            setTemp(true)
        }
    }else{
        if(a){
            setLike(like-1)
            setTemp(false)
        }else{
            setDislike(dislike-1)
            setTemp(false)
        }
    } 
  }
  
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image="https://i.pinimg.com/564x/54/f0/4c/54f04ccbf8c700e9a7b7c7e45cc6d1dd.jpg"
          alt="Chuck Norris"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {joke.category ? joke.category : "diverse"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {joke.value}
          </Typography>
          <div className="box_Joke">
            <div onClick={() => addLike(true)} className="box_Joke">
              <ThumbUpRoundedIcon className="" sx={{ color: red[500] }} />
              {like}
            </div>
            <Button onClick={() => obtainJoke()} variant="contained">
              Next
            </Button>
            <div onClick={() => addLike(false)}>
              <ThumbDownAltRoundedIcon sx={{ color: grey[500] }} />
              {dislike}
            </div>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default JokeComponent;
