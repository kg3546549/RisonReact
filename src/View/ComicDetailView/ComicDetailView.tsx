import { Fragment, useState, useEffect } from "react";
import {Rating, CardMedia, Card, Divider, Stack, Grid, Container, Box, Typography, CardContent} from '@mui/material/'
import { Link } from 'react-router-dom'
import Image from 'assets/thumbnail.jpg'
import EpisodeThumbnail from 'assets/EpisodeThumbnail.jpg'
import Button from '@mui/material/Button'

import { useNavigate, useSearchParams } from 'react-router-dom';

//Import Model
import ComicDetailJSON from 'Model/ComicDetailJSONModel'
import EpisodesModel from 'Model/EpisodesModel'
import { FETCH_STATUS } from "Model/FetchedStatus";

function EpisodeListTile(titleId:number, episode:EpisodesModel, navigate:Function) {
  // 

  return(
    <Box onClick={
      ()=>{
        navigate(`/ComicsRead?titleId=${titleId}&no=${episode.cid}`);
      }
    }>
    <Card elevation={0} sx={{ display: 'flex' ,borderRadius: 3}} 
      style={{
        cursor : 'pointer',
        // borderRadius : 10,
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: 150,  }}
        image={episode.thumnail}
        
      >

      </CardMedia>
      <CardContent 
        sx={{ flex: '1 0 auto' }}
        
      >
        <Box padding={1}>
        <Typography 
          component="div" variant="h6" fontWeight={600}
          style={{
            cursor : 'pointer',
            // borderRadius : 10,
          }}
          onClick={
            ()=>{
              navigate('/ComicsRead');
            }
          }
        >
          {episode.cid}화 : {episode.title}
        </Typography>
        
        <Stack direction={"row"}>
        <Typography variant="subtitle1" color="text.secondary" component="span">
          23.06.21
        </Typography>

        <Rating readOnly value={2} size="small" />
        </Stack>
        </Box>
      </CardContent>  

    </Card>
    </Box>
  );
}

function ComicDetailView() {
  const navigate = useNavigate();
  // let episode1:number[] = Array.from(Array(12).keys()).map(v=>v+1);
  let [query, setQuery] = useSearchParams();
	const [comicsDetail, setComicsDetail] = useState<ComicDetailJSON>();

  const [isFetched, setIsFetched] = useState<FETCH_STATUS>(FETCH_STATUS.FAIL);
	
	let titleId1:any;

  const URL = process.env.REACT_APP_SERVER_URL
  const API_URL = process.env.REACT_APP_API_URL
  const API = `getComicDetailByNo`;

  useEffect(()=> {
    titleId1 = query.get("titleId");
    fetch(`${URL}${API_URL}${API}?comicNo=${titleId1}`, {
        method : "GET"   
    })
    .then(res=>res.json())
    .then(res=>{
      console.log("Fetch Complete : ")
      console.log(res);
      setIsFetched(FETCH_STATUS.COMPLETE);
      setComicsDetail(res);
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
        
            <Grid container spacing={5}>
              <Grid item xs={2}>
                <Box>
                <img 
                    src={comicsDetail?.comicInfo.thumbnail}
                    style={{ maxWidth: "110%" }}
                />
                </Box>
              </Grid>
              <Grid item xs={9}>

                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Typography variant="h5" fontWeight={700}>
                            {comicsDetail?.comicInfo.title}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body2" color="text.secondary">
                            {"글/그림 > "}
                            <Link to="" color="text.first">박태준</Link>
                            {"  |   15세 이용가"}
                        </Typography>
                        
                        
                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant="body2" fontWeight={600}>
                        람쥐썬더!!!<br/>
                        람쥐썬더!!!
                        람쥐썬더!!!
                        람쥐썬더!!!
                        람쥐썬더!!!
                        </Typography>
                        
                    </Grid>
                </Grid>
              </Grid>
            </Grid>
            
            <Box height={20}/>

            <Grid container spacing={3} justifyContent="center">
              <Grid item xs={6}>
                <Button variant="contained" color="primary">
                  <Typography variant="body2"> 최근에 보던 화부터 이어보기 </Typography>
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button variant="contained" color="primary">
                  <Typography variant="body2"> 최근에 보던 화부터 이어보기 </Typography>
                </Button>
              </Grid>
            </Grid>
            
            <Box height={20}/>

            <Stack
              direction="column"
              divider={
                <Divider  />
              }
              spacing={0.5}
            >

              {
                // episode1.map(
                //   (i)=>EpisodeListTile(i)
                // )
                comicsDetail?.episodes.map(
                  (data)=>EpisodeListTile(comicsDetail.comicInfo.id,data,navigate)
                )
              }
            </Stack>


            </Container>
        </Box>
    );
  
    case FETCH_STATUS.NOT_YET : return (
      <div>
        rendering
      </div>
    );
    case FETCH_STATUS.FAIL : return (
      <div>
        Fetch FAIL
      </div>
    );
  }
}


export default ComicDetailView;