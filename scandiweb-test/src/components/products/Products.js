import React from 'react';
import Card from "../card/Card";
import p from './Products.module.css';

const Products = (props) => {
return (
            <div className={p.product} key={props.id}>
                {
                    props.products.map(p =>
                        <Card
                            id={props.id}
                            key={p.sku}
                            sku={p.sku}
                            name={p.name}
                            price={p.price}
                            size={p.size}
                            weight={p.weight}
                            dimension={p.dimension}
                            isDelete={p.isDelete}
                        />
                    )
                }
        </div>
    );
};

export default Products;