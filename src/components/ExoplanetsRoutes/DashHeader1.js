import React from 'react'

const DashHeader1 = ({ totalExos }) => {
  return (
    <h1 className="dh1-test">All Exoplanets {!totalExos ? 'loading new worlds...' : totalExos}</h1>
  )
}

export default DashHeader1
