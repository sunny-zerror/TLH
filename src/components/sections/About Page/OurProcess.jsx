import React from "react";
import ServiceBtn from "@/components/Buttons/ServiceBtn";

const OurProcess = () => {
  return (
    <section className="w-full px-24 py-20">
      <div className="mx-auto flex flex-col gap-28">

        {/* Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-14">
          {/* Image */}
          <div className="w-full h-[45vh] lg:h-[60vh] overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1677519708512-fd591642ee95?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Pickup and inspection process"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl lg:text-6xl font-medium">
              Pickup & Inspection
            </h3>

            <p className="text-sm lg:text-base leading-relaxed w-[85%]">
              Every garment begins its journey with a detailed and thoughtful
              inspection. Our trained professionals carefully examine fabric
              type, stitching, color sensitivity, and existing stains to
              determine the most suitable cleaning method.
            </p>

            <p className="text-sm lg:text-base leading-relaxed w-[85%]">
              This meticulous process allows us to customize care for each
              garment, ensuring that delicate fabrics and special pieces
              receive the attention they deserve while maintaining their
              original quality and finish.
            </p>

            <div className="w-[30%] mt-10">
              <ServiceBtn />
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-14">
          {/* Content */}
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            <h3 className="text-2xl lg:text-6xl font-medium">
              Advanced Cleaning
            </h3>

            <p className="text-sm lg:text-base leading-relaxed w-[85%]">
              Once inspected, garments move to our advanced cleaning stage,
              where technology meets expertise. We use modern equipment and
              premium detergents specifically designed to be gentle on fabrics
              while effectively removing dirt, stains, and odors.
            </p>

            <p className="text-sm lg:text-base leading-relaxed w-[85%]">
              Each cleaning cycle is carefully monitored to preserve texture,
              color, and structure, delivering a fresh, hygienic, and
              long-lasting result that meets our premium care standards.
            </p>

            <div className="w-[30%] mt-10">
              <ServiceBtn />
            </div>
          </div>

          {/* Image */}
          <div className="w-full h-[45vh] lg:h-[60vh] overflow-hidden rounded-2xl order-1 lg:order-2">
            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952"
              alt="Advanced garment cleaning process"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurProcess;
