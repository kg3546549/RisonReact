import {Grid, Badge, Typography,Button, Box, IconButton, Tooltip, MenuItem,Menu, Paper, Container   } from '@mui/material'

import { ClassNames } from '@emotion/react';
import { useEffect, useState } from 'react';

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
import ComicInfo from "Model/ComicInfoModel";
import ComicRanking from 'Model/ComicRankingModel';
import { FETCH_STATUS } from "Model/FetchedStatus";

import { BrowserRouter, Routes, Route } from 'react-router-dom';


function RankingListBox(comic:ComicInfo, idx:number) {
    return(
        <Box height={200} width={150}
            component="span"
            sx={{
                display: 'inline',
                m:5,
            }}
        >
            <Box height={200} width={150}
                sx={{
                    position:"relative"
                }}
            >
            <Typography 
            fontSize={70}
            fontWeight={900}
            color={'black'}
                sx={{
                    "text-shadow": "-4px 0 white, 0 4px white, 4px 0 white, 0 -4px white",
                    "letter-spacing" :-7,
                    position:"absolute",
                    left: -12,
                    bottom: -30,
                }}
            >
                {idx+1}
            </Typography>

            <Box
                width="100%" 
                sx={{
                    borderRadius:5,
                    // backgroundPosition:"center",
                    backgroundSize:"100%",
                    backgroundImage: `url(${comic.thumbnail})`,
                    backgroundRepeat:"no-repeat",
                    float:"right",
                    height:"100%",
                    width:"100%",
                }}
            />
            </Box>
            <Typography 
                fontSize={15}
                fontWeight={600}
                sx={{
                    mt:2,
                }}
            >
                {comic.title}
            </Typography>
        </Box>

    );
}


const AdverImgs = [AdvImg1, AdvImg2, AdvImg3];

function MainView() {
    const classes = useStyles()

    let bestComics:ComicInfo[] = [];

    
    const [allComicList, setAllComicList] = useState<ComicRanking>();
    const [isFetched, setIsFetched] = useState<FETCH_STATUS>(FETCH_STATUS.FAIL);

    const URL = process.env.REACT_APP_SERVER_URL
    const API_URL = process.env.REACT_APP_API_URL
    const API = `getComicRanking`;

    useEffect(()=> {
        fetch(`${URL}${API_URL}${API}`, {
            method : "GET"   
        })
        .then(res=>res.json())
        .then(res=>{
          // console.log("Fetch Complete : ")
          // console.log(res);
          setAllComicList(res);
          setIsFetched(FETCH_STATUS.COMPLETE);
        })
        .catch(res=>{
          setIsFetched(FETCH_STATUS.FAIL);
        });         
    
      }, []);
    

    switch(isFetched) {
        case FETCH_STATUS.FAIL:
            break;
        case FETCH_STATUS.COMPLETE:
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
                                src={`https://pb.rplay.live/pics/8d30da3a6dc592f22f86a99da931f0e2`}
                                className={classes.AdvertisingImg}
                            />
                        </SwiperSlide>
                        ))
                    } 
                </Swiper>
                
                
                <Box height={30}/>
                <Typography fontSize={20} fontWeight={900}>
                  베스트 웹툰
                </Typography>
                

                <Grid container justifyContent="center" spacing={-10}>
                    {
                        allComicList?.comicList.map(
                            (comic, idx)=>(
                                <Grid item xs={2}>
                                    {RankingListBox(comic,idx)}
                                </Grid>
                            )
                        )
                    }
                </Grid>

                <Typography fontSize={20} fontWeight={900}>
                  인기 급상승
                </Typography>
                

                <Grid container justifyContent="center" spacing={-10}>
                    {
                        allComicList?.comicList.map(
                            (comic, idx)=>(
                                <Grid item xs={2}>
                                    {RankingListBox(comic,idx)}
                                </Grid>
                            )
                        )
                    }
                </Grid>
                
                

                <Box height={500}></Box>
            </Container>
            </Fragment>
        );
        case FETCH_STATUS.NOT_YET:
            break;
    }
    
}

export default MainView;
