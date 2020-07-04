import { 
    Component, Input,
    ChangeDetectionStrategy
 } from "@angular/core";
 import { isNil } from "ramda";

@Component({
    selector: "search-results-count",
    templateUrl: "./search-results-count.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class SearchResultsCount {
    @Input() totalCount: number;
    
    hasTotalCount(): boolean {
        return !isNil(this.totalCount);
    }
}