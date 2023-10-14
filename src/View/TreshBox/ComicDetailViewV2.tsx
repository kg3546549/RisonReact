// // import * as React from 'react';
// // import Card from '@mui/joy/Card';
// // import CardCover from '@mui/joy/CardCover';
// // import CardContent from '@mui/joy/CardContent';
// // import Typography from '@mui/joy/Typography';
// // import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';


// // function ComicDetailView() {

// //     return(
// //       <Container>
// //         <Grid container spacing={0} sx={{ height: '100vh' }}>
// //           <Grid item 
// //             // height={500}
// //             xs={4.5}
// //             sx={{
// //               background:'lineaer-Gradient(to bottom,#EEE, #EEE 30%, transparent)',
// //               backgroundImage: 'url(https://ccdn.lezhin.com/v2/comics/5999784268988416/images/tall.webp?updated=1684908599612&width=840)',
// //               backgroundRepeat: 'no-repeat',
// //               backgroundColor: (t) =>
// //                 t.palette.mode === 'light' ? t.palette.grey[200] : t.palette.grey[900],
// //               backgroundSize: '100%',
// //               backgroundPosition: 'top',
// //             }}
// //           >
// //             <Box
// //               color={"black"}
// //             >
  
// //             </Box>
            
// //           </Grid>
// //           <Grid item xs={7.5}>
// //             <Typography variant="h1">
// //               TEST1
// //             </Typography>
// //             <Typography variant="h1">
// //               TEST1
// //             </Typography>
// //             <Typography variant="h1">
// //               TEST1
// //             </Typography>
  
// //             <Typography variant="h1">
// //               TEST1
// //             </Typography>
// //             <Typography variant="h1">
// //               TEST1
// //             </Typography>
  
// //             <Typography variant="h1">
// //               TEST1
// //             </Typography>
// //             <Typography variant="h1">
// //               TEST1
// //             </Typography>
// //             <Typography variant="h1">
// //               TEST1
// //             </Typography>
// //             <Typography variant="h1">
// //               TEST1
// //             </Typography>
// //             <Typography variant="h1">
// //               TEST1
// //             </Typography>
// //             <Typography variant="h1">
// //               TEST1
// //             </Typography>
// //             <Typography variant="h1">
// //               TEST1
// //             </Typography>
// //             <Typography variant="h1">
// //               TEST1
// //             </Typography>
// //           </Grid>
// //         </Grid>
// //       </Container>
// //     );
// //   }

// //   export default ComicDetailView;

// function ComicDetailViewPrev() {
//   const navigate = useNavigate();
//   // let episode1:number[] = Array.from(Array(12).keys()).map(v=>v+1);
//   let [query, setQuery] = useSearchParams();
// 	const [comicsDetail, setComicsDetail] = useState<ComicDetailJSON>();

//   const [isFetched, setIsFetched] = useState<FETCH_STATUS>(FETCH_STATUS.FAIL);
	
// 	let titleId1:any;

//   const URL = process.env.REACT_APP_SERVER_URL
//   const API_URL = process.env.REACT_APP_API_URL
//   const API = `getComicDetailByNo`;

//   useEffect(()=> {
//     titleId1 = query.get("titleId");
//     fetch(`${URL}${API_URL}${API}?comicNo=${titleId1}`, {
//         method : "GET"   
//     })
//     .then(res=>res.json())
//     .then(res=>{
//       console.log("Fetch Complete : ")
//       console.log(res);
//       setIsFetched(FETCH_STATUS.COMPLETE);
//       setComicsDetail(res);
//     })
//     .catch(res=>{
//       setIsFetched(FETCH_STATUS.FAIL);
//     });
//   }, []);
  
//   switch(isFetched) { 
//     case FETCH_STATUS.COMPLETE : 
//     return(
//         <Box padding={3}>
//           <Container>
        
//             <Grid container spacing={5}>
//               <Grid item xs={2}>
//                 <Box>
//                 <img 
//                     src={comicsDetail?.comicInfo.thumbnail}
//                     style={{ maxWidth: "110%" }}
//                 />
//                 </Box>
//               </Grid>
//               <Grid item xs={9}>

