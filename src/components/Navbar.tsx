import { Menu } from "lucide-react"

const Navbar = ({ width }: { width: number }) => {

    const ulElements = [
        { title: "Benefits", link: "#Benefits" },
        { title: "Specifications", link: "#Specifications" },
        { title: "How-to", link: "#How-to" },
        { title: "Contact Us", link: "#Contact-us" },
    ]

    if (width < 800) {
        return (
            <nav className='flex w-full justify-between fixed shadow-b shadow-md top-0 bg-white left-0 right-0 z-[9999]items-center py-6  rounded-b-3xl'>
                <div className='flex flex-row w-full justify-between items-center px-5'>
                    <p className='text-[30px] font-medium tracking-tighter'>Area</p>
                    <Menu className="size-8" />
                </div>
            </nav>
        )
    }

    return (
        <nav className='w-[400px] flex  justify-center fixed top-5 bg-white/50 backdrop-blur-md rounded-full left-1/2 -translate-x-1/2  z-100'>
            <ul className='flex flex-row justify-evenly w-full py-5 px-1 rounded-full '>
                {ulElements.map((el, key) => (

                    <li className='font-bold text-sm cursor-pointer hover:text-black/50' key={key}>
                        <a href={el.link}>
                            {el.title}
                        </a>
                    </li>
                ))}

            </ul>
        </nav>
    )
}

export default Navbar

