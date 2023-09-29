import Application from "../Application/Application"
import "../Home/Home.css"
import github from "../../images/github.svg"
import linkedin from "../../images/linkedin.svg"
import x from "../../images/x.jpg"
const Home = () => {

    const gitHubUrl1 = "https://github.com/manchikatla-teja?tab=repositories";
    const linkedInUrl1 = "https://www.linkedin.com/in/teja-manchikatla-6254a9252/";
    const xUrl = "https://twitter.com/ManchikatlaTej1";

    return ( 
        <div className="Home">
            <div onClick={()=>{window.open(gitHubUrl1,"_blank")}}><Application image={github} appName="GitHub"></Application></div>
            <div onClick={()=>{window.open(linkedInUrl1,"_blank")}}><Application image={linkedin} appName="LinkedIn"></Application></div>
            <div onClick={()=>{window.open(xUrl,"_blank")}}><Application image={x} appName="X"></Application></div>
            
        
        </div>
     );
}
 
export default Home;