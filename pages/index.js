// home page
import React from 'react'
import Slider from '../component/homecomponents/slider'
import Displaypinboard from '../component/homecomponents/displaypinboard'

export default function App() {
  return (
    <main className='home'>
      <Slider />
      <Displaypinboard />
    </main>
  )
}
