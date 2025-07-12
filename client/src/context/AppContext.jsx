import { createContext, useContext, useState } from "react";
import axios from "axios"

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext()

export const AppProvider = ({ children })=>{

    const [isAdmin, setIsAdmin] = useState(false)
    const [shows, setShows] = useState([])
    const [favoriteMovies, setFavoriteMovies] = useState([])

    const value = {axios}
    return (
        <AppContext.Provider value={value}>
            { children }
        </AppContext.Provider>
    )

}

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = ()=> useContext(AppContext)