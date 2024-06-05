import styled from 'styled-components';

const StyledRatings = styled.div`
	height: 56px;
	p {
		margin: 0;
	}
	@media only screen and (max-width: 425px) {
		margin: 0 24px;
		text-align: center;
		margin-bottom: 49px;
		height: auto;
		margin-top: 0;
		padding-top: 0;
	}
`;
const StyledRate = styled.div`
	display: flex;
	width: 445px;
	height: 56px;
	gap: 33px;
	align-items: center;
	color: #512051;
	font-size: 17px;
	font-weight: bold;
	justify-content: center;
	background-color: #f7f2f7;
	border-radius: 10px;
	margin-bottom: 16px;
	margin-left: ${({ $marginleft }) => $marginleft};
	@media only screen and (max-width: 425px) {
		margin: 16px auto;
		width: 100%;
		width: auto;
		height: auto;
		display: block;
		text-align: center;
		padding-bottom: 15px;
		margin-top: 0;
	}
`;

const StyledStars = styled.div`
	display: flex;
	height: 56px;
	align-items: center;
	img {
		width: 16px;
		height: 16px;
	}
	@media only screen and (max-width: 425px) {
		margin: 0 auto;
		justify-content: center;
	}
`;

export { StyledRatings, StyledStars, StyledRate };
