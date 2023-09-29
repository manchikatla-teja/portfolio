import AppIcon from "./AppIcon"
import "../Application/Application.css"
const Application = ({image, appName}) => {
    return ( 
        <div className="Application">
            <AppIcon image={image}></AppIcon>
            <div className="AppName">{appName}</div>
        </div>
     );
}
 
export default Application;