import Clickable from "./Clickable";
import styled from "styled-components";

function SecondaryButton(props) {
    // Здесь устанавливается минимальная ширина для кнопки
    let minWidth = props.minWidth === undefined ? '36px' : props.minWidth;
    const Button = styled.div`
        background: ;
        border: 1px solid #DFDFDF;
        border-radius: 24px;
        box-shadow: inset 0px 0px 0px rgba(10, 15, 26, 0.08);
        min-width: ${minWidth};
        color: #DFDFDF;
        &:hover {
            background: #DFDFDF;
        }
        &:active {
            background: #DFDFDF;
        }
    `;
    return (
        <Clickable >
            <Button className='p-2 mt-4 text-md'>
                {props.children}
            </Button>
        </Clickable>
        
    );
}

export default SecondaryButton;