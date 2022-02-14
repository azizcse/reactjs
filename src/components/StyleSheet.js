import React from 'react'
import './myStyle.css'

export default function StyleSheet(props) {
    let className = props.primary?'primary':''
  return (
    <div>
        <h1 className={`${className} font-xl`}>StyleSheet</h1>
    </div>
  )
}

