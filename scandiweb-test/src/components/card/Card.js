import React, {useState} from 'react';
import c from './Card.module.css';
import {useDispatch} from "react-redux";
import {checkedCard} from "../../reducer/infoReducer";

const Card = ({id, sku, name, price, size, weight, dimension, isDelete}) => {

    const [check, setCheck] = useState(isDelete);
    const dispatch = useDispatch();

    let onDelete = () => {
        setCheck(prev => !prev)
        dispatch(checkedCard(id, sku, !check))
    }

    return (
        <div className={c.card} key={id}>
            <div className={c.noteDelete}><input type="checkbox" checked={check} onChange={() => onDelete()}/></div>
            <div className={c.card_item}>
                <div className={c.card_id}>
                    <div>{sku}</div>
                    <div>{name}</div>
                    <div>{price}$</div>
                    {size ? <div>Size: {size}MB </div> : ''}
                    {weight ? <div>Weight: {weight}KG</div> : ''}
                    {dimension ? <div>Dimension: {dimension}</div> : ''}
                </div>
            </div>
        </div>
    );
};

export default Card;