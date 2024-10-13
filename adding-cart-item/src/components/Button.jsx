import React from "react";

export default function CartItem() {
    const [items, setItems] = React.useState(["Thing 1"]);

    function ItemAdded() {
        setItems(prevItems => [...prevItems, `Thing ${prevItems.length + 1}`]);
    }

    return (
        <div>
            <button onClick={ItemAdded}>
                Add Item
            </button>
            <div className="items">
                {items.map((item, index) => (
                    <p key={index}>{item}</p> 
                ))}
            </div>
        </div>
    );
}
