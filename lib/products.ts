export const getProducts = async (page = 1) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/products?page=${page}`, {
    next: { revalidate: 3600 }
  })
  return await res.json()
}
