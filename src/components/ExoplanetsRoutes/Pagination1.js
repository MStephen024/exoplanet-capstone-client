import React from 'react'
import Pagination from 'react-bootstrap/Pagination'

const Pagination1 = ({ exosPerPage, exoTotal, setCurrentPage }) => {
  const pageNumbers = []
  const pageLimit = Math.ceil(exoTotal / exosPerPage)

  for (let i = 1; i <= pageLimit; i++) {
    pageNumbers.push(i)
  }

  return (
    <Pagination className="pg1-test">
      <ul className="pagination">
        {pageNumbers.map(num => (
          <Pagination.Item key={num} className="page-item">
            <a onClick={() => setCurrentPage(num)} className="page-link">
              {num}
            </a>
          </Pagination.Item>
        ))}
      </ul>
    </Pagination>
  )
}

export default Pagination1
