import { useState } from "react"

function Contador() {

    const [contador, setContador] = useState(0);

    function aumentar() {
        setContador(contador + 1);
    }

    function diminuir() {
        setContador(contador - 1);
    }

    return (
        <>
        <div className="contador">
           <input type="text">{contador}</input>
            <button onClick={aumentar}>Aumentar</button>
            <button onClick={diminuir}>Diminuir</button>

        </div>
        </>
    )

}

export default Contador();