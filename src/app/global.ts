import { Injectable } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Injectable()
export class Globals {
  language: string;
  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.language = params["lang"];
      console.log(this.language);
    });
  }
}
