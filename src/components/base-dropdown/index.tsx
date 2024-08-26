import {Dropdown} from "antd-mobile";

function BaseDropdown(props:any) {
    const  data  = props.data;

    const DropdownItem = data?.map((item:any) => (
        <Dropdown.Item key={item.key} title={item?.title} >
            <ul className="header-filter__ul" style={{ padding: 12 }}>
                {
                    item.data?.map((item:any, index:number) => (
                        <li key={index}>{item.name}</li>
                    ))
                }
            </ul>
        </Dropdown.Item>
    ))

    return (
        <Dropdown>
            {DropdownItem}
        </Dropdown>
    )
}

export default BaseDropdown;