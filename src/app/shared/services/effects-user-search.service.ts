import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { StateTree } from "../types/state";
import { FETCH_USERS, GO_TO_PAGE, FETCH_USER_DETAIL } from "@shared-actions";

@Injectable()
export class EffectsUserSearchService {
    constructor(private store: Store<StateTree>) {}

    fetchUsers(x: {userSearch: string}): void {
        this.store.dispatch(FETCH_USERS(x));
    }

    goToPage(x: {page: string}): void {
        this.store.dispatch(GO_TO_PAGE(x));
    }

    fetchUserDetail(x: { url: string }): void {
        this.store.dispatch(FETCH_USER_DETAIL(x));
    }
}