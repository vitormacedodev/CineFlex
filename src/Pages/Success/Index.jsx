import TitlePage from "../../Components/TitlePage/Index"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"
export default function Success() {
    const navigate = useNavigate();
    return (
        <>
            <main>
                <TitlePage color="#247A6B" title="Pedido feito com sucesso!" fontWeight={'bold'} top={35} bot={37} />
                <FinalBox>
                    <div>
                        <h1>Filme e sessão</h1>
                        <h2>FILME NOME</h2>
                        <h2>DATA E HORA</h2>
                    </div>
                    <div>
                        <h1>INGRESSOS</h1>
                        <h2>ASSENTO1</h2>
                        <h2>ASSENTO2</h2>
                    </div>
                    <div>
                        <h1>COMPRADOR</h1>
                        <h2>Nome: a9shiuahsuas</h2>
                        <h2>CPF: aiusghaiuysgyais</h2>
                    </div>
                </FinalBox>
                <ButtonBox>
                    <button onClick={()=>navigate('/')}>Voltar para o Home</button>
                </ButtonBox>
            </main>
        </>
    )
}

const FinalBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    gap: 35px;
    
    div{
        width: 321px;

        h1{
            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 24px;
            line-height: 28px;
            color: #293845;
        }

        h2{
            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 22px;
            line-height: 26px;
            color: #293845;
        }
    }
`
const ButtonBox = styled.div`
    margin-top: 35px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    button{
        color: #FFFFFF;
        width: 225px;
        height: 42px;
        background: #E8833A;
        border-radius: 3px;
        border-style: none;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
    }
`