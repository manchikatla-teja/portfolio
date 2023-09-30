import "../TaskBar/TaskBar.css"
import html5 from "../../images/html5.svg"
import css3 from "../../images/css3.svg"
import javascript from "../../images/javascript.svg"
import react from "../../images/react.svg"
import python from "../../images/python.svg"
import java from "../../images/java.svg"

import TaskBarIcon from "./TaskBarIcon"
const TaskBar = () => {
    return (
        <div className="taskbar">
            <div className="SearchBar">SearchBar</div>
            <div className="taskbarIcon" id="html5"><TaskBarIcon image={html5}></TaskBarIcon></div>
            <div className="taskbarIcon" id="css3"><TaskBarIcon image={css3}></TaskBarIcon></div>
            <div className="taskbarIcon"><TaskBarIcon image={javascript}></TaskBarIcon></div>
            <div className="taskbarIcon"><TaskBarIcon image={react}></TaskBarIcon></div>
            <div className="taskbarIcon"><TaskBarIcon image={java}></TaskBarIcon></div>
            <div className="taskbarIcon"><TaskBarIcon image={python}></TaskBarIcon></div>

        </div>
    );
}
 
export default TaskBar;