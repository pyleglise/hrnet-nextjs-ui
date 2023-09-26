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

export default function EmployeesTable({ dataState }) {
  const [sortedUsers, setSortedUsers] = useState(dataState)
  const [sortCriteria, setSortCriteria] = useState('lastName')
  const [sortDirection, setSortDirection] = useState('desc') // Initial sorting direction

  const [currentPage, setCurrentPage] = useState(1)
  const [usersPerPage, setUsersPerPage] = useState(33) // Set the number of users to display per page

  const indexOfLastUser = currentPage * usersPerPage
  const indexOfFirstUser = indexOfLastUser - usersPerPage
  const currentUsers = sortedUsers.slice(indexOfFirstUser, indexOfLastUser)

  useEffect(() => {
    const displayHeight = window.innerHeight

    // console.log('displayHeight=' + displayHeight)
    // Calculate the number of rows to display based on available height
    let rowsToFit = 0
    displayHeight <= 1368 && (rowsToFit = Math.floor(displayHeight / 29))
    displayHeight <= 1180 && (rowsToFit = Math.floor(displayHeight / 30))
    displayHeight <= 915 && (rowsToFit = Math.floor(displayHeight / 31))
    displayHeight <= 740 && (rowsToFit = Math.floor(displayHeight / 33))
    displayHeight <= 720 && (rowsToFit = Math.floor(displayHeight / 34))
    displayHeight <= 600 && (rowsToFit = Math.floor(displayHeight / 40))
    displayHeight <= 568 && (rowsToFit = Math.floor(displayHeight / 44))

    // containerHeight <= 360 && (rowsToFit = Math.floor(containerHeight / 0.92))
    // containerHeight <= 22 && (rowsToFit = Math.floor(containerHeight / 2.2))
    // console.log('rowsToFit=' + rowsToFit)
    // Set the number of users to display per page based on available height
    setUsersPerPage(rowsToFit)
  }, [])
  // console.log(dataState)
  const handleSort = (column) => {
    const newDirection = sortDirection === 'asc' ? 'desc' : 'asc'
    const sorted = [...sortedUsers]
      .sort((a, b) => {
        if (sortDirection === 'asc') return b[column]?.localeCompare(a[column])
        else return a[column]?.localeCompare(b[column])
      })
      .reverse()

    setSortedUsers(sorted)
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
        <thead className='table table-fixed flex-none w-full bg-secondary-color text-bg-color-xlight'>
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
    <div className='flex place-self-center'>
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
          (currentPage / Math.ceil(sortedUsers.length / usersPerPage)) * 100
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
