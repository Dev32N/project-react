import React from 'react'
import Desktopslider from '../../components/home/Desktopslider'
import Brandslider from '../../components/home/Brandslider'
import About1989 from '../../components/home/About1989'
import Group1 from '../../components/home/groupproducts/Group1'
import Group2 from '../../components/home/groupproducts/Group2'

export default function Homepage() {
  return (
    <div>
        <Desktopslider />
        <Brandslider />
        <Group1 />
        <Group2 />
        <About1989 />
    </div>
  )
}
