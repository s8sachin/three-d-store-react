import { signUp, logIn, getProfile } from '../api/userApi';
import { USER, TD_OBJECTS } from './types';

export const signupAction = params => (
  (dispatch) => {
    signUp(params)
    .then((res) => {
      const { data } = res;
      const payload = { ...data, status: 201, type: 'signup' };
      dispatch({ type: USER, payload });
      setTimeout(() => {
        const emptyUser = {};
        dispatch({ type: USER, payload: emptyUser });
      }, 3000);
    })
    .catch((e) => {
      const payload = { message: 'Email already exists', status: 401, type: 'signup' };
      dispatch({ type: USER, payload });
    });
  }
);

export const loginAction = params => (
  (dispatch) => {
    logIn(params)
    .then((res) => {
      const { data } = res;
      localStorage.setItem('token', data.token);
      localStorage.setItem('email', data.user.email);
      const payload = { ...data, type: 'login' };
      dispatch({ type: USER, payload });
    })
    .catch(({ response }) => {
      const { data } = response;
      const payload = { message: 'Bad Credentials', status: 401, type: 'login' };
      dispatch({ type: USER, payload });
      setTimeout(() => {
        const emptyUser = {};
        dispatch({ type: USER, payload: emptyUser });
      }, 3000);
    });
  }
);

export const logoutAction = params => (
  (dispatch) => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    dispatch({ type: USER, payload: {} });
    dispatch({ type: TD_OBJECTS, payload: {} });
  }
);

export const userProfileAction = params => (
  (dispatch) => {
    getProfile()
    .then((res) => {
      const { data } = res;
      const payload = { ...data, type: 'profile' };
      dispatch({ type: USER, payload });
    })
    .catch(({ response }) => {
      if (response.status > 400) {
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        window.location.href = process.env.PUBLIC_URL;
      }
    });
  }
);
