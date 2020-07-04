import { Action, createReducer, on } from "@ngrx/store";
import { UserDetail, UserSearchDetail } from "@shared-types";
import { FETCH_USER_DETAIL_RESPONSE, CLEAR_USER_DETAIL_LIST } from "@shared-actions";

type State = UserDetail;

const initialState: State = {
    items: []
};

const reducer = createReducer(
    initialState, 
    on(FETCH_USER_DETAIL_RESPONSE, (state: State, userDetail: UserSearchDetail) => 
        ({ items: [...state.items, userDetail]})),
    on(CLEAR_USER_DETAIL_LIST, (state: State, _) => initialState)
    );

export function userDetail(state: State = undefined, action: Action) {
    return reducer(state, action);
  }

