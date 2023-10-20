import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false
export const isDevelopment = process.env.NEXT_PUBLIC_MODE === 'development'
const metadataBase = isDevelopment
  ? 'http://localhost:3000/'
  : 'https://hrnet.axialdata.app/'

export const metadata = {
  metadataBase: metadataBase,
  generator: 'Next.js',
  applicationName: 'HR-Net - App',
  referrer: 'origin-when-cross-origin',
  keywords: ['Human resources', 'Management', 'HR'],
  authors: [{ name: 'Pierre-Yves Léglise', url: 'contact@axialdata.net' }],
  themeColor: '#3a33a4',
  colorScheme: 'light',
  creator: 'Pierre-Yves Léglise',
  publisher: 'Pierre-Yves Léglise',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  title: 'HR-Net - App',
  description: 'HR-Net - Employee database manager - version app-router',
}

import { DM_Sans } from 'next/font/google'

import '../styles/globals.scss'
import Footer from '../components/footer'
import Header from '../components/header'
import ReduxProvider from '../redux/ReduxProvider'

const dm_sans = DM_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
})

// export function reportWebVitals(metric) {
//   console.log(metric)
// }

export default function RootLayout({ children }) {
  // params={home:true, showEmployees:false, createEmployee:false}
  // console.log('params in layout :',params)
  let home = true
  // let showEmployees=false
  // let createEmployee=false
  // console.log('home='+home+'|showEmployees='+showEmployees)
  return (
    <html lang="en" className={dm_sans.className}>
      {/* <Head /> */}
      <body>
        <ReduxProvider>
          <div className="layout">
            <Header />
            <main className="flex flex-col mx-4 bg-bg-color-xlight place-content-evenly h-[82vh] overflow-auto">
              {children}
            </main>{' '}
            <Footer />
          </div>
        </ReduxProvider>
      </body>
    </html>
  )
}
