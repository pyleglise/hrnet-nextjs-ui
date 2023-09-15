import fsPromises from 'fs/promises'
import path from 'path'

const dataFilePath = path.join(
  process.cwd(),
  '_mockedData/_mockedEmployeesList.json',
)
export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      // Read the existing data from the JSON file
      const jsonData = await fsPromises.readFile(dataFilePath)
      const objectData = JSON.parse(jsonData)

      res.status(200).json(objectData)
    } catch (error) {
      // console.error(error)
      // Send an error response
      res.status(500).json({ message: 'Error reading data' })
    }
  } else if (req.method === 'POST') {
    // Code for POST requests goes here
  }
}
