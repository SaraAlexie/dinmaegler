/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useState } from "react";


const Slider = ({ img1, img2, img3, img4, img5}) => {

    const images = [img1, img2, img3, img4, img5]
    const [currentImg, setCurrentImg] = useState(0);
    const length = images.length

    const nextImg = () => {
        setCurrentImg(currentImg === length - 1 ? 0 : currentImg + 1)
    }

    const sliderCarousel = css`
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    `

    const slideImg = css`
        width: 62em;
        height: 41em;
    `

    return (
        <section css={sliderCarousel}>
            {images.map((image, index) => (
                <div css={index === currentImg ? 'sliderCarousel active' : 'sliderCarousel'} key={index}>
                    {index === currentImg && <img key={index} src={image} alt="Hus" css={slideImg} onClick={nextImg} />}
                </div>
            ))}
        </section>
    );
}
 
export default Slider;