import React, { useState } from 'react';

function Todolist(props) {
    const [todo, setToDo] = useState([]);
    const [task, setTask] = useState("");
    const [taskEdit, setTaskEdit] = useState("");
    const [isEdit, setIsEdit] = useState(null);
    //    hiển thị  function gán lại giá trị  name  => useState giá trị ban đầu
    const addTask = (e) => {
        e.preventDefault();
        const newTask = {
            titel: task,
            completed: false,
        };
        // rest
        setToDo([...todo, newTask]);
        setTask("");
    };
const edit = (value,i) => {
    setIsEdit(i);
    setTaskEdit(value.titel);
}


    return (
        <div>
            <form onSubmit={addTask} className='text-center mt-2'>
                <input onChange={(e) => setTask(e.target.value)} value={task} type="text" className='border-gray-950 border p-2' />
                <button type='submit' className='p-2 bg-green-600 ms-2'>Add</button>
            </form>
            {/* hiển thị danh sách */}
            <ul className='m-10'>
                {
                    todo.map((e, i) => (
                        <li className='flex bg-black text-white justify-between items-center p-2 rounded-lg mt-2'>
                            <h1>{i +1}</h1>
                            {
                                isEdit === i ? (  <input 
                                    type="text" 
                                    value={taskEdit} 
                                    onChange={(e) => setTaskEdit(e.target.value)}
                                    className='border-gray-950 border p-2 text-black'
                                />) : (<h1>{e.titel}</h1>)
                            }
                    
                            <h1>
                                <button onClick={() => edit(e,i)} className='p-2 bg-blue-500'>edit</button>
                                <button className='p-2 bg-red-500 ms-2'>delete</button>
                            </h1>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Todolist;