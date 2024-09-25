import React, { useState } from 'react'
import './App.css'
import { Input } from './Input'
import { Button } from './Button'

type Items = {
  title: string,
  id: string
}

function App() {
  const [task, setTask] = useState<Items[]>([])
  const [inputVal, setInputVal] = useState<string>('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setTask((prev) => [...prev, { title: inputVal.trim(), id: Date.now().toString() }])
    setInputVal('')
  }

  const handleDelete = (item: string) => {
    setTask((prev) => prev.filter((data) => data.id  !== item))
  }

  return (

    <>

      <form action="" className=''>
        <Input inputVal={inputVal} setInputVal={setInputVal} />
        <Button className='bg-green-400 w-[100px] p-3 m-6 rounded-lg'>Add</Button>
        <div>
          {task.map((item) => (
            <div className='flex justify-center gap-' key={item.id}>
              <div className=' flex justify-between p-3 mt-2 bg-gray-300 w-[300px] rounded-lg'>
                <p className='text-xl'>{item.title}</p>
                <Button onClick={() => handleDelete(item.id)}>Delete</Button>
              </div>
            </div>
          ))}
        </div>
      </form>

    </>
  )
}

export default App
