

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import {useStyles} from 'Theme/Theme';

import { useLocation, useSearchParams } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import {Box, Container} from '@mui/material';


function ReadComicsView() {

	let [query, setQuery] = useSearchParams();
	
	let titleId = query.get("titleId");
	let numOfComicPages = 67;
	let EpisodeNum = query.get("no");
	let imageArr =  Array.from({length: numOfComicPages}, (v, i) => i+1);
	// let uriImages = "http://kg3546549.duckdns.org:3030/Taiyou%20no%20ie/";
	let uriImages = "http://119.192.158.85:3030/C1/";
	let urlVoice = "http://119.192.158.85:3030/C1/";
	// let imagesFileExtension = ".jpg";
	let imagesFileExtension = ".webp";
	let voiceFileExtension = ".m4a";


	const classes = useStyles();

	const [curPage,setCurPage] = useState(0);


	return(
		<Container
			sx={{

				
			}}
		>
			
			<Box height={5}/>
			<Swiper
				style={{
					height:"90vh",
					width:"60vh",
				}}
				pagination={{
          type: 'progressbar',
					
        }}
				navigation 
				modules={[Navigation, Pagination]}
				onSlideChange={(swiper)=>{
					console.log(swiper);
					setCurPage(swiper.activeIndex);
				}}
			>
				{
					imageArr.map( 
						(i)=> {
						 return (
							<SwiperSlide>
								{
									i==curPage   ?
									<audio src={urlVoice+'/'+i+voiceFileExtension} autoPlay/> : 
									<div/>
								}
								<img 
									style={{
										
									}}
									width='100%'
									height="100%"
									src= {uriImages+'/'+i+imagesFileExtension}
								/>  
							</SwiperSlide>
						);
						}
					)
				} 

			</Swiper>
		</Container>
	);
}

export default ReadComicsView;