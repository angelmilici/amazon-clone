// data layer logic

export const initialState = {
    basket: [],
    user: null,
};

// selector
export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0);

// data layer
const reducer = (state, action) => {
    console.log(action);
    // switch -> check against a bunch of cases
    switch (action.type) {
        case "ADD_TO_BASKET":
            // logic for adding item to basket
            // everytime you dispatch into data layer,
            // you need to return what the new data layer looks like
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        
        case "REMOVE_FROM_BASKET":
            // logic for removing item from basket

            // cloned basket
            let newBasket = [...state.basket];

            const index = state.basket.findIndex(
                // check basket items to see if their id is equivelant to the action id
                (basketItem) => basketItem.id === action.id
            );

            // if index found(returns greater than 1), item id found. else it didnt find the item
            if (index >= 0) {
                // if found, remove it...
                // go to its index and cut it in the basket array
                newBasket.splice(index, 1);

            } else {
                console.warn(
                    `Can't remove product (id: ${action.id}) as it's not in the basket!`
                )
            }

            return {
                ...state,
                // return new basket
                basket: newBasket
            }
        
            case "SET_USER":
                return {
                    ...state,
                    user: action.user
                }

        default:
            return state;
    }
};

export default reducer;
