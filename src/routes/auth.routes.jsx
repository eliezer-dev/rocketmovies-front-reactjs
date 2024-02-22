import { Routes, Route} from 'react-router-dom';

import { SignIn} from '../pages/SignIn'
import { SignUp} from '../pages/SignUp'
import { Navigate } from 'react-router-dom';

export function AuthRoutes(){
    const user = localStorage.getItem("@rocketmovies:user")
    return(
        <Routes>
            <Route path="/" element={<SignIn/>} />
            <Route path="/register" element={<SignUp/>}/>
            {!user && <Route path="*" element={<Navigate to="/"/>} />}
        </Routes>
    )
}