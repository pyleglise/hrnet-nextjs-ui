import { listEmployees } from '../../lib/employees'
import ShowEmployeesMain from './ShowEmployeesMain'

/**
 * Metadata related to the ShowEmployees component.
 * @type {Object}
 */
export const metadata = {
  title: 'HR-Net - Employees list',
  description:
    'HR-Net - Employees list - Employee database manager - version app-router',
}

/**
 * Fetches static data for the employees.
 *
 * @returns {Promise<Object>} An object containing the fetched data and any error that might have occurred.
 */
export const getStaticData = async () => {
  let data = {}
  let error = ''
  try {
    data = await listEmployees()
  } catch (e) {
    error = e.toString()
  }

  return { data, error }
}

/**
 * Component to display the list of employees.
 *
 * @namespace
 * @returns {ReactElement} The rendered ShowEmployeesMain component.
 */
const ShowEmployees = async () => {
  const { data } = await getStaticData()

  return <ShowEmployeesMain data={data} />
}

export default ShowEmployees
