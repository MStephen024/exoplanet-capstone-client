import React from 'react'
import { Table } from 'react-bootstrap'

const ExoTableSystem = ({ moonNum, exoNum, starNum, stellarRad, starAge, starDens, rowupdate }) => (
  <Table striped hover bordered variant="light">
    { /* <thead>
      <tr>
        <td>Planet System Details</td>
      </tr>
    </thead> */ }
    <tbody>
      <tr>
        <td>Age of Host Star(Gyr):</td>
        <td>{starAge || 'N/A'}</td>
      </tr>
      <tr>
        <td>Stellar Radius:</td>
        <td>{stellarRad || 'N/A'}</td>
      </tr>
      <tr>
        <td>Star Mass:</td>
        <td>{starDens || 'N/A'}</td>
      </tr>
      <tr>
        <td>Number of Stars:</td>
        <td>{starNum || 'N/A'}</td>
      </tr>
      <tr>
        <td>Number of Planets:</td>
        <td>{exoNum || 'N/A'}</td>
      </tr>
      <tr>
        <td>Number of Moons:</td>
        <td>{moonNum || 'N/A'}</td>
      </tr>
      <tr>
        <td>Date Last Updated:</td>
        <td>{rowupdate || 'N/A'}</td>
      </tr>
    </tbody>
  </Table>
)

export default ExoTableSystem
