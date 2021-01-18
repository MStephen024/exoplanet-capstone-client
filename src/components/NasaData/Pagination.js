import React from 'react'
import Pagination from 'react-bootstrap/Pagination'

const Pagination1 = ({ exosPerPage, totalExos, setCurrentPage }) => {
  const pageNumbers = []
  const pageLimit = Math.ceil(totalExos / exosPerPage)

  for (let i = 1; i <= pageLimit; i++) {
    pageNumbers.push(i)
  }

  // <Pagination>
  //   <Pagination.First />
  //   <Pagination.Prev />
  //   <Pagination.Item>{1}</Pagination.Item>
  //   <Pagination.Ellipsis />
  //
  //   <Pagination.Item>{10}</Pagination.Item>
  //   <Pagination.Item>{11}</Pagination.Item>
  //   <Pagination.Item active>{12}</Pagination.Item>
  //   <Pagination.Item>{13}</Pagination.Item>
  //   <Pagination.Item disabled>{14}</Pagination.Item>
  //
  //   <Pagination.Ellipsis />
  //   <Pagination.Item>{20}</Pagination.Item>
  //   <Pagination.Next />
  //   <Pagination.Last />
  // </Pagination>

  // <nav>
  //   <ul className="pagination">
  //     {pageNumbers.map(num => (
  //       <li key={num} className="page-item">
  //         <a onClick={() => setCurrentPage(num)} href="!#" className="page-link">
  //           {num}
  //         </a>
  //       </li>
  //     ))}
  //   </ul>
  // </nav>

  return (
    <Pagination>
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Ellipsis />

      <Pagination.Item>
        {pageNumbers.map(num => (
          <Pagination.Item key={num} className="page-item">
            <a onClick={() => setCurrentPage(num)} href="!#" className="page-link">
              {num}
            </a>
          </Pagination.Item>
        ))}
      </Pagination.Item>

      <Pagination.Ellipsis />
      <Pagination.Item>{20}</Pagination.Item>
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
  )
}

export default Pagination1
