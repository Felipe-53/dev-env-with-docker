
async function getJson<TResponse>(url: string): Promise<TResponse> {
  const response = await fetch(url)
  const data = await response.json()
  return data
}

export { getJson }
