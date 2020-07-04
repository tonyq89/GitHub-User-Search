import { Action, createReducer, on } from "@ngrx/store";
import { UserSearchResponse } from "@shared-types";
import { FETCH_USERS_RESPONSE } from "@shared-actions";

type State = UserSearchResponse;

const initialState: State = {
    total_count: undefined,
    items: []
}

const reducer = createReducer(
    initialState, 
    on(FETCH_USERS_RESPONSE, (state: State, action: UserSearchResponse) => 
        ({ total_count: action.total_count, items: action.items })),
    );

export function userSearchResponse(state: State = initialState, action: Action) {
    return reducer(state, action);
  }
