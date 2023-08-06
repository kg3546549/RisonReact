import {Typography,Button, Box, IconButton, Tooltip, MenuItem,Menu, Paper,   } from '@mui/material'

import { ClassNames } from '@emotion/react';

//nuka-carousel
import Carousel from "nuka-carousel";

import AdvImg1 from 'assets/Advertising1.png'
import AdvImg2 from 'assets/Advertising1.png'
import AdvImg3 from 'assets/Advertising3.png'
import { Fragment } from "react";

import {useStyles} from 'Theme/Theme';

import TodayHotView from 'View/MainView/TodayHotView'
import { BrowserRouter, Routes, Route } from 'react-router-dom';




const AdverImgs = [AdvImg1, AdvImg2, AdvImg3];

function MainView() {
    const classes = useStyles()
    return (
        <Fragment>
            {/* Advertising Carousel */}
            <Carousel height={500}>
                {
                AdverImgs.map((Img) => (
                    <img
                    src={Img}
                    className={classes.AdvertisingImg}
                    />
                ))
                } 
            </Carousel>
            
            <Box height={30}></Box>
            <TodayHotView/>
            <Box height={500}></Box>
        </Fragment>
    );
}

export default MainView;