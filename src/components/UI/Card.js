import './Card.css';
const Card=(props)=>{
const card='card '+ props.card;
    return <div className={card}>{props.children}</div>
}

export default Card;