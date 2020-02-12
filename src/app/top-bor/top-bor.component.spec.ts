import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBorComponent } from './top-bor.component';

describe('TopBorComponent', () => {
  let component: TopBorComponent;
  let fixture: ComponentFixture<TopBorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopBorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopBorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
