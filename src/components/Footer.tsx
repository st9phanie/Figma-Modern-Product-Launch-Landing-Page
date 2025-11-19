
const Footer = () => {
    return (
        <footer className="w-full pt-10 pb-5">
            <ul className="flex lg:flex-row gap-x-10 font-bold flex-col gap-y-10 lg:pb-20 pb-10">
                <li><a href="#Benefits">Benefits</a></li>
                <li><a href="#Specifications">Specifications</a></li>
                <li><a href="#How-to">How-to</a></li>
            </ul>

            <div className="flex flex-row justify-between font-mono font-light tracking-wider">
                <p>© Area. 2025</p>
                <p className="cursor-pointer"><a href="https://www.figma.com/community/file/1487309170684591074/modern-product-launch">All Rights Reserved</a></p>
            </div>

        </footer>
    )
}

export default Footer