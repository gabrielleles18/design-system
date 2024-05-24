import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainerProps} from "react-toastify/dist/types";

export function Toasts({...rest}: ToastContainerProps) {
    return (
        <ToastContainer {...rest}/>
    )
}
