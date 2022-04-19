import React from 'react'

const PaginationButton = ({id, text, onClick, disabled}) => {
  return (
	<button disabled = {disabled ? true: null} className="pagination__item" id={id} onClick= {onClick}>{text}</button>
  )
}

export default PaginationButton