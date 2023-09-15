import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { listEmployees } from '../lib/employees'

export async function getStaticProps() {
  let data = {}
  let error = ''
  try {
    data = await listEmployees()
  } catch (e) {
    error = e.toString()
  }
  return { props: { data, error } }
}
export default function ListEmployees({ data }) {
  // console.log(data)
  // console.log(typeof data)
  // if (Array.isArray(data)) console.log('data is an array')
  // let data = data.data
  const updateData = async () => {
    const response = await fetch('/api/v1/updateJsonFile')
    const data = await response.json()
    // console.log('data', data)
  }

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className='h-[100%] overflow-hidden'>
        <h1>Employees list</h1>
        <article className='h-[100%] text-left overflow-auto'>
          {data.map((item, key) => (
            <p
              key={key}
            >{`${item.firstName} ; ${item.lastName} ; ${item.dateOfBirth} ; ${item.startDate} ;${item.department} ;${item.city}`}</p>
          ))}
        </article>
      </section>
      <button onClick={updateData}>Update data</button>
    </Layout>
  )
}
