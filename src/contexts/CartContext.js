import createDataContext from './createDataContext';
import axiosWithAuth from '../utils/axiosWithAuth';
import react, { useState } from 'react';
const cartReducer = (state, action) => {
	switch (action.type) {
		case 'getCartItems':
			return { ...state, state: action.payload };
		case 'add_error':
			return { ...state, errorMessage: action.payload };
		default:
			return state;
	}
};

// getCartItems

const getCartItems = (dispatch) => async ({ data }) => {
	try {
		const customerId = localStorage.getItem('user_id');
		console.log(customerId);
		const response = await axiosWithAuth().get(`/customers/${customerId}/cart`);
		console.log('Response', response.data.data);
		dispatch({ type: 'getCartItems', payload: response.data.data });
	} catch (error) {
		dispatch({
			type: 'add_error',
			payload: 'something went wrong'
		});
	}
};

// Create Empty Cart For User

// handleAddToCart

// deleteCartItem

// editCartItemQuantity

// ClearCart

export const { Provider, Context } = createDataContext(cartReducer, { getCartItems }, {});
