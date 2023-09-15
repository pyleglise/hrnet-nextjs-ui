export async function listEmployees() {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/employees')
  const data = await response.json()
  // console.log(data)
  return data
}
