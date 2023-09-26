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
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredData, setFilteredData] = useState(data)

  useEffect(() => {
    dataState.length === 0 && data && dispatch(setEmployeeList({ data }))
  }, [data])

  useEffect(() => {
    const filteredEmployees = dataState.filter((employee) => {
      return (
        employee.firstName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.lastName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.startDate?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.department?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.street?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.city?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.state?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.zipCode?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.dateOfBirth?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    })
    setFilteredData(filteredEmployees)
  }, [searchTerm, dataState])

  const handleToggleList = () => {
    setIsList(!isList)
  }

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
    <Layout showEmployees={true}>
      <Head>
        <title>{siteTitle + ' - Employees list'}</title>
      </Head>
      <section className='w-full h-full'>
        {showTitle(isList, handleToggleList, handleSearchChange)}
        {showDataZone(isList, filteredData)}
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

function showTitle(isList, handleToggleList, handleSearchChange) {
  return (
    <div className='flex '>
      <h1 className='grow text-2xl my-1 text-secondary-color '>
        Employees list
      </h1>
      {isList ? (
        <div className='flex'>
          <input
            type='text'
            placeholder='Instant search'
            className='pl-1 focus:outline-none'
            onChange={handleSearchChange}
          ></input>
          <div className='p-2 text-secondary-color bg-white'>
            <span title={'Search'}>
              {/* Need to wrap FontAwesome into a span to add title : bug with next.js */}
              <FontAwesomeIcon
                className='text-xl'
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
            className=' text-xl cursor-pointer hover:text-bg-color-light'
            icon={isList ? faTable : faTableList}
            onClick={handleToggleList}
            aria-label={'Toggle to ' + (isList ? 'cards' : 'table')}
          />
        </span>
      </div>
    </div>
  )
}
