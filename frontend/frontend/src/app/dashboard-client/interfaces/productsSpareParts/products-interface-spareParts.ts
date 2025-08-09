export interface ProductsInterfaceSpareParts {
  listProducts: Product[];
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: string; // o number si la API ya lo devuelve numérico
  image: string;
  state: string;
  category: string;
  quantity: number;
  created_at: string; // podrías usar Date si luego lo parseas
  updated_at: string;
}
