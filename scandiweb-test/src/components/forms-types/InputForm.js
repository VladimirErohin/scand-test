import React, {useEffect, useState} from 'react';

const InputForm = ({createCard, prod, nameProd, title, props, setSaveDisable}) => {
    const [prodParam, setProdParam] = useState('');

    useEffect(() => {
        if (prodParam) {
            onProd()
        }
        if (prodParam === '') {
            onProd()
            setSaveDisable(true)
        }
    }, [prodParam]);

    let onProd = () => {
        createCard(prod, nameProd, prodParam)
    };

    return (
        <div>{title}
            <input
                {...props}
                type='number'
                value={prodParam}
                onChange={e => setProdParam(e.target.value)}
                onBlur={() => onProd()}
            />
        </div>
    );
};

export default InputForm;
