import "./Container.css"
import Button from "../Button/Button.jsx";




function Container() {


    return (
        <div className="container">

            {/*visor e visor de memoria*/}
            <div className="visorMemoria bg-amber-50">
                <p color="black">0</p>
            </div>
            <div className="visor bg-amber-50">
                <p color="black">0</p>
            </div>


            {/*div c/ grid para os botões*/}
            <div className="grid grid-cols-4 gap-0.5 h-80 w-full ">
                <Button className="bg-transparent" onClick={() => {console.log("hue")}}>CE</Button>
                <Button className="bg-transparent">C</Button>
                <Button className="col-span-2 bg-orange-700">apagar</Button>
                <Button className="bg-transparent">x²</Button>
                <Button className="bg-transparent">%</Button>
                <Button className="bg-transparent">/</Button>
                <Button className="bg-transparent">*</Button>
                <Button>1</Button>
                <Button>2</Button>
                <Button>3</Button>
                <Button className="bg-transparent">-</Button>
                <Button>4</Button>
                <Button>5</Button>
                <Button>6</Button>
                <Button className="bg-transparent operationButtons">+</Button>
                <Button>7</Button>
                <Button>8</Button>
                <Button>9</Button>
                <Button className="row-span-2 bg-orange-700">+/-</Button>
                <Button className="bg-transparent">+/-</Button>
                <Button>0</Button>
                <Button className="bg-transparent">,</Button>
            </div>

        </div>)
}

export default Container;