import { useState, useEffect } from 'react'
import Desktop from './layouts/Desktop'
import Mobile from './layouts/Mobile'

function App() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  return isMobile ? <Mobile /> : <Desktop />
}

export default App
