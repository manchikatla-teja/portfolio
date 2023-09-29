import "../Application/Application.css"
const AppIcon = ({image}) => {
    return ( 
        <div className="AppIcon">
            <img className="AppImage" src={image} alt=""></img>
        </div>
     );
}
 
export default AppIcon;