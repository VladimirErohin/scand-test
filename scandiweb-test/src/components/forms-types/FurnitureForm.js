import React, {useEffect, useRef, useState} from 'react';
import f from '../form-data/FormData.module.css';

const FurnitureForm = ({
                           createCard,
                           nameProd,
                           prod,
                           setSaveDisable,
                           setIsEmpty,
                           setFurnitureSize
                       }) => {
    const [sizeValue, setSize] = useState([
        {id: 'height', name: 'Height', size: '', message: 'Please, provide height...'},
        {id: 'width', name: 'Width', size: '', message: 'Please, provide width...'},
        {id: 'length', name: 'Length', size: '', message: 'Please, provide length...'}]);
    const [sizeFurniture, setSizeFurniture] = useState();
    const sizeRef = useRef();

    let checkSize = sizeValue.filter(el => el.size === '').length;

    useEffect(() => {
        setSaveDisable(false)
        if (checkSize === 0) {
            send()
        }
        if (checkSize === 3) {
            setIsEmpty(false)
        }
        setFurnitureSize(checkSize)
    }, [checkSize]);

    let send = () => {

        if (checkSize === 0) {
            createCard(prod, nameProd, sizeValue.map(p => p.size).join('x'))
            setSaveDisable(false)
        }
    };

    function onFurniture(e) {

        let nameSize = e.target.name
        let n = sizeValue.map(e => {
            if (e.name === nameSize) {
                return {...e, size: sizeFurniture}
            } else {
                return e
            }
        });
        setSize(n)
    };

    return (
        <div className={f.form_furniture}>
            {sizeValue.map(s =>
                <div className={f.form_type_furniture} key={s.name}>
                    <span>{s.name}(CM)</span>
                    <input
                        id={s.id}
                        type="number"
                        onkeydown="return event.keyCode !== 69"
                        name={s.name}
                        ref={sizeRef}
                        placeholder={s.message}
                        onChange={e => setSizeFurniture(e.target.value)}
                        onBlur={(e) => onFurniture(e)}
                    />
                </div>
            )}
        </div>
    );
};

export default FurnitureForm;