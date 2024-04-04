import group from "../images/photo-grid.png";
const Hero = () =>{
    return(
        <section className="h">
            <img src={group} alt="Group-Pic" className="hero--image"/>
            <h1 className="hero--header">
            Online Experiences
            </h1>
            <p className="hero--text">
            Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </section>
    )
}
export default Hero;