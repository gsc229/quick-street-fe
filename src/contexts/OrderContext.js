import createDataContext from './createDataContext';
import axiosWithAuth from '../utils/axiosWithAuth';
// ** //
const orderReducer = (state, action) => {
	switch (action.type) {
		case 'getOrders':
			return { ...state, orders: action.payload };
		case 'add_error': 
			return { ...state, errorMessage: action.payload};
		default:
			return state;
	}
};

const getOrders = (dispatch) => async (customerId) => {
	try {		
    const response = await axiosWithAuth().get(`/customers/${customerId}/cart/orders`);
    // console.log(response);
    dispatch({ type: 'getOrders', payload: response.data.data });  
	} catch (error) {
		console.log(error);
		dispatch({
			type: 'add_error',
			payload: 'Could not get data from backend'
		});
	}
};

export const { Provider, Context } = createDataContext(
	orderReducer,
	{ getOrders }, 
	{ order: {}, errorMessage: ''}
  
);