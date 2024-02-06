import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCriarComponent } from './modal-criar.component';

describe('ModalCriarComponent', () => {
  let component: ModalCriarComponent;
  let fixture: ComponentFixture<ModalCriarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalCriarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalCriarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
