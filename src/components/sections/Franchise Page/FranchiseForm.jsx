import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from "gsap/dist/SplitText";
import ArrowButton from "@/components/Buttons/ArrowButton";
import CustomSelect from "@/components/common/CustomSelect";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger, SplitText);

const FranchiseForm = () => {
  const stepRef = useRef(null);
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    investment: "",
    profession: "",
    timeline: "",
    locationStatus: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const changeStep = (nextStep) => {
  gsap.to(stepRef.current, {
    opacity: 0,
    duration: 0.25,
    ease: "power2.out",
    onComplete: () => {
      setStep(nextStep);
      gsap.fromTo(
        stepRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.35, ease: "power2.out" }
      );
    },
  });
};


  useEffect(() => {
    const ctx = gsap.context(() => {
      const split1 = new SplitText(".form_anim_txt_a", { type: "words" });
      const split2 = new SplitText(".form_anim_txt_b", { type: "words" });
      const split3 = new SplitText(".form_anim_txt_c", { type: "words" });

      gsap.timeline({
        scrollTrigger: {
          trigger: ".form_parent",
          start: "top 60%",
        },
      })
        .from(".form_bg", { backgroundColor: "transparent", duration: 0.3 })
        .from(".input_box", { opacity: 0, stagger: 0.05 }, "<")
        .from(".input_line", { opacity: 0, stagger: 0.05 }, "<")
        .fromTo(
          [split1.words, split2.words, split3.words],
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.01 },
          "<"
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div id="franchise-form" className="form_parent w-full lg:pt-5 mb-20">
      <div className="form_bg w-full center flex-col  px-5 lg:px-0 ">
        <div className=" w-full lg:w-[60%] p-8 lg:p-10 bg-[#F2EDE4] rounded-lg">
          <div className="w-full lg:text-center  ">
            <h1 className=' text-2xl leading-none  lg:text-6xl   lg:whitespace-nowrap  '>Become a TLH <br />  Franchise Partner</h1>
            <p className=' mt-2 lg:mt-4 text-sm leading-tight   lg:text-xl  '>Fill out the form below and our team will reach out within 24 hours</p>
          </div>
          {/* FORM */}
          <div className="w-full center">

            <div className=" w-full lg:w-[60%] mt-10 lg:mt-20 ">
              <form ref={stepRef} className="w-full space-y-10">

                {/* STEP 1 */}
                {step === 1 && (
                  <>
                    <Field
                      label="Full Name"
                      name="name"
                      placeholder="Enter Name"
                      value={formData.name}
                      onChange={handleChange}
                    />

                    <Field
                      label="Phone Number"
                      name="phone"
                      placeholder="Enter Number"
                      value={formData.phone}
                      onChange={handleChange}
                    />

                    <Field
                      label="City of Interest"
                      name="city"
                      placeholder="Enter City"
                      value={formData.city}
                      onChange={handleChange}
                    />

                    <div className="w-full center">

                      <div className="pt-6 w-[50%] lg:w-[25%]" onClick={(e) => {
                        e.preventDefault();
                        changeStep(2);
                      }}>
                        <ArrowButton
                          label="Next"
                          variant="dark"
                        />
                      </div>
                    </div>
                  </>
                )}

                {/* STEP 2 */}
                {step === 2 && (
                  <>
                  <Field
                      label="Current Business / Profession"
                      name="profession"
                      placeholder="Enter Profession"
                      value={formData.profession}
                      onChange={handleChange}
                    />
                    
                    <CustomSelect
                      label="Investment Capacity *"
                      name="investment"
                      value={formData.investment}
                      placeholder="Select investment range"
                      options={[
                        "₹1.5Cr - ₹2Cr",
                        "₹2Cr - ₹2.5Cr",
                        "₹2.5Cr+",
                      ]}
                      onChange={handleChange}
                    />

                    <CustomSelect
                      label="Timeline to Start"
                      name="timeline"
                      value={formData.timeline}
                      placeholder="Select timeline"
                      options={["Immediate", "3 Months", "6 Months"]}
                      onChange={handleChange}
                    />

                    <CustomSelect
                      label="Location Status"
                      name="locationStatus"
                      value={formData.locationStatus}
                      placeholder="Select status"
                      options={["Have a location", "Searching"]}
                      onChange={handleChange}
                    />
                    <div className="flex gap-4">
                      <div className="w-full sm:w-[55%]" onClick={(e) => {
                          e.preventDefault();
                        changeStep(1);
                      }}>
                        <ArrowButton
                          label="Previous"
                          variant="dark"
                        />
                      </div>
                      <Link href="/success" className="w-full sm:w-[55%]" >
                        <ArrowButton label="Submit" variant="dark" />
                      </Link>
                    </div>
                  </>
                )}

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------------- REUSABLE FIELD ---------------- */

const Field = ({ label, name, value, onChange, placeholder }) => (
  <div className="w-full">
    <label className="block text-sm mb-1 font-medium">
      {label}
    </label>
    <input
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className="input_box w-full bg-transparent outline-none text-sm lg:text-base mb-1"
    />
    <div className="input_line w-full h-[1px] bg-black/20 rounded-full" />
  </div>
);

export default FranchiseForm;
