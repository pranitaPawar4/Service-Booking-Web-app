import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import {  useSelector } from "react-redux/es/hooks/useSelector";
const MovieItem = ({ city, title, fees,description,posterUrl, id }) => {
  const isAdminLoggedIn = useSelector((state) => state.admin.isLoggedIn);
  const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn);
  return (
    <Card
      sx={{
        margin: 2,
        width: 270,
        height: 400,
        borderRadius: 5,
        ":hover": {
          boxShadow: "10px 10px 20px #ccc",
        },
      }}
    >
      <img height={"50%"} width="100%" src={posterUrl} alt={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Name: {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <span style={{ fontWeight: 'bold' }}>Fees: Rs {fees}</span> 
        </Typography>
        <Typography variant="body2" color="text.secondary">
          City: {city}
        </Typography>
      </CardContent>
      <CardActions>
        {!isAdminLoggedIn &&  <Button
          variant="contained"
          fullWidth
          LinkComponent={Link}    
         to={isUserLoggedIn?`/booking/${id}`:`/auth`}
          
          sx={{
            margin: "auto",
            bgcolor: "#2b2d42",
            ":hover": {
              bgcolor: "#121217",
            },
          }}
          size="small"
        >
          Book
        </Button>}
      </CardActions>
    </Card>
  );
};

export default MovieItem;