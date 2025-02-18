import { useState } from 'react'
import Hero from './layout/Hero'
import Header from './layout/Header'
import PostsList from './layout/PostsList'
import Footer from './layout/Footer'

function App() {

  return (
    <>
      <Header />
      <main className='flex w-full px-6 flex-col mt-19 sm:mt-8 max-w-2xl lg:max-w-5xl'>
        <Hero />
        <PostsList />
      </main>
      <Footer />
    </>
  )
}

export default App
