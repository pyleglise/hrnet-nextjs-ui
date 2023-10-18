const dynamic = 'force-dynamic'
const revalidate = 0
import fsPromises from 'fs/promises'
import fs from 'fs'
import path from 'path'
import { sortEmployees } from '../../../../../lib/employees'

let dataFilePath = path.join(
  process.cwd(),
  '_mockedData/_mockedEmployeesList.json'
)
const tmpFilePath = '/tmp/_mockedEmployeesList.json'

export async function POST(request) {
  const req = await request.json()
  if (fs.existsSync(tmpFilePath)) {
    dataFilePath = tmpFilePath
  }

  try {
    // console.log('data received :')
    // console.log(req)
    // Read the existing data from the JSON file
    const jsonData = await fsPromises.readFile(dataFilePath)
    let objectData = JSON.parse(jsonData)

    objectData.push(req)

    // const updatedData = JSON.stringify(objectData)

    // Write the updated data to the JSON file
    await fsPromises.writeFile(tmpFilePath, JSON.stringify(objectData))
    objectData = sortEmployees(objectData)
    // Send a success response
    return Response.json(objectData)
  } catch (error) {
    // console.error(error)
    // Send an error response
    return Response.json({
      message: 'Error storing data : ' + error,
      error,
    })
  }
}
