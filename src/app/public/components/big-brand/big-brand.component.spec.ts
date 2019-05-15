import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigBrandComponent } from './big-brand.component';

describe('BigBrandComponent', () => {
  let component: BigBrandComponent;
  let fixture: ComponentFixture<BigBrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigBrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
