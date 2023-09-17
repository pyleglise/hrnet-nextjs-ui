import fsPromises from 'fs/promises'
import path from 'path'
import { sortEmployees } from '../../../../../lib/employees'

const dataFilePath = path.join(
  process.cwd(),
  '_mockedData/_mockedEmployeesList.json',
)
export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // console.log('data received :')
      // console.log(req.body)
      // Read the existing data from the JSON file
      const jsonData = await fsPromises.readFile(dataFilePath)
      let objectData = JSON.parse(jsonData)

      objectData.push(req.body)

      // const updatedData = JSON.stringify(objectData)

      // Write the updated data to the JSON file
      await fsPromises.writeFile(dataFilePath, JSON.stringify(objectData))
      objectData = sortEmployees(objectData)
      // Send a success response
      res.status(200).json(objectData)
    } catch (error) {
      // console.error(error)
      // Send an error response
      res.status(500).json({ message: 'Error storing data : ' + error })
    }
  } else {
    res.status(400).json({ message: 'Error : bad request' })
  }
}
