import axios from 'axios';
import { loginStart, loginFailed, loginSuccess, registerStart, registerSuccess, registerFailed } from './authSlice';
import { getUsersFailed, getUsersStart, getUsersSuccess } from './userSlice';

export const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart());
    try {
        const res = await axios.post('http://localhost:8000/v1/auth/login', user);
        dispatch(loginSuccess(res.data));
        navigate('/');
    } catch (error) {
        dispatch(loginFailed());
    }
};

export const registerUser = async (user, dispatch, navigate) => {
    dispatch(registerStart());
    try {
        await axios.post('http://localhost:8000/v1/auth/register', user);
        dispatch(registerSuccess());
    } catch (error) {
        dispatch(registerFailed());
    }
};

export const getAllUsers = async (accessToken, dispatch) => {
    dispatch(getUsersStart());
    try {
        const res = await axios.get('http://localhost:8000/v1/user', {
            headers: {
                token: `Bearer ${accessToken}`,
            },
        });
        dispatch(getUsersSuccess(res.data));
    } catch (error) {
        dispatch(getUsersFailed());
    }
};
