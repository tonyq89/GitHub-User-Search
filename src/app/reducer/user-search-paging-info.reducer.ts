import { Action, createReducer, on } from "@ngrx/store";
import { UserSearchPagingInfo } from "@shared-types";
import { FETCH_USERS_PAGING_INFO } from "@shared-actions";

type State = UserSearchPagingInfo;

const initialState: State = {
    first: undefined,
    last: undefined,
    next: undefined,
    prev: undefined
};

const reducer = createReducer(
    initialState, 
    on(FETCH_USERS_PAGING_INFO, (state: State, paging: UserSearchPagingInfo) => 
        ({ first: paging.first, last: paging.last, next: paging.next, prev: paging.prev }))
    );

export function userSearchPagingInfo(state: State = initialState, action: Action) {
    return reducer(state, action);
  }

