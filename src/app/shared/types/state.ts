import { 
    UserSearchResponse, UserSearchPagingInfo,
    UserDetail 
} from "./user-search";

export interface StateTree {
    root: {
        userSearchResponse: UserSearchResponse;
        userSearchPagingInfo: UserSearchPagingInfo;
        userDetail: UserDetail;   
    }
};