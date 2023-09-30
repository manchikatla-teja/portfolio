import "../TaskBar/TaskBar.css"
const TaskBarIcon = ({image}) => {
    return ( 
        <div className="taskBarIcon">
            <img className="taskBarImage" src={image} alt=""></img>
        </div>
     );
}
 
export default TaskBarIcon;