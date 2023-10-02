import "../TaskBar/TaskBar.css"
const TaskBarIcon = ({image, Class}) => {
    let borderRadius="0%";
    if(Class==="profileIcon") borderRadius="50%"; 

    return (
        <div className={Class}><img className="taskBarImage" src={image} alt="" style={{borderRadius:borderRadius}}></img>
        </div>
                 );
}
 
export default TaskBarIcon;