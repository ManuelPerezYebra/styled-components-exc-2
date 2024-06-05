import styled from 'styled-components';

const StyledContainer = styled.div`
	display: flex;
	justify-content: center;
	width: 90%;
	margin: 118px auto;
	@media only screen and (max-width: 425px) {
		display: block;
		width: 100%;
		margin: 0 auto;
	}
`;
const StyledBgUp = styled.div`
	position: absolute;
	background-image: url('bg-pattern-top-desktop.svg');
	background-size: cover;
	background-position: bottom right;
	@media only screen and (max-width: 425px) {
		background-image: url('bg-pattern-top-mobile.svg');
	}
`;
const StyledBgBot = styled.div`
	position: absolute;
	background-image: url('bg-pattern-bottom-desktop.svg');
	background-size: cover;
	background-position: bottom right;
	@media only screen and (max-width: 425px) {
		background-image: url('bg-pattern-bottom-mobile.svg');
	}
`;
export { StyledContainer, StyledBgUp, StyledBgBot };
