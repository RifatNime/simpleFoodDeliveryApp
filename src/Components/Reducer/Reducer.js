// in start all null
export const initialState = {
    cart: null,
    total: null,
};
//cart  eo set korte hobe(Action type)
export const actionType = {
    SET_CART: "SET_CART",
    SET_TOTAL: "SET_TOTAL",
};
//reducer  er maddhome state thik rekhe cart change same for total too(ACTION only)
const reducer = (state, action) => {
    console.log(action);

    //updating the action type
    switch (action.type) {
        case actionType.SET_CART:
            return {
                ...state, //leaving state as it is
                cart: action.cart,
            };

        case actionType.SET_TOTAL:
            return {
                ...state,
                total: action.total,
            };

        default:
            return state;
    }
};

export default reducer;