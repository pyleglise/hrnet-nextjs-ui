const { version } = require('../package.json')
export default function Footer() {
  return (
    <footer className='flex py-4 mx-4 place-content-center'>
      <p className='place-content-center text-bg-color-xlight'>
        HR-Net v{version} © Wealth-Health - 2023
      </p>
    </footer>
  )
}
