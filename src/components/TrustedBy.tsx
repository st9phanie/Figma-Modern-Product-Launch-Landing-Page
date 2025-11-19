import { logos } from "../assets/logos"

const TrustedBy = () => {
    return (
        <div className="flex flex-col lg:py-[50px] pb-[50px] gap-y-5 ">
            <p className="text-[15px] text-[#6f6f6f] py-[30px] ">Trusted by: </p>
            <div className="flex flex-wrap justify-evenly gap-10 items-center">

                {logos.map((logo, key) => (
                    <div key={key} className="flex items-center justify-center">
                        {logo}
                    </div>
                ))}
            </div>
            <hr className="border-gray-200 mt-5" />
        </div>
    )
}

export default TrustedBy