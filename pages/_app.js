import { DM_Sans } from 'next/font/google'
import '../styles/globals.scss'
const dm_sans = DM_Sans({ subsets: ['latin'] })

// export function reportWebVitals(metric) {
//   console.log(metric)
// }

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${dm_sans.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}
