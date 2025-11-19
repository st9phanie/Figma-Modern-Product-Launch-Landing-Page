import { Cable, ChartLine, Globe2Icon, Speech } from "lucide-react"

const benefits =
    [
        { icon: Cable, title: "Amplify Insights", description: "Unlock data-driven decisions with comprehensive analytics, revealing key opportunities for strategic regional growth." },
        { icon: Globe2Icon, title: "Control Your Global Presence", description: "Manage and track satellite offices, ensuring consistent performance and streamlined operations everywhere." },
        { icon: Speech, title: "Remove Language Barriers", description: "Adapt to diverse markets with built-in localization for clear communication and enhanced user experience." },
        { icon: ChartLine, title: "Visualize Growth", description: "Generate precise, visually compelling reports that illustrate your growth trajectories across all regions." }
    ]
const Benefits = ({ width }: { width: number }) => {
    return (
        <section id="Benefits" className="flex flex-col lg:pt-20 ">
            <p className="text-[15px] text-[#6f6f6f]"> Benefits </p>
            <h1 className=" text-black crimson-text py-[50px] text-6xl ">We've cracked the code.</h1>
            <p className="text-[15px] text-[#6f6f6f]">Area provides real insights, without the data overload.</p>
            <div className={`grid xl:grid-cols-4  gap-x-5 py-[50px] ${width > 800 ? "grid-cols-2" : "grid-cols-1"}`}>
                {benefits.map((b, key) => (
                    <div key={key} className="flex flex-col xl:gap-10 gap-y-20 ">
                        <hr className=" mt-5  border-gray-200" />

                        <div className="flex flex-col gap-y-5 ">
                            <b.icon className="" />
                            <p className="crimson-text  text-xl">{b.title}</p>
                            <p className="text-[#6f6f6f] tracking-tight">{b.description}</p>
                        </div>

                    </div>
                ))}
            </div>
            <div className="mt-5 w-full lg:h-[620px] flex mb-[120px] h-[600px] ">
                <img src="/img1.avif" alt="image of mountains" loading="lazy" className="rounded-[30px] w-full object-cover " />
            </div>
        </section>
    )
}

export default Benefits