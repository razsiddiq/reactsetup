import { fromJS } from 'immutable';
import { createAction } from '../util';
import axios from '../../axios';
import Config from '../../config';

export const GET_PROGRAM_REQUEST = 'GET_PROGRAM_REQUEST';
export const GET_PROGRAM_SUCCESS = 'GET_PROGRAM_SUCCESS';
export const GET_PROGRAM_FAILIURE = 'GET_PROGRAM_FAILIURE';

const getProgramRequest = createAction(GET_PROGRAM_REQUEST);
const getProgramSuccess = createAction(GET_PROGRAM_SUCCESS, 'data');
const getProgramFailure = createAction(GET_PROGRAM_FAILIURE, 'error');

export function getPrograms(pgmIndex = 0, calIndex = 0) {
  return function (dispatch) {
    dispatch(getProgramRequest());
    axios
      .get('/student_group/program_ic_list_dashboard')
      .then((res) => {
       
      })
      .catch((error) => dispatch(getProgramFailure(error)));
  };
}