export const ADD_CARD = 'ADD_CARD';
export const DELETE_CARDS = 'DELETE_CARD';
export const CHECKED_CARD = 'CHECKED_CARD';

const initialState = {
    cardList: [
        {
            id: 'dvd', product: [
                {sku: "JVC200123", name: 'Asme DISK', price: "1.00", size: 700, isDelete: true},
                {sku: "JVC200222", name: 'Best DISK', price: "6.00", size: 600, isDelete: false},
                {sku: "JVC2110066", name: 'World DISK', price: "4.00", size: 450, isDelete: false}
            ]
        },
        {
            id: 'book', product: [
                {sku: "GGWP0007", name: 'War and Peace', price: "20.00", weight: 2, isDelete: false},
                {sku: "GGWP8888", name: 'World about us', price: "33.00", weight: 1, isDelete: false},
                {sku: "GGWP5555", name: 'Nature', price: "5.00", weight: 1, isDelete: false},
            ]
        },
        {
            id: 'furniture', product: [
                {sku: "TR120555", name: 'Chair', price: "55.00", dimension: '24x45x15', isDelete: false},
                {sku: "GGWP8887", name: 'Sofa', price: "157.00", dimension: '40x17x15', isDelete: false},
                {sku: "GGWP5551", name: 'Table', price: "63.00", dimension: '1x1x1', isDelete: false},
            ]
        }
    ]
};

export const infoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CARD:
            return {
                ...state,
                cardList: state.cardList.map(p => {
                        if (p.id === action.id) {
                            return {...p, product:[...p.product, action.card]}
                        }else{
                            return p
                        }
                    }
                )
            }
        case CHECKED_CARD:
            return {
                ...state,
                cardList: state.cardList.map(p => {
                    if (p.id === action.id) {
                        return {
                            ...p,
                            product: p.product.map(c => {
                                    if (c.sku !== action.sku) {
                                        return c
                                    } else {
                                        return {...c, isDelete: action.checked}
                                    }
                                }
                            )
                        }
                    } else {
                        return p
                    }
                })
            }
        case DELETE_CARDS:
            return {
                ...state,
                cardList: state.cardList.map(p => {
                    return {
                        ...p,
                        product: p.product.filter(c => {
                            return !c.isDelete
                        })
                    }
                })
            }
        default:
            return state
    }
};

export const addCard = (id, card) => ({type: ADD_CARD, id, card});
export const checkedCard = (id, sku, checked) => ({type: CHECKED_CARD, id, sku, checked});
export const massDelete = () => ({type: DELETE_CARDS});

