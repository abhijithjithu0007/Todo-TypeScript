import { useState } from 'react'
import './App.css'

function App() {
  const [task, setTask] = useState(['nrgr', 'fehbfhe', 'hcvhgc'])

  return (

    <>

      <form action="" className=''>
        <div className='flex text-center justify-center'>
          <input className='p-3 bg-gray-300 rounded-md outline-none' placeholder='Add task Here . . . !' type="text" />
        </div>
        <div>
          <button className='bg-green-400 w-[100px] p-3 m-6 rounded-lg'>Add</button>
        </div>
        <div>
          {task.map((item, key) => (
            <div className='flex justify-center gap-' key={key}>
              <div className=' flex justify-between p-3 mt-2 bg-gray-300 w-[300px] rounded-lg'>
                <p className='text-xl'>{item}</p>
                <button className='bg-red-500 rounded-md p-2'>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </form>

    </>
  )
}

export default App
