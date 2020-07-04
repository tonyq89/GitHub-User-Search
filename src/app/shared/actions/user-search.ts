/* Actions for User Search */
import { createAction, props } from "@ngrx/store";
import { UserSearchResponse } from "@shared-types";

//basic use search
export const FETCH_USERS = createAction("FETCH_USERS", props<{userSearch: string}>());
export const FETCH_USERS_RESPONSE = createAction("FETCH_USERS_RESPONSE", props<UserSearchResponse>());
export const FETCH_USERS_PAGING_INFO = createAction("FETCH_USERS_PAGING_INFO", props<any>());
export const GO_TO_PAGE = createAction("GO_TO_PAGE", props<{page: string}>());

//user detail search
export const FETCH_USER_DETAIL = createAction("FETCH_USER_DETAIL", props<{url: string}>());
export const FETCH_USER_DETAIL_RESPONSE = createAction("FETCH_USER_DETAIL_RESPONSE", props<any>());
export const CLEAR_USER_DETAIL_LIST = createAction("CLEAR_USER_DETAIL_LIST");