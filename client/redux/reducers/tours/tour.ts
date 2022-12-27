import * as types from '../../constants/tour';
import { ActionType } from '../../types';

type State = {
  loading: boolean;
  error: null | { message: string };
  tours: any[];
  tour: {} | null;
  userTours: any[];
};
const initialState = {
  loading: false,
  error: null,
  tours: [],
  tour: {} || null,
  userTours: [],
};

const tourReducer = (
  state: State = initialState,
  action: ActionType
): State => {
  const { type, payload } = action;
  switch (type) {
    case types.TOUR_LIST_REQUEST:
      return { ...state, loading: true };
    case types.TOUR_LIST_SUCCESS:
      return { ...state, loading: false, tours: payload };
    case types.TOUR_LIST_FAILURE:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};

export default tourReducer;
