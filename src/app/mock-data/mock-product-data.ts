import { Product } from '../models/product';

export class MockData {

    public static Products: Product[] = [
        {
            'title': 'OPPO F5 Youth (Gold, 32 GB)',
            'modelName': 'F5 Youth',
            'color': 'Gold',
            'productType': 'Mobile',
            'brand': 'OPPO',
            'highlights': [
                '3 GB RAM | 32 GB ROM | Expandable Upto 256 GB',
                '6 inch Full HD+ Display',
                '3200 mAh Battery',
            ],
            'price': 16990
        },
        {
            'title': 'Dell Inspiron 7000',
            'modelName': 'Inspiron',
            'color': 'Gray',
            'productType': 'Laptop',
            'brand': 'DELL',
            'highlights': [
                'Intel Core i5 Processor (7th Gen)',
                '8 GB DDR4 RAM',
                '1 TB HDD',
            ],
            'price': 59990
        }
    ];

}
