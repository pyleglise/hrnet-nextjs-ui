import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import { listEmployees } from '../../lib/employees'
import { useSelector, useDispatch } from 'react-redux'
import { setEmployeeList } from '../../redux/reducers'
import { useEffect, useState } from 'react'
import EmployeesTable from '../../components/employeesTable'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSearch,
  faTable,
  faTableList,
} from '@fortawesome/free-solid-svg-icons'
import EmployeesCards from '../../components/employeesCards'

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
export default function ShowEmployees({ data }) {
  const dispatch = useDispatch()
  const { data: dataState } = useSelector((state) => state.employeeList)
  const [isList, setIsList] = useState(true)

  useEffect(() => {
    dataState.length === 0 && data && dispatch(setEmployeeList({ data }))
  }, [data])

  const handleToggleList = () => {
    setIsList(!isList)
  }

  return (
    <Layout showEmployees={true}>
      <Head>
        <title>{siteTitle + ' - Employees list'}</title>
      </Head>
      <section className='w-full h-full'>
        {showTitle(isList, handleToggleList)}
        {showDataZone(isList, dataState)}
      </section>
    </Layout>
  )
}
function showDataZone(isList, dataState) {
  return (
    <div className='flex flex-col justify-between text-left overflow-hidden h-[calc(100%-2.8em)] '>
      {isList ? (
        <EmployeesTable dataState={dataState} />
      ) : (
        <EmployeesCards dataState={dataState} />
      )}
    </div>
  )
}

function showTitle(isList, handleToggleList) {
  return (
    <div className='flex '>
      <h1 className='grow text-2xl my-1 text-secondary-color '>
        Employees list
      </h1>
      {isList ? (
        <div className='flex'>
          <input
            type='text'
            placeholder='Search'
            className='pl-1'
          ></input>
          <div className='p-2 text-secondary-color bg-white'>
            <span title={'Search'}>
              {/* Need to wrap FontAwesome into a span to add title : bug with next.js */}
              <FontAwesomeIcon
                className='text-xl hover:text-primary-color'
                icon={faSearch}
                aria-label={'Search'}
              />
            </span>
          </div>
        </div>
      ) : (
        ''
      )}
      <div className='flex  p-2 text-secondary-color'>
        <span title={'Toggle to ' + (isList ? 'cards' : 'table')}>
          {/* Need to wrap FontAwesome into a span to add title : bug with next.js */}
          <FontAwesomeIcon
            className=' text-xl hover:text-bg-color-light'
            icon={isList ? faTable : faTableList}
            onClick={handleToggleList}
            aria-label={'Toggle to ' + (isList ? 'cards' : 'table')}
          />
        </span>
      </div>
    </div>
  )
}
