import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryProductService extends InMemoryDbService {

  createDb() {
    const products = [
      {
        'id': 11,
        'title': 'OPPO F5 Youth (Gold, 32 GB)',
        'modelName': 'F5 Youth',
        'color': 'Gold',
        'productType': 'Mobile',
        'brand': 'OPPO',
        'price': 16990
      },
      {
        'id': 12,
        'title': 'Dell Inspiron 7000',
        'modelName': 'Inspiron',
        'color': 'Gray',
        'productType': 'Laptop',
        'brand': 'DELL',
        'price': 59990
      }
    ];
    return { products };
  }

}
