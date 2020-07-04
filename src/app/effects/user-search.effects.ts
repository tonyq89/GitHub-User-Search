import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { switchMap, mergeMap, catchError } from "rxjs/operators";
import { 
    FETCH_USERS, FETCH_USERS_RESPONSE, 
    FETCH_USERS_PAGING_INFO, GO_TO_PAGE,
    FETCH_USER_DETAIL, FETCH_USER_DETAIL_RESPONSE } from "@shared-actions";
import { getPagingInfoFromHeaders } from "@shared-utils";
import { isNil } from "ramda";

@Injectable()
export class UserSearchEffects {
    private baseUrl = "https://api.github.com/search";
    private userSearchUrl = `${this.baseUrl}/users?q=`;

    constructor(private actions$: Actions, private http: HttpClient){}

    searchUsers$ = createEffect(() => this.actions$.pipe(
        ofType(FETCH_USERS),
        switchMap(req => this.http.get(this.userSearchUrl + req.userSearch, {observe: 'response'}).pipe(
            switchMap((r: any) => [ 
                FETCH_USERS_RESPONSE(r.body),
                isNil(r.headers.get('Link')) 
                ? FETCH_USERS_PAGING_INFO({})
                : FETCH_USERS_PAGING_INFO(getPagingInfoFromHeaders(r.headers.get('Link')))
            ]),
            catchError(err => [
                FETCH_USERS_RESPONSE({ total_count: 0, items: [] }), 
                FETCH_USERS_PAGING_INFO({})
            ])
        )
    )));

    goToPage$ = createEffect(() => this.actions$.pipe(
        ofType(GO_TO_PAGE),
        switchMap(req => this.http.get(req.page, {observe: 'response'}).pipe(
            switchMap((r: any) => [ 
                FETCH_USERS_RESPONSE(r.body),
                isNil(r.headers.get('Link')) 
                ? FETCH_USERS_PAGING_INFO({})
                : FETCH_USERS_PAGING_INFO(getPagingInfoFromHeaders(r.headers.get('Link')))
            ]),
            catchError(err => [
                FETCH_USERS_RESPONSE({ total_count: 0, items: [] }), 
                FETCH_USERS_PAGING_INFO({})
            ])
        )
    )));

    userDetails$ = createEffect(() => this.actions$.pipe(
        ofType(FETCH_USER_DETAIL),
        mergeMap(req => this.http.get(req.url).pipe(
            switchMap((r: any) => [ 
                FETCH_USER_DETAIL_RESPONSE(r)
            ]),
            catchError(err => [
                FETCH_USER_DETAIL_RESPONSE({})
            ])
        )
    )));
}
