import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiComponent } from './modifi.component';

describe('ModifiComponent', () => {
  let component: ModifiComponent;
  let fixture: ComponentFixture<ModifiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
