import pic1 from "../../images/av.png"
import pic2 from "../../images/ll.png"
import pic3 from "../../images/ven.png"
import Project from "./Project"
import likoch from "../../images/likoch.png"
import _2048 from "../../images/2048.png"
import culturehub from "../../images/culturehub.png"
import donationhub from "../../images/donationhub.png"
import lief from "../../images/lief.png"
import defaultImage from "../../images/defaultImage.png"
import "../Projects/ProjectFiles.css"

const ProjectFiles = ({languageToShow}) => {

    let projects = [{name:"P1", languages:["html5", "css3", "javascript"], image:pic1},
                    {name:"P2", languages:["html5", "javascript", "python"], image:pic2},
                    {name:"P3", languages:["python"], image:pic3},
                    {name:"P1", languages:["html5", "css3", "javascript"], image:pic1},
                    {name:"P2", languages:["html5", "javascript", "python"], image:pic2},
                    {name:"P3", languages:["python"], image:pic3},
                    {name:"P1", languages:["html5", "css3", "javascript"], image:pic1},
                    {name:"P1", languages:["html5", "css3", "javascript"], image:pic1},
                    {name:"P2", languages:["html5", "javascript", "python"], image:pic2},
                    {name:"P3", languages:["python"], image:pic3},
                    {name:"P1", languages:["html5", "css3", "javascript"], image:pic1},
                    {name:"P2", languages:["html5", "javascript", "python","html5", "css3", "javascript"], image:pic2},]

    let realprojects = [
        // {
        //     name:,
        //     languages:,
        //     image:,
        //     repoLink:,
        //     demoLink:,
        // }
        {
            name:"CultureHub",
            languages:["MERN", "HTML5", "CSS3","Javascript", "ReactJS", "ExpressJS", "NodeJS", "MongoDB"],
            image: culturehub,
            repoLink:"https://github.com/TejaManchikatla/CultureBeta/tree/master",
            demoLink:"https://culturehub-two.vercel.app/",
        },
        {
            name:"InjuryReport",
            languages:["MERN", "HTML5", "CSS3", "Javascript", "ReactJS", "ExpressJS", "NodeJS", "MongoDB"],
            image: lief,
            repoLink:"https://github.com/manchikatla-teja/LIEF",
            demoLink:"https://liefpro-client.vercel.app/",
        },
        {
            name:"DonationHub",
            languages:["MERN", "HTML5", "CSS3", "Javascript", "ReactJS", "ExpressJS", "NodeJS", "MongoDB"],
            image: donationhub,
            repoLink:"https://github.com/TejaManchikatla/SWE_team4_DonationHub",
            demoLink:null,
        },
        {
            name:"RubyInterpreter",
            languages:["Python",],
            image: defaultImage,
            repoLink:"https://github.com/TejaManchikatla/Ruby-Interpreter",
            demoLink:null,
        },
        {
            name:"WeatherWeb",
            languages:["Python","ReactJS","CSS3",],
            image: defaultImage,
            repoLink:"https://github.com/manchikatla-teja/WeatherApp",
            demoLink:null,
        },
        {
            name:"ParkingLot Simul",
            languages:["Java",],
            image: defaultImage,
            repoLink:"https://github.com/TejaManchikatla/Parking-Lot-Problem",
            demoLink:null,
        },
        {
            name:"ATM Simul",
            languages:["Java",],
            image: defaultImage,
            repoLink:"https://github.com/TejaManchikatla/ATM",
            demoLink:null,
        },
        {
            name:"2048",
            languages:["HTML5","CSS3","Javascript"],
            image: _2048,
            repoLink:"https://codepen.io/Manchikatla/pen/yLvVyEx",
            demoLink:"https://codepen.io/Manchikatla/pen/yLvVyEx",
        },
        {
            name:"Likoch",
            languages:["HTML5","CSS3","Javascript"],
            image: likoch,
            repoLink:"https://codepen.io/manchikatla-teja/pen/VwarGgJ",
            demoLink:"https://codepen.io/manchikatla-teja/pen/VwarGgJ",
        },

    ]
    //let dummy = {name:"DUMMY", languages:["html5", "css3", "javascript"], image:pic1};

    // const [displayOfFiles, setDisplayOfFiles] = useState(displayFiles ? "block":"none");
    
    // const [displayOfButton, setDisplayOfButton] = useState("block");
    // console.log(displayFiles, displayOfFiles);
    console.log(realprojects, languageToShow);
    return ( 
        <>
        <div style={{overflowY:"auto", maxHeight:"80vh"}}>
            
            {realprojects.map((project, key)=>
                //console.log(project);
            
                project.languages.includes(languageToShow) &&(
                <Project project={project} delay={key}></Project>
                )
                )}
            </div>
    </>
     );
}
 
export default ProjectFiles;