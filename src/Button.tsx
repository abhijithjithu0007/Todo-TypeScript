import { ButtonType } from "./type"


export const Button = ({ children, className, onClick }: ButtonType) => {
    return (
        <div>
            <button type="submit" className={className} onClick={onClick}>
                {children}
            </button>
        </div>
    )
}

