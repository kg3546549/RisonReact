import { Fragment } from "react";
import {Rating, CardMedia, Card, Divider, Stack, Grid, Container, Box, Typography, CardContent} from '@mui/material/'
import { Link } from 'react-router-dom'
import Image from 'assets/thumbnail.jpg'
import EpisodeThumbnail from 'assets/EpisodeThumbnail.jpg'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom';

function EpisodeListTile(epiNum:number) {
  const navigate = useNavigate();

  return(
    <Box onClick={
      ()=>{
        navigate('/ComicsRead?titleId=1&no='+epiNum);
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
        image={EpisodeThumbnail}
        
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
          {epiNum}화 : ???
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

  let episode1:number[] = Array.from(Array(12).keys()).map(v=>v+1);

  return(
      <Box padding={3}>
        <Container>
      
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <Box>
              <img 
                  src='http://kg3546549.duckdns.org:3030/Taiyou%20no%20ie/thumbnail.webp'
                  style={{ maxWidth: "110%" }}
              />
              </Box>
            </Grid>
            <Grid item xs={9}>

              <Grid container spacing={1}>
                  <Grid item xs={12}>
                      <Typography variant="h5" fontWeight={700}>
                          태양의 집
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
                      어릴 적 앞집 히로네 집에서 늘 시간을 보냈던 마오. 그 집에 가면 항상 기운을 차릴 수 있었으니까. 몇 년 후… 아빠의 재혼으로 더 이상 집에 있을 수 없게 된 마오는 부모님이 세상을 떠난 후 홀로 집을 지키고 있는 히로의 집에 함께 머물게 되는데…?! 연상연하 소꿉친구 두 사람의 밝고도 애달픈 동거일기♡
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
              episode1.map((i)=>EpisodeListTile(i))
            }
          </Stack>


          </Container>
      </Box>
  );
}


export default ComicDetailView;