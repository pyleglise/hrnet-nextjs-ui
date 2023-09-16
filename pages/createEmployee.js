import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.scss'
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
} from '@fortawesome/free-solid-svg-icons'

export default function CreateEmployees() {
  return (
    <Layout createEmployee={true}>
      <Head>
        <title>{siteTitle + ' - New employee'}</title>
      </Head>
      <section className='w-full h-full'>
        <h1 className='text-2xl my-1 text-secondary-color'>Add new Employee</h1>
        <article className='flex justify-center '>
          <div className='form-container'>
            <form action='#' id='create-employee' className='flex flex-wrap '>
              <fieldset className='fieldset-container'>
                <legend>Identity</legend>
                <fieldset className='w-full'>
                  <div className='input-container'>
                    <input
                      className='input-field'
                      type='text'
                      id='first-name'
                      placeholder='First Name'
                      autoFocus
                    />
                    <div className='input-icon'>
                      <FontAwesomeIcon icon={faUserReg} />
                    </div>
                  </div>
                </fieldset>
                <fieldset className='w-full'>
                  <div className='input-container'>
                    <input
                      className='input-field'
                      type='text'
                      id='last-name'
                      placeholder='Last Name'
                    />
                    <div className='block absolute top-1 left-2 '>
                      <FontAwesomeIcon icon={faUser} />
                    </div>
                  </div>
                </fieldset>
                <fieldset className='w-full'>
                  <div className='input-container'>
                    <input
                      className='input-field'
                      type='text'
                      id='date-of-birth'
                      placeholder='Date of birth'
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
                      className='input-field'
                      type='text'
                      id='street'
                      placeholder='Street'
                    />
                    <div className='input-icon'>
                      <FontAwesomeIcon icon={faRoad} />
                    </div>
                  </div>
                </fieldset>
                <fieldset className='w-full'>
                  <div className='input-container'>
                    <input
                      className='input-field'
                      type='text'
                      id='city'
                      placeholder='City'
                    />
                    <div className='input-icon'>
                      <FontAwesomeIcon icon={faCity} />
                    </div>
                  </div>
                </fieldset>
                <fieldset className='w-full'>
                  <div className='input-container'>
                    <input
                      className='input-field'
                      type='text'
                      id='state'
                      placeholder='State'
                    />
                    <div className='input-icon'>
                      <FontAwesomeIcon icon={faFlagUsa} />
                    </div>
                  </div>
                </fieldset>

                <fieldset className='w-full'>
                  <div className='input-container'>
                    <input
                      className='input-field'
                      type='text'
                      id='zip-code'
                      placeholder='Zip Code'
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
                      className='input-field'
                      type='text'
                      id='start-date'
                      placeholder='Start date'
                    />
                    <div className='input-icon'>
                      <FontAwesomeIcon icon={faPlay} />
                    </div>
                  </div>
                </fieldset>

                <fieldset className='w-full'>
                  <div className='input-container'>
                    <select
                      className='input-field '
                      type='text'
                      id='department'
                      // placeholder='Departement'
                      defaultValue='Select option'
                    >
                      <option disabled>Select option</option>
                      <option >Sales</option>
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
            <button className={utilStyles['button']}>Save</button>
          </div>
        </article>
      </section>
    </Layout>
  )
}
