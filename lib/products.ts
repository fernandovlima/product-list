export const getProducts = async (page = 1) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/products?page=${page}`)
  return res.json()
}
