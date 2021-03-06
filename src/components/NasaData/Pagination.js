import React from 'react'
// import Pagination from 'react-bootstrap/Pagination'

const Pagination = ({ exosPerPage, totalExos, setCurrentPage }) => {
  const pageNumbers = []
  const pageLimit = Math.ceil(totalExos / exosPerPage)

  for (let i = 1; i <= pageLimit; i++) {
    pageNumbers.push(i)
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(num => (
          <li key={num} className="page-item">
            <a onClick={() => setCurrentPage(num)} href="!#" className="page-link">
              {num}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination
