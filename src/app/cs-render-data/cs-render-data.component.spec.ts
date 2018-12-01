import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsRenderDataComponent } from './cs-render-data.component';

describe('CsRenderDataComponent', () => {
  let component: CsRenderDataComponent;
  let fixture: ComponentFixture<CsRenderDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsRenderDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsRenderDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
