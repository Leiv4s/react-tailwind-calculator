import "./buttonGroup.css"

function buttonGroup () {

    return (
        <div className="grid grid-cols-4 gap-0.5 buttonGroup">
            <button className="bg-transparent">ce</button>
            <button className="bg-transparent">C</button>
            <button className="col-span-2 bg-orange-700">apagar</button>
            <button className="bg-transparent">x²</button>
            <button className="bg-transparent">%</button>
            <button className="bg-transparent">/</button>
            <button className="bg-transparent">*</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button className="bg-transparent">-</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button className="bg-transparent operationButtons">+</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button className="row-span-2 bg-orange-700">+/-</button>
            <button className="bg-transparent">+/-</button>
            <button>0</button>
            <button className="bg-transparent">,</button>
        </div>
    );
}

export default buttonGroup
