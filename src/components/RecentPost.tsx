import RecentPostComp from "./RecentPostComp"


const RecentPost = () => {
    return (
        <div id="recent" className="md:w-1440px md:h-502px w-full h-auto mt-32 bg-recent">
            <div className="flex justify-between p-5">
                <h6 className="font-heebo font-medium text-xl leading-8 mt-6 md:ml-48">Recent Post</h6>
                <h6 className="font-heebo font-medium text-xl leading-8 mt-6">View All</h6>
            </div>


            <div className="flex md:justify-center md:space-x-10 space-x-6">
                <RecentPostComp />
                <RecentPostComp />
            </div>


        </div>
    )
}
export default RecentPost