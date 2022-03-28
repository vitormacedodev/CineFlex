import styled from "styled-components";

export default function Seat({ id, name, isAvailable, setSelecteds, selectedSeats}){ 
    let selected = false;
    if(selectedSeats.includes(id)){
        selected = true
    }
    function process() {
        if (selectedSeats.includes(id)) {
            selectedSeats.splice(selectedSeats.indexOf(id), 1)
            setSelecteds([...selectedSeats]);
            return;
        }
        setSelecteds([...selectedSeats, id]);
    }
    
    return(
        <>
            <SeatBox isAvailable={isAvailable} selected={selected} onClick={()=>isAvailable?process():alert('Assento indísponivel')}>
                <p>{name}</p>
            </SeatBox>
        </>
    )
}

const SeatBox = styled.div`
    width: 26px;
    height: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${props => !props.isAvailable ? "#F7C52B" : props.selected ? "#1AAE9E" : "#7B8B99"};
    box-sizing: border-box;
    border-radius: 17px; 
    background-color: ${props => !props.isAvailable ? "#FBE192" : props.selected ? "#8DD7CF" : "#C3CFD9"};

    p{
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 11px;
    }
`