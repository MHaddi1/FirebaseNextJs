import '../styles/globals.css'


export default function App({ Component, pageProps }) {
  return <div className='bg-gray-400 h-screen w-screen'>
    <Component {...pageProps} />
  </div>
}
