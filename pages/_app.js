import { Provider } from 'react-redux'
import store from '../redux/store'

import { DM_Sans } from 'next/font/google'
import '../styles/globals.scss'
const dm_sans = DM_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
})

// export function reportWebVitals(metric) {
//   console.log(metric)
// }

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <style
        jsx
        global
      >{`
        html {
          font-family: ${dm_sans.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </Provider>
  )
}
