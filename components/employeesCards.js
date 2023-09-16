import EmployeeCard from './employeeCard'

export default function EmployeesCards({ dataState }) {
  return (
    <div className='flex flex-wrap justify-evenly gap-4 h-full overflow-y-auto'>
      {dataState &&
        dataState.map((item, index) => (
          <EmployeeCard
            item={item}
            key={index}
            id='id'
          />
        ))}
    </div>
  )
}
