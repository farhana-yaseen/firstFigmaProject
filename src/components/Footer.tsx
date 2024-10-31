import Image from "next/image"
import Link from "next/link"


const Footer = () => {
    return (
        <div id="footer" className="md:w-1440px md:h-60 w-full h-auto text-center mt-20">
            <div className="flex justify-center md:space-x-12 space-x-8">

                <Link href={"https://www.facebook.com/"} target="_blank">
                    <Image src={"/footer/facebook.png"} alt="fb" width={30} height={30} className="md:w-7 md:h-7 w-5 h-5 object-contain"></Image>
                </Link>

                <Link href={"https://www.instagram.com/"} target="_blank">
                    <Image src={"/footer/insta.png"} alt="insta" width={30} height={30} className="md:w-7 md:h-7 w-5 h-5 object-contain"></Image>
                </Link>

                <Link href={"https://www.google.com/"} target="_blank">
                    <Image src={"/footer/Twitter.png"} alt="twitter" width={36.92} height={30} className="md:w-7 md:h-7 w-5 h-5 object-contain"></Image>
                </Link>

                <Link href={"https://pk.linkedin.com/"} target="_blank">
                    <Image src={"/footer/linkedin.jpg"} alt="linkedin" width={30} height={30} className="md:w-7 md:h-7 w-5 h-5 object-contain"></Image>
                </Link>

            </div>
            <p className="font-heebo font-medium md:text-xl text-lg leading-32.31px h-8 mt-5">Copyright ©2020 All rights reserved </p>
        </div>
    )
}

export default Footer