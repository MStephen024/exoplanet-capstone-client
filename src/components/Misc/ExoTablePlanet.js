import React from 'react'
import { Table } from 'react-bootstrap'

const ExoTablePlanet = ({ discMethod, discTele, discFac, earthMass, discYear, orbitPer, exoRad }) => (
  <Table striped hover bordered variant="light">
    { /* <thead>
      <tr>
        <td>Exoplanet Details</td>
      </tr>
    </thead> */ }
    <tbody>
      <tr>
        <td>Discovery Year:</td>
        <td>{discYear || 'N/A'}</td>
      </tr>
      <tr>
        <td>Discovery Method:</td>
        <td>{discMethod || 'N/A'}</td>
      </tr>
      <tr>
        <td>Discover Telescope:</td>
        <td>{discTele || 'N/A'}</td>
      </tr>
      <tr>
        <td>Discovery Facility:</td>
        <td>{discFac || 'N/A'}</td>
      </tr>
      <tr>
        <td>Planet Mass (Earth Mass):</td>
        <td>{earthMass || 'N/A'}</td>
      </tr>
      <tr>
        <td>Orbit Period (days):</td>
        <td>{orbitPer || 'N/A'}</td>
      </tr>
      <tr>
        <td>Planet Radius:</td>
        <td>{exoRad || 'N/A'}</td>
      </tr>
    </tbody>
  </Table>
)

export default ExoTablePlanet
