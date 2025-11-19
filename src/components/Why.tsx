const items = ["Spot Trends in Seconds: No more digging through numbers.", "Get Everyone on the Same Page: Share easy-to-understand reports with your team.", "Make Presentations Pop: Interactive maps and dashboards keep your audience engaged.", "Your Global Snapshot: Get a quick, clear overview of your entire operation."]

const Why = () => {
    return (
        <div className='grid lg:grid-cols-2 grid-cols-1 justify-between w-full gap-x-5 text-lg'>
            <div className="">
                <hr className='border-gray-200 mb-[50px]' />
                <h1 className='crimson-text text-5xl'>See the Big Picture.</h1>
                <p className='text-[#6f6f6f] text-[15px] tracking-tight py-10'>Area turns your data into clear, vibrant visuals that show you exactly what's happening in each region.</p>

                <div className="flex flex-col gap-4">
                    {items.map((i, key) => (
                        <div key={key} className="flex flex-col w-full gap-y-5" >
                            <hr className="border-gray-200 " />
                            <div className="flex gap-x-[30px] text-md ">
                                <span className="text-[#6f6f6f] font-bold">0{key + 1}</span>
                                <p>{i}</p>
                            </div>
                        </div>))}
                </div>
                <button className="mt-[60px] mb-20 bg-[#dfecc6] py-3.5 px-[22px] text-sm font-bold rounded-[30px] cursor-pointer hover:bg-[#dfecc6]/70">Discover More</button>


            </div>
            <div className='flex  justify-end w-full'>
                <img src="/whyimg.avif" alt="image" loading="lazy" className='rounded-[30px] object-cover lg:h-[600px] lg:w-[580px]' />
            </div>
        </div>
    )
}

export default Why