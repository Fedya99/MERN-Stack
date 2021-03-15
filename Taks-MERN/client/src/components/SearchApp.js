import React, { useState } from 'react'

export default function SearchApp({ChangeSearch, sourse, Filter}) {
  const [term, setTerm] = useState('')
  const onChangeSearch = (e) =>{
    const term = e.target.value
    setTerm(term)
    ChangeSearch(term)
  }
  const ActiveFilter = () => {
    const newarr = sourse.filter((elem) => elem)
    Filter(newarr)
  }
  return(
    <form className="col s12 search-input">
        <div className="input-field">
            <input 
                id="search" 
                type="text" 
                className="validate" 
                value={term}
                onChange={onChangeSearch} 
            />
            <label htmlFor="search">Search</label>
            <button type="button" onClick={ActiveFilter} style={{display: 'none'}}></button>
        </div>
    </form>
  )
}