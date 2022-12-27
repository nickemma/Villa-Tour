import BACKEND_URL from '../../config/backend';
import * as types from '../constants/tour';
import axios, { AxiosRequestConfig } from 'axios';
import { DispatchType } from '../types';

const createTour =
  (tourApi: any) => async (dispatch: DispatchType, getState: any) => {
    try {
      dispatch({
        type: types.TOUR_LIST_REQUEST,
      });

      const currentUser = getState().currentUser;

      const config: AxiosRequestConfig<any> = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${currentUser.token}`,
        },
      };

      const { data } = await axios.post(
        `${BACKEND_URL}/tours`,
        tourApi,
        config
      );

      dispatch({
        type: types.TOUR_LIST_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: types.TOUR_LIST_FAILURE,
        payload: error.response?.data ? error.response.data : error.error,
      });
    }
  };

const getTours = () => async (dispatch: DispatchType) => {
  try {
    dispatch({ type: types.GET_TOUR_REQUEST });

    const { data } = await axios.get(`${BACKEND_URL}/tours`);

    dispatch({ type: types.GET_TOUR_SUCCESS, payload: data });
  } catch (error: any) {
    dispatch({
      type: types.GET_TOUR_FAILURE,
      payload: error.response?.data ? error.response.data : error.error,
    });
  }
};

export { createTour, getTours };
