import React from 'react';
import { v4 as uuidv4 } from 'uuid'
import PropTypes from 'prop-types'
const Paginator = ({ totalPages, setPageNumber, active }) => {
  return (
    <div>
      {totalPages.map((item) => (
        <button
          key={uuidv4()}
          onClick={() => setPageNumber(item)}
          className={active === item ? 'btn-active' : 'btn'}
        >
          {item}
        </button>
      ))}
    </div>
  )
}
Paginator.propTypes = {
  totalPages: PropTypes.array,
  setPageNumber: PropTypes.func,
  active: PropTypes.number,
}

export default Paginator;