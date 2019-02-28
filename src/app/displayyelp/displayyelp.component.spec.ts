import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayyelpComponent } from './displayyelp.component';

describe('DisplayyelpComponent', () => {
  let component: DisplayyelpComponent;
  let fixture: ComponentFixture<DisplayyelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayyelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayyelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
