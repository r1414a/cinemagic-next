import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"

export default function FormSubmitButton({loading, whileLoadingText, text}){
    return(
        <Button disabled={loading} className='w-full font-medium text-md'>
            {
                loading
                ?
                <>
                <Spinner/>{whileLoadingText}
                </>
                :
                text
            }
        </Button>
    )
}