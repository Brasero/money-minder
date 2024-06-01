import {toast, ToastOptions} from "react-toastify";

const useToast = () => {

    const toastOption: ToastOptions = {
        autoClose: 3000,
        closeOnClick: true,
        draggable: "touch"
    }
    const success = (message: string) => toast.success(message, toastOption)
    const error = (message: string) => toast.error(message, toastOption)
    const warning = (message: string) => toast.warning(message, toastOption)

    return {
        success,
        error,
        warning
    }
}

export default useToast