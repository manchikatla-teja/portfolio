import Application from "../Application/Application"
import "../Home/Home.css"
import github from "../../images/github.svg"
import linkedin from "../../images/linkedin.svg"
import x from "../../images/x.jpg"
import CV from "../../pdfFiles/LatestCV.pdf"
import close from "../../images/close.svg"
import myImage from "../../images/edited.jpg"
import { useState } from "react"
import TaskBar from '../TaskBar/TaskBar';
import ProjectFiles from "../Projects/ProjectFiles"


const Home = () => {
    const [displayProjectsAccToLang, setDisplayProjectsAccToLang] = useState("none");
    const [displayOfCV, setDisplayOfCV] = useState("none");
    const [displayFiles, setDisplayFiles] = useState("none");
    const gitHubUrl1 = "https://github.com/manchikatla-teja?tab=repositories";
    const linkedInUrl1 = "https://www.linkedin.com/in/teja-manchikatla-6254a9252/";
    const xUrl = "https://twitter.com/ManchikatlaTej1";
    
    function displayProjectsAccToLanguage(language){
        setDisplayProjectsAccToLang(language);
        setDisplayFiles("block");
    }

    return ( 
        <>
        <div className="Home">
            <div onClick={()=>{setDisplayOfCV("block")}}><Application image={myImage} appName="My CV"></Application></div>
            <div onClick={()=>{window.open(gitHubUrl1,"_blank")}}><Application image={github} appName="GitHub"></Application></div>
            <div onClick={()=>{window.open(linkedInUrl1,"_blank")}}><Application image={linkedin} appName="LinkedIn"></Application></div>
            
            <div onClick={()=>{window.open(xUrl,"_blank")}}><Application image={x} appName="X"></Application></div>

            <div className="ProjectsGrid" style={{display:displayFiles}}>
                
            <button style={{position:"relative",left:"46%",background:"transparent", border:"none", cursor:"pointer"}} onClick={()=>{setDisplayFiles("none")}}><img src={close} style={{width:"1.5rem", height:"1.5rem", objectFit:"cover"}} alt=""></img></button>
            <div><ProjectFiles languageToShow={displayProjectsAccToLang}></ProjectFiles></div>
            </div>
            
            <div  className="CV" style={{display:displayOfCV}}>
                <button style={{position:"absolute", right:"0.3rem", background:"transparent", border:"none", cursor:"pointer"}} onClick={()=>{setDisplayOfCV("none");}}><img src={close} style={{width:"1.5rem", height:"1.5rem", objectFit:"cover"}} alt=""></img></button>
                <embed src={CV} width="100%" height="100%"></embed>
            </div>
        
        </div>
        
      <TaskBar func={displayProjectsAccToLanguage}></TaskBar>
      </>
     );
}
 
export default Home;