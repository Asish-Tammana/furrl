import './index.css'

const Filter = (props) => {
    const {filterDetails} = props
    const {name} = filterDetails
    return(
        <button type="button" className='filter-button'>{name}</button>
    )
}

export default Filter
