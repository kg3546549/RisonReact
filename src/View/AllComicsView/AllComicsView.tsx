import { Fragment, useState, useEffect } from "react";
import { Rating, Card, CardMedia, CardContent, Box, Grid, Typography, ButtonGroup, Container, IconButton } from "@mui/material";

import {SortByAlpha, ThumbUp} from '@mui/icons-material/';
import { useNavigate } from 'react-router-dom';

import AllComicList from "~/Model/AllComicListModel";

// import TestImage from '../../assets/TestImage.jpg'
import TestImage from 'assets/Rison.png'
import ComicData from 'Model/ComicDataModel'
import ComicInfo from "Model/ComicInfoModel";
import { FETCH_STATUS } from "Model/FetchedStatus";

function HorizontalListTile(comicData:ComicData) {
  
    
    return (
        <Grid item xs={4}>
        <Card
            elevation={3}
            style={{
                cursor : 'pointer',
                // borderRadius : 10,
            }}
            // onClick={NavigateToComicDetail}
        >
            <CardMedia 
                component="img"
                image={TestImage} 
            />
            <CardContent>
                <Typography gutterBottom variant="h6">
                    {comicData.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {comicData.author}
                </Typography>
                <Box height={10}/>
                <Rating readOnly value={2}/>
            </CardContent>
        </Card>
        </Grid>
    );
}

function HorizontalListTileFetch(comicData:ComicInfo, navigate:Function) {
    console.log("HorizontalListTileFetch" + comicData)
    return (
        <Grid item xs={3}>
        <Card
            elevation={3}
            style={{
                cursor : 'pointer',
                // borderRadius : 10,
            }}
            onClick={()=> navigate(`/ComicDetail?titleId=${comicData.id}`)}
            
        >
            <CardMedia 
                component="img"
                image={comicData.thumbnail} 
            />
            <CardContent>
                <Typography gutterBottom variant="h6">
                    {comicData.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {comicData.authorID}
                </Typography>
                <Box height={10}/>
                <Rating readOnly value={2}/>
            </CardContent>
        </Card>
        </Grid>
    );
}


function MakeSampleData() {
    let SampleData:ComicData[] = []

    let sampleID:number = 10001;
    let sampleAuthor:string = "Author"
    let sampleTitle:string = "Rison Comic Title  "

    for(let i=0;i<100;i++) {
        SampleData.push( new ComicData(sampleTitle+sampleID, sampleAuthor+sampleID, sampleID, 5) );
        sampleID+=100;
    }
    

    return SampleData;
}

function AllComicsView() {
let SampleData:ComicData[] = MakeSampleData();
  const navigate = useNavigate();
  
  const [allComicList, setAllComicList] = useState<AllComicList>();
  const [isFetched, setIsFetched] = useState<FETCH_STATUS>(FETCH_STATUS.FAIL);

  
  const URL = process.env.REACT_APP_SERVER_URL
  const API_URL = process.env.REACT_APP_API_URL
  const API = `getAllComicList`;
  
  console.log(`URL : ${URL}${API_URL}${API}`);

  useEffect(()=> {
    fetch(`${URL}${API_URL}${API}`, {
        method : "GET"   
    })
    .then(res=>res.json())
    .then(res=>{
      console.log("Fetch Complete : ")
      console.log(res);
      setAllComicList(res);
      setIsFetched(FETCH_STATUS.COMPLETE);
    })
    .catch(res=>{
      setIsFetched(FETCH_STATUS.FAIL);
    });         

  }, []);

  switch(isFetched) {

  case FETCH_STATUS.COMPLETE :
    return(
        <Box padding={3}>
            <Container>
            <Grid container spacing={2}>
                <Grid item xs={11}>
                    <Typography variant="h6" fontWeight={800}>
                        전체 보기
                    </Typography>
                </Grid>
                <Grid item xs={1}>
                    <ButtonGroup variant="text" aria-label="">
                        <IconButton aria-label="">
                            <SortByAlpha/>
                        </IconButton>
                        <IconButton aria-label="">
                            <ThumbUp/>
                        </IconButton>  
                    </ButtonGroup>
                    
                </Grid>
            
                {
                    // SampleData.map(HorizontalListTile)
                    allComicList?.comicList.map(comicInfo => HorizontalListTileFetch(comicInfo,navigate))
                }
            </Grid>
            </Container>
            
        </Box>
    );

    case FETCH_STATUS.NOT_YET :
      return(
          <div>
              rendering
          </div>
      );
    
    case FETCH_STATUS.FAIL :
      return (
        <div>
          Fetch Fail
        </div>
      );
    
  }
}


export default AllComicsView;