export const getProducts = async (page = 1) => {
  const res = await fetch(`http://localhost:3000/api/products?page=${page}`)
  return res.json()
}
