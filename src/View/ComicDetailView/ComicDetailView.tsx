import { Fragment, useState, useEffect } from "react";
import {IconButton, Chip, Rating, CardMedia, Card, Divider, Stack, Grid, Container, Box, Typography, CardContent} from '@mui/material/'
import { Link } from 'react-router-dom'
import Image from 'assets/thumbnail.jpg'
import EpisodeThumbnail from 'assets/EpisodeThumbnail.jpg'
import Button from '@mui/material/Button'
import { spacing } from '@mui/system';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';


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
    <Card elevation={0} sx={{ display: 'flex' ,borderRadius: 3, p:1}} 
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
          {episode.cid}. {episode.title}
        </Typography>
        
        {/* <Stack direction={"row"}> */}
        <Typography variant="subtitle1" color="text.secondary" component="span">
          23.06.21
        </Typography>

        {/* <Rating readOnly value={2} size="small" /> */}
        {/* </Stack> */}
        </Box>
      </CardContent>  

    </Card>
    </Box>
  );
}

function ComicDetailViewPrev() {
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

function ComicDetailViewDev1() { 

  return(
    <Container>
      <Box
        sx={{ 
          // margin: 'auto',
          height: '150vh',
          backgroundImage:'url(https://an2-img.amz.wtchn.net/image/v2/Qm3L8NOwKFkG1AdVYvUB8g.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1KbklsMHNJbkFpT2lJdmRqSXZjM1J2Y21VdmFXMWhaMlV2TVRZeE9EVTFOREUyTWpVek5qY3hNRFkzT1NKOS4ybTNtdXZyS05JVW5aQWlhUEEzU0dBQnAxZEh3WExMbG9GVm5BUHczbE5j)',
          backgroundRepeat: 'no-repeat',
          
          // backgroundColor: (t) =>
          //   t.palette.mode === 'light' ? t.palette.grey[200] : t.palette.grey[900],
          
          backgroundSize: '100%',
          
          // backgroundPosition: 'top',
        }}>
        {/* <Grid item 
          
          height='50vh'
          xs={12}
        >
        </Grid> */}
        <Box
          sx={{
            height: '100%',
            background:"linear-Gradient(to top,#EEE, #EEE 55%, transparent);",
            paddingTop:"30%"
          }}
        >
          {/* <Box sx={{
            alignItems:'center',
          }}> */}
          <Box marginLeft={8} marginBottom={0}>
            <Typography fontWeight={700} fontSize={"300%"} sx={{display:"inline"}}>
              호리미야
            </Typography>
            <span>
              <Chip label="로맨스" color="primary" sx={{ml:5}} />
            </span>
          </Box>
          <Box 
            marginTop={0}
            marginLeft={5}
            marginRight={5}
            sx={{
              boxShadow:1,
              padding:10,
              borderTopLeftRadius:"3%",
              borderTopRightRadius:"3%",
              height:"100%",
              backgroundColor:"#fff"
            }}
          >
            
          
            <Typography>AAA</Typography>
            <Typography>AAA</Typography>
          </Box>
            {/* </Box> */}
          {/* <Grid item xs={12}>
            <Grid container>
              <Grid item xs={2}></Grid>
              <Grid item xs={4}>
              <Typography fontSize={24} fontWeight={800}>
                TEST1
              </Typography><Typography fontSize={24} fontWeight={800}>
                TEST1
              </Typography><Typography fontSize={24} fontWeight={800}>
                TEST1
              </Typography><Typography fontSize={24} fontWeight={800}>
                TEST1
              </Typography><Typography fontSize={24} fontWeight={800}>
                TEST1
              </Typography><Typography fontSize={24} fontWeight={800}>
                TEST1
              </Typography><Typography fontSize={24} fontWeight={800}>
                TEST1
              </Typography><Typography fontSize={24} fontWeight={800}>
                TEST1
              </Typography><Typography fontSize={24} fontWeight={800}>
                TEST1
              </Typography><Typography fontSize={24} fontWeight={800}>
                TEST1
              </Typography><Typography fontSize={24} fontWeight={800}>
                TEST1
              </Typography><Typography fontSize={24} fontWeight={800}>
                TEST1
              </Typography><Typography fontSize={24} fontWeight={800}>
                TEST1
              </Typography><Typography fontSize={24} fontWeight={800}>
                TEST1
              </Typography><Typography fontSize={24} fontWeight={800}>
                TEST1
              </Typography><Typography fontSize={24} fontWeight={800}>
                TEST1
              </Typography><Typography fontSize={24} fontWeight={800}>
                TEST1
              </Typography><Typography fontSize={24} fontWeight={800}>
                TEST1
              </Typography><Typography fontSize={24} fontWeight={800}>
                TEST1
              </Typography><Typography fontSize={24} fontWeight={800}>
                TEST1
              </Typography><Typography fontSize={24} fontWeight={800}>
                TEST1
              </Typography><Typography fontSize={24} fontWeight={800}>
                TEST1
              </Typography>
              </Grid>
              <Grid item xs={2}></Grid>
            </Grid>
          </Grid> */}
        </Box>
      </Box>
    </Container>
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
        <Box>
          <Box
            height={300}
          >
            <Box
              sx={{
                color : "primary.contrastText",
                backgroundColor:"primary.main",
                float:"left",
                height:"100%",
                width:"60%",
                boxSizing: "border-box",
                pt:"3%",
                pl:"3%"
              }}
            >
              <Box>
                <Typography fontSize={50} fontWeight={700} sx={{display:"inline", mr:5}}>
                  {comicsDetail?.comicInfo.title}
                </Typography>
                <Typography fontSize={20} fontWeight={700} sx={{display:"inline"}}>
                  {comicsDetail?.comicInfo.author}
                </Typography>
              </Box>
              <Typography fontSize={17}>
                {comicsDetail?.comicInfo.description}
              </Typography>
    
              <Box
                sx={{
                  verticalAlign: "middle",
                  // mt:2,
                  ml:-2,
                }}
              >
                <IconButton
                  // aria-label="보러가기"
                  // onClick={()=>{}}
                  sx={{
                    display:"inline",
                    fontSize:60
                  }}
                >
                  <PlayCircleIcon fontSize="inherit"/>
                </IconButton>
                <Typography
                  fontSize={30}
                  fontWeight={700}
                  sx={{
                    position : "center",
                    display:"inline",
                  }}
                >
                  보러가기
                </Typography>
              </Box>
    
            </Box>
            <Box
              sx={{
                color : "white",
                backgroundPosition:"center",
                backgroundSize:"70%",
                backgroundImage: `url(${comicsDetail?.comicInfo.thumbnail})`,
                backgroundRepeat:"no-repeat",
                float:"right",
                height:"100%",
                width:"40%",
              }}
            >
              <Box
                sx={{
                  height:"100%",
                  background: `radial-gradient(circle, rgba(255,255,255,0) 0%, #f2f0eb 55%);`,
                  // background: "linear-Gradient(90deg, rgba(242,240,235,1) 29%, rgba(255,255,255,0) 100%);",
                }}
              >
              </Box>
            </Box>
    
          
          </Box>
    
          
          <Box
            height={400}
            sx={{
              p:5,
              boxSizing: "border-box",
            }}
          >
            {
              comicsDetail?.episodes.map(
                (data)=>EpisodeListTile(comicsDetail.comicInfo.id,data,navigate)
              )
            },
          </Box>
        </Box>
      )

    case FETCH_STATUS.NOT_YET :
      return(
        <div>
          Rendering....
        </div>
      )

    case FETCH_STATUS.FAIL :
      return(
        <div>
          FAIL!!!
        </div>
      )
  }
  
}

export default ComicDetailView;