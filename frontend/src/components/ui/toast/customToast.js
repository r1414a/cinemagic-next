import { toast } from "sonner";

export function customErrorToast(message){
    toast.error(message,
        {
            style: {
                border: '1px solid #FEE505',
                color: "red"
            }
        }
    )
}

export function customSuccessToast(message){
    toast.error(message,
        {
            style: {
                border: '1px solid #FEE505',
                color: "green"
            }
        }
    )
}