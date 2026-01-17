import Link from "next/link"

export default function NotFound(){
    return(
        <section className="relative flex flex-col space-y-6 items-center px-4 md:px-0 justify-center w-full h-screen bg-blue">
            <h1 className="absolute text-[200px] md:text-[300px] lg:text-[400px] text-white opacity-5">404</h1>
        <h1 className="text-white text-center font-semibold text-4xl md:text-5xl">Lost in Cinematic Space!</h1>
        <p className="text-white text-md md:text-lg font-medium max-w-md text-center">This reel seems to have gone rouge, But you can click the button below to resume the cinema journey</p>
        <Link href={'/'}>
<button className="flex gap-2 items-center bg-dyellow h-12 px-4 font-semibold rounded-md cursor-pointer">back to home</button>
        </Link>
        
        </section>
    )
}