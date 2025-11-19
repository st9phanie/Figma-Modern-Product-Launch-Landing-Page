import { MoveUpRightIcon } from 'lucide-react'

const Connect = () => {
    return (
        <section id="Contact-us" className='lg:py-20 py-10 flex w-full text-center justify-center'>
            <div className='flex flex-col lg:w-[600px]'>
                <h1 className='text-black crimson-text text-6xl '>Connect with us</h1>
                <p className='text-[#6f6f6f] lg:py-10 py-5'>Schedule a quick call to learn how Area can turn your regional data into a powerful advantage.</p>
                <button className='bg-[#485c11] rounded-full font-bold text-white px-6 py-3 cursor-pointer flex items-center justify-center hover:bg-[#485c11]/80'>
                    Learn More
                    <MoveUpRightIcon className="size-3 " />
                </button>
            </div>


        </section>
    )
}

export default Connect