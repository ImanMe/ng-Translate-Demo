import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTranslateComponent } from './my-translate.component';

describe('MyTranslateComponent', () => {
  let component: MyTranslateComponent;
  let fixture: ComponentFixture<MyTranslateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTranslateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTranslateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
