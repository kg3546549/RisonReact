

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
	let numOfComicPages = 172;
	let EpisodeNum = query.get("no");
	let imageArr =  Array.from({length: numOfComicPages}, (v, i) => i+1);
	let uriImages = "http://kg3546549.duckdns.org:3030/Taiyou%20no%20ie/";
	let imagesFileExtension = ".jpg";


	const classes = useStyles();

	return(
		<Container
			style={{
				// margin: 'auto'
				marginTop : 'auto',
				marginBottom : 'auto'
			}}
		>
			<Box height={10}></Box>
			<Swiper
				style={{
					// height:'auto',
					width: 500,
					// margin: 'auto'
				}}
				pagination={{
          type: 'progressbar',
					
        }}
				navigation 
				modules={[Navigation, Pagination]}
			>
				{
					imageArr.map( 
						(i)=> 
						<SwiperSlide>
							<img 
								style={{
									width:'100%'
								}}
								height={700}
								src= {uriImages+EpisodeNum+'/'+i+imagesFileExtension}
							/>  
						</SwiperSlide>
					)
				} 

			</Swiper>
		</Container>
	);
}

export default ReadComicsView;