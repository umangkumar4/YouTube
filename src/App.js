import './App.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import AppContext from './context/contextApi';
import Header from './Components/Header';
import LeftNav from './Components/LeftNav'
import LeftNavMenuItems from './Components/LeftNavMenuItems'
import Feed from './Components/Feed'
import SearchResult from './Components/SearchResult';
import SearchResultVideo from './Components/SearchResultVideo'
import SuggestionVideo from './Components/SuggestionVideo'
import VideoCard from './Components/VideoCard'
import VideoCardDetails from './Components/VideoCardDetails'

function App() {
  return (
    <AppContext>
      <BrowserRouter>
  
      <div className='flex flex-col h-full'>
      < Header />
      <Routes>
        <Route path='/abcd' element={<Feed/>} ></Route>
      </Routes>
      </div>
    
      </BrowserRouter>
    
    </AppContext>
    
    
  );
}

export default App;
