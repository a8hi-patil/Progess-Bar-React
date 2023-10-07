import React from 'react'

const ActualBar = (props) => {
  let color;
  if (props.progessDone < 40) {
    color = 'red'
  } else if (props.progessDone > 40 && props.progessDone < 80) {
    color = 'orange'
  } else {
    color = 'greenyellow'
  }

  return (
    <div className='bar' >
      <div className="progress" style={{
        width: `${props.progessDone}%`,
        background: `${color}`
      }} >
        {Math.floor(props.progessDone)}% Done
      </div>
    </div >
  )
}

export default ActualBar