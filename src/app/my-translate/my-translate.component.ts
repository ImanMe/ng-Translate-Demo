import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-my-translate",
  templateUrl: "./my-translate.component.html",
  styleUrls: ["./my-translate.component.css"]
})
export class MyTranslateComponent implements OnInit {
  //param = { value: "world" };
  language;
  constructor(translate: TranslateService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.language = params["lang"];
      console.log(this.language);
      translate.setDefaultLang("en");
      translate.use(this.language);
    });
  }

  ngOnInit() {}
}
