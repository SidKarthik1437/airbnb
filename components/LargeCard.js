import Image from "next/image"

function LargeCard({img, title, description, buttonText}) {
    return (
        <section className="relative py-16 cursor-pointer">
            <div className="relative h-96 min-w-[300px] ">
                <Image src={img} alt="" layout="fill" objectFit="cover" 
                className="rounded-xl"
                />
            </div>
            <div className="absolute top-32 left-12">
                <h2 className="text-4xl mb-3 w-64"> {title} </h2>
                <p> {description} </p>
                <button type="button" className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5 hover:shadow-2xl active:scale-95 ">
                    {buttonText}
                </button>
            </div>
        </section>
    )
}

export default LargeCard
