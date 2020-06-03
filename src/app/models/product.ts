export interface Product{
        name: string,
        Quantity: string,
        Image: string,
        PriceID: number,
        Price: Price
        ID: number,
        UserCreated: number,
        UserModified: number,
        DateCreated: string,
        DateModified: string
}

interface Price{
    ID: number,
    UserCreated: number,
    UserModified: number,
    DateCreated: string,
    DateModified: string,
    CostPrice: number,
    SalePrice: number
}