import { useState } from "react";

function Estados() {

    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');



    function mudarNome() {
        const getNome = document.getElementById('nomeInput').value;
        setNome(getNome);

    }
    function mudarIdade() {
        const getIdade = document.getElementById('idadeInput').value;
        setIdade(getIdade);

    }

    return (
        <>
            <div className="estados">
                <label htmlFor="Nome">Nome</label>
                <input id="nomeInput" type="text"></input>
                <br />
                <label htmlFor="Idade">Idade</label>
                <input id="idadeInput" type="text"></input>
                <br />

                <button onClick={mudarNome}>Alterar Nome</button>
                <button onClick={mudarIdade}>Alterar idade</button>
                <div>{nome} <br /> {idade}</div>
            </div>

        </>
    )
}

export default Estados;