import "../TaskBar/TaskBar.css"
import html5 from "../../images/html5.svg"
import css3 from "../../images/css3.svg"
import javascript from "../../images/javascript.svg"
import react from "../../images/react.svg"
import python from "../../images/python.svg"
import java from "../../images/java.svg"
import myImage from "../../images/edited.jpg"
import TaskBarIcon from "./TaskBarIcon"
const TaskBar = () => {
    return (
        <div className="taskbar">
            <TaskBarIcon image={myImage} Class="profileIcon"></TaskBarIcon>
            <div className="SearchBar">SearchBar</div>
            <div id="html5"><TaskBarIcon image={html5} Class="taskbarIcon"></TaskBarIcon></div>
            <div id="css3"><TaskBarIcon image={css3} Class="taskbarIcon"></TaskBarIcon></div>
            <TaskBarIcon image={javascript} Class="taskbarIcon"></TaskBarIcon>
            <TaskBarIcon image={react}  Class="taskbarIcon"></TaskBarIcon>
            <TaskBarIcon image={java}  Class="taskbarIcon"></TaskBarIcon>
            <TaskBarIcon image={python} Class="taskbarIcon"></TaskBarIcon>


        </div>
    );
}
 
export default TaskBar;