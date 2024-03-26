import styled from 'styled-components';
import SecondaryButton from '../../../../../Components/SecondaryButton';
import EditIcon from '../../../../../Icons/EditIcon';
import RemoveIcon from '../../../../../Icons/RemoveIcon';
import IconOnlyButton from '../../../../../Components/IconOnlyButton.js';

const Option = styled.div`
    
`;

function ListElement(props) {
    return (
        <div className='d-flex flex-row align-items-center align-self-stretch gap-1'>
            <Option className='flex-grow-1 p-0 pt-4'>{props.children}</Option>
            <SecondaryButton minWidth='0'>Ред.</SecondaryButton>
            <SecondaryButton minWidth='0'>Удл.</SecondaryButton>
        </div>
    );
}

export default ListElement;