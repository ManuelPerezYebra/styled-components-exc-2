import styled from 'styled-components';
const StyledTestimonials = styled.div`
	width: 90%;
	margin: 0 auto;
	display: flex;
	gap: 30px;
	@media only screen and (max-width: 425px) {
		display: block;
		width: 100%;
	}
`;
const Profile = styled.div`
	background-color: ${({ $bgcolor }) => $bgcolor};
	height: 234px;
	width: 350px;
	border-radius: 20px;
	margin-top: ${({ $marginTop }) => $marginTop};
	@media only screen and (max-width: 425px) {
		margin: 16px auto;
	}
`;
const ProfileInfo = styled.div`
	display: flex;
	text-align: center;
	align-items: center;
	gap: 23px;
	padding-top: 40px;
	padding-left: 32px;
`;
const ProfileImg = styled.div`
	img {
		border-radius: 50%;
		width: 40px;
	}
`;
const ProfileName = styled.p`
	color: white;
	font-size: 17px;
	margin: 0;
`;
const ProfileProfesion = styled.p`
	color: #ee69a4;
	font-size: 17px;
	margin: 0;
`;
const ProfileText = styled.p`
	color: white;
	font-size: 17px;
	padding-left: 32px;
	padding-right: 32px;
`;

export {
	Profile,
	ProfileInfo,
	ProfileImg,
	ProfileName,
	ProfileProfesion,
	ProfileText,
	StyledTestimonials
};
