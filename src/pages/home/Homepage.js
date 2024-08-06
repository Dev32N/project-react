import React from 'react'
import Desktopslider from '../../components/home/Desktopslider'
import Brandslider from '../../components/home/Brandslider'
import About1989 from '../../components/home/About1989'
import Group1 from '../../components/home/groupproducts/Group1'
import Group2 from '../../components/home/groupproducts/Group2'
import Group3 from '../../components/home/groupproducts/Group3'
import Footer from '../../components/footer/Footer'
import Header from '..//..//components/header/Header'
import { Container } from 'react-bootstrap'

export default function Homepage() {
  return (
    <Container>
      <Desktopslider />
      <Brandslider />
      <Group1 />
      <Group2 />
      <Group3 />
      <About1989 />
      <Footer />
    </Container>
  )
}
