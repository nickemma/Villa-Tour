import * as tourTypes from '../../constants/tour';
import * as userTypes from '../../constants/user';
import { ActionType } from '../../types';

export interface Tour {
  _id?: any;
  title: string;
  description: string;
  name: string;
  creator: string;
  creatorName: string;
  tags: string[];
  imageFile: string;
  createdAt: string;
  likeCount: number;
}

type State = {
  loading: boolean;
  error: null | { message: string };
  tours: Tour[];
  userTours: Tour[];
  tour: Tour | null;
};
const initialState = {
  loading: false,
  error: null,
  userTours: [],
  tours: [],
  tour: null,
};

const tourReducer = (
  state: State = initialState,
  action: ActionType
): State => {
  const { type, payload } = action;
  switch (type) {
    // On User auth clear tours
    case userTypes.USER_LOGIN_SUCCESS:
      return { ...state, userTours: [] };
    case userTypes.USER_REGISTER_SUCCESS:
      return { ...state, userTours: [] };

    // Create Tour Requests
    case tourTypes.TOUR_CREATE_REQUEST:
      return { ...state, loading: true };
    case tourTypes.TOUR_CREATE_SUCCESS:
      return { ...state, loading: false, error: null, tour: payload };
    case tourTypes.TOUR_CREATE_FAILURE:
      return { ...state, loading: false, error: payload };

    // Retrieve all tours
    case tourTypes.GET_TOURS_REQUEST:
      return { ...state, loading: true };
    case tourTypes.GET_TOURS_SUCCESS:
      return { ...state, loading: false, error: null, tours: payload };
    case tourTypes.GET_TOURS_FAILURE:
      return { ...state, loading: false, error: payload };

    // Retrieve tour by id
    case tourTypes.GET_TOUR_REQUEST:
      return { ...state, loading: true };
    case tourTypes.GET_TOUR_SUCCESS:
      return { ...state, loading: false, error: null, tour: payload };
    case tourTypes.GET_TOUR_FAILURE:
      return { ...state, loading: false, error: payload };

    // Retrieve tours fopr specific user
    case tourTypes.GET_USER_TOURS_REQUEST:
      return { ...state, loading: true };
    case tourTypes.GET_USER_TOURS_SUCCESS:
      return { ...state, loading: false, error: null, userTours: payload };
    case tourTypes.GET_USER_TOURS_FAILURE:
      return { ...state, loading: false, error: payload };

    // Delete tour requests
    case tourTypes.DELETE_TOUR_REQUEST:
      return { ...state, loading: true };
    case tourTypes.DELETE_TOUR_SUCCESS:
      const tours: Tour[] = state.tours.filter(
        (tour) => tour._id !== payload.id
      );
      const userTours: Tour[] = state.userTours.filter(
        (tour) => tour._id !== payload.id
      );
      return { ...state, loading: false, error: null, tours, userTours };
    case tourTypes.DELETE_TOUR_FAILURE:
      return { ...state, loading: false, error: payload };

    // Update tour request
    case tourTypes.UPDATE_TOUR_REQUEST:
      return { ...state, loading: true };
    case tourTypes.UPDATE_TOUR_SUCCESS:
      const updatedTours: Tour[] = state.tours.map((tour) => {
        if (tour._id === payload.id) {
          tour = payload.tour;
        }
        return tour;
      });
      const updatedUserTours: Tour[] = state.userTours.map((tour) => {
        if (tour._id === payload.id) {
          tour = payload.tour;
        }
        return tour;
      });
      return {
        ...state,
        loading: false,
        error: null,
        tours: updatedTours,
        userTours: updatedUserTours,
      };
    case tourTypes.UPDATE_TOUR_FAILURE:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};

export default tourReducer;
