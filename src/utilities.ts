type Product = {
    id: number;
    name: string;
    price: number;
    stock: number;
    color?: string
}


type Productsummery = Pick<Product, "id" | "name" | "color">


type ProductWithOutStock = Omit<Product, "stock" | "color">


type ProductWithColor = Required<Product>

const product: ProductWithColor = {
    name: "Monitor",
    id: 222,
    color: "Red",
    price: 20000,
    stock: 1
}

type Optional = Partial<Product>
type ProductReadonly = Readonly<Product>

// if use empty object

const emptyObject :Record<string,unknown> = {}