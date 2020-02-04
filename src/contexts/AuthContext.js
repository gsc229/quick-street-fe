import createDataContext from './createDataContext';
import axiosWithAuth from '../utils/axiosWithAuth';

const authReducer = (state, action) => {
	switch (action.type) {
		case 'add_error':
			return { ...state, errorMessage: action.payload };
		case 'signup':
			return { errorMessage: '', token: action.payload };
		case 'signout':
			return { token: null };
		case 'change_message':
			return { ...state, message: action.payload };
		default:
			return state;
	}
};


const checkIfCart = (customerId) => {
	console.log('checkIfCart function is being called');
	axiosWithAuth()
		.get(`/customers/${customerId}/cart`)
		.then((response) => {
			// console.log('Response when checking if a cart exists', response);
			window.location.href='browse';
		})
		.catch((err) => {
			if (err.response.status === 404) {
				createCart(customerId);
			}
			console.log(err.response);
		});
};

const createCart = (customerId) => {
	console.log('createCart function is being called');
	axiosWithAuth()
		.post(`/customers/${customerId}/cart`)
		.then((response) => {
			// console.log('Response after creating a cart', response);
			window.location.href='browse';
		})
		.catch((err) => {
			console.log(err.response);
		});
};

const signup = (dispatch) => async ({
	email,
	password,
	businessName: business_name,
    phoneNumber: phone,
	streetAddress,
	city,
	zipcode,
	vendor
}) => {
	try {
		const response = await axiosWithAuth().post('/auth/register', {
			email,
			password,
			business_name,
			phone,
			streetAddress,
			city,
			zipcode,
			vendor
		});
		localStorage.setItem('token', response.data.token);
		localStorage.setItem('user_id', response.data.id);
		localStorage.setItem('isVendor', response.data.isVendor);
		dispatch({ type: 'signup', payload: response.data.token });
		if (response.status === 200) {
				window.location.href=`/profile/${response.data.id}`
		}
	} catch (error) {
		dispatch({
			type: 'add_error',
			payload: 'something went wrong'
		});
	}
};

const signin = (dispatch) => async ({ email, password }) => {
	try {
		const response = await axiosWithAuth().post('/auth/login', {
			email,
			password
		});
		console.log(response);
		localStorage.setItem('token', response.data.token);
		localStorage.setItem('user_id', response.data.id);
		localStorage.setItem('isVendor', response.data.isVendor);
		if (response.status === 200 & response.data.isVendor) {
			window.location.href=`profile/${response.data.id}`
		} else {
			checkIfCart(response.data.id);
			// window.location.href='browse'
		}
	} catch (error) {
		console.log(error.response);
	}
};

const signout = (dispatch) => async () => {
	localStorage.removeItem('token');
	localStorage.removeItem('user_id');
	localStorage.removeItem('isVendor');
	//localStorage.removeItem('lsid');
	dispatch({ type: 'signout' });
};

const changeMessage = (dispatch) => () => {
	dispatch({
		type: 'change_message',
		payload: 'Hello This Is Me'
	});
};

export const { Provider, Context } = createDataContext(
	authReducer,
	{ signin, signout, signup, changeMessage },
	{ token: '', errorMessage: '', message: 'Hello Friend' }
);
