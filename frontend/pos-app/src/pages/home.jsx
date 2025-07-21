import React from 'react'
import { profile } from '../libs/axios/user'

export default function Home() {

  profile()

  return (
    <div>
        Home
    </div>
  )
}
