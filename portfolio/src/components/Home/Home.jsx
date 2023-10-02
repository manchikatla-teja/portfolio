import Application from "../Application/Application"
import "../Home/Home.css"
import github from "../../images/github.svg"
import linkedin from "../../images/linkedin.svg"
import x from "../../images/x.jpg"
import CV from "../../pdfFiles/LatestCV.pdf"
import close from "../../images/close.svg"
const Home = () => {

    const gitHubUrl1 = "https://github.com/manchikatla-teja?tab=repositories";
    const linkedInUrl1 = "https://www.linkedin.com/in/teja-manchikatla-6254a9252/";
    const xUrl = "https://twitter.com/ManchikatlaTej1";

    return ( 
        <div className="Home">
            <div onClick={()=>{window.open(gitHubUrl1,"_blank")}}><Application image={github} appName="GitHub"></Application></div>
            <div onClick={()=>{window.open(linkedInUrl1,"_blank")}}><Application image={linkedin} appName="LinkedIn"></Application></div>
            <div onClick={()=>{window.open(xUrl,"_blank")}}><Application image={x} appName="X"></Application></div>
            <div  className="CV">
                <button style={{position:"absolute", right:"0.3rem", background:"transparent", border:"none", cursor:"pointer"}}><img src={close} style={{width:"1.5rem", height:"1.5rem", objectFit:"cover"}} alt=""></img></button>
                <embed src={CV} width="100%" height="100%"></embed>
                </div>
        
        </div>
     );
}
 
export default Home;