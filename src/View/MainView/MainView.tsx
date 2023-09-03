import {Typography,Button, Box, IconButton, Tooltip, MenuItem,Menu, Paper, Container   } from '@mui/material'

import { ClassNames } from '@emotion/react';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

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
            <Box height={5}></Box>
            <Container>
            <Swiper
                
                style={{
                    height: 400,
                }}
                loop={true}
                modules={[Autoplay, Navigation, Pagination]}
                navigation 
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
            >
                {
                AdverImgs.map((Img, index) => (
                    <SwiperSlide>
                        <img
                            src={Img}
                            className={classes.AdvertisingImg}
                        />
                    </SwiperSlide>
                    ))
                } 
            </Swiper>
            
            
            <Box height={30}></Box>
            <TodayHotView/>
            <Box height={500}></Box>
        </Container>
        </Fragment>
    );
}

export default MainView;