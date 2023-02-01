import { Children, forwardRef, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dropdown } from "react-bootstrap";
import "../styles/TodoSettings.css";


const TodoSettings = () => {
    const SettingMenuRef = useRef(null);

    return (
        <>
            <Dropdown drop={'down-centered'}>
                <Dropdown.Toggle active={true} as={'span'}>
                    <FontAwesomeIcon
                        icon="sliders"
                        size={'xl'}
                        color={'#075B90'}
                    />
                </Dropdown.Toggle>

                <Dropdown.Menu variant="dark">
                    <Dropdown.Item>Zobrazení</Dropdown.Item>
                    <Dropdown.Item>Seřazení</Dropdown.Item>
                    <Dropdown.Item>Vymazání</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </>
    );
}

export default TodoSettings;
