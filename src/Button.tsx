import { ButtonType } from "./type"


export const Button = ({children,className,onClick}: ButtonType) => {
    return (
        <div>
            <button  className='bg-green-400 w-[100px] p-3 m-6 rounded-lg'>
                {children}
            </button>
        </div>
    )
}

