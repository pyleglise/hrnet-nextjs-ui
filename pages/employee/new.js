import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import utilStyles from '../../styles/utils.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser as faUserReg } from '@fortawesome/free-regular-svg-icons'
import {
  faUser,
  faBaby,
  faRoad,
  faCity,
  faFlagUsa,
  faEnvelope,
  faPlay,
  faBuildingUser,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import { addEmployee, listEmployees } from '../../lib/employees'
import { useDispatch, useSelector } from 'react-redux'
import { setEmployeeList } from '../../redux/reducers'
import DatePicker from '../../components/datePicker'

export default function CreateEmployees() {
  const dispatch = useDispatch()
  const employeeList = useSelector((state) => state.employeeList.data)
  const [newUserData, setNewUserData] = useState({})
  const [errorMessage, setErrorMessage] = useState('')
  const [isLoading, setLoading] = useState(false)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [clickedInput, setClickedInput] = useState(null)
  const startDate =
    typeof document !== 'undefined' &&
    document.getElementById('startDate')?.value
  const dateOfBirth =
    typeof document !== 'undefined' &&
    document.getElementById('dateOfBirth')?.value

  useEffect(() => {
    startDate &&
      setNewUserData({
        ...newUserData,
        ['startDate']: startDate,
      })
  }, [startDate])

  useEffect(() => {
    dateOfBirth &&
      setNewUserData({
        ...newUserData,
        ['dateOfBirth']: dateOfBirth,
      })
  }, [dateOfBirth])

  async function fieldsValidation(newUserData) {
    if (
      Object.keys(newUserData).length !== 0 &&
      (!newUserData?.firstName || !newUserData?.lastName)
    ) {
      setErrorMessage('You must enter at least a first name and a last name !')
      return false
    }

    let data = employeeList
    if (Object.keys(employeeList).length === 0) {
      data = await listEmployees()
      dispatch(setEmployeeList({ data }))
    }

    const userExists = data.find(
      (user) =>
        user.firstName === newUserData.firstName &&
        user.lastName === newUserData.lastName,
    )
    if (userExists) {
      setErrorMessage(
        'An employee with this first name and last name already exists !',
      )
      return false
    }

    return true
  }

  function handleChange({ currentTarget }) {
    const { value, id } = currentTarget

    setErrorMessage('')
    if (id) {
      setNewUserData({
        ...newUserData,
        [id]: value,
      })
    }
  }

  async function handleSave() {
    setLoading(true)
    if (await fieldsValidation(newUserData)) {
      const data = await addEmployee({ bodyData: newUserData })
      const element = document.getElementById('createEmployee')
      element.reset()
      dispatch(setEmployeeList({ data }))
      setNewUserData({})
    }
    setLoading(false)
  }

  const handleDatePicker = (e) => {
    setErrorMessage('')
    setClickedInput(e.target.id)
    setModalIsOpen(true)
  }

  return (
    <Layout createEmployee={true}>
      <Head>
        <title>{siteTitle + ' - New employee'}</title>
      </Head>
      <section className='w-full h-full '>
        <h1 className='text-2xl my-1 text-secondary-color'>Add new Employee</h1>
        <article className='flex justify-center '>
          <div className='form-container mb-4'>
            {showCreationForm(
              handleChange,
              handleDatePicker,
              // dateOfBirthChosen,
              // dateOfStartChosen,
            )}
            {errorMessage && (
              <p className='text-red-600 font-bold text-lg text-center mb-3'>
                {errorMessage}
              </p>
            )}

            <button
              className={utilStyles['button']}
              onClick={handleSave}
            >
              {isLoading ? <FontAwesomeIcon icon={faSpinner} /> : 'Save'}
            </button>
          </div>
        </article>
      </section>
      {modalIsOpen && (
        <DatePicker
          setModalIsOpen={setModalIsOpen}
          clickedInput={clickedInput}
        />
      )}
    </Layout>
  )
}
function showCreationForm(
  handleChange,
  handleDatePicker,
  // dateOfBirthChosen,
  // dateOfStartChosen,
) {
  return (
    <form
      action='#'
      id='createEmployee'
      className='flex flex-wrap '
    >
      <fieldset className='fieldset-container'>
        <legend>Identity</legend>
        <fieldset className='w-full'>
          <div className='input-container'>
            <input
              className='input-field outline-none'
              type='text'
              id='firstName'
              placeholder='First Name'
              autoFocus
              onChange={handleChange}
              required
            />
            <div className='input-icon'>
              <FontAwesomeIcon icon={faUserReg} />
            </div>
          </div>
        </fieldset>
        <fieldset className='w-full'>
          <div className='input-container'>
            <input
              className='input-field outline-none'
              type='text'
              id='lastName'
              placeholder='Last Name'
              onChange={handleChange}
              required
            />
            <div className='block absolute top-1 left-2 '>
              <FontAwesomeIcon icon={faUser} />
            </div>
          </div>
        </fieldset>
        <fieldset className='w-full'>
          <div className='input-container'>
            <input
              className='input-field outline-none'
              type='text'
              id='dateOfBirth'
              placeholder='Date of birth'
              onClick={handleDatePicker}
            />
            <div className='input-icon'>
              <FontAwesomeIcon icon={faBaby} />
            </div>
          </div>
        </fieldset>
      </fieldset>

      <fieldset className='fieldset-container border border-solid border-primary-color rounded-lg'>
        <legend>Address</legend>

        <fieldset className='w-full'>
          <div className='input-container'>
            <input
              className='input-field outline-none'
              type='text'
              id='street'
              placeholder='Street'
              onChange={handleChange}
            />
            <div className='input-icon'>
              <FontAwesomeIcon icon={faRoad} />
            </div>
          </div>
        </fieldset>
        <fieldset className='w-full'>
          <div className='input-container'>
            <input
              className='input-field outline-none'
              type='text'
              id='city'
              placeholder='City'
              onChange={handleChange}
            />
            <div className='input-icon'>
              <FontAwesomeIcon icon={faCity} />
            </div>
          </div>
        </fieldset>
        <fieldset className='w-full'>
          <div className='input-container'>
            <input
              className='input-field outline-none'
              type='text'
              id='state'
              placeholder='State'
              onChange={handleChange}
            />
            <div className='input-icon'>
              <FontAwesomeIcon icon={faFlagUsa} />
            </div>
          </div>
        </fieldset>

        <fieldset className='w-full'>
          <div className='input-container'>
            <input
              className='input-field outline-none'
              type='text'
              id='zipCode'
              placeholder='Zip Code'
              onChange={handleChange}
            />
            <div className='input-icon'>
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
          </div>
        </fieldset>
      </fieldset>
      <fieldset className='fieldset-container'>
        <legend>Employee</legend>
        <fieldset className='w-full'>
          <div className='input-container'>
            <input
              className='input-field outline-none'
              type='text'
              id='startDate'
              placeholder='Start date'
              // value={dateOfStartChosen}
              onChange={handleChange}
              onClick={handleDatePicker}
            />
            <div className='input-icon'>
              <FontAwesomeIcon icon={faPlay} />
            </div>
          </div>
        </fieldset>

        <fieldset className='w-full'>
          <div className='input-container'>
            <select
              className='input-field  outline-none'
              type='text'
              id='department'
              // placeholder='Departement'
              defaultValue='Select option'
              onChange={handleChange}
              aria-label='Departement'
            >
              <option disabled>Select option</option>
              <option>Sales</option>
              <option>Marketing</option>
              <option>Engineering</option>
              <option>Human Resources</option>
              <option>Legal</option>
            </select>
            <div className='input-icon'>
              <FontAwesomeIcon icon={faBuildingUser} />
              {/* <i className="fa fa-building-user"></i> */}
            </div>
          </div>
        </fieldset>
      </fieldset>
    </form>
  )
}
