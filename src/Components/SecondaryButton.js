import Clickable from "./Clickable";
import styled from "styled-components";

function SecondaryButton(props) {
    // Здесь устанавливается минимальная ширина для кнопки
    let minWidth = props.minWidth === undefined ? '36px' : props.minWidth;
    const Button = styled.div`
        background: ;
        border: 1px solid #64748B;
        border-radius: 20px;
        box-shadow: inset 0px 0px 0px rgba(10, 15, 26, 0.08);
        min-width: ${minWidth};
        color: #94A3B8;
        &:hover {
            background: #F9FAFC;
        }
        &:active {
            background: #F3F6F9;
        }
    `;
    return (
        <Clickable >
            <Button className='p-2 px-4 mt-4 text-md'>
                {props.children}
            </Button>
        </Clickable>
        
    );
}

export default SecondaryButton;