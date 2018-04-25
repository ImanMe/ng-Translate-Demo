import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { AppComponent } from "./app.component";
import { MyTranslateComponent } from "./my-translate/my-translate.component";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";
import { Globals } from "./global";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [AppComponent, MyTranslateComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [Globals],
  bootstrap: [AppComponent]
})
export class AppModule {}
