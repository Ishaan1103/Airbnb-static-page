import logo from '../images/airbnb-logo.png';
const Navbar=()=>{
    return(
        <nav>
            <img src={logo} alt="Airbnb-Logo" className='nav--logo'/>
        </nav>
    )
} 
export default Navbar;