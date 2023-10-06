import "../Projects/ProjectFiles.css"
const Project = ({project}) => {
    return (
        <div className="project">
            <div >{project.name}</div>
            <div >{project.languages}</div>
            <img src={project.image} style={{width: "1rem", height:"1rem"}} alt=""></img>
        </div>
    );
}
 
export default Project;