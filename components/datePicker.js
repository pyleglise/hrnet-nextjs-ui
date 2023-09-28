import {
  faArrowCircleLeft,
  faArrowCircleRight,
  faArrowLeft,
  faArrowRight,
  faClose,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import utilStyles from '../styles/utils.module.scss'
import { useState } from 'react'
import formatDateUS from '../lib/dateFormat'

export default function DatePicker({ setModalIsOpen, clickedInput }) {
  const [selectedDate, setSelectedDate] = useState(new Date())

  const changeMonth = (amount) => {
    const newDate = new Date(selectedDate)
    newDate.setMonth(selectedDate.getMonth() + amount)
    setSelectedDate(newDate)
  }

  const selectDate = (date) => {
    // setDateChosen(date)
    document.getElementById(clickedInput).value = formatDateUS(date)
    setModalIsOpen(false)
  }

  const getFirstDayOfWeek = () => {
    const firstDay = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      1,
    )
    return firstDay.getDay()
  }
  const generateDays = () => {
    const days = []
    const firstDayOfWeek = getFirstDayOfWeek()
    const lastDay = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth() + 1,
      0,
    )

    for (let i = 1; i < firstDayOfWeek; i++) {
      days.push(
        <div
          key={`empty-${i}`}
          className=''
        ></div>,
      )
    }

    for (let date = 1; date <= lastDay.getDate(); date++) {
      days.push(
        <div
          key={date}
          className='cursor-pointer hover:bg-bg-color-light hover:text-white hover:rounded-lg'
          onClick={() =>
            selectDate(
              new Date(
                selectedDate.getFullYear(),
                selectedDate.getMonth(),
                date,
              ),
            )
          }
        >
          {date}
        </div>,
      )
    }
    return days
  }

  if (clickedInput) {
    const inputElement = document.getElementById(clickedInput)
    const inputRect = inputElement.getBoundingClientRect()
    const topOffset = inputRect.top + window.scrollY + 35
    const leftOffset = inputRect.left + window.scrollX

    return (
      <div
        className={utilStyles['darkBG']}
        onClick={(e) => {
          e.target.className === utilStyles['darkBG'] && setModalIsOpen(false)
        }}
      >
        {/* <div className='fixed -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4'> */}
        <div
          className='fixed h-auto w-auto  bg-bg-color-xlight rounded-lg shadow-[0_5px_20px_0] really-dark'
          style={{ top: topOffset, left: leftOffset }}
        >
          <div className='text-left mx-3 py-2 '>
            <div className='flex justify-between'>
              <FontAwesomeIcon
                className={utilStyles['cal-button']}
                icon={faArrowLeft}
                onClick={() => changeMonth(-1)}
              />
              <p className='self-center mx-3 font-bold'>
                {selectedDate.toLocaleDateString('default', {
                  month: 'long',
                  year: 'numeric',
                })}
              </p>
              <FontAwesomeIcon
                className={utilStyles['cal-button']}
                icon={faArrowRight}
                onClick={() => changeMonth(1)}
              />
            </div>
            <div className=''>
              <div className='grid grid-cols-7 gap-1 text-center border-b-2'>
                <div className=''>Mon</div>
                <div className=''>Tue</div>
                <div className=''>Wed</div>
                <div className=''>Thu</div>
                <div className=''>Fri</div>
                <div className='italic '>Sat</div>
                <div className='italic '>Sun</div>
              </div>
              <div className='grid grid-cols-7 gap-1 text-center mt-1'>
                {generateDays()}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
