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

const signup = (dispatch) => async ({
	email,
	password,
	role,
	businessName,
	phoneNumber,
	streetAddress,
	city,
	zipcode
}) => {
	try {
		const response = await axiosWithAuth().post('/auth/register', {
			email,
			password,
			role,
			businessName,
			phoneNumber,
			streetAddress,
			city,
			zipcode
		});
		localStorage.setItem('token', response.data.token);
		localStorage.setItem('user_id', response.data.id);
		dispatch({ type: 'signup', payload: response.data.token });
		if (response.status === 200) {
			window.location.href = `/profile/${response.data.id}`;
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
		if ((response.status === 200) & response.data.isVendor) {
			window.location.href = `profile/${response.data.id}`;
		} else {
			window.location.href = 'browse';
		}
	} catch (error) {
		console.log(error.response);
	}
};

const signout = (dispatch) => async () => {
	localStorage.removeItem('token');
	localStorage.removeItem('user_id');
	localStorage.removeItem('isVendor');
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
