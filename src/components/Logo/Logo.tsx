import React, {FunctionComponent} from 'react'

interface Props {
  
}

export const Logo : FunctionComponent = () => {
  return (
    <h1 className="logo">
      <span role="img" aria-label="metal hand emoji"></span>
      <span role="img" aria-label="musical keyboard emoji"></span>
      <span role="img" aria-label="musical note emoji"></span>
    </h1>
  )
}


