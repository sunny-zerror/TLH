import React from 'react'

const cardData = [
    {
        heading: "Your Investment",
        services: [
            {
                title: "Minimum space requirement:",
                description: "A spacious 2500 sq.ft. (carpet area) is essential."
            },
            {
                title: "Investment:",
                description: "A significant 2.5 Cr+ investment is required."
            },
            {
                title: "Electric Connection:",
                description: "3 Phase, 99KW."
            },
            {
                title: "Water Supply:",
                description: "Water storage capacity of 5-7K litres per day."
            },
            {
                title: "Local Licenses:",
                description: "All applicable local licenses must be obtained."
            }
        ]
    },
    {
        heading: "Our Contribution",
        services: [
            {
                title: "Support in search and finalisation of Store location",
            },
            {
                title: "Designing the Store with an expert Architect:",
            },
            {
                title: "Expert vendor for store construction",
            },
            {
                title: "Providing equipments and raw materials for operation",
            },
            {
                title: "Installing technical equipments",
            },
            {
                title: "Providing creative for store branding",
            },
            {
                title: "Store staff training",
            },
            {
                title: "Live training to partners and Staff at existing Store",
            },
            {
                title: "Equipment maintenance",
            },
            {
                title: "Replenishment of consumables",
            }
        ]
    }
]

const Responsibility = () => {
    return (
        <div>
            <div className="w-full p-24">
                <div className="w-full center">
                    <p className="text-6xl">Sharing the Responsibilities</p>
                </div>
                <div className="w-full grid grid-cols-2 gap-10 p-20">
                    {cardData.map((card, index) => (
                        <div
                            key={index}
                            className="p-10 flex flex-col gap-10 bg-black/5 rounded-xl"
                        >
                            <div className="w-full center">
                                <p className="text-3xl">{card.heading}</p>
                            </div>
                            <div className="w-full h-[2px] bg-black rounded-full"></div>
                            <div className="flex flex-col gap-3">
                                {card?.services.map((service, idx) => (
                                    <div key={idx}>
                                        <p className="font-semibold">• &nbsp; {service.title}</p>
                                        {service.description && (
                                            <p className="pl-5">{service.description}</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Responsibility