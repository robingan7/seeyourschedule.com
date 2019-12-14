import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickCheckComponent } from './quick-check.component';

describe('QuickCheckComponent', () => {
  let component: QuickCheckComponent;
  let fixture: ComponentFixture<QuickCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
