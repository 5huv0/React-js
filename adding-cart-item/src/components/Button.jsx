import React from "react";

export default function CartItem(){
    const [items , setItems] = React.useState(["Thing 1", "Thing 2"])


    function ItemAdded(){
        const item = items.map(i => {
            return `Thing ${items.length + 1}`
        })
        setItems(item)
    }

    return(
        <div>
            <button onClick={ItemAdded}>
                Add Item
            </button>
            <div className="items">
                <p>
                    {setItems}
                </p>
            </div>
        </div>
    )
} 