import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { StateTree } from "@shared-types";
import { CLEAR_USER_DETAIL_LIST } from "@shared-actions";

@Injectable()
export class SetUserSearchService {
    constructor(private store: Store<StateTree>) {}

    clearUserSearchDetails(): void{
        this.store.dispatch(CLEAR_USER_DETAIL_LIST());
    }
}