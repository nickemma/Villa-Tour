import BACKEND_URL from '../../config/backend';
import * as types from '../constants/tour';
import axios, { AxiosRequestConfig } from 'axios';
import { DispatchType } from '../types';
import { storeType } from '../configureStore';

const createTour =
  (formData: any) => async (dispatch: DispatchType, getState: () => storeType) => {
    try {
      dispatch({
        type: types.TOUR_CREATE_REQUEST,
      });

      const currentUser = getState().currentUser;
      const config: AxiosRequestConfig<any> = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${currentUser.user?.token}`,
        },
      };

      const { data } = await axios.post(
        `${BACKEND_URL}/tours`,
        formData,
        config
      );

      dispatch({
        type: types.TOUR_CREATE_SUCCESS,
        payload: data.tours,
      });
    } catch (error: any) {
      dispatch({
        type: types.TOUR_CREATE_FAILURE,
        payload: error.response?.data ? error.response.data : error.error,
      });
    }
  };

const getTours = () => async (dispatch: DispatchType) => {
  try {
    dispatch({ type: types.GET_TOURS_REQUEST });

    const { data } = await axios.get(`${BACKEND_URL}/tours`);

    dispatch({ type: types.GET_TOURS_SUCCESS, payload: data });
  } catch (error: any) {
    dispatch({
      type: types.GET_TOURS_FAILURE,
      payload: error.response?.data ? error.response.data : error.error,
    });
  }
};

export { createTour, getTours };
