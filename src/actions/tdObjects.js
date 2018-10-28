import { getTdObjects } from '../api/tdObjectsApi';
import { TD_OBJECTS } from './types';


export const getTdObjectsAction = () => (
  (dispatch) => {
    getTdObjects()
    .then((res) => {
      const { data } = res;
      dispatch({ type: TD_OBJECTS, payload: data });
    })
    .catch(e => console.log(e));
  }
);

export const action2 = () => (
  dispatch => dispatch({ type: '', payload: '' })
);
