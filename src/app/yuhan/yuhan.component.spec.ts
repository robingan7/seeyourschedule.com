import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YuhanComponent } from './yuhan.component';

describe('YuhanComponent', () => {
  let component: YuhanComponent;
  let fixture: ComponentFixture<YuhanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YuhanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YuhanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
