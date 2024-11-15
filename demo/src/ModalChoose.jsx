import React from 'react';

function ModalChoose({ dataChoose, onClose, onSelect, selectedItems }) {
    const handleSelect = (item) => {
        onSelect(item); // Pass the selected item back to the parent component
    };

    const isSelected = (item) => selectedItems.includes(item);

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Select an Option</h2>
                <ul>
                    {dataChoose.map((item, index) => (
                        <li
                            key={index}
                            onClick={() => handleSelect(item)}
                            style={{
                                cursor: 'pointer',
                                backgroundColor: isSelected(item) ? 'red' : 'transparent',
                                color: isSelected(item) ? 'white' : 'black'
                            }}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default ModalChoose;
