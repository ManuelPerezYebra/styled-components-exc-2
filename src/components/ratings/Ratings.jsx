import { StyledRate, StyledRatings, StyledStars } from "./ratings.styles"

const Ratings = ()=>{
    return <StyledRatings>
        <StyledRate $marginleft='0px'>
            <StyledStars>
                <img src="icon-star.svg" alt="" />
                <img src="icon-star.svg" alt="" />
                <img src="icon-star.svg" alt="" />
                <img src="icon-star.svg" alt="" />
                <img src="icon-star.svg" alt="" />
            </StyledStars>
            <div><p>Rated 5 Stars in Reviews</p></div>
        </StyledRate>
        <StyledRate $marginleft='40px'>
            <StyledStars>
                <img src="icon-star.svg" alt="" />
                <img src="icon-star.svg" alt="" />
                <img src="icon-star.svg" alt="" />
                <img src="icon-star.svg" alt="" />
                <img src="icon-star.svg" alt="" />
            </StyledStars>
            <div><p>Rated 5 Stars in Reviews</p></div>
        </StyledRate>
        <StyledRate $marginleft='80px'>
            <StyledStars>
                <img src="icon-star.svg" alt="" />
                <img src="icon-star.svg" alt="" />
                <img src="icon-star.svg" alt="" />
                <img src="icon-star.svg" alt="" />
                <img src="icon-star.svg" alt="" />
            </StyledStars>
            <div><p>Rated 5 Stars in Reviews</p></div>
        </StyledRate>
       
    </StyledRatings>
}
export default Ratings