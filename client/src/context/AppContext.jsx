import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios"
import { useAuth, useUser } from "@clerk/clerk-react";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext()

export const AppProvider = ({ children })=>{

    const [isAdmin, setIsAdmin] = useState(false)
    const [shows, setShows] = useState([])
    const [favoriteMovies, setFavoriteMovies] = useState([])

    const {user} = useUser()
    const {getToken} = useAuth()
    const location = useLocation()
    const navigate = useNavigate()

    const fetchIsAdmin = async () => {
        try {
            const {data} = await axios.get('/api/admin/is-admin', {headers: {Authorization: `Bearer ${await getToken()}`}})
            setIsAdmin(data.isAdmin)

            if(!data.isAdmin && location.pathname.startsWith('/admin')){
                navigate('/')
                toast.error('You are not authorized to access admin dashboard.')
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(()=>{
        if(user){
            fetchIsAdmin()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[user])

    const value = {axios}

    return (
        <AppContext.Provider value={value}>
            { children }
        </AppContext.Provider>
    )

}

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = ()=> useContext(AppContext)