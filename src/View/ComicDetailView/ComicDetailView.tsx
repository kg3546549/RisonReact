import { Fragment } from "react";
import {Rating, CardMedia, Card, Divider, Stack, Grid, Container, Box, Typography, CardContent} from '@mui/material/'
import { Link } from 'react-router-dom'
import Image from 'assets/thumbnail.jpg'
import EpisodeThumbnail from 'assets/EpisodeThumbnail.jpg'
import Button from '@mui/material/Button'

function EpisodeListTile(epiNum:number) {
  
  return(
    <Card elevation={0} sx={{ display: 'flex' ,borderRadius: 3}} >
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
        <Typography component="div" variant="h6" fontWeight={600}>
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
  );
}




function ComicDetailView() {

  let episode1:number[] = Array.from(Array(100).keys()).map(v=>v);

  return(
      <Box padding={3}>
        <Container>
      
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <Box>
              <img 
                  src={Image}
                  style={{ maxWidth: "100%" }}
              />
              </Box>
            </Grid>
            <Grid item xs={9}>

              <Grid container spacing={1}>
                  <Grid item xs={12}>
                      <Typography variant="h5" fontWeight={700}>
                          외모지상주의
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
                          못생기고 뚱뚱하다고 괴롭힘을 당하며 루저 인생만 살아온 내가 잘생겨졌다는 이유로 인싸가 됐다.
                          어느 날 자고 일어났더니 갑자기 완벽한 외모와 몸을 지닌 사람이 되어 깨어난다면?
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