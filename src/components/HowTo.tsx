
const HowTo = () => {
    return (
        <section id="How-to" className="lg:pt-20 pt-10 flex w-full flex-col">
            <hr className="" />
            <div className="flex lg:flex-row flex-col justify-between w-full lg:items-center gap-y-5 py-10 lg:py-20">
                <h1 className="crimson-text text-6xl lg:text-start text-center">Map Your Success</h1>
                <button className="bg-[#dfecc6] py-3.5 px-[22px] text-sm font-bold rounded-[30px] cursor-pointer hover:bg-[#dfecc6]/70">Discover More</button>
            </div>
            <hr className="" />

            <div className="flex flex-row w-full lg:text-lg text-sm justify-between gap-x-6">
                <div className="flex flex-col">
                    <p className="lg:text-7xl text-5xl text-[#6f6f6f] lg:py-[60px] py-10 ">01</p>
                    <div className="flex flex-col justify-between">
                        <p className="crimson-text ">Get Started With Area</p>
                        <p className="text-[#6f6f6f] py-5">With our intuitive setup, you're up and running in minutes.</p>
                    </div>
                </div>

                <div className="flex flex-col">
                    <p className="lg:text-7xl text-5xl text-[#6f6f6f] lg:py-[60px] py-10 ">02</p>
                    <div className="flex flex-col justify-between">
                        <p className="crimson-text">Customize And Configure</p>
                        <p className="text-[#6f6f6f] py-5">Adapt Area to your specific requirements & preferences.</p>
                    </div>

                </div>
                <div className="flex flex-col">
                    <p className="lg:text-7xl text-5xl text-[#6f6f6f] lg:py-[60px] py-10 ">03</p>
                    <div className="flex flex-col justify-between">

                        <p className="crimson-text ">Grow Your Business</p>
                        <p className="text-[#6f6f6f] py-5">Make informed decisions to exceed your goals.</p>
                    </div>
                </div>


            </div>

            <div className="w-full flex my-20">
                <img src="/howtoimg.avif" alt="image" className="rounded-[30px] w-full object-cover h-[670px]" loading="lazy" />
            </div>
            <hr />


        </section>
    )
}

export default HowTo