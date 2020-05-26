import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinUsuarioComponent } from './sin-usuario.component';

describe('SinUsuarioComponent', () => {
  let component: SinUsuarioComponent;
  let fixture: ComponentFixture<SinUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
