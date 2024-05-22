import React from 'react'
import './index.css'
import Filter from '../Filter'

const FiltersSection = (props) => {

    const {filtersList} = props

  return (
    <div className='filters-container'>
      {
        filtersList.map(eachFilter => <Filter key={eachFilter.uniqueId} filterDetails={eachFilter} /> )
      }
    </div>
  )
}

export default FiltersSection
