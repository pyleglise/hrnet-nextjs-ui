import pkg from '../package.json'
const Footer = () => {
  const { version } = pkg
  return (
    <footer className='flex py-4 mx-4 place-content-center'>
      <p className='place-content-center text-bg-color-xlight'>
        HR-Net v{version} © Wealth-Health - 2023
      </p>
    </footer>
  )
}
export default Footer
