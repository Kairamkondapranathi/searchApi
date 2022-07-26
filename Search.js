import React from 'react'

function Search({ update }) {
  return (
    <div>
      <button
        className="btn btn-secondary"
        onClick={(e) => update(e)}>
        Search
      </button>
    </div>
  )
}

export default Search


