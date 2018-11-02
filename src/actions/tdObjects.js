import { getTdObjects } from '../api/tdObjectsApi';
import { TD_OBJECTS } from './types';

const removeDuplicates = (myArr, prop) => myArr.filter((obj, pos, arr) => arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos);

export const getTdObjectsAction = (skip, limit) => (
  (dispatch, getState) => {
    getTdObjects({ skip, limit })
    .then((res) => {
      const { data } = res;
      const { tdObjReducer } = getState();
      let payload = {};
      if (tdObjReducer.tdObjects.categories) {
        const { categories } = tdObjReducer.tdObjects;
        const newArr = removeDuplicates(categories.concat(data.categories), '_id');
        const newObj = { categories: newArr };
        Object.assign(payload, newObj);
      } else {
        payload = data;
      }
      dispatch({ type: TD_OBJECTS, payload });
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

export const action2 = () => (
  dispatch => dispatch({ type: '', payload: '' })
);
