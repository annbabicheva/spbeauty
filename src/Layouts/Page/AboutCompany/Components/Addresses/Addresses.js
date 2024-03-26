import PrimaryButton from "../../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";
function Addresses() {
    return (
        <div className='d-inline-flex flex-column gap-1 mt-2 col address-block'>
            <div className='title'>Адреса заведений</div>
            <div className='d-inline-flex flex-column gap-4'>
                <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
                <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
                <div className='d-flex flex-column mt-auto p-2 bd-highlight-5'><SecondaryButton>Добавить филиал</SecondaryButton></div>
            </div>
        </div>
    );
}

export default Addresses;