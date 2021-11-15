import React from 'react';
import Navbar from "../navbar/Navbar";
import p from "./ProductList.module.css";
import {useDispatch, useSelector} from "react-redux";
import Products from "../products/Products";
import {massDelete} from "../../reducer/infoReducer";

const ProductList = () => {
    const allCard = useSelector(state => state.info.cardList);
    const dispatch = useDispatch();

    let onMassDelete = () => {
        dispatch(massDelete())
    };

    return (
        <div>
            <Navbar
                name='Product List'
                firstBtn='ADD'
                secondBtn='MASS DELETE'
                link="/form"
                linkS="/products"
                onSecondBtn={onMassDelete}
            />
            <div className={p.list_content}>
                {allCard.map(p => (
                        <Products
                            id={p.id}
                            products={p.product}
                        />
                    )
                )}
            </div>
        </div>
    );
};

export default ProductList;