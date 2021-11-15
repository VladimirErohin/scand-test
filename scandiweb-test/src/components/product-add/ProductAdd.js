import React, {useEffect, useState} from 'react';
import c from './ProductAdd.module.css';
import Navbar from "../navbar/Navbar";
import FormData from "../form-data/FormData";
import {useDispatch} from "react-redux";
import {addCard} from "../../reducer/infoReducer";

const ProductAdd = () => {
    const dispatch = useDispatch();
    const [newCard, setNewCard] = useState({});
    const [saveDisable, setSaveDisable] = useState(true);
    const [isEmpty, setIsEmpty] = useState(false);
    const [message, setMessage] = useState(false);
    const [fur, setDisableF] = useState(true);
    const [furnitureSize, setFurnitureSize] = useState(0);

    useEffect(() => {
        if (!fur) {
            setSaveDisable(true)
        }
        setSaveDisable(false)
    }, [fur, furnitureSize]);

    function onSave() {
        save()
        dispatch(addCard(newCard.id, newCard.card))
    };

    let save = () => {
        setMessage(true)
    };

    return (
        <div>
            <Navbar
                name='Product Add'
                firstBtn='Save'
                secondBtn='Cancel'
                saveDisable={saveDisable}
                onSave={onSave}
                linkSave={!isEmpty ? '/form' : '/products'}
                linkS={'/products'}
            > </Navbar>
            <div className={c.card}>
                <FormData
                    setSaveDisable={setSaveDisable}
                    setNewCard={setNewCard}
                    saveDisable={saveDisable}
                    setDisableF={setDisableF}
                    fur={fur}
                    setIsEmpty={setIsEmpty}
                    setMessage={setMessage}
                    setFurnitureSize={setFurnitureSize}
                    onSave={onSave}
                />
                {message ? <div className={c.error}> PLEASE SUBMIT ALL FIELDS! </div> : ''}
            </div>

        </div>
    );
};

export default ProductAdd;