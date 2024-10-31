import Link from "next/link"

const DownloadButton = () => {

    return (

        <div className="md:w-52 md:h-12 mt-8 rounded-sm w-40 h-10 bg-cv drop-shadow-cvButton">
            <Link href={"/resume.pdf"} target="_blank">
                <button className="font-heebo font-medium md:text-lg text-sm leading-26.44px text-white md:w-40 md:h-6 md:pt-3 p-2 md:ml-7">
                    Download Resume
                </button>

            </Link>
        </div>

    )
}

export default DownloadButton