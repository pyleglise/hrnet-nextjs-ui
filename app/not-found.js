import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import utilStyles from '../styles/utils.module.scss'

export const metadata = {
  title: 'HR-Net - Error ! Resource not found !',
  description: 'HR-Net - Error ! Resource not found !',
}
export default function NotFound() {
  return (
    <>
      <section className="place-self-center p-4 w-1/2 rounded-2xl bg-bg-color-light">
        <h2 className="text-alert text-5xl font-bold m-6">404</h2>

        <p className="text-bg-color-xlight text-3xl m-4">
          Oups !!
          <br />
          The requested page does not exist.
        </p>
        <div className="mb-4 mt-10">
          <Link
            href="/"
            className={utilStyles['button']}
            aria-label="Return home"
          >
            <FontAwesomeIcon className="mr-2" icon={faHome} /> Home
          </Link>
        </div>
      </section>
    </>
  )
}
// export default function Error({ error, reset }) {
//   return (
//     <>

//       <section className='place-self-center p-4 w-1/2 rounded-2xl bg-bg-color-light'>
//         <h2 className='text-alert text-5xl font-bold m-6'>404</h2>

//         <p className='text-bg-color-xlight text-3xl m-4'>
//           Oups !!
//           <br />
//           {error}
//           {/* The requested page does not exist. */}
//         </p>
//       </section>
//     </>
//   )
// }
