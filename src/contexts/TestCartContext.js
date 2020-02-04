import createDataContext from './createDataContext';
import axiosWithAuth from '../utils/axiosWithAuth';
// ** //
const cartReducer = (state, action) => {
	switch (action.type) {
		case 'getCartItems':
			return { ...state, cart: action.payload };
		case 'add_error': 
			return { ...state, errorMessage: action.payload};
		default:
			return state;
	}
};

const createCart = (dispatch) => async (customerId) => {
	try {
		const response = await axiosWithAuth().post(`/customers/${customerId}/cart`);
		console.log('Response after creating a cart', response);
		dispatch({ type: 'getCartItems', payload: response.data.data });	
	} catch (error) {
		console.log(error);
		dispatch({
			type: 'add_error',
			payload: 'Could not get data from backend'
		});
	}
}

const getCartItems = (dispatch) => async (customerId) => {
	try {		
    const response = await axiosWithAuth().get(`/customers/${customerId}/cart`);
    // console.log(response);
    dispatch({ type: 'getCartItems', payload: response.data.data });  
	} catch (error) {
		console.log(error);
		dispatch({
			type: 'add_error',
			payload: 'Could not get data from backend'
		});
	}
};

const addCartItem = (dispatch) => async ({
	productId,
	price,
	quantity,
	customerId
}) => {
	try {
		const response = await axiosWithAuth().post(`customers/${customerId}/cart/addtocart`, {
			productId,
			price,
			quantity		
		});
		console.log('Response after adding a product to cart', response);
		dispatch({ type: 'getCartItems', payload: response.data.cart }); 
	} catch (error) {
		console.log('Error when adding a product to cart', error.response);
		dispatch({
			type: 'add_error',
			payload: 'Could not get data from backend'
		});
	}
};

const updateCartItem = (dispatch) => async ({
	productId,
	quantity,
	customerId
}) => {
	try {
		const response = await axiosWithAuth().put(`/customers/${customerId}/cart/addtocart`, {
			productId,
			quantity		
		});
		dispatch({ type: 'getCartItems', payload: response.data.cart }); 
	} catch (error) {
		dispatch({
			type: 'add_error',
			payload: 'Could not get data from backend'
		});
	}
};

const deleteCartItem = (dispatch) => async ({
	productId,
	customerId
}) => {
	try {
		const response = await axiosWithAuth().delete(`/customers/${customerId}/cart/deleteitem/${productId}`);
		dispatch({ type: 'getCartItems', payload: response.data.data }); 
	} catch (error) {
		dispatch({
			type: 'add_error',
			payload: 'Could not get data from backend'
		});
	}
};

const addItemFromOtherVendor = (dispatch) => async ({
	cartId, 
	customerId, 
	productId, 
	price, 
	quantity
}) => {
	try {
		const delCartResponse = await axiosWithAuth().delete(`/cart/${cartId}`);
		console.log('Response after deleting cart for a customer', delCartResponse);
		if (delCartResponse.status === 200) {
			const createCartResponse = await axiosWithAuth().post(`/customers/${customerId}/cart`);
			console.log('Response after creating cart for a customer', createCartResponse);
			if (createCartResponse.status === 200) {
				const addItemResponse = await axiosWithAuth().post(`customers/${customerId}/cart/addtocart`, {
					productId,
					price,
					quantity		
				});
				console.log('Response after adding item to cart for a customer', addItemResponse);
				dispatch({type: 'getCartItems', payload: addItemResponse.data.cart});
			}
		}
	} catch {
		dispatch({
			type: 'add_error',
			payload: 'Could not get data from backend'
		});
	}
}

export const { Provider, Context } = createDataContext(
	cartReducer,
	{ createCart, getCartItems, addCartItem, updateCartItem, deleteCartItem, addItemFromOtherVendor }, 
	{ cart: {}, errorMessage: ''}
  
);
