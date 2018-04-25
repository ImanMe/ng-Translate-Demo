import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { ActivatedRoute } from "@angular/router";
import { NotificationsService } from "angular2-notifications";

@Component({
  selector: "app-my-translate",
  templateUrl: "./my-translate.component.html",
  styleUrls: ["./my-translate.component.css"]
})
export class MyTranslateComponent {
  //param = { value: "world" };
  language;
  constructor(
    translate: TranslateService,
    private route: ActivatedRoute,
    private _service: NotificationsService
  ) {
    this.route.queryParams.subscribe(params => {
      this.language = params["lang"];
      console.log(this.language);
      translate.setDefaultLang("en");
      translate.use(this.language);
    });
  }
  types = ["alert", "error", "info", "warn", "success"];
  animationTypes = ["fromRight", "fromLeft", "scale", "rotate"];
  timeout = [3000];

  create() {
    const title = "Something went wrong!";
    const content = "Try again later.";
    const type = "error";
    this._service.create(title, content, type);
  }
}
