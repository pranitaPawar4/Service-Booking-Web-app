import { Box, Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import MovieItem from './Movies/MovieItem'
import { Link } from 'react-router-dom'
import { getAllMovies } from '../api-helpers/api-helpers'

const HomePage = () => {
    const [movies,setMovies]=useState([]);
    useEffect(()=>{
        getAllMovies().then((data)=>{setMovies(data.movies)
        console.log(data)}).catch(err=>console.log(err))
    },[])
  return (
    <div>
        <Box width={"100%"} height={"100%"} margin="auto" marginTop={4}>
            <Box width={"70%"} height={"40vh"} margin="auto" padding={2}>
                <img 
                    src='https://www.bookingpressplugin.com/wp-content/uploads/2023/04/bpa-sl-your-salon-website-banner.webp'
                    alt="Shershah"
                    width={"100%"}
                    height={"100%"}
                />
            </Box>
            <Box padding={2}>
                <Typography variant="h5" textAlign={"center" }>Top Services </Typography>
            </Box>
            <Box display="flex"
                width="80%"
                margin={"auto"}
                justifyContent="center"
                flexWrap={"wrap"}
            >
               { movies && movies.slice(0,4).map((movie,index)=> <MovieItem id={movie._id} title={movie.title} posterUrl={movie.posterUrl} fees={movie.seatRow} city={movie.language}  description={movie.description} key={index}/>)}
            </Box>
            <Box display={"flex"} padding={5} margin="auto">
                < Button LinkComponent={Link} to="/services" variant="outlined" sx={{margin:'auto',color:"#2b2b42"}}  > View All Services</Button>
            </Box>
        </Box>
    </div>
  )
}

export default HomePage