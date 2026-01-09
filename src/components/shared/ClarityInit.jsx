'use client'

import { useEffect } from 'react'
import Clarity from '@microsoft/clarity'

const ClarityInit = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hostname === 'www.theaims.ac.in') {
      Clarity.init('uyl5nzvk84')
    }
  }, [])

  return null
}

export default ClarityInit

