import React from "react";

function Header(){
    const headerStyle = {
        background : "lightBlue",
        width : "calc(70%)",
        marginLeft : "10px",
    }


    return <h1
    style={headerStyle}
    >Header components here </h1>;
}

export default Header;