import { fromJS, Map, List } from 'immutable';
import * as actions from './action';
const initialState = fromJS({
  isLoading: false,
  error: {},
});

export default function (state = initialState, action) {
  switch (action.type) {
    case actions.GET_PROGRAM_REQUEST: {
      return state.set('isLoading', true);
    }
    default:
      return state;
  }
}
