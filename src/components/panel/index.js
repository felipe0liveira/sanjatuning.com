import './index.scss'

const Panel = ({ children, ...pageProps }) => {
  return (
    <>
      <div className='panel'>{children}</div>
    </>
  )
}

export default Panel
