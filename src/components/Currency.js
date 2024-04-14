import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Dropdown from 'react-bootstrap/Dropdown';

const Currency = () => {
    const { dispatch } = useContext(AppContext);

    const changeCurrency = (eventKey, event) => {
        document.getElementById("dropdown-basic").innerText = "Currency (" + event.target.textContent + ")";

        dispatch({
            type: 'CHG_CURRENCY',
            payload: eventKey
        });
    }

    const normalDropdownStyle = {backgroundColor: "lightgreen", color: "black"}
    const highlightDropdownStyle = {backgroundColor: "white", color: "black"}

    const setDropdownNormalStyle = (event) => {
        event.target.style = normalDropdownStyle;
    }

    const setDropdownHighlightStyle = (event) => {
        event.target.style = highlightDropdownStyle;
    }

    return (
        <Dropdown onSelect={changeCurrency}>
      <Dropdown.Toggle variant="success" id="dropdown-basic" style={{backgroundColor: "lightgreen", color: "white"}}>
        Currency (£ Pound)
      </Dropdown.Toggle>

      <Dropdown.Menu style={{backgroundColor: "lightgreen"}}>
        <Dropdown.Item eventKey="$" onMouseEnter={setDropdownHighlightStyle} onMouseLeave={setDropdownNormalStyle} style={normalDropdownStyle}>$ Dollar</Dropdown.Item>
        <Dropdown.Item eventKey="£" onMouseEnter={setDropdownHighlightStyle} onMouseLeave={setDropdownNormalStyle} style={normalDropdownStyle}>£ Pound</Dropdown.Item>
        <Dropdown.Item eventKey="€" onMouseEnter={setDropdownHighlightStyle} onMouseLeave={setDropdownNormalStyle} style={normalDropdownStyle}>€ Euro</Dropdown.Item>
        <Dropdown.Item eventKey="₹" onMouseEnter={setDropdownHighlightStyle} onMouseLeave={setDropdownNormalStyle} style={normalDropdownStyle}>₹ Ruppee</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    );
};
export default Currency;