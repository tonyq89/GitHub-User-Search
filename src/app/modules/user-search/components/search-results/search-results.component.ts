import { 
    Component, Input,
    ChangeDetectionStrategy
 } from "@angular/core";
 import { UserSearchDetail } from "@shared-types";

@Component({
    selector: "search-results",
    templateUrl: "./search-results.component.html",
    styles: [`tr:hover {
                cursor: pointer;
              }`
            ],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class SearchResults {
    @Input() items: UserSearchDetail[];
    @Input() totalCount: number;

    userSelected(itemSelected: UserSearchDetail): void {
        window.open(itemSelected.html_url);
    }
}