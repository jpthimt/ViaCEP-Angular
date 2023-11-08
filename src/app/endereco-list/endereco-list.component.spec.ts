import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderecoListComponent } from './endereco-list.component';

describe('EnderecoListComponent', () => {
  let component: EnderecoListComponent;
  let fixture: ComponentFixture<EnderecoListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnderecoListComponent]
    });
    fixture = TestBed.createComponent(EnderecoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
