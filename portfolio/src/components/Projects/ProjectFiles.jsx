import pic1 from "../../images/av.png"
import pic2 from "../../images/ll.png"
import pic3 from "../../images/ven.png"
import Project from "./Project"
import "../Projects/ProjectFiles.css"
const ProjectFiles = ({languageToShow}) => {

    let projects = [{name:"P1", languages:["html5", "css3", "javascript"], image:pic1},
                    {name:"P2", languages:["html5", "javascript", "python"], image:pic2},
                    {name:"P3", languages:["python"], image:pic3},{name:"P1", languages:["html5", "css3", "javascript"], image:pic1},
                    {name:"P2", languages:["html5", "javascript", "python"], image:pic2},
                    {name:"P3", languages:["python"], image:pic3},{name:"P1", languages:["html5", "css3", "javascript"], image:pic1},]

    return ( 
        <div className="projectFiles">
            {projects.map((project)=>
                project.languages.includes(languageToShow) &&(
                <Project project={project}></Project>
                )
            )}
            </div>
    
     );
}
 
export default ProjectFiles;