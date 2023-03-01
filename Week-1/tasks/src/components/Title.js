import React from 'react'

// function Title() {
//   return (
//     <div>
//       <h1>Darshak</h1>
//       <h1>Akshay</h1>
//       <h1>React</h1>
//     </div>
//   )
// }

const Title = props => { 
  const {title, dis} = props
  return (
      <div>
          <h1>{title}</h1>
          <h3>{dis}</h3>
      </div>
  )
}

export default Title