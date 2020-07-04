import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import { 
    StateTree, UserSearchItem, 
    UserSearchPagingInfo, UserSearchDetail 
} from "@shared-types";

@Injectable()
export class StateUserSearchService {
    constructor(private store: Store<StateTree>) {}

    getUserSearchItems(): Observable<UserSearchItem[]> {
        return this.store.select(state => state.root.userSearchResponse.items);
    }

    getUserSearchTotalCount(): Observable<number> {
        return this.store.select(state => state.root.userSearchResponse.total_count);
    }

    getPagingInfo(): Observable<UserSearchPagingInfo> {
        return this.store.select(state => state.root.userSearchPagingInfo);
    }

    getUserDetailItems(): Observable<UserSearchDetail[]> {
        return this.store.select(state => state.root.userDetail.items);
    }
}