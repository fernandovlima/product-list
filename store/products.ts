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
    name: 'Saia Midi',
    category: 'Saias',
    price: 40.0,
    imageUrl: '/img/product.webp',
    sku: 'SAI-0109-FGHIJ'
  },
  {
    id: '110',
    name: 'Vestido de Cocktail',
    category: 'Vestidos',
    price: 65.0,
    imageUrl: '/img/product.webp',
    sku: 'VES-0110-GHIJK'
  },
  {
    id: '111',
    name: 'Blusa de Seda',
    category: 'Blusas',
    price: 40.0,
    imageUrl: '/img/product.webp',
    sku: 'BLU-0111-HIJKL'
  },
  {
    id: '112',
    name: 'Calça Legging',
    category: 'Calças',
    price: 25.0,
    imageUrl: '/img/product.webp',
    sku: 'CAL-0112-IJKLM'
  },
  {
    id: '113',
    name: 'Meia Alta',
    category: 'Meias',
    price: 12.0,
    imageUrl: '/img/product.webp',
    sku: 'MEI-0113-JKLMA'
  },
  {
    id: '114',
    name: 'Saia Longa',
    category: 'Saias',
    price: 50.0,
    imageUrl: '/img/product.webp',
    sku: 'SAI-0114-KLMAB'
  },
  {
    id: '115',
    name: 'Blusa Casual',
    category: 'Blusas',
    price: 30.0,
    imageUrl: '/img/product.webp',
    sku: 'BLU-0115-LMABC'
  },
  {
    id: '116',
    name: 'Vestido de Noite',
    category: 'Vestidos',
    price: 80.0,
    imageUrl: '/img/product.webp',
    sku: 'VES-0116-MABCD'
  },
  {
    id: '117',
    name: 'Calça Jeans Boyfriend',
    category: 'Calças',
    price: 50.0,
    imageUrl: '/img/product.webp',
    sku: 'CAL-0117-ABCDE'
  },
  {
    id: '118',
    name: 'Meia Curta',
    category: 'Meias',
    price: 8.0,
    imageUrl: '/img/product.webp',
    sku: 'MEI-0118-BCDEF'
  },
  {
    id: '119',
    name: 'Saia Plissada Midi',
    category: 'Saias',
    price: 45.0,
    imageUrl: '/img/product.webp',
    sku: 'SAI-0119-CDEFG'
  },
  {
    id: '120',
    name: 'Blusa de Linho',
    category: 'Blusas',
    price: 35.0,
    imageUrl: '/img/product.webp',
    sku: 'BLU-0120-DEFGH'
  },
  {
    id: '121',
    name: 'Vestido Estampado',
    category: 'Vestidos',
    price: 55.0,
    imageUrl: '/img/product.webp',
    sku: 'VES-0121-EFGHI'
  }
]
