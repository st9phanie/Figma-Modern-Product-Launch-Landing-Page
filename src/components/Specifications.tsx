const rows =
    [
        { r1: "✓ Ultra-fast browsing", r2: '✓ Fast browsing', r3: "✕ Moderate speeds" },
        { r1: "✓ Advanced AI insights", r2: '✓ Basic AI recommendations', r3: "✕ No AI assistance" },
        { r1: "✓ Seamless integration", r2: '✓ Restricts customization', r3: "✕ Steep learning curve" },
        { r1: "✓ Advanced AI insights", r2: '✓ Basic AI insights', r3: "✕ No AI assistance" },
        { r1: "✓ Ultra-fast browsing", r2: '✓ Fast browsing', r3: "✕ Moderate speeds" },
        { r1: "✓ Full UTF-8 support", r2: '✕ Potential display errors', r3: "✕ Partial UTF-8 support" },

    ]
const Specifications = () => {
    return (
        <section id="Specifications" className='lg:py-[50px] py-10 w-full text-lg'>
            <hr className='border-[1.5px] border-gray-300' />
            <div className='flex-col justify-center items-center w-full flex lg:py-20 py-10 gap-y-10'>
                <p className='text-[#6f6f6f] text-[15px]'>Specs</p>
                <h1 className='crimson-text tracking-tighter text-6xl text-center'>Why Choose Area?</h1>
                <p className='text-[#6f6f6f]'>You need a solution that keeps up. That’s why we developed Area. A developer-friendly approach to streamline your business. </p>
                <button className=" bg-[#dfecc6] py-3.5 px-[22px] text-sm font-bold rounded-[30px] cursor-pointer hover:bg-[#dfecc6]/70">Discover More</button>

                <div className="md:overflow-hidden overflow-x-scroll my-10 lg:my-20 ">
                    <table className="w-full table-fixed border-separate border-spacing-0 ">
                        <thead>
                            <tr className="lg:text-3xl text-xl tracking-tighter">
                                <th className=" border-2 border-b-[#6f6f6f] border-gray-200 rounded-tl-[30px] rounded-tr-[30px] lg:py-10 py-5 font-medium" style={{ boxShadow: "4px 0 4px -2px rgba(0,0,0,0.1)" }}>Area</th>
                                <th className="py-10  text-[#6f6f6f] border-b-2 border-b-[#6f6f6f] font-medium">WebSurge</th>
                                <th className="py-10  text-[#6f6f6f] border-b-2 border-b-[#6f6f6f] font-medium">HyperView</th>
                            </tr>
                        </thead>

                        <tbody>
                            {rows.map((r, key) => (
                                <tr key={key} className="border-b border-b-gray-200">
                                    <td className="lg:py-10 py-5 lg:px-[30px] px-3 border-x shadow-r border-x-gray-200 border-y border-y-gray-200" style={{ boxShadow: "4px 0 4px -2px rgba(0,0,0,0.1)" }}
                                    >{r.r1}</td>
                                    <td className="lg:py-10 py-5 lg:px-[30px] px-3  border border-gray-200 md:overflow-hidden overflow-scroll ">{r.r2}</td>
                                    <td className="lg:py-10 py-5 lg:px-[30px] px-3  border-y border-gray-200">{r.r3}</td>
                                </tr>
                            ))}


                        </tbody>
                    </table>

                </div>

            </div>

            <div className='flex md:flex-row flex-col justify-between w-full gap-x-5'>
                <div className='flex justify-start w-full'>
                    <img src="/whyusimg.avif" alt="image" loading="lazy" className='rounded-[30px] object-cover md:h-[670px] h-[400px]' />
                </div>

                <div className="w-full flex flex-col">
                    <hr className='mb-[50px] w-full' />
                    <div className="w-full flex flex-col justify-center h-full px-2 lg:px-[50px] ">

                        <h1 className='crimson-text text-4xl'>“I was skeptical, but Area has completely transformed the way I manage my business. The data visualizations are so clear and intuitive, and the platform is so easy to use. I can't imagine running my company without it.”</h1>
                        <p className='text-black text-md tracking-tight pt-10 pb-3'>John Smith</p>
                        <p className='text-[#6f6f6f] text-md font-mono tracking-tight'>Head of Data</p>
                    </div>
                </div>

            </div>



        </section>
    )
}

export default Specifications