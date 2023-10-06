import "../TaskBar/TaskBar.css"
import html5 from "../../images/html5.svg"
import css3 from "../../images/css3.svg"
import javascript from "../../images/javascript.svg"
import react from "../../images/react.svg"
import python from "../../images/python.svg"
import java from "../../images/java.svg"
import TaskBarIcon from "./TaskBarIcon"

const TaskBar = ({func}) => {
    return (

        <div className="taskbar">
            <div className="SearchBar">SearchBar</div>
            <div id="html5" onClick={()=>func("html5")}><TaskBarIcon image={html5} ></TaskBarIcon></div>
            <div id="css3" onClick={()=>func("css3")}><TaskBarIcon image={css3} ></TaskBarIcon></div>
            <div id="javascript" onClick={()=>func("javascript")}><TaskBarIcon image={javascript} ></TaskBarIcon></div>
            <div id="react" onClick={()=>func("react")}><TaskBarIcon image={react}  ></TaskBarIcon></div>
            <div id="java" onClick={()=>func("java")}><TaskBarIcon image={java}  ></TaskBarIcon></div>
            <div id="python" onClick={()=>func("python")}><TaskBarIcon image={python} ></TaskBarIcon></div>


        </div>
    );
}
 
export default TaskBar;