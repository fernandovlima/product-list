import { ProductList } from '@/components/product-list/product-list'
import { Product } from '@/store/products'
import { getProducts } from '@/lib/products'
import { Suspense } from 'react'
import { MainContainer } from '@/app/page.styled'
import { Pagination } from '@/components/pagination/pagination'

export type ProductsResponse = {
  products: Product[]
  totalPages: number
}

export default async function Home({
  searchParams
}: {
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  const page = typeof searchParams?.page === 'string' ? Number(searchParams.page) : 1

  const data = await getProducts(page)

  return (
    <MainContainer>
      <Suspense fallback={<div>Loading...</div>}>
        <ProductList data={data} />
        <Pagination totalPages={data.totalPages} />
      </Suspense>
    </MainContainer>
  )
}
