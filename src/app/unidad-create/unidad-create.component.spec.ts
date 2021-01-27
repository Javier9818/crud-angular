import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadCreateComponent } from './unidad-create.component';

describe('UnidadCreateComponent', () => {
  let component: UnidadCreateComponent;
  let fixture: ComponentFixture<UnidadCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnidadCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnidadCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
