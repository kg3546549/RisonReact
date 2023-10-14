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
            height={"30vh"}
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
                  mt:1,
                  mb:1,
                }}
              >
              {
                // Tags(comicData.tag)
                comicsDetail?.comicInfo.tag.map((c,index)=>{
                  // if(index < 2) {
                    // return <Chip key={"tag-"+index} variant="outlined" label={c} size="medium" sx={{mr:1, mb:1}}/>
                    return <Chip key={"tag-"+index} label={c} size="medium" sx={{mr:1, mb:1}}/>
                  // }
                  
                })
              }
              </Box>



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