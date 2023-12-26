import "./ButtonGroup.css"
import "../Button/button.css"

function buttonGroup () {




    return (
        <div className="grid grid-cols-4 gap-0.5 buttonGroup">
            <button  className="bg-transparent">ce</button>
            <button className="bg-transparent">C</button>
            <button className="col-span-2 bg-orange-700">apagar</button>
            <button  className="bg-transparent">x²</button>
            <button  className="bg-transparent">%</button>
            <button  className="bg-transparent">/</button>
            <button className="bg-transparent">*</button>
            <button value={1} >1</button>
            <button value={2} >2</button>
            <button value={3}>3</button>
            <button className="bg-transparent">-</button>
            <button value={4}>4</button>
            <button value={5}>5</button>
            <button value={6}>6</button>
            <button className="bg-transparent operationButtons">+</button>
            <button value={7}>7</button>
            <button value={8}>8</button>
            <button value={9}>9</button>
            <button className="row-span-2 bg-orange-700">+/-</button>
            <button className="bg-transparent">+/-</button>
            <button value={0}>0</button>
            <button className="bg-transparent">,</button>
        </div>
    );
}

export default buttonGroup
