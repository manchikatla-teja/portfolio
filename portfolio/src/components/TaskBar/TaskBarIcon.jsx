import "../TaskBar/TaskBar.css"

const TaskBarIcon = ({image}) => {
    let borderRadius="0%";


    

    return (
        <div className="taskbarIcon" tabIndex="1"><img className="taskBarImage" src={image} alt="" style={{borderRadius:borderRadius}}></img>
        </div>
                 );
}
 
export default TaskBarIcon;