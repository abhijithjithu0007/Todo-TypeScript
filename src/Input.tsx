
type Input={
    inputVal:string,
    setInputVal:React.Dispatch<React.SetStateAction<string>>
}

export const Input = ({inputVal,setInputVal}:Input) => {
    return (
        <div className='flex text-center justify-center'>
            <input onChange={(e) => setInputVal(e.target.value)} value={inputVal} className='p-3 bg-gray-300 rounded-md outline-none' placeholder='Add task Here . . . !' type="text" />
        </div>
    )
}

