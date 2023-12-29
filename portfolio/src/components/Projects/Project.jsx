import repoImage from "../../images/github.svg"
import demoImage from "../../images/demoImage.svg"
import "../Projects/ProjectFiles.css"
const Project = ({project, delay}) => {
    
    return (
        <div className="project" style={{animationDelay: `${delay*100}ms`}}>
            
            {project.image && <img className="projectImage" src={project.image} alt=""></img>}
            <div className="projectInfo">
            <div className="projectTitle">{project.name}</div>
            <ul>
            {
            project.languages.filter((item, key)=>key<3).map((item)=>{
                return <li>{item}</li>
            })}
            {
            project.languages.length > 3 && <li>... and more</li>
            }
            </ul>
            
            {/* <div className="projectLanguages">{project.languages}</div> */}
            <div style={{display:"flex", justifyContent:"space-between"}}>
            {project.repoLink && 
            <a style={{textDecoration:"none"}} href={project.repoLink} target="_blank" className="projectGitRepoLink" style={{marginRight:"1.5rem"}}>
                <img className="linkImage" src={repoImage}></img>
                <span className="linkToProject">REPO</span>
            </a>}
            {project.demoLink &&
            <a href={project.demoLink} target="_blank" className="projectDemoLink">
                <img className="linkImage" src={demoImage}></img>
                <span className="linkToProject">DEMO</span>
            </a>}
            </div>
            </div>
        </div>
    );
}
 
export default Project;