import React, { useContext } from 'react'
import { CompanyContext, UserContext } from '../App'

function ComponentE() {

    const user = useContext(UserContext)
    const company = useContext(CompanyContext)
  return (
    <div>
      Hello {user}, Welcome to {company}
    </div>
  )
}

export default ComponentE
