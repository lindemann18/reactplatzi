import React,{Component} from 'react';
import './Search.css';

const Search = ({handleSubmit,setRef,value,handleChange})=>(
  <form action="" className="Search" onSubmit={handleSubmit}>
      <input
        type="text"
        className="Search-input"
        placeholder="Busca tu vídeo favorito"
        name="search"
        ref={setRef}
        defaultValue="holis"
        value={value} onChange={handleChange}/>
  </form>
)

export default Search;
