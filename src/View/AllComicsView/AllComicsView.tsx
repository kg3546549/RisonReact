import { Rating, Card, CardMedia, CardContent, Box, Grid, Typography, ButtonGroup, Container, IconButton } from "@mui/material";

import {SortByAlpha, ThumbUp} from '@mui/icons-material/';
import { useNavigate } from 'react-router-dom';

// import TestImage from '../../assets/TestImage.jpg'
import TestImage from 'assets/Rison.png'
import ComicData from 'Model/ComicDataModel'


function HorizontalListTile(comicData:ComicData) {
    const navigate = useNavigate();
    return (
        <Grid item xs={3}>
        <Card
            elevation={3}
            style={{
                cursor : 'pointer',
                // borderRadius : 10,
            }}
            onClick={
                ()=>{
                    navigate('/ComicDetail');
                }
            }
            
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
    console.log(SampleData);

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
                    SampleData.map(HorizontalListTile)
                }
            </Grid>
            </Container>
            
        </Box>
    );

}


export default AllComicsView;