import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import utilStyles from '../styles/utils.module.scss'
import EmployeeCard from './employeeCard'
export default function EmployeeModal({ setModalIsOpen, userToOpen }) {
  const handleClose = () => {
    setModalIsOpen(false)
  }
  return (
    <div
      className={utilStyles['darkBG']}
      onClick={(e) => {
        e.target.className === utilStyles['darkBG'] && setModalIsOpen(false)
      }}
    >
      <div className='fixed -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4'>
        <div className='h-auto w-auto rounded-xl shadow-[0_5px_20px_0] really-dark'>
          <button
            className='text-bg-color-xlight hover:text-black bg-secondary-color hover:bg-white cursor-pointer font-medium rounded-2xl text-lg absolute right-0 top-0 self-end -mt-3 -mr-3 py-0 px-2 border-0 transition-all duration-[0.25s] ease-[ease] shadow-[0_5px_20px_0_rgba(0,0,0,0.06)]'
            onClick={handleClose}
          >
            <FontAwesomeIcon icon={faClose} />
          </button>
          <div className='text-left'>
            <EmployeeCard item={userToOpen} />
          </div>
        </div>
      </div>
    </div>
  )
}
