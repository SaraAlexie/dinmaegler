import axios from "axios";
import { createContext, useState, useEffect } from "react";
import { useCookies } from "react-cookie";

export const TokenContext = createContext();

const TokenContextProvider = ({ children }) => {

    const [cookies, setCookie, removeCookie] = useCookies(["tokenCookie", "userIdCookie", "favIdsCookie", "favouritesCookie"])
    const [token, setToken] = useState(cookies.tokenCookie);
    const [userId, setUserId] = useState(cookies.userIdCookie);
    const [favourites, setFavourites] = useState(JSON.parse(sessionStorage.getItem("favourites")) || []);
    const [favIds, setFavIds] = useState(JSON.parse(sessionStorage.getItem("favIds")) || [])

    //favIds && console.log("favids", favIds);

    useEffect(() => {
        let ids = favourites.map((favourite) => favourite.id)
        setFavIds(ids)
        sessionStorage.setItem("favIds", JSON.stringify(ids))
    }, [favourites]);

    const handleFavourites = (newFavId) => {
        let newArray = favIds;
        if (newArray.includes(newFavId)) {
            console.log(newFavId);
            newArray.splice(favIds.indexOf(newFavId), 1)
        } else{
            newArray.push(newFavId);
        }
        //console.log(newArray);

        axios.put(
            "https://dinmaegler.herokuapp.com/users/" + userId,
            {
                homes: newArray,
            },
            {
                headers: {
                    Authorization: "Bearer " + token,
                },
            }
        )
        .then(response => {
            setFavourites(response.data.homes)
            sessionStorage.setItem("favourites", JSON.stringify(response.data.homes))
        })
    }

    const login = (data) => {
        setCookie("tokenCookie", data.jwt)
        setToken(data.jwt)
        setUserId(data.user.id)
        setCookie("userIdCookie", data.user.id)
        setFavourites(data.user.homes)
        sessionStorage.setItem("favourites", JSON.stringify(data.user.homes))
    } 

    const logout = () => {
        removeCookie("tokenCookie")
        setToken(null)
        removeCookie("userIdCookie")
        setUserId(null)
        sessionStorage.removeItem("favourites")
        setFavourites([])
        sessionStorage.removeItem("favIds")
        setFavIds([])
    }

    return (
        <TokenContext.Provider value={{ token, setToken, login, logout, userId, handleFavourites, setFavourites, favourites, favIds }}>
            {children}
        </TokenContext.Provider>
    );
}
 
export default TokenContextProvider;