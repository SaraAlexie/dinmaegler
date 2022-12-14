/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useContext, useState } from 'react'
import { TokenContext } from '../contexts/TokenContext'


const FavIcon = ({ id, isFav }) => {

    const { token, handleFavourites } = useContext(TokenContext)

    const [isFavourite, setIsFavourite] = useState(isFav);

    const handleClick = () => {
        setIsFavourite(!isFavourite)
        handleFavourites(id)
    }

    const heart = css`
        display: ${token ? "block" : "none"};
        border-radius: 50%;
        padding: 0.2em;
        position: absolute;
        right: 4%;
        top: 4%;
        background-color: white;
        font-size: 2em;
    `

    return (
        <div onClick={handleClick}>
            {isFavourite ? <AiFillHeart css={heart} /> : <AiOutlineHeart css={heart} />}
        </div>
    );
}
 
export default FavIcon;