/** @jsxImportSource @emotion/react */
import { css, Global } from '@emotion/react'

const GlobalStyles = () => {

	return (
		<Global
			styles={css`
				#root {
					box-sizing: border-box;
					margin: 0;
                    padding: 0;
					font-family: 'Roboto', sans-serif;

					& h1 {
						font-weight: bold;
						font-size: 50px;
						line-height: 66px;
					}
				}
			`}>    
        </Global>
	);
};

export default GlobalStyles;