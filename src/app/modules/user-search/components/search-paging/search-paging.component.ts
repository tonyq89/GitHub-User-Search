import { 
    Component, Input,
    Output, EventEmitter
 } from "@angular/core";
import { UserSearchPagingInfo } from '@shared-types';
import { isNil } from "ramda";

@Component({
    selector: "search-paging",
    templateUrl: "./search-paging.component.html"
})

export class SearchPaging {
    @Input() pagingInfo: UserSearchPagingInfo;
    @Output() goToPage: EventEmitter<string>;

    constructor(){
        this.goToPage = new EventEmitter();
    }

    isDisabled(key: string): boolean {
        return isNil(this.pagingInfo[key]);
    }

    pageClick(key: string): void {
        this.goToPage.emit(this.pagingInfo[key]);
    }
}