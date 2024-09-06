function Main(props){
    const mainStyle = {
        background : "grey",
        width : "calc(100%)",
        marginLeft : "10px",
    }

    return <h1 
    style={mainStyle}
    >{props.greet} Mac</h1>
}

export default Main;