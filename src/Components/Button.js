import React from 'react'

export default function Button({title , color}) {
  // const {title,color} = props
  return (
    <>
        <button className={`${color}`}>{title}</button>
    </>
  )
}
