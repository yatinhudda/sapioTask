const Card = (props) => {
    return(
        <div className = "card_parent">
            <div className = "card_data" style = {{border: "2px solid" + props.dataColor}}>
                <h1 style={{color: props.dataColor}} >{props.finalAnswer}</h1>
            </div>
        </div>
    )
};
export default Card;