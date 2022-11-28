import styled, { createGlobalStyle } from "styled-components";
import TelaLogin from "./components/TelaLogin/TelaLogin";
import TelaCadastro from "./components/TelaCadastro/TelaCadastro";
import TelaUsuarioCadastrado from "./components/TelaUsuarioCadastrado/TelaUsuarioCadastrado.js"
import { useState } from "react";

const GlobalStyled = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`
const MainContainer = styled.main`
  height: 100vh;
`

function App() {
  const [mudarTela, setMudarTela] = useState("login");
  // if (mudarTela === 1) {
  //   return (
  //     <MainContainer >
  //       <GlobalStyled />
  //       <TelaLogin />
  //     </MainContainer>
  //   )
  // } else {
  //   return (
  //     <MainContainer >
  //       <GlobalStyled />
  //       <TelaCadastro />
  //     </MainContainer>
  //   )
  // }
  // const mudarPagina = mudarTela === "login"? <TelaLogin /> :  <TelaCadastro />
  function irPara(tela) {
    setMudarTela(tela)
  }
  switch (mudarTela) {
    case "login":
      return (
        <MainContainer >
          <GlobalStyled />
          <TelaLogin irPara={irPara} />
        </MainContainer>
      );
    case "cadastro":
      return (
        <MainContainer >
          <GlobalStyled />
          <TelaCadastro irPara={irPara} />
        </MainContainer>);
    case "cadastrado":
      return (
        <MainContainer >
          <GlobalStyled />
          <TelaUsuarioCadastrado irPara={irPara} />
        </MainContainer>
      );
    default:
      return(
        <h1>Erro</h1>
      )
  }
}
  export default App;
