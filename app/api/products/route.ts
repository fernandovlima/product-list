import { NextResponse } from 'next/server'
import { PRODUCTS } from '@/store/products'

const PAGE_SIZE = 8 // Número de produtos por página

export async function GET(req: Request, res: Response) {
  const { searchParams } = new URL(req.url)
  const page = Number(searchParams.get('page') || 1)

  const startIndex = (page - 1) * PAGE_SIZE
  const endIndex = startIndex + PAGE_SIZE
  const totalProducts = PRODUCTS.length
  const totalPages = Math.ceil(totalProducts / PAGE_SIZE)

  const paginatedProducts = PRODUCTS.slice(startIndex, endIndex)

  return NextResponse.json({ products: paginatedProducts, totalPages })
}
