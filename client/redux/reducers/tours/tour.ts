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
    case userTypes.USER_LOGIN_SUCCESS:
      return { ...state, userTours: [] };
    case userTypes.USER_REGISTER_SUCCESS:
      return { ...state, userTours: [] };
    case tourTypes.TOUR_CREATE_REQUEST:
      return { ...state, loading: true };
    case tourTypes.TOUR_CREATE_SUCCESS:
      return { ...state, loading: false, error: null, tour: payload };
    case tourTypes.TOUR_CREATE_FAILURE:
      return { ...state, loading: false, error: payload };
    case tourTypes.GET_TOURS_REQUEST:
      return { ...state, loading: true };
    case tourTypes.GET_TOURS_SUCCESS:
      return { ...state, loading: false, error: null, tours: payload };
    case tourTypes.GET_TOURS_FAILURE:
      return { ...state, loading: false, error: payload };
    case tourTypes.GET_TOUR_REQUEST:
      return { ...state, loading: true };
    case tourTypes.GET_TOUR_SUCCESS:
      return { ...state, loading: false, error: null, tour: payload };
    case tourTypes.GET_TOUR_FAILURE:
      return { ...state, loading: false, error: payload };
    case tourTypes.GET_USER_TOURS_REQUEST:
      return { ...state, loading: true };
    case tourTypes.GET_USER_TOURS_SUCCESS:
      return { ...state, loading: false, error: null, userTours: payload };
    case tourTypes.GET_USER_TOURS_FAILURE:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};

export default tourReducer;
