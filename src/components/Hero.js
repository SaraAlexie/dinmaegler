/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import HeroImg from './HeroImg';
import Search from './Search';




const Hero = () => {

    const hero = css`
        width: 100%;
    `

    return (
        <section css={hero}>
            <HeroImg />
            <Search />
        </section>
    );
}
 
export default Hero;