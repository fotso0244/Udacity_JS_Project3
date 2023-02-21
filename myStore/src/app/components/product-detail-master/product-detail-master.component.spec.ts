import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailMasterComponent } from './product-detail-master.component';

describe('ProductDetailMasterComponent', () => {
  let component: ProductDetailMasterComponent;
  let fixture: ComponentFixture<ProductDetailMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailMasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
