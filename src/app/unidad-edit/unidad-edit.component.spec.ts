import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadEditComponent } from './unidad-edit.component';

describe('UnidadEditComponent', () => {
  let component: UnidadEditComponent;
  let fixture: ComponentFixture<UnidadEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnidadEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnidadEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
