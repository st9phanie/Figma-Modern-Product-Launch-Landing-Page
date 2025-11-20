export const HeroTop = ({ width }: { width: number }) => {
    if (width < 800) {
        return (
            <div className='w-full flex flex-col items-center justify-center py-20'>
                <h1 className='py-10 text-[76px] leading-[0.9] tracking-tighter text-center crimson-text'>Browse everything.</h1>
                <img loading="lazy" src="/hero-phone.svg" alt="hero image" className='w-full' />
            </div>
        )
    }

    if (width < 1280) {
        return (
            <div className='w-full flex flex-col items-center justify-center'>
                <h1 className='py-10 text-[120px] crimson-text'>Browse everything.</h1>
                <img loading="lazy" src="/hero-t.avif" alt="hero image" className='w-full' />
            </div>
        )
    }

    return (
        <div className='w-full flex flex-col items-center justify-center'>
            <h1 className='py-10 text-[140px] crimson-text'>Browse everything.</h1>
            <img loading="lazy" src="/hero-d.avif" alt="hero image" className='w-full' />
        </div>
    )
}

const Hero = ({ width }: { width: number }) => {



    return (
        <section className="flex w-full flex-col">
            <HeroTop width={width} />
        </section>

    )
}

export default Hero