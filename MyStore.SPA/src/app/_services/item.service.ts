import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import serverUtils from "../_helpers/serverUtils";

@Injectable()
export class ItemService {
    constructor(private http:HttpClient) { }

    getItems(){
        return this.http.get(serverUtils.SERVER_URL + "/api/items");
    }

    buyItem(){
        return this.http.get(serverUtils.SERVER_URL + "/api/items/buy");
    }

}
