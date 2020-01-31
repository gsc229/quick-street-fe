import createDataContext from './createDataContext';
import axiosWithAuth from '../utils/axiosWithAuth';


const cartReducer = (state, action) => {
	switch (action.type) {
		case 'getCart':
			return { ...state, cart: action.payload };
		default:
			return state;
	}
};

const getCart = (dispatch) => async () => {
	try {
    const response = await axiosWithAuth().get('/customers/5e288da830dbd60017620190/cart');
    console.log(response);
    dispatch({ type: 'getCart', payload: response.data.data });  
	} catch (error) {
		console.log(error);
		dispatch({
			type: 'add_error',
			payload: 'Could not get data from backend'
		});
	}
};

export const { Provider, Context } = createDataContext(
	cartReducer,
	{ getCart }, 
	{ cart:''}
  
);
