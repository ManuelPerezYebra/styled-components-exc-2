import styled from 'styled-components';

const StyledInfo = styled.div`
	width: 50%;
	@media only screen and (max-width: 425px) {
		width: 100%;
		padding: 82px 24px;
		padding-bottom: 49px;
		text-align: center;
	}
`;
const StyledH1 = styled.h1`
	font-size: 56px;
	font-weight: bold;
	font-family: 'League Spartan';
	color: ${({ $color }) => $color};
	@media only screen and (max-width: 425px) {
		margin-top: 0px;
	}
`;
const StyledText = styled.h1`
	font-size: 19px;
	font-weight: 400;
	font-family: 'League Spartan';
	color: ${({ $color }) => $color};
`;
export { StyledInfo, StyledH1, StyledText };
