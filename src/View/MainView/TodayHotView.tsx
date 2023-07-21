import { Paper, List, ListItem,ListItemText, Box, Grid, Typography, Button, ButtonGroup, Container, MenuItem } from "@mui/material";
import Carousel from 'react-material-ui-carousel';


function ListTile() {
    return (
    <Box>
        <Grid container spacing={2}>
            <Grid item xs={4} height={150} width={300}>
                IMAGE1
            </Grid>
            <Grid item xs={8}>
                <ListItem>
                    <ListItemText primary="AAA" secondary="secondary"/>
                </ListItem>
            </Grid>
        </Grid>
    </Box>
    );
}


function TodayHotView() {

    return(
        <Container>
            <Paper elevation={3} >
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
                    <Carousel height={600} autoPlay={false} animation="slide">
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
                    <Carousel height={500}>
                        <MenuItem> 1 </MenuItem>
                        <MenuItem> 2 </MenuItem>
                        <MenuItem> 3 </MenuItem>
                        <MenuItem> 4 </MenuItem>
                    </Carousel>
                </Grid>
                

            </Grid>
            </Paper>
        </Container>
    );

}


export default TodayHotView;