import "../Projects/ProjectFiles.css"
const Project = ({project}) => {
    return (
        <div className="project">
            
            <img className="projectImage" src={project.image} alt=""></img>
            <div className="projectInfo">
            <div className="projectTitle">{project.name}</div>
            <ul>
            {project.languages.map((item, key)=>{
                return <li>{item}</li>
            })}
            </ul>
            {/* <div className="projectLanguages">{project.languages}</div> */}
            <div style={{display:"flex"}}>
            <a className="projectGitRepoLink">repolink: asdf</a>
            <a className="projectDemoLink">demolink: asdf</a>
            </div>
            </div>
        </div>
    );
}
 
export default Project;