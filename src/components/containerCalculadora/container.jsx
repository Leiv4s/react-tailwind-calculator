import "../containerCalculadora/container.css"
import "../buttonGroup/buttonGroup.css"
import ButtonGroup from "../buttonGroup/buttonGroup.jsx";
function Container() {

    return (
        <div className="container">
            <div className="visorMemoria bg-amber-50">
                <p color="black">aa</p>
            </div>
            <div className="visor bg-amber-50">
                <p color="black">aa</p>
            </div>
            <ButtonGroup />
        </div>
    )
}
export default Container;