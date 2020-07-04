import { combineReducers } from "@ngrx/store";
import { userSearchResponse } from "./user-search-response.reducer";
import { userSearchPagingInfo } from "./user-search-paging-info.reducer";
import { userDetail } from "./user-detail.reducer";

export const root = combineReducers({ 
    userSearchResponse: userSearchResponse,
    userSearchPagingInfo: userSearchPagingInfo,
    userDetail: userDetail
 });