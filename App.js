import React, { useState } from "react";
import "./style.css";
import List from "./list"

//import { FaGithubSquare } from "react-icons/fa"


export default function App(){

  const [list,setList] = useState(['a','b'])
  const [tempItem, setTempItem] = useState()

  const handleSubmit = event => {
    setList([...list,tempItem])
    setTempItem('')
    event.preventDefault()
  }

  const handleChange = e => {
    setTempItem(e.target.value)
  }

  const handleRemove = item0 => {
    const newList = list.filter((item)=>item !== item0)
    console.log("RRRR");
    setList(newList)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Add Item:
        </label>
        <input type="text" value={tempItem} onChange={handleChange}/>
        <button>Submit</button>
      </form>
      <br />
      <h3>LIST</h3>
      <List list={list} handleRemove={handleRemove}/>

    </div>
  )
  }

