import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoresAddNewComponent } from './stores-add-new.component';

describe('StoresAddNewComponent', () => {
  let component: StoresAddNewComponent;
  let fixture: ComponentFixture<StoresAddNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoresAddNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoresAddNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
