// Function that fetches employees list

export async function listEmployees() {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/employees', {
    method: 'GET',
  })

  const data = await response.json()
  // console.log(data)
  return data.message
}

export async function addEmployee({ bodyData }) {
  // console.log('bodyData=')

  // console.log(bodyData)
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + '/employee/new',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bodyData),
    }
  )
  const data = await response.json()
  // console.log(data)
  return data
}

export function sortEmployees(objectData) {
  objectData.sort((a, b) => {
    if (a.lastName < b.lastName) {
      return -1
    }
    if (a.lastName > b.lastName) {
      return 1
    }
    return 0
  })
  return objectData
}
