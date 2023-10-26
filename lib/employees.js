/**
 * Function to list all employees.
 *
 * @returns {Object} - Object containing an array of all employees.
 */
export async function listEmployees() {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/employees', {
    method: 'GET',
  })

  const data = await response.json()

  return data.data
}

/**
 * Function to add an employee.
 *
 * @param {Object} bodyData - Object containing employees data.
 * @returns {Object} - Object containing the response from API.
 */
export async function addEmployee({ bodyData }) {
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

  return data
}

/**
 * Function to sort a list of employees.
 *
 * @param {Object} objectData - List to be sorted
 * @returns {Object} - Object containing the data sorted.
 */
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
