
import Image from "next/image";
import DownloadButton from "./DownloadButton";

const HeroSection = () => {

    return (
        <div className="md:w-1030px md:h-308px w-full h-auto mt-20 md:mt-246px md:ml-56 flex md:justify-between justify-center space-x-3">

            {/* Text Area */}
            <div className="flex-1 md:w-521px md:h-308px w-full h-auto text-heroSection">
                {/* leading means line-heigh t and tracking means letter spacing */}
                <h1 className="font-heebo font-black text-2xl md:text-5xl md:leading-61px leading-normal md:tracking-wide">Hi, I am john,</h1>
                <p className="font-heebo font-black text-2xl md:text-5xl md:leading-61px leading-normal md:tracking-wide md:mb-8">Creative Technologist</p>

                <p className="font-heebo font-normal text-base md:leading-23.5px leading-normal md:w-497px md:h-16 text-justify">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                    Exercitation veniam consequat sunt nostrud amet.
                </p>
                <DownloadButton />

            </div>

            {/* Image Area                                                        object-contain = Filling the Container: If the image is smaller than the container, object-contain will center the image within the container, leaving any extra space around it. If the container is larger, the image will be scaled up but will not exceed the container’s dimensions. */}
            <div className="flex-1 flex justify-center items-center md:w-298px md:h-308px w-1/2">
                <Image src={"/image.png"} alt="john" width={292} height={299} className="md:w-292px md:h-299px object-contain"></Image>
            </div>

        </div>
    )
}

export default HeroSection