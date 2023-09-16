import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function EmployeeCard({ item }) {
  return (
    <div className='w-80 p-3 rounded-xl shadow-lg bg-tertiary-color text-clear-text cursor-pointer hover:shadow-2xl hover:bg-bg-color-light'>
      {showCardHeader(item)}
      <div className='flex p-1 gap-2'>
        {showIdentity(item)}
        {showAddress(item)}
      </div>
    </div>
  )
}
function showCardHeader(item) {
  return (
    <div className='flex'>
      <FontAwesomeIcon
        icon={faUser}
        className='text-7xl m-2'
      />
      <div className='text-xl px-3 my-2 grow rounded-lg bg-bg-color-xxlight text-secondary-color'>
        <h1> {item.firstName + ' ' + item.lastName}</h1>
        <details className='text-base'>
          <summary>{item.department}</summary>
          <p className='text-sm'>Start date : {item.startDate}</p>
        </details>
      </div>
    </div>
  )
}

function showIdentity(item) {
  return (
    <div>
      <p>Name : {item.lastName}</p>
      <p>First Name : {item.firstName}</p>
      <p>Date of birth : {item.dateOfBirth}</p>
    </div>
  )
}

function showAddress(item) {
  return (
    <details>
      <summary>Address</summary>
      <p>Street : {item.street}</p>
      <p>City : {item.city}</p>
      <p>State : {item.state}</p>
      <p>Zip Code : {item.zipCode}</p>
    </details>
  )
}
