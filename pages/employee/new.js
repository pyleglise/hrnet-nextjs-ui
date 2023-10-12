import Head from 'next/head'
import DatePicker from '../../components/datePicker'
// import { DatePicker } from 'date-picker-nextjs'

import Layout, { siteTitle } from '../../components/layout'
import utilStyles from '../../styles/utils.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser as faUserReg } from '@fortawesome/free-regular-svg-icons'
import {
  faUser,
  faBaby,
  faRoad,
  faCity,
  faEnvelope,
  faPlay,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import { addEmployee, listEmployees } from '../../lib/employees'
import { useDispatch, useSelector } from 'react-redux'
import { setEmployeeList } from '../../redux/reducers'

import SelectMenu from '../../components/selectMenu'
import departments from '../../data/departements.json'
import states from '../../data/states.json'
import Modal from '../../components/modal'
// import { Modal } from 'modal-nextjs'
// import 'modal-nextjs/dist/components/Modal.css'

export default function CreateEmployees() {
  const dispatch = useDispatch()
  const employeeList = useSelector((state) => state.employeeList.data)
  const [newUserData, setNewUserData] = useState({})
  const [errorMessage, setErrorMessage] = useState('')
  const [isLoading, setLoading] = useState(false)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [modalDateIsOpen, setModalDateIsOpen] = useState(false)
  const [clickedInput, setClickedInput] = useState(null)
  const [selectedDepartment, setSelectedDepartment] = useState('')
  const [selectedState, setSelectedState] = useState('')

  const statesNames = states.map((item) => item.name)
  const startDate =
    typeof document !== 'undefined' &&
    document.getElementById('startDate')?.value
  const dateOfBirth =
    typeof document !== 'undefined' &&
    document.getElementById('dateOfBirth')?.value

  const initDepartment = 'Select department'
  const initState = 'Select state'

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

  useEffect(() => {
    selectedDepartment &&
      selectedDepartment !== '' &&
      setNewUserData({
        ...newUserData,
        ['department']: selectedDepartment,
      })
  }, [selectedDepartment])

  useEffect(() => {
    selectedState &&
      selectedState !== '' &&
      setNewUserData({
        ...newUserData,
        ['state']: selectedState,
      })
  }, [selectedState])

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
      setSelectedDepartment('')
      setSelectedState('')
      dispatch(setEmployeeList({ data }))
      setNewUserData({})
    }
    setLoading(false)
    setModalIsOpen(true)
  }

  const handleDatePicker = (e) => {
    setErrorMessage('')
    setClickedInput(e.target.id)
    setModalDateIsOpen(true)
  }

  const showCreationForm = (handleChange, handleDatePicker) => {
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
              <SelectMenu
                arrayOfdata={statesNames}
                iconFa={'faFlagUsa'}
                placeHolderText={initState}
                selectedElement={selectedState}
                setSelectedElement={setSelectedState}
              />
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
              <SelectMenu
                arrayOfdata={departments}
                iconFa={'faBuildingUser'}
                placeHolderText={initDepartment}
                selectedElement={selectedDepartment}
                setSelectedElement={setSelectedDepartment}
              />
            </div>
          </fieldset>
        </fieldset>
      </form>
    )
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
            {showCreationForm(handleChange, handleDatePicker)}
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
        <Modal
          setModalIsOpen={setModalIsOpen}
          content={
            <p className='p-8 bg-white rounded'>Employee saved succeffully</p>
          }
        />
      )}
      {modalDateIsOpen && (
        <DatePicker
          setModalDateIsOpen={setModalDateIsOpen}
          clickedInput={clickedInput}
        />
      )}
    </Layout>
  )
}
