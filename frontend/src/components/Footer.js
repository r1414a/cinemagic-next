import Link from "next/link"

export default function  Footer(){
    return(
        <footer className="bg-dyellow py-3 w-full">
            <div className="max-w-350 mx-auto flex items-center justify-between px-8">
                <ul className="flex justify-center gap-4">
                    <Link href={'https://www.linkedin.com/in/rupesh-chincholkar-08bb7612b/'} target="_blank" className="font-semibold hover:underline hover:underline-offset-4 p-2 text-black">Linkedin</Link>
                    <Link href={'https://github.com/r1414a/'} target="_blank" className="font-semibold hover:underline hover:underline-offset-4 p-2 text-black">Github</Link>
                    <Link href={'https://r1414a.github.io/portfolio-website/'} target="_blank" className="font-semibold hover:underline hover:underline-offset-4 p-2 text-black">Portfolio</Link>
                </ul>
                <p className="font-semibold text-black">©2026 Cinemagic. All rights reserved.</p>
            </div>
        </footer>
    )
}