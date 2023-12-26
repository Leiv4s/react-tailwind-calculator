import "../Visor/Visor.css"
import {useState} from "react";

function Visor() {

    let inputVisorMemoria = useState("");

    const [inputVisor, setInputVisor] = useState("0");

    const attInputVisor = (value) => {
        setInputVisor(value)
    }



    return (
        <>
            <div className="visorMemoria bg-amber-50">
                <p color="black">{inputVisorMemoria}</p>
            </div>
            <div className="visor bg-amber-50">
                <p color="black">{inputVisor}</p>
            </div>
        </>
    );
}

export default Visor;