import React from 'react'

export default (props) => {
  return (
    <button className="mui-btn mui-btn--accent mui-btn--fab mui-btn--small" onClick={props.handler}>
      {props.txt}
    </button>
  )
}
