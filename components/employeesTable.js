import { useEffect, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowDownWideShort,
  faArrowLeft,
  faArrowRight,
  faArrowUpShortWide,
  faBackward,
  faForward,
} from '@fortawesome/free-solid-svg-icons'
import utilStyles from '../styles/utils.module.scss'
import ProgressBar from './progressBar'

const tableProperties = [
  ['firstName', ' First Name'],
  ['lastName', 'Last Name'],
  ['dateOfBirth', 'Date of birth'],
  ['startDate', 'Start date'],
  ['department', 'Departement'],
  ['street', 'Street'],
  ['city', 'City'],
  ['state', 'State'],
  ['zipCode', 'Zip Code'],
]

export default function EmployeesTable({ dataState, numberOfLines }) {
  // console.log(numberOfLines)
  const [sortedUsers, setSortedUsers] = useState(dataState)
  const [sortCriteria, setSortCriteria] = useState('lastName')
  const [sortDirection, setSortDirection] = useState('desc') // Initial sorting direction
  const [currentPage, setCurrentPage] = useState(1)
  const [usersPerPage, setUsersPerPage] = useState(numberOfLines) // Set the number of users to display per page

  const indexOfLastUser = currentPage * usersPerPage
  const indexOfFirstUser = indexOfLastUser - usersPerPage
  const currentUsers = sortedUsers.slice(indexOfFirstUser, indexOfLastUser)

  useEffect(() => {
    setUsersPerPage(numberOfLines)
  }, [numberOfLines, sortCriteria, sortDirection, currentPage])

  useEffect(() => {
    setCurrentPage(1)
  }, [numberOfLines])

  useEffect(() => {
    setSortedUsers(dataState)
    setCurrentPage(1)
  }, [dataState])

  const handleSort = (column) => {
    let newDirection = 'desc'
    if (sortCriteria === column) {
      newDirection = sortDirection === 'asc' ? 'desc' : 'asc'
    }
    const sorted = [...sortedUsers].sort((a, b) => {
      if (newDirection === 'asc') return b[column]?.localeCompare(a[column])
      else return a[column]?.localeCompare(b[column])
    })
    setSortDirection(newDirection)
    setSortedUsers(sorted)
    setSortCriteria(column)
  }

  return (
    <>
      <table className='flex flex-col h-[39vh] h2xs:h-[39vh] hxs:h-[54vh] hs:h-[60vh] hm:h-[65vh] hl:h-[71vh] hxl:h-[73vh] w-full bg-secondary-color '>
        <thead className='table table-fixed flex-none w-full xl:w-[calc(100%-1.2em)]   bg-secondary-color text-bg-color-xlight'>
          {/* <thead className='table table-fixed flex-none w-[calc(100%-1.2em)] bg-bg-color-light text-primary-color'> */}
          <tr className='cursor-pointer'>
            {tableProperties.map((propertyGroup, groupIndex) => (
              <th
                className='truncate'
                key={groupIndex}
                onClick={() => handleSort(propertyGroup[0])}
              >
                {showSortOption(sortCriteria, sortDirection, propertyGroup[0])}
                {propertyGroup[1]}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className='block flex-auto w-full overflow-y-scroll bg-bg-color-xlight'>
          {/* <tbody className='block flex-auto w-full h-[40vh] xs:h-[50vh] sm:h-[55vh] md:h-[60vh] lg:h-[71vh] xl:h-[72vh] overflow-y-scroll bg-bg-color-xlight'> */}
          {showTableRows(currentUsers)}
        </tbody>
      </table>

      {showNavButtons(
        currentPage,
        setCurrentPage,
        indexOfLastUser,
        sortedUsers,
        usersPerPage,
      )}
    </>
  )
}
function showTableRows(currentUsers) {
  return (
    <>
      {currentUsers.map((item, index) => (
        <tr
          className='table table-fixed w-full cursor-pointer hover:bg-bg-color-light hover:text-white'
          id={index}
          key={index}
        >
          {tableProperties.map((propertyGroup, groupIndex) => (
            <td
              className='truncate'
              key={groupIndex}
            >
              {item[propertyGroup[0]]}
            </td>
          ))}
        </tr>
      ))}
    </>
  )
}

function showNavButtons(
  currentPage,
  setCurrentPage,
  indexOfLastUser,
  sortedUsers,
  usersPerPage,
) {
  return (
    <>
      {sortedUsers.length > usersPerPage &&
        sortedUsers.length + 1 !== usersPerPage && (
          <div className='flex place-self-center mt-3'>
            <button
              onClick={() => setCurrentPage(1)}
              disabled={currentPage === 1}
              className={utilStyles.button + ' mx-1'}
              title='First Page'
              aria-label='First Page'
            >
              <FontAwesomeIcon icon={faBackward} />
            </button>
            {'  '}
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
              className={utilStyles.button + ' mx-1'}
              title='Previous Page'
              aria-label='Previous Page'
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>

            {'  '}
            <ProgressBar
              progressPercentage={
                (currentPage /
                  Math.ceil((sortedUsers.length + 1) / usersPerPage)) *
                100
              }
            />
            {'  '}
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={indexOfLastUser >= sortedUsers.length}
              className={utilStyles.button + ' mx-1'}
              title='Next Page'
              aria-label='Next Page'
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
            {'  '}
            <button
              onClick={() =>
                setCurrentPage(Math.ceil(sortedUsers.length / usersPerPage))
              }
              disabled={indexOfLastUser >= sortedUsers.length}
              className={utilStyles.button + ' mx-1'}
              title='Last Page'
              aria-label='Last Page'
            >
              <FontAwesomeIcon icon={faForward} />
            </button>
          </div>
        )}
    </>
  )
}

function showSortOption(sortCriteria, sortDirection, column) {
  return (
    <>
      {sortCriteria === column ? (
        sortDirection === 'desc' ? (
          <FontAwesomeIcon icon={faArrowUpShortWide} />
        ) : (
          <FontAwesomeIcon icon={faArrowDownWideShort} />
        )
      ) : (
        ''
      )}{' '}
    </>
  )
}
