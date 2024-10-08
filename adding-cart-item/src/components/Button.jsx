import React from "react";

export default function CartItem(){
    const [items , setItems] = React.useState(["Thing 1", "Thing 2"])

    function ItemAdded(){
        
    }
    return(
        <div>
            <button onClick={ItemAdded}>
                Add Item
            </button>
            <div className="items">
                <p>
                    item added
                </p>
            </div>
        </div>
    )
} 