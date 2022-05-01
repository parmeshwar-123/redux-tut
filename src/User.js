import React from 'react'

const User = ({info}) => {
  return (
    <div>
        <h1>This is User Component.</h1>
        <h3>My name is {info.name} and I'm {info.age} years old.</h3>
    </div>
  )
}

export default User;