import * as types from '../../constants/tour';
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
  tour: Tour | null;
};
const initialState = {
  loading: false,
  error: null,
  tours: [],
  tour: null,
};

const tourReducer = (
  state: State = initialState,
  action: ActionType
): State => {
  const { type, payload } = action;
  switch (type) {
    case types.TOUR_CREATE_REQUEST:
      return { ...state, loading: true };
    case types.TOUR_CREATE_SUCCESS:
      return { ...state, loading: false, error: null, tour: payload };
    case types.TOUR_CREATE_FAILURE:
      return { ...state, loading: false, error: payload };
    case types.GET_TOURS_REQUEST:
      return { ...state, loading: true };
    case types.GET_TOURS_SUCCESS:
      return { ...state, loading: false, error: null, tours: payload };
    case types.GET_TOURS_FAILURE:
      return { ...state, loading: false, error: payload };
    case types.GET_TOUR_REQUEST:
      return { ...state, loading: true };
    case types.GET_TOUR_SUCCESS:
      return { ...state, loading: false, error: null, tour: payload };
    case types.GET_TOUR_FAILURE:
      return { ...state, loading: false, error: payload };
    case types.GET_USER_TOURS_REQUEST:
      return { ...state, loading: true };
    case types.GET_USER_TOURS_SUCCESS:
      return { ...state, loading: false, error: null, tours: payload };
    case types.GET_USER_TOURS_FAILURE:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};

export default tourReducer;
