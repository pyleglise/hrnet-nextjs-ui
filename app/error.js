'use client' // Error components must be Client Components

import { useEffect } from 'react'

/**
 * A component that displays an error message and provides a button to attempt a recovery.
 * @namespace
 * @param {Object} props - Component props.
 * @param {Error} props.error - The error object.
 * @param {Function} props.reset - A function to reset or recover from the error.
 * @returns {ReactElement} The rendered component.
 */
const Error = ({ error, reset }) => {
  useEffect(() => {
    // Log the error to an error reporting service (or console in this case)
    console.error(error)
  }, [error])

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}

export default Error
