import {createContext, useContext, useState, useEffect} from "react"
export const AuthContext = createContext({});
import {api} from '../services/api'

function AuthProvider({children}){
    const [data, setData] = useState({})
    
    async function signIn({email, password}){
        try {
            const response = await api.post("/sessions", {email, password})
            const {user, token} = response.data
            localStorage.setItem("@rocketmovies:user", JSON.stringify(user))
            localStorage.setItem("@rocketmovies:token", token)
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            setData({user, token})

        } catch (error) {
            if(error.response){
                alert(error.response.data.message)

            }else {
                alert("Não foi possível entrar")
            }
        }
                
    }

    function signOut(){
        localStorage.removeItem("@rocketmovies:user")
        localStorage.removeItem("@rocketmovies:token")
        api.defaults.headers.common['Authorization'] = "";
        setData({})
    }

    async function updateProfile({user, avatarFile}){
        try {
            if (avatarFile) {
                const fileUploadForm = new FormData();
                fileUploadForm.append("avatar", avatarFile)
                const response = await api.patch("/users/avatar", fileUploadForm)
                user.avatar = response.data.avatar;
            }
            await api.put("/users", user)
            localStorage.setItem("@rocketmovies:user", JSON.stringify(user)) 
            setData({user, token:data.token})
            alert("Profile atualizado com sucesso.")   
       
        } catch (error) {
            if(error.response) {
                alert(error.response.data.message)
                console.log(error.response.data.message)
            }else {
                alert("Houve um erro ao atualizar o profile, verique os dados informados e tente novamente.")
                console.log(error.message)
            }
        }
    }


    useEffect(() => {
        const user = localStorage.getItem("@rocketmovies:user");
        const token = localStorage.getItem("@rocketmovies:token");

        if (token && user) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            setData({
                token,
                user: JSON.parse(user)
            })
        }
    }, [])

    return (
        <AuthContext.Provider value = {{
            signIn, 
            user:data.user,
            signOut,
            updateProfile

            }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext)
    return context;
}

export {AuthProvider, useAuth}

