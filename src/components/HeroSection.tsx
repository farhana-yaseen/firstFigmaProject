
import Image from "next/image";
import DownloadButton from "./DownloadButton";

const HeroSection = () => {


    return (

        <div className="max-w-md mx-auto mt-20 md:mt-246px md:ml-56">

            <div className="md:w-1030px md:h-308px  grid grid-cols-2 gap-5 sm:gap-80 md:gap-96">

                {/* Text Area */}
                <div className="md:w-521px md:h-308px md:text-heroSection">
                    {/* leading means line-heigh t and tracking means letter spacing */}
                    <h1 className="font-heebo font-black text-2xl sm:text-4xl md:text-5xl md:leading-61px leading-normal md:tracking-wide">Hi, I am john,</h1>
                    <p className="font-heebo font-black text-2xl sm:text-4xl md:text-5xl md:leading-61px leading-normal md:tracking-wide">Creative Technologist</p>

                    <p className="font-heebo font-normal text-base sm:leading-23.5px leading-normal md:w-497px md:h-16 pt-5 text-justify">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                        Exercitation veniam consequat sunt nostrud amet.
                    </p>
                    <br />
                    <DownloadButton />


                </div>

                {/* Image Area                                                        object-contain = Filling the Container: If the image is smaller than the container, object-contain will center the image within the container, leaving any extra space around it. If the container is larger, the image will be scaled up but will not exceed the container’s dimensions. */}
                <div className="md:w-298px md:h-308px flex justify-center">
                    <Image src={"/image.png"} alt="john" width={292} height={299} className="md:w-292px md:h-299px rounded-full object-contain"></Image>
                </div>

            </div>

        </div>
    )
}

export default HeroSection