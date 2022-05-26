function Evento() {
    function meuEvento() {
        console.log('Opa, fui ativado!')
    }

    return (
        <div>
            <p>Clique para disparar em um evento:</p>
            <button onclick={meuEvento} >Ativar!</button>
        </div>
    )
}

export default Evento