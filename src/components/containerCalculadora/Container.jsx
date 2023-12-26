import "./Container.css"
import "../ButtonGroup/ButtonGroup.css"
import ButtonGroup from "../ButtonGroup/ButtonGroup.jsx";
import Visor from "../Visor/Visor.jsx";
function Container() {

    return (
        <div className="container">

            <Visor />
            <ButtonGroup />
        </div>
    )
}
export default Container;