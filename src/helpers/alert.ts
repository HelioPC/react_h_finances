import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss'

type AlertProps = {
    title: string;
    description: string;
}

export const AlertError = ({ title, description }: AlertProps) => {
    Swal.fire({
        title: title,
        icon: "error",
        text: description,
    })
}

export const AlertSuccess = ({ title, description }: AlertProps) => {
    Swal.fire({
        title: title,
        icon: "success",
        text: description,
    })
}