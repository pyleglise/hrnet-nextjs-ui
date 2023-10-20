import { listEmployees } from '../../lib/employees'
import ShowEmployeesMain from './ShowEmployeesMain'

export const metadata = {
  title: 'HR-Net - Employees list',
  description:
    'HR-Net - Employees list - Employee database manager - version app-router',
}
export async function getStaticData() {
  let data = {}
  let error = ''
  try {
    data = await listEmployees()
  } catch (e) {
    error = e.toString()
  }

  return { data, error }
}
export default async function ShowEmployees() {
  const { data } = await getStaticData()

  return <ShowEmployeesMain data={data} />
}
