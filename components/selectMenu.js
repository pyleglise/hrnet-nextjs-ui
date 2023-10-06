import * as Icons from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

export default function SelectMenu({
  arrayOfdata,
  iconFa,
  placeHolderText,
  selectedElement,
  setSelectedElement,
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen)
  }

  const handleSelect = (item) => {
    setSelectedElement(item)
    setDropdownOpen(false)
  }

  return (
    <>
      <div className='relative'>
        <input
          className={
            'bg-white rounded p-1 pl-8 cursor-pointer w-full outline-none  text-black'
          }
          onClick={toggleDropdown}
          placeholder={placeHolderText}
          value={selectedElement || ''}
          readOnly
        />

        {dropdownOpen && (
          <div
            className='absolute z-10 max-h-52 mt-2 w-full bg-white text-black rounded overflow-auto'
            onMouseLeave={toggleDropdown}
          >
            {arrayOfdata.map((item) => (
              <div
                key={item}
                className='px-2 cursor-pointer h-6 hover:bg-gray-300 hover:rounded'
                onClick={() => handleSelect(item)}
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className='input-icon'>
        <FontAwesomeIcon icon={Icons[iconFa]} />
      </div>
    </>
  )
}
