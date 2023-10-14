import './App.css';

import Box from '@mui/material/Box';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Provider } from 'react-redux'

import smLogo from './assets/Logo2.png'

import {useStyles} from './Theme/Theme';

import MainView from 'View/MainView/MainView'
import TodayHotView from 'View/MainView/TodayHotView';
import AllComicsView from 'View/AllComicsView/AllComicsView';
import ComicDetailView from 'View/ComicDetailView/ComicDetailView';
import ReadComicsView from 'View/ReadComicsView/ReadComisView'
import {LoginView} from 'View/LoginView/LoginView'
import Appbar from 'View/Appbar'


function App() {
  const classes = useStyles()
  return (
      <Box sx={{ flexGrow: 1 }}>
        <BrowserRouter>
          <Appbar/>  
          <Routes>
            <Route path="/" element={<MainView/>}/>
            <Route path="/Hot" element={<TodayHotView/>}/>
            <Route path="/AllComics" element={<AllComicsView/>}/>
            <Route path="/ComicDetail" element={<ComicDetailView/>}/>
            <Route path="/ComicsRead" element={<ReadComicsView/>}/>
            <Route path="/login" element={<LoginView open={false} onClose={()=>{}}/>}/>
          </Routes>
          
        </BrowserRouter>
      </Box>
  );
}

export default App;
