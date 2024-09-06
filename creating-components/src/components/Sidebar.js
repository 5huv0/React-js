function Sidebar(){
    const asideStyle = {
        background : "lightGreen",
        width : "calc(100%)",
        marginLeft : "10px",
    }


    return (
    <aside 
    style={asideStyle}
    className="sidebar-components">
       <h1>sidebar components here</h1>
    </aside>
    )   
}

export default Sidebar;