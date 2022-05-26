function Form() {

    function cadastrarUsuario() {
        console.log('Cadastrou o usário!')
    }
    <div>
        <h1>Meu cadastro:</h1>
        <form onSubmit={cadastrarUsuario}>
            <div>
                <input Type="text" placeholder="Digite o seu nome" />
            </div>
            <div>
                <input type="submit" value="Cadastrar" />
            </div>
        </form>
    </div>

}

export default Form