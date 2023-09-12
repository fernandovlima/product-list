import { ProductList } from '@/components/product-list'
import { Product } from '@/store/products'

export type ProductsResponse = {
  products: Product[]
  totalPages: number
}

export default async function Home({
  searchParams
}: {
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  const res = await fetch('http://localhost:3000/api/products')
  const data: ProductsResponse = await res.json()

  return (
    <main>
      <h1>Products</h1>
      <ProductList data={data} />
    </main>
  )
}
