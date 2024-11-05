import RecentPostComp from "./RecentPostComp"


const RecentPost = () => {
    return (
        <div className=" ">

            <div id="recent" className="md:w-1440px md:h-502px w-full h-auto mt-32 bg-recent md:p-5">
                <div className="flex justify-between">
                    <h6 className="font-heebo font-medium md:text-xl text-lg leading-8 mt-6 md:ml-36 ml-10">Recent Post</h6>
                    <h6 className="font-heebo font-medium md:text-xl text-lg leading-8 mt-6 mr-10 md:mr-40">View All</h6>
                </div>


                <div className="flex justify-center items-center md:space-x-32 space-x-6 px-10 pb-10 md:py-10">
                    <RecentPostComp />
                    <RecentPostComp />
                </div>



            </div>
        </div>
    )
}
export default RecentPost