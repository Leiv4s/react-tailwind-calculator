import "./Container.css"
import Button from "../Button/Button.jsx";
import {useState, useEffect} from 'react';

//variaveis globais
var arg1 = null;
var arg2 = null;
var result = null;
var aux2;
var aux1;

function Container() {
    //model
    const [display, setDisplay] = useState("0");
    const [displayMemoria, setDisplayMemoria] = useState(" '");
    const [operador, setOperador] = useState("");

    //verificadores do model
    let ultimoCaractereDisplay = display[display.length - 1];
    let ultimoCaractereDisplayMemoria = displayMemoria[displayMemoria.length - 1];




    //Funções visor
    function addNumeroToDisplay(character) {
        if (display != 0) {
            setDisplay(display + character)
        } else {
            setDisplay(character)
        }
    }

    function apagarUltimoDigitoDisplay() {
        let stringAtualizada = display.slice(0, -1);
        setDisplay(stringAtualizada);
    }

    function apagarUltimoDigitoMemoria() {
        let stringAtualizada = displayMemoria.slice(0, -1);
        setDisplayMemoria(stringAtualizada);
    }

    function clearDisplay() {
        setDisplay("0")
    }

    function clearAll() {
        clearDisplay();
        setDisplayMemoria("'")
        arg1 = null;
        arg2 = null;
        setOperador("");
    }
    function contemOperador(){
        if (ultimoCaractereDisplayMemoria == "+" ||
            ultimoCaractereDisplayMemoria == "-" ||
            ultimoCaractereDisplayMemoria == "/" ||
            ultimoCaractereDisplayMemoria == "*") {
            return true;
        } else {return false}

    }



    function resultadoEnter() {
        if (arg1 != null) {
            arg2 = parseFloat(display);
            console.log("passei valor pra arg2 e ele agora é: " + arg2)
        }
        resultado();
        setDisplayMemoria(aux1 + operador + aux2 + "=" + arg1)
    }

    //UseEffect Function
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
            } else if (event.ctrlKey && event.key === 'Backspace') {
                clearDisplay()
            } else if (event.shiftKey && event.key === 'Backspace') {
                clearAll()
            } else if (event.key === 'Backspace') {
                BackspaceRestricaoDominio();
            } else if (event.key === '+') {
                adicionarOperador("+");
            } else if (event.key === '-') {
                adicionarOperador("-");
            } else if (event.key === '*') {
                adicionarOperador("*");
            } else if (event.key === '/') {
                adicionarOperador("/");
            } else if (event.key === 'Enter') {
                resultadoEnter();
            }

        }
        document.addEventListener('keydown', handleKeyPress);
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [display])


    //funções de restrição de dominio das teclas;
    function BackspaceRestricaoDominio() {
        if (ultimoCaractereDisplay === "+" ||
            ultimoCaractereDisplay === "-" ||
            ultimoCaractereDisplay === "/" ||
            ultimoCaractereDisplay === "*" ||
            ultimoCaractereDisplay === ","
        ) {
            apagarUltimoDigitoMemoria();
            apagarUltimoDigitoDisplay();
        } else if (display.length > 1) {
            apagarUltimoDigitoDisplay();
        } else {
            setDisplay("0")
        }
    }


    //funções de operação:
    function setArg() {
        return parseFloat(display);
    }

    function adicionarOperador(operadorPassado) {
        console.log("FUNC AdicionarOperador")

        setOperador(operadorPassado)
        if (arg1 == null) {
            arg1 = setArg(display);
            setDisplay("0")
            setDisplayMemoria(arg1 + operadorPassado)

        } else if (arg1 != null) {
            arg2 = parseFloat(display);
        }

        if (arg1 != null && arg2 != null) {
            resultado();
        }
    }


    function resultado() {
        console.log("FUNC RESULTADO")
        console.log(arg1, arg2, operador)
        if (arg1 !== "" && arg2 !== "0" && operador !== "") {
            if (operador.includes("+")) {
                console.log("na func resultado, entrei no +")
                result = arg1 + arg2;
                setDisplayMemoria(result + "+")
            } else if (operador.includes("-")) {
                result = arg1 - arg2;
                setDisplayMemoria(result + "-")
            } else if (operador.includes("/")) {
                result = arg1 / arg2;
                setDisplayMemoria(result + "/")
            } else if (operador.includes("*")) {
                result = arg1 * arg2;
                setDisplayMemoria(result + "*")
            }
            aux1 = arg1;
            aux2 = arg2;
            setDisplay(0);
            arg1 = result;
            arg2 = 0;
            console.log(arg1, arg2, operador)
        }
    }

    return (
        <div className="container">
            {/*visor e visor de memoria*/}
            <div className="visorMemoria bg-amber-50">
                <p color="black">{displayMemoria}</p>
            </div>
            <div className="visor bg-amber-50">
                <p color="black">{display}</p>
            </div>

            {/*div c/ grid para os botões*/}
            <div className="grid grid-cols-4 gap-0.5  h-auto w-full p-1 ">
                <Button className="bg-transparent" onClick={() => {
                    clearDisplay()
                }}>CE</Button>
                <Button className="bg-transparent" onClick={() => {
                    clearAll();
                }}>C</Button>
                <Button className="col-span-2 bg-orange-700" onClick={() => {
                    apagarUltimoDigitoDisplay()
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
                <Button className="bg-transparent" onClick={() => {
                    adicionarOperador("-")
                }}>-</Button>
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
                    adicionarOperador("+")
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
                <Button className="row-span-2 bg-orange-700" onClick={() => {
                    resultadoEnter()
                }}>=</Button>
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