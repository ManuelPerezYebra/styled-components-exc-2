import { Profile, ProfileImg, ProfileInfo, ProfileName, ProfileProfesion, ProfileText, StyledTestimonials } from "./testimonials.styles"

const Testimonials =()=>{

    return (
        <>      <StyledTestimonials>
    <Profile $bgcolor='#512051'>
        <ProfileInfo>
            <ProfileImg>
            <img src="image-colton.jpg" alt="" />
        </ProfileImg>
        <div>
            <ProfileName>Colton Smith</ProfileName>
            <ProfileProfesion>Verified Buyer</ProfileProfesion>
        </div>
        </ProfileInfo>
        <div>
            <ProfileText>“ We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent! ”</ProfileText>
        </div>
        
    </Profile>
    <Profile $bgcolor='#512051' $marginTop='16px'>
        <ProfileInfo>
            <ProfileImg>
            <img src="image-irene.jpg" alt="" />
        </ProfileImg>
        <div>
            <ProfileName>Irene Roberts</ProfileName>
            <ProfileProfesion>Verified Buyer</ProfileProfesion>
        </div>
        </ProfileInfo>
        <div>
            <ProfileText>“ Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.”</ProfileText>
        </div>
        
    </Profile>
    <Profile $bgcolor='#512051' $marginTop='32px'>
        <ProfileInfo>
            <ProfileImg>
            <img src="image-anne.jpg" alt="" />
        </ProfileImg>
        <div>
            <ProfileName>Anne Wallace</ProfileName>
            <ProfileProfesion>Verified Buyer</ProfileProfesion>
        </div>
        </ProfileInfo>
        <div>
            <ProfileText>“ Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone! ”</ProfileText>
        </div>
        
    </Profile>
    </StyledTestimonials></>
    )
  

    
}
export default Testimonials