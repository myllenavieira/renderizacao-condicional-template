import { Div, LoginButton, Titulo } from "./styled";

function TelaUsuarioCadastrado(props) {
    return (
        <Div>
            <Titulo>Você concluiu o cadastro, parabéns!!!</Titulo>
            <LoginButton onClick={ ()=>props.irPara("login") }>Logout</LoginButton>
        </Div>
        
    )
}

export default TelaUsuarioCadastrado;