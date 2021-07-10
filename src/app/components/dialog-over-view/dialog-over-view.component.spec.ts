import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogOverViewComponent } from './dialog-over-view.component';

describe('DialogOverViewComponent', () => {
  let component: DialogOverViewComponent;
  let fixture: ComponentFixture<DialogOverViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogOverViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogOverViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
