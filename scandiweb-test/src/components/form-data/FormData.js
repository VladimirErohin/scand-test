import React, {useEffect, useRef, useState} from 'react';
import f from './FormData.module.css';
import {useSelector} from "react-redux";
import SelectType from "../select-type/SelectType";
import FurnitureForm from "../forms-types/FurnitureForm";
import InputForm from "../forms-types/InputForm";

const FormData = ({setNewCard, setSaveDisable, setIsEmpty, setDisableF, fur, setMessage, setFurnitureSize}) => {

    const allCard = useSelector(state => state.info.cardList);
    const productsSku = allCard.map(p => p.product).reduce((a, b) => a.concat(b));
    const [skuValue, setSkuValue] = useState('');
    const [skuError, setSkuError] = useState('enter only uppercase letter(latin) and numbers');
    const [checkSku, setCheckSku] = useState(false);
    const [mistake, setMistake] = useState(false);
    const [nameValue, setNameValue] = useState('');
    const [nameError, setNameError] = useState(false);
    const [priceValue, setPriceValue] = useState();
    const [type, setType] = useState('');
    const skuRef = useRef();
    const nameRef = useRef();
    const priceRef = useRef();

    useEffect(() => {
        if (skuValue && nameValue) {
            setDisableF(false)
            createCard()
        }

    }, [skuValue, nameValue]);

    let onCheckSku = () => {
        if (checkSku) {
            setMistake(true)
            setSkuError('such a sku exists')
        }
    }

    let onSkuChange = () => {
        setSkuValue(skuRef.current.value)
        let check = productsSku.find(e => e.sku === skuRef.current.value)
        setCheckSku(check)
        let re = /[a-z/а-яёА-ЯЁ?!@#$%^&*:()_=+-]/g;
        if (re.test(String(skuValue))) {
            setMistake(true)
        } else {
            setMistake(false)
        }
    };

    let onNameChange = () => {
        setNameValue(nameRef.current.value);
        let re = /[а-яёА-ЯЁ0-9?!@#$%^&*:()_=+-]/g;
        if (re.test(String(nameRef.current.value))) {
            setNameError(true)
        } else {
            setNameError(false)
        }
    };

    let onPriceChange = () => {
        let price = Number(priceRef.current.value).toFixed(2);
        setPriceValue(price);
    };

    let createCard = (prod, name, param) => {
        let params = param;
        let id = type;
        let card;
        if (id === prod) {
            card = {
                sku: skuValue,
                name: nameValue,
                price: priceValue,
                isDelete: false,
            }
            if (name === 'size') {
                card = {...card, size: params}
            } else if (name === 'dimension') {
                card = {...card, dimension: params}
            } else {
                card = {...card, weight: params}
            }
        }
        setNewCard({id, card});
        setIsEmpty(true);
        setSaveDisable(false);

    }

    return (
        <div className={f.form_content}>
            <form className={f.form_data}>
                <div className={f.field}>
                    <span className={f.title}>SKU</span>
                    <input id='sku'
                           ref={skuRef}
                           onChange={() => onSkuChange()}
                           name="sku"
                           type="text"
                           onBlur={() => onCheckSku()}/>
                </div>
                {mistake && <div className={f.error}>{skuError}</div>}
                <div className={f.field}>
                    <span>Name</span>
                    <input
                        id='#name'
                        ref={nameRef}
                        onChange={() => onNameChange()}
                        name="name"
                        type="text"/>
                </div>
                {nameError && <div className={f.error}>enter only letter(latin)</div>}
                <div className={f.field}>
                    <span>Price($)</span>
                    <input
                        id='#price'
                        onChange={(e) => onPriceChange(e.target.value)}
                        ref={priceRef}
                        name='price'
                        type="number"
                        min="0.01" step="0.01" max="10000"
                        placeholder="0.00"
                    /></div>
                <div className={f.switcher}><span>Type Switcher</span>
                    <SelectType
                        setType={setType}
                        setSaveDisable={setSaveDisable}
                        fur={fur}
                    />
                </div>
                {type === 'dvd' && <div className={f.form_type}><
                    InputForm
                    title='Size(MB)'
                    id="#size"
                    prod='dvd'
                    nameProd='size'
                    placeholder='Please, provide size...'
                    setSaveDisable={setSaveDisable}
                    createCard={createCard}

                /></div>}
                {type === 'furniture' && <div className={f.form_type}><
                    FurnitureForm
                    prod='furniture'
                    nameProd='dimension'
                    setIsEmpty={setIsEmpty}
                    setMessage={setMessage}
                    setFurnitureSize={setFurnitureSize}
                    setSaveDisable={setSaveDisable}
                    createCard={createCard}/></div>}
                {type === 'book' && <div className={f.form_type}><
                    InputForm
                    title='Weight(KG)'
                    id="#weight"
                    prod='book'
                    nameProd='weight'
                    setSaveDisable={setSaveDisable}
                    placeholder='Please, provide weight...'
                    createCard={createCard}/></div>}
            </form>
        </div>
    );
};
export default FormData;