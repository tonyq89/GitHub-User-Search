import { 
    Component, OnInit,
    Output, EventEmitter
} from "@angular/core";
import { FormControl } from "@angular/forms";
import { isNil } from "ramda";

@Component({
    selector: "search-bar",
    templateUrl: "./search-bar.component.html"
})

export class SearchBar implements OnInit{
    @Output() searchInput: EventEmitter<string>;
    public searchInputControl: FormControl;

    constructor(){
        this.searchInput = new EventEmitter();
    }

    ngOnInit(): void {
        this.searchInputControl = new FormControl();
    }

    isButtonDisabled(): boolean {
        return this.searchInputControl.value === "" || isNil(this.searchInputControl.value);
    }

    search(): void {
        this.searchInput.emit(this.searchInputControl.value);
    }

}