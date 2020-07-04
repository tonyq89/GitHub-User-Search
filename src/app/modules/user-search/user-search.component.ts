import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { filter, map, tap } from "rxjs/operators";
import { EffectsUserSearchService, StateUserSearchService, SetUserSearchService } from "@shared-services";
import { UserSearchPagingInfo, UserSearchDetail } from "@shared-types";
import { isNil } from "ramda";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html'
})
export class UserSearchComponent implements OnInit, OnDestroy {
  public userDetailItems$: Observable<UserSearchDetail[]>;
  public totalCount$: Observable<number>;
  public pagingInfo$: Observable<UserSearchPagingInfo>;

  private userDetailFetchSub: Subscription;

  readonly itemsPerPage = "&per_page=15";

  constructor(
    private effectsUserSearchService: EffectsUserSearchService,
    private stateUserSearchService: StateUserSearchService,
    private setUserSearchService: SetUserSearchService
    ) { }

  ngOnInit(): void { 
    //subs
    this.userDetailFetchSub = this.stateUserSearchService.getUserSearchItems().pipe(
      filter(x => x.length > 0),
      tap(_ => this.setUserSearchService.clearUserSearchDetails()),
      map(l => l.map(x => this.effectsUserSearchService.fetchUserDetail({url: x.url})))
    ).subscribe();


    //observables
    this.userDetailItems$ = this.stateUserSearchService.getUserDetailItems();
    this.totalCount$ = this.stateUserSearchService.getUserSearchTotalCount().pipe(filter(x => !isNil(x)));
    this.pagingInfo$ = this.stateUserSearchService.getPagingInfo();
  }

  ngOnDestroy(): void {
    this.userDetailFetchSub.unsubscribe();
  }

  searchInput(input: string): void {
    const reqBody = { userSearch: `${input}${this.itemsPerPage}` };
    this.effectsUserSearchService.fetchUsers(reqBody);
  }

  goToPage(page: string): void {
    const reqBody = { page: page };
    this.effectsUserSearchService.goToPage(reqBody);

  }

}
