export default function EmployeesTable({ dataState }) {
  return (
    <table className='flex flex-col w-full h-full'>
      <thead className='table table-fixed flex-none w-[calc(100%-1.2em)] bg-bg-color-light text-primary-color'>
        <tr className=''>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Date of birth</th>
          <th>Start date</th>
          <th>Departement</th>
          <th>Street</th>
          <th>City</th>
          <th>State</th>
          <th>Zip Code</th>
        </tr>
      </thead>
      <tbody className='block flex-auto  w-full h-full overflow-y-scroll'>
        {dataState &&
          dataState.map((item, index) => (
            <tr className='table table-fixed w-full cursor-pointer hover:bg-bg-color-light hover:text-white' key={index}>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.dateOfBirth}</td>
              <td>{item.startDate}</td>
              <td>{item.department}</td>
              <td>{item.street}</td>
              <td>{item.city}</td>
              <td>{item.state}</td>
              <td>{item.zipCode}</td>
            </tr>
          ))}
      </tbody>
    </table>
  )
}
