export interface Product {
  id: string
  name: string
  category: string
  price: number
  imageUrl: string
  sku: string
}

export const PRODUCTS: Product[] = [
  {
    id: '100',
    name: 'Vestido Floral de Verão Estampado 100% Algodão',
    category: 'Vestidos',
    price: 50.0,
    imageUrl: 'https://res.cloudinary.com/dnro5pdpx/image/upload/v1694542359/products/product01.jpg',
    sku: 'VES-0100-ABCDE'
  },
  {
    id: '101',
    name: 'Blusa de Algodão',
    category: 'Blusas',
    price: 30.0,
    imageUrl: 'https://res.cloudinary.com/dnro5pdpx/image/upload/v1694543120/products/product02.jpg',
    sku: 'BLU-0101-BCDEF'
  },
  {
    id: '102',
    name: 'Vestido de Cocktail Floral',
    category: 'Vestidos',
    price: 40.0,
    imageUrl: 'https://res.cloudinary.com/dnro5pdpx/image/upload/v1694543184/products/prod03.jpg',
    sku: 'VES-0102-CDEFG'
  },
  {
    id: '103',
    name: 'Calça Plissada de Cintura Alta',
    category: 'Calças',
    price: 35.99,
    imageUrl: 'https://res.cloudinary.com/dnro5pdpx/image/upload/v1694543603/products/prod04.jpg',
    sku: 'CAL-0103-FGHIJ'
  },
  {
    id: '104',
    name: 'Calça de Seda Estampada',
    category: 'Calças',
    price: 39.99,
    imageUrl: 'https://res.cloudinary.com/dnro5pdpx/image/upload/v1694543684/products/prod05.jpg',
    sku: 'CAL-0104-WXYZA'
  },
  {
    id: '105',
    name: 'Camisa de Algodão com Estampa Floral',
    category: 'Blusas',
    price: 19.99,
    imageUrl: 'https://res.cloudinary.com/dnro5pdpx/image/upload/v1694543876/products/prod06.jpg',
    sku: 'BLU-0105-UVWXY'
  },
  {
    id: '106',
    name: 'Blusa Estampada decote V',
    category: 'Blusas',
    price: 29.99,
    imageUrl: 'https://res.cloudinary.com/dnro5pdpx/image/upload/v1694544004/products/prod07.jpg',
    sku: 'BLU-0106-CDEFG'
  },
  {
    id: '107',
    name: 'Vestido de Inverno Gola V 100% Algodão',
    category: 'Vestidos',
    price: 45.99,
    imageUrl: 'https://res.cloudinary.com/dnro5pdpx/image/upload/v1694544225/products/product08.jpg',
    sku: 'VES-0107-DEFGH'
  },
  {
    id: '108',
    name: 'Calça Algadão com Estampa Verão',
    category: 'Calças',
    price: 55.99,
    imageUrl: 'https://res.cloudinary.com/dnro5pdpx/image/upload/v1694544360/products/prod09.jpg',
    sku: 'CAL-0108-EFGHI'
  },
  {
    id: '109',
    name: 'Saia Midi de Seda Estampada',
    category: 'Saias',
    price: 40.0,
    imageUrl: 'https://res.cloudinary.com/dnro5pdpx/image/upload/v1694544852/products/prod10.jpg',
    sku: 'SAI-0109-FGHIJ'
  },
  {
    id: '110',
    name: 'Conjunto Inverno Algodão Estampado',
    category: 'Conjuntos',
    price: 65.99,
    imageUrl: 'https://res.cloudinary.com/dnro5pdpx/image/upload/v1694545059/products/prod11.jpg',
    sku: 'CON-0110-GHIJK'
  },
  {
    id: '111',
    name: 'Calça em Seda Estampada com Cinto',
    category: 'Calças',
    price: 99.99,
    imageUrl: 'https://res.cloudinary.com/dnro5pdpx/image/upload/v1694545171/products/prod%2012.jpg',
    sku: 'CAL-0111-HIJKL'
  }
]
