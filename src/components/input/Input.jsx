import React from 'react'

const Input = ({input, handleChange, handleSubmit, handleOnFocus}) => {
  return (
	<form className='form' onSubmit={handleSubmit}>
		<input value={input} onFocus={handleOnFocus} onChange={(e) => handleChange(e.target.value)} className='input' type="text" required min={1} max={20} placeholder='GitHub account'/>
		<button type='submit' className='btn__search'>Search</button>
	</form>
  )
}

export default Input