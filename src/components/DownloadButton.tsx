import Link from "next/link"

const DownloadButton = () => {

    return (


        <div className="md:w-52 md:h-12 mt-8 rounded-sm w-40 h-10  bg-cv drop-shadow-cvButton">
            <Link href={"/resume.pdf"} target="_blank">
                <button className="font-heebo md:font-medium md:text-lg text-sm md:leading-26.44px text-white text-center md:px-7 px-5 py-2 ">
                    Download Resume
                </button>

            </Link>
        </div>


    )
}

export default DownloadButton