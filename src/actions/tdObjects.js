import { getTdObjects } from '../api/tdObjectsApi';
import { TD_OBJECTS } from './types';


export const getTdObjectsAction = (skip, limit) => (
  (dispatch, getState) => {
    getTdObjects({ skip, limit })
    .then((res) => {
      const { data } = res;
      const { tdObjReducer } = getState();
      let payload = {};
      if (tdObjReducer.tdObjects.categories) {
        const { categories } = tdObjReducer.tdObjects;
        const newArr = categories.concat(data.categories);
        const newObj = { categories: newArr };
        Object.assign(payload, newObj);
      } else {
        payload = data;
      }
      dispatch({ type: TD_OBJECTS, payload });
    })
    .catch(e => console.log(e));
  }
);

export const action2 = () => (
  dispatch => dispatch({ type: '', payload: '' })
);