//                 <Grid container spacing={1}>
//                     <Grid item xs={12}>
//                         <Typography variant="h5" fontWeight={700}>
//                             {comicsDetail?.comicInfo.title}
//                         </Typography>
//                     </Grid>
//                     <Grid item xs={12}>
//                         <Typography variant="body2" color="text.secondary">
//                             {"글/그림 > "}
//                             <Link to="" color="text.first">박태준</Link>
//                             {"  |   15세 이용가"}
//                         </Typography>
                        
                        
//                     </Grid>

//                     <Grid item xs={12}>
//                         <Typography variant="body2" fontWeight={600}>
//                         람쥐썬더!!!<br/>
//                         람쥐썬더!!!
//                         람쥐썬더!!!
//                         람쥐썬더!!!
//                         람쥐썬더!!!
//                         </Typography>
                        
//                     </Grid>
//                 </Grid>
//               </Grid>
//             </Grid>
            
//             <Box height={20}/>

//             <Grid container spacing={3} justifyContent="center">
//               <Grid item xs={6}>
//                 <Button variant="contained" color="primary">
//                   <Typography variant="body2"> 최근에 보던 화부터 이어보기 </Typography>
//                 </Button>
//               </Grid>
//               <Grid item xs={6}>
//                 <Button variant="contained" color="primary">
//                   <Typography variant="body2"> 최근에 보던 화부터 이어보기 </Typography>
//                 </Button>
//               </Grid>
//             </Grid>
            
//             <Box height={20}/>

//             <Stack
//               direction="column"
//               divider={
//                 <Divider  />
//               }
//               spacing={0.5}
//             >

//               {
//                 // episode1.map(
//                 //   (i)=>EpisodeListTile(i)
//                 // )
//                 comicsDetail?.episodes.map(
//                   (data)=>EpisodeListTile(comicsDetail.comicInfo.id,data,navigate)
//                 )
//               }
//             </Stack>


//             </Container>
//         </Box>
//     );
  
//     case FETCH_STATUS.NOT_YET : return (
//       <div>
//         rendering
//       </div>
//     );
//     case FETCH_STATUS.FAIL : return (
//       <div>
//         Fetch FAIL
//       </div>
//     );
//   }
// }

// function ComicDetailViewDev1() { 

//   return(
//     <Container>
//       <Box
//         sx={{ 
//           // margin: 'auto',
//           height: '150vh',
//           backgroundImage:'url(https://an2-img.amz.wtchn.net/image/v2/Qm3L8NOwKFkG1AdVYvUB8g.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1KbklsMHNJbkFpT2lJdmRqSXZjM1J2Y21VdmFXMWhaMlV2TVRZeE9EVTFOREUyTWpVek5qY3hNRFkzT1NKOS4ybTNtdXZyS05JVW5aQWlhUEEzU0dBQnAxZEh3WExMbG9GVm5BUHczbE5j)',
//           backgroundRepeat: 'no-repeat',
          
//           // backgroundColor: (t) =>
//           //   t.palette.mode === 'light' ? t.palette.grey[200] : t.palette.grey[900],
          
//           backgroundSize: '100%',
          
//           // backgroundPosition: 'top',
//         }}>
//         {/* <Grid item 
          
//           height='50vh'
//           xs={12}
//         >
//         </Grid> */}
//         <Box
//           sx={{
//             height: '100%',
//             background:"linear-Gradient(to top,#EEE, #EEE 55%, transparent);",
//             paddingTop:"30%"
//           }}
//         >
//           {/* <Box sx={{
//             alignItems:'center',
//           }}> */}
//           <Box marginLeft={8} marginBottom={0}>
//             <Typography fontWeight={700} fontSize={"300%"} sx={{display:"inline"}}>
//               호리미야
//             </Typography>
//             <span>
//               <Chip label="로맨스" color="primary" sx={{ml:5}} />
//             </span>
//           </Box>
//           <Box 
//             marginTop={0}
//             marginLeft={5}
//             marginRight={5}
//             sx={{
//               boxShadow:1,
//               padding:10,
//               borderTopLeftRadius:"3%",
//               borderTopRightRadius:"3%",
//               height:"100%",
//               backgroundColor:"#fff"
//             }}
//           >
            
          
//             <Typography>AAA</Typography>
//             <Typography>AAA</Typography>
//           </Box>
//         </Box>
//       </Box>
//     </Container>
//   );
// }