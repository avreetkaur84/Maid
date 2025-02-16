// local imports
// import { services } from "../../data";
import FadeIn from "../ui/Fadeln";

import { PiChefHatBold } from "react-icons/pi";
import { MdLocalDining, MdStarBorderPurple500 } from "react-icons/md";

export const services = [
  {
    title: "Personalized Dining",
    subtitle: "Customized meals tailored to your taste",
    icon: MdLocalDining, // Storing the component reference
  },
  {
    title: "Expert Chefs",
    subtitle: "Top-rated professionals at your service",
    icon: PiChefHatBold,
  },
  {
    title: "On-Demand Booking",
    subtitle: "Book a chef anytime, anywhere",
    icon: MdStarBorderPurple500,
  },
];

const Services = () => {
  return (
    <div
      id="services"
      className="mt-[160px] max-w-[1490px] mx-auto px-10 flex flex-col xs:flex-row gap-12 xs:gap-6 xs:justify-between w-full"
    >
      {services.map((service, i) => (
        <FadeIn key={i} delay={0.2} direction="down">
          <div className="flex flex-col lg:flex-row gap-4 w-full items-center">
            {/* <img
              src={service.icon}
              className="max-h-[84px] max-w-[84px]"
              alt=""
            /> */}
            <services.icon/>
            <div className="flex flex-col gap-1.5">
              <h3 className="text-center lg:text-start text-2xl lg:text-[28px] text-fontBlack font-medium">
                {service.title}
              </h3>
              <h6 className="text-center lg:text-start text-base lg:text-lg text-fontGray font-medium">
                {service.subtitle}
              </h6>
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  );
};

export default Services;