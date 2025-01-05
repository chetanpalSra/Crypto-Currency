import React from 'react'

function Search(props) {
    const {setSearch} = props;

    return (
        <div>
            <form className="d-flex container my-4 justify-content-center align-items-center" role="search" >
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{width: '205px'}} onChange={(e)=>{setSearch(e.target.value)}}/>
                
            </form>
        </div>
    )
}

export default Search
