import React, { useState } from 'react'
import "../src/todo.css"
const data1= [ 1 , " " , 2 , ""]

const TodoList = () => {

    const [data, setData] = useState({name:""})
    const [store , setStore] =useState([])

    const handleInput = (e) =>{
        const {name , value} = e.target;
        setData({
            ...data,
            [name] : value
        })
        // console.log(data)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(data);
        let newData = store 
        newData.push(data);
        setStore([]);
        setStore(() => newData);
        setData({name: ''})
        console.log(123,store)
    }

    const handledelete = (index) =>{
        setStore(store.filter((indexItem, setIndex) => setIndex !== index))
    }

  return (
    <div className='to-do'>
        <div className='todo-body'>
            <div className='to-field' >
                <form onSubmit={handleSubmit}>
                    <input type='text' name="name" value={data.name} onChange={handleInput}/>
                    <button type='submit'>Add</button>
                    <table className='m-top-10'>
                        <tbody>
                            {store.map((item, index) =>(
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td onClick={()=>handledelete(index)}>X</td>
                            </tr>
                            ))}                            
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    </div>
    
  )
}

export default TodoList