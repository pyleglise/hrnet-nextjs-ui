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
import EmployeeCard from '../../components/employeeCard'
// import Modal from '../../components/modal'
import { Modal } from 'modal-nextjs'
import 'modal-nextjs/dist/components/Modal.css'

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
  const [numberOfLines, setNumberOfLines] = useState(30)
  const [filteredData, setFilteredData] = useState(data)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [userToOpen, setUserToOpen] = useState({})

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

  const handleChangeNbOfLines = (e) => {
    document.getElementById('searchfield').value = ''
    setFilteredData(dataState)
    e.target.value === 'all'
      ? setNumberOfLines(dataState.length)
      : setNumberOfLines(e.target.value)
  }

  return (
    <Layout showEmployees={true}>
      <Head>
        <title>{siteTitle + ' - Employees list'}</title>
      </Head>
      <section className='w-full h-full'>
        {showTitle(
          isList,
          handleToggleList,
          handleSearchChange,
          filteredData,
          handleChangeNbOfLines,
        )}
        {showDataZone(
          isList,
          filteredData,
          numberOfLines,
          setModalIsOpen,
          setUserToOpen,
        )}
      </section>
      {modalIsOpen && (
        <Modal
          setModalIsOpen={setModalIsOpen}
          content={<EmployeeCard item={userToOpen} />}
        />
      )}
    </Layout>
  )
}
function showDataZone(
  isList,
  dataState,
  numberOfLines,
  setModalIsOpen,
  setUserToOpen,
) {
  return (
    <div className='flex flex-col justify-between text-left overflow-hidden mb-2 '>
      {isList ? (
        <EmployeesTable
          dataState={dataState}
          numberOfLines={numberOfLines}
          setModalIsOpen={setModalIsOpen}
          setUserToOpen={setUserToOpen}
        />
      ) : (
        <EmployeesCards dataState={dataState} />
      )}
    </div>
  )
}

function showTitle(
  isList,
  handleToggleList,
  handleSearchChange,
  filteredData,
  handleChangeNbOfLines,
) {
  return (
    <>
      <div className='flex flex-wrap'>
        <h1 className='grow text-lg xl:text-2xl my-1 text-secondary-color '>
          Employees list{' '}
          <span className='xl:text-lg text-base'>
            ({filteredData.length} result
            {filteredData.length > 1 ? 's' : ''})
          </span>
        </h1>
        {isList ? (
          <div className='flex'>
            <label
              htmlFor='pageSelector'
              className='xl:text-lg text-xs mr-2 my-auto'
            >
              Lines displayed
            </label>
            <select
              id='pageSelector'
              className='xl:text-lg text-xs mr-3 focus:outline-none'
              defaultValue='30'
              onChange={handleChangeNbOfLines}
            >
              <option>15</option>
              <option>30</option>
              <option>50</option>
              <option>100</option>
              <option>all</option>
            </select>
            <input
              type='text'
              placeholder='Instant search'
              className='text-sm xl:text-base pl-1 focus:outline-none'
              onChange={handleSearchChange}
              id='searchfield'
            ></input>
            <div className='p-2 text-secondary-color bg-white'>
              <span title={'Search'}>
                <FontAwesomeIcon
                  className='text-sm xl:text-xl'
                  icon={faSearch}
                  aria-label={'Search'}
                />
              </span>
            </div>
          </div>
        ) : (
          ''
        )}
        <div className='flex p-2 text-secondary-color'>
          <span title={'Toggle to ' + (isList ? 'cards' : 'table')}>
            {/* Need to wrap FontAwesome into a span to add title : bug with next.js */}
            <FontAwesomeIcon
              className=' text-sm xl:text-xl cursor-pointer hover:text-bg-color-light'
              icon={isList ? faTable : faTableList}
              onClick={handleToggleList}
              aria-label={'Toggle to ' + (isList ? 'cards' : 'table')}
            />
          </span>
        </div>
      </div>
    </>
  )
}
