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
    const jsonData = await fsPromises.readFile(dataFilePath)
    let objectData = JSON.parse(jsonData)

    objectData.push(req)

    await fsPromises.writeFile(tmpFilePath, JSON.stringify(objectData))
    objectData = sortEmployees(objectData)

    return Response.json(objectData)
  } catch (error) {
    return new Response(null, {
      status: 500,
      statusText: error,
    })
  }
}
