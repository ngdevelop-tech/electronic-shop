import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductModelComponent } from './add-product-model.component';

describe('AddProductModelComponent', () => {
  let component: AddProductModelComponent;
  let fixture: ComponentFixture<AddProductModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProductModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
