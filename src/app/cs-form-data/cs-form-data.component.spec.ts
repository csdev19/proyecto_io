import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsFormDataComponent } from './cs-form-data.component';

describe('CsFormDataComponent', () => {
  let component: CsFormDataComponent;
  let fixture: ComponentFixture<CsFormDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsFormDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsFormDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
