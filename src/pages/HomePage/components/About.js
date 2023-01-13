import React from 'react'
import { AboutBox } from './AboutBox'
export const About = () => {
  const aboutBoxes = [
    {
      title: 'Jak działamy?',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet rhoncus ligula. Aenean mi nulla, aliquam vitae mollis id, imperdiet in est. Fusce ultricies augue magna, et volutpat augue luctus nec. Curabitur sit amet eleifend orci. Suspendisse rutrum ut diam nec convallis.'
    },
    {
      title: 'Dlaczego my?',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet rhoncus ligula. Aenean mi nulla, aliquam vitae mollis id, imperdiet in est. Fusce ultricies augue magna, et volutpat augue luctus nec.'
    },
  ]
  const aboutBox = aboutBoxes.map(val => <AboutBox val={val} />)
  return (
    <section>
      <div className="wrapper about">
        <div className="titleSection">
          <h2>O nas</h2>
        </div>
        <div className="informationSection">
          {aboutBox}
        </div>
      </div>
    </section>
  )
}