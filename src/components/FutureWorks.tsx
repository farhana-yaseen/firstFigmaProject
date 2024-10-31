import Image from "next/image"
import Dashboard from "./Dashboard"

const FutureWorks = () => {
    return (
        <div id="future" className="md:w-919px md:h-934.2px md:ml-60 mt-10">
            {/* leading means line-height and tracking means letter spacing */}

            <h1 className="font-heebo font-medium md:text-2xl text-xl leading-8 h-8 mb-5 ">Futured Works</h1>

            <div className="flex md:justify-center justify-start md:space-x-14 space-x-3">
                <Image src={"/future/Rectangle30.jpg"} alt="dashboard" width={246} height={180} className="md:w-246px md:h-180px w-40 h-40 object-contain rounded-md md:mb-24 mb-32"></Image>
                <Dashboard />
            </div>

            <div className="flex md:justify-center justify-start md:space-x-14 space-x-6">
                <Image src={"/future/Rectangle32.jpg"} alt="dashboard2" width={246} height={180} className="md:w-246px md:h-180px w-40 h-40 object-contain rounded-md md:mb-24 mb-32"></Image>
                <Dashboard />
            </div>

            <div className="flex md:justify-center justify-start md:space-x-14 space-x-6" >
                <Image src={"/future/Rectangle34.jpg"} alt="dashboard3" width={246} height={180} className="md:w-246px md:h-180px w-40 h-40 object-contain rounded-md md:mb-24 mb-32"></Image>
                <Dashboard />
            </div>

        </div>


    )
}

export default FutureWorks