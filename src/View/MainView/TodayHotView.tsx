import { Card, CardMedia, CardContent,Paper, List, ListItem,ListItemText, Box, Grid, Typography, Button, ButtonGroup, Container, MenuItem, ButtonBase } from "@mui/material";
import Carousel from 'react-material-ui-carousel';
import TestImage from '../../assets/TestImage.jpg'


function ListTile() {
    return(

    <Box margin={2}>
        <Card sx={{ display: 'flex' }} elevation={3}
            style={{
                cursor : 'pointer'
            }}
            onClick={()=>{console.log("A")}}
        >
        <CardMedia
            component="img"
            sx={{ width: 151 }}
            image={TestImage}
            alt="TestImage"
        />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
                Title
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
                Author
            </Typography>
            </CardContent>
        </Box>
        
        </Card>
    </Box>

    );
}


function TodayHotView() {

    return(
        <Container>
            
            <Grid container spacing={2} paddingLeft={5} paddingRight={5} paddingBottom={5} paddingTop={2}>
                <Grid item xs={10}>
                    <Typography variant="h5" >
                        지금 HOT 컨텐츠!
                    </Typography>
                </Grid>
                <Grid item xs={2}>
                    
                </Grid>

                {/* {Next Line} */}

                <Grid item xs={2}>
                    <ButtonGroup variant="contained" color="primary" aria-label="">
                        <Button variant="contained" color="primary">
                        전체
                        </Button>
                        <Button variant="contained" color="inherit">
                        무료
                        </Button>
                    </ButtonGroup>
                    
                </Grid>
                <Grid item xs={10}/>


                {/* {Next Line} */}

                    
                <Grid item xs={6}>
                    <Typography variant="h6" color="initial" borderBottom={1}>주간</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h6" color="initial" borderBottom={1}>월간</Typography>
                </Grid>


                <Grid item xs={6}>
                    <Carousel height={500} autoPlay={false} animation="slide">
                        <List>
                            {[ListTile(),ListTile(),ListTile(),ListTile()]}
                        </List>
                        <List>
                            {[ListTile(),ListTile(),ListTile(),ListTile()]}
                        </List>
                        <List>
                            {[ListTile(),ListTile(),ListTile(),ListTile()]}
                        </List>

                    </Carousel>
                </Grid>
                <Grid item xs={6}>
                    <Carousel height={500} autoPlay={false} animation="slide">
                        <List>
                            {[ListTile(),ListTile(),ListTile(),ListTile()]}
                        </List>
                        <List>
                            {[ListTile(),ListTile(),ListTile(),ListTile()]}
                        </List>
                        <List>
                            {[ListTile(),ListTile(),ListTile(),ListTile()]}
                        </List>

                    </Carousel>
                </Grid>
                

            </Grid>
            
        </Container>
    );

}


export default TodayHotView;