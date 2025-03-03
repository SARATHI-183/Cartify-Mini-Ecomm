import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Search = () => {

    const [ keyword , SetKeyword ]= useState("");
    const navigate = useNavigate();

    const SearchHandler = ()=> {
        navigate('/search?keyword='+keyword);
    }

  return (
    <div className="input-group">
        <input
        type="text"
        onChange={(e)=> SetKeyword(e.target.value)}
        onBlur={SearchHandler}
        id="search_field"
        className="form-control"
        placeholder="Enter Product Name ..."
        />
        <div className="input-group-append">
        <button onClick={SearchHandler} id="search_btn" className="btn">
            <i className="fa fa-search" aria-hidden="true"></i>
        </button>
        </div>
    </div>
  )
}

export default Search