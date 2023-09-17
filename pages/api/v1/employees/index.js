import fsPromises from 'fs/promises'
import fs from 'fs'
import path from 'path'
import { sortEmployees } from '../../../../lib/employees'

let dataFilePath = path.join(
  process.cwd(),
  '_mockedData/_mockedEmployeesList.json',
)
const tmpFilePath = '/tmp/_mockedEmployeesList.json'
export default async function handler(req, res) {
  if (fs.existsSync(tmpFilePath)) {
    dataFilePath = tmpFilePath
  }
  if (req.method === 'GET') {
    try {
      // Read the existing data from the JSON file
      const jsonData = await fsPromises.readFile(dataFilePath)
      // console.log(jsonData)
      let objectData = JSON.parse(jsonData)
      // objectData.sort((a, b) => {
      //   if (a.lastName < b.lastName) {
      //     return -1
      //   }
      //   if (a.lastName > b.lastName) {
      //     return 1
      //   }
      //   return 0
      // })
      objectData = sortEmployees(objectData)
      res.status(200).json(objectData)
    } catch (error) {
      // console.error(error)
      // Send an error response
      res.status(500).json({ message: 'Error reading data : ' + error })
    }
  } else {
    res.status(400).json({ message: 'Error : bad request' })
  }
}
