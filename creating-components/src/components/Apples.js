function Apple(props){
    return(
        <div className = "promo-selector">
            <h2>These apples are : {props.color}</h2>
            <h2>There are {props.number} apples.</h2>
        </div>
    );
};

export default Apple;