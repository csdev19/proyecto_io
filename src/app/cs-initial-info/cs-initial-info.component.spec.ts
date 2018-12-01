import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsInitialInfoComponent } from './cs-initial-info.component';

describe('CsInitialInfoComponent', () => {
  let component: CsInitialInfoComponent;
  let fixture: ComponentFixture<CsInitialInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsInitialInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsInitialInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
