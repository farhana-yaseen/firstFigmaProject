import Link from "next/link";

const Navbar = () => {
    return (
        <div className="md:w-72 md:h-6 mt-10 md:mt-16 md:ml-1088px w-full h-auto">
            <ol className="flex md:justify-center justify-end md:space-x-4 space-x-2 font-inter text-xl font-medium md:leading-24.2px cursor-pointer">
                <Link href={"#recent"}>
                <li>Works</li>
                </Link>

                <Link href={"#future"}>
                <li>Blog</li>
                </Link>

                <Link href={"#footer"}>
                <li>Contact</li>
                </Link>
            </ol>
        </div>
    )
}
export default Navbar;