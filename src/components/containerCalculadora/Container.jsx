import "./Container.css"
import Button from "../Button/Button.jsx";
import {useState, useEffect} from 'react';


function Container() {

    const [display, setDisplay] = useState("0");

    //Funções visor
    function addNumeroToDisplay(number) {
        if (display != 0) {
            setDisplay(display + number)
        } else {
            setDisplay(number)
        }
    }

    function apagarUltimoDigito() {
        let stringAtualizada = display.slice(0, -1);
        setDisplay(stringAtualizada);
    }
    function clearDisplay() {
        setDisplay("0")
    }

    /* UseEffect Function*/
    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === '1') {
                addNumeroToDisplay("1");
            } else if (event.key === '2') {
                addNumeroToDisplay("2");
            } else if (event.key === '3') {
                addNumeroToDisplay("3");
            } else if (event.key === '4') {
                addNumeroToDisplay("4");
            } else if (event.key === '5') {
                addNumeroToDisplay("5");
            } else if (event.key === '6') {
                addNumeroToDisplay("6");
            } else if (event.key === '7') {
                addNumeroToDisplay("7");
            } else if (event.key === '8') {
                addNumeroToDisplay("8");
            } else if (event.key === '9') {
                addNumeroToDisplay("9");
            } else if (event.key === '0') {
                addNumeroToDisplay("0");
            } else if (event.key === 'Backspace') {
                if (display.length > 1){
                    apagarUltimoDigito();
                } else {setDisplay("0")}
            }
        }
        document.addEventListener('keydown', handleKeyPress);
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [display])


    var arg1;
    var arg2;

    function setArg1() {
        arg1 = parseFloat(display);
        return arg1;
    }

// function setArg2() {
//     arg1 = parseFloat(display);
//     return arg2;
// }
    function somar(arg1, arg2) {
        let aux = setArg1(display);
        console.log(aux);
        if (arg1 != null) {
            setDisplay(arg1 + arg2);
        }
    }

    return (
        <div className="container">

            {/*visor e visor de memoria*/}
            <div className="visorMemoria bg-amber-50">
                <p color="black">0</p>
            </div>
            <div className="visor bg-amber-50">
                <p color="black">{display}</p>
            </div>

            {/*div c/ grid para os botões*/}
            <div className="grid grid-cols-4 gap-0.5  h-auto w-full p-1 ">
                <Button className="bg-transparent">CE</Button>
                <Button className="bg-transparent" onClick={() => {
                    clearDisplay();
                }}>C</Button>
                <Button className="col-span-2 bg-orange-700" onClick={() => {
                    apagarUltimoDigito()
                }}>apagar</Button>
                <Button className="bg-transparent">x²</Button>
                <Button className="bg-transparent">%</Button>
                <Button className="bg-transparent">/</Button>
                <Button className="bg-transparent">*</Button>
                <Button onClick={() => {
                    addNumeroToDisplay("1")
                }}>1</Button>
                <Button onClick={() => {
                    addNumeroToDisplay("2")
                }}>2</Button>
                <Button onClick={() => {
                    addNumeroToDisplay("3")
                }}>3</Button>
                <Button className="bg-transparent">-</Button>
                <Button onClick={() => {
                    addNumeroToDisplay("4")
                }}>4</Button>
                <Button onClick={() => {
                    addNumeroToDisplay("5")
                }}> 5</Button>
                <Button onClick={() => {
                    addNumeroToDisplay("6")
                }}>6</Button>
                <Button className="bg-transparent operationButtons" onClick={() => {
                    somar(arg1, arg2)
                }}>+</Button>
                <Button onClick={() => {
                    addNumeroToDisplay("7")
                }}>7</Button>
                <Button onClick={() => {
                    addNumeroToDisplay("8")
                }}>8</Button>
                <Button onClick={() => {
                    addNumeroToDisplay("9")
                }}>9</Button>
                <Button className="row-span-2 bg-orange-700">=</Button>
                <Button className="bg-transparent">+/-</Button>
                <Button onClick={() => {
                    addNumeroToDisplay("0")
                }}>0</Button>
                <Button className="bg-transparent" onClick={() => {
                    addNumeroToDisplay(",")
                }}>,</Button>
            </div>

        </div>)
}

export default Container;