import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Product Compare App');
  }));

  it('should test addProduct function', () => {
    const products = [];
    component.addProduct(products, 'product1');
    expect(products[0]).toEqual('product1');
    expect(products.length).toEqual(1);
  });

  it('should test removeProduct function', () => {
    const products = ['product1'];
    const product = 'product1';
    const newProducts = component.removeProduct(products, product);
    expect(newProducts.length).toEqual(0);
  });

  it('should check checkProduct function', () => {
    const mockProducts = [
      {
        "id": 1,
        "name": "Mock chair",
        "price": "100"
      },
      {
        "id": 2,
        "name": "Mock lamp",
        "price": "200"
      }
    ];
    const product = {
      "id": 1,
      "name": "Mock chair",
      "price": "100"
    }
    expect(component.checkProduct(product, mockProducts)).toEqual(true);
  });

  it('should test the compare function', () => {
    const compareOrRemove = "Compare";
    const enoughProductsToCompare = false;
    const productsToCompare = [];
    const product = {
      "id": 1,
      "name": "Mock chair",
      "price": "100"
    };
    component.compare(product);
    expect(enoughProductsToCompare).toEqual(false);
    component.compare(product);
  });
});
