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

export default function EmployeesTable({ dataState }) {
  const [sortedUsers, setSortedUsers] = useState(dataState)
  const [sortCriteria, setSortCriteria] = useState('lastName')
  const [sortDirection, setSortDirection] = useState('desc') // Initial sorting direction

  const [currentPage, setCurrentPage] = useState(1)
  const usersPerPage = 33 // Set the number of users to display per page

  const indexOfLastUser = currentPage * usersPerPage
  const indexOfFirstUser = indexOfLastUser - usersPerPage
  const currentUsers = sortedUsers.slice(indexOfFirstUser, indexOfLastUser)
  // console.log(dataState)
  const handleSort = (column) => {
    const newDirection = sortDirection === 'asc' ? 'desc' : 'asc'
    const sorted = [...sortedUsers].sort((a, b) => {
      if (a[column] < b[column]) {
        return sortDirection === 'asc' ? -1 : 1
      }
      if (a[column] > b[column]) {
        return sortDirection === 'asc' ? 1 : -1
      }
      return 0
    })
    setSortedUsers(sorted)
    // setSortedUsers((prevSortedUsers) => {
    //   // Create a copy of the entire list and replace only the displayed range with the sorted subset
    //   const newSortedUsers = [...prevSortedUsers]
    //   newSortedUsers.splice(indexOfFirstUser, usersPerPage, ...sorted)
    //   return newSortedUsers
    // })
    setSortDirection(newDirection)
    setSortCriteria(column)
  }
  useEffect(() => {
    setSortedUsers(dataState)
    setCurrentPage(1)
  }, [dataState])

  return (
    <>
      <table className='flex flex-col w-full '>
        <thead className='table table-fixed flex-none w-full bg-bg-color-light text-primary-color'>
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
        <tbody className='block flex-auto  w-full h-full overflow-y-auto'>
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
    <div className='items-self-end text-center mt-2 '>
      {currentPage !== 1 && (
        <>
          <button
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
            className={utilStyles.button + ' w-32 '}
          >
            <FontAwesomeIcon icon={faBackward} /> First
          </button>
          {'  '}
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className={utilStyles.button + ' w-32 '}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
            {'  '}
            Previous
          </button>
        </>
      )}
      {'  '}
      {indexOfLastUser < sortedUsers.length && (
        <>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={indexOfLastUser >= sortedUsers.length}
            className={utilStyles.button + ' w-32 '}
          >
            Next {'  '}
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
          {'  '}
          <button
            onClick={() =>
              setCurrentPage(Math.ceil(sortedUsers.length / usersPerPage))
            }
            disabled={indexOfLastUser >= sortedUsers.length}
            className={utilStyles.button + ' w-32 '}
          >
            Last {'  '}
            <FontAwesomeIcon icon={faForward} />
          </button>
        </>
      )}
    </div>
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
