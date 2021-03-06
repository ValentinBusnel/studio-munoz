import React from 'react'
import ButtonsBottom from '../components/ButtonsBottom'
import Project from '../components/Project'
import Navigation from '../components/Navigation'
import { Cursor } from '../components/Cursor'

export const Project1 = () => {
  return (
    <div className='pagefull'>
      <Cursor />
      <div className='project'>
        <div className='project'>
          <Navigation />
          <Project projectNumber={1} />
          <ButtonsBottom left='/' right='about' />
        </div>
        <div className='project'>
          <Project projectNumber={0} />
        </div>
        <div className='project'>
          <Project projectNumber={2} />
        </div>
        <div className='project'>
          <Project projectNumber={3} />
        </div>
        <div className='project'>
          <Project projectNumber={4} />
        </div>
        <div className='project'>
          <Project projectNumber={5} />
        </div>
        <div className='project'>
          <Project projectNumber={6} />
        </div>
        <div className='project'>
          <Project projectNumber={7} />
        </div>
        <div className='project'>
          <Project projectNumber={8} />
        </div>
        <div className='project'>
          <Project projectNumber={9} />
        </div>
      </div>
    </div>
  )
}
