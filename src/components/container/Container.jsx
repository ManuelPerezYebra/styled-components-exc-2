import Info from "../info/Info"
import Ratings from "../ratings/Ratings"
import Testimonials from "../testimonials/Testimonials"
import {StyledBgBot, StyledBgUp, StyledContainer } from "./container.styles"

const Container = ()=>{
    return (
        <>
        <StyledBgUp>
          
        </StyledBgUp>
    <StyledContainer>
        <Info></Info>
        <Ratings></Ratings>
    </StyledContainer>
    <Testimonials></Testimonials>
    <StyledBgBot>
            
        </StyledBgBot>
        
        </>
    )
    
}
export default Container