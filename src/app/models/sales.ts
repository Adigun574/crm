export class Sale{
  CustomerID: number;
  InvoiceID: number = 0;
  CartID: number = 0;
  Invoice: Invoice;
  Cart: Cart;
  Payment: Payment[];
  ID: number = 0;
  UserCreated: number;
  UserModified: number = 0;
  DateCreated: string;
  DateModified: string
}

export class Invoice{
    CustomerID: number;
    InvoiceDate: string = "2020-05-17T13:27:44.923Z";
    InvoiceNo: string = '';
    CartID: number = 0;
    Amount: number;
    AmountPaid: number;
    Balance: number = 0;
    IsPaid: boolean = true;
    Cashier: Cashier;
    ExtData: string = '';
    Tax: number = 0;
    TaxPercent: number = 0;
    TaxName: string = '';
    TaxInclusive: boolean = true;
    Discount: number = 0;
    ID: number = 0;
    UserCreated: number;
    UserModified: number = 0;
    DateCreated: string = "2020-05-17T13:27:44.923Z";
    DateModified: string = "2020-05-17T13:27:44.923Z"
}

export class Cashier{
    Name: string = '';
    Post: string = '';
    Phone: string = '';
    Gender: string = '';
    Image: string = '';
    Username: string = '';
    Password: string = '';
    Email: string = '';
    ID: number;
    UserCreated: number;
    UserModified: number = 0;
    DateCreated: string = "2020-05-17T13:27:44.923Z";
    DateModified: string = "2020-05-17T13:27:44.923Z"
}

export class Cart{
    Code: string = '';
    Items: Item[];
    Amount: number;
    ID: number = 0;
    UserCreated: number;
    UserModified: number = 0;
    DateCreated: string = "2020-05-17T13:27:44.923Z";
    DateModified: string = "2020-05-17T13:27:44.923Z"
}

class Item{
    ID: number = 0;
    CartID: number = 0;
    Name: string;
    Code: string = '';
    Quantity: number;
    Amount: number;
    ProductID: number
}

interface Payment{
    ID: number;
    CustomerID: number;
    Amount: number;
    Method: string;
    Reference: string;
    DatePaid: string;
    InvoiceNo: string;
    UserCreated: number;
}