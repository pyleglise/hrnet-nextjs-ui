const dynamic = 'force-dynamic'
const revalidate = 0
import fsPromises from 'fs/promises'
import fs from 'fs'
import path from 'path'
import { sortEmployees } from '../../../../lib/employees'

let dataFilePath = path.join(
  process.cwd(),
  '_mockedData/_mockedEmployeesList.json'
)
const tmpFilePath = '/tmp/_mockedEmployeesList.json'
export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')
  // console.log('requete GET', request)
  if (fs.existsSync(tmpFilePath)) {
    dataFilePath = tmpFilePath
  }

  try {
    const jsonData = await fsPromises.readFile(dataFilePath)

    let objectData = JSON.parse(jsonData)

    objectData = sortEmployees(objectData)
    return Response.json({ message: objectData, status: 200 })
  } catch (error) {
    // console.error(error)
    // Send an error response
    return Response.json({
      message: 'Error reading data : ' + error,
      error,
      status: 500,
    })
  }
}
