 import { Routes, Route} from 'react-router-dom';
 import { Home} from '../pages/Home'
import { NewMovie } from '../pages/NewMovie';
import { MoviePreview } from '../pages/MoviePreview';
import { Perfil } from '../pages/Perfil';
// import { New} from '../pages/New'

// import { Profile} from '../pages/Profile'
// import { Details} from '../pages/Details'

export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/new" element={<NewMovie/>} />
            <Route path="/movie/:id" element={<MoviePreview/>} />
            <Route path="/perfil" element={<Perfil/>} />
            {/* 
            <Route path="/profile" element={<Profile/>} />
            <Route path="/details/:id" element={<Details />} /> */}
        </Routes>
    )
}