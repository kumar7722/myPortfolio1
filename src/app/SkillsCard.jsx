import Image from "next/image";
const SkillsCard = ({ logoSrc, altText, title }) => {
    return (
      <div className="w-28 h-32 mx-2 pt-4 flex justify-center flex-col text-center max-w-sm bg-white rounded-lg" data-aos="zoom-in-up">
      <div className="pb-3">  <Image
          width={50}
          height={50}
          className="mx-auto"
          alt={altText}
          src={logoSrc}
        /></div>
        <div className="">
          <h5 className="text-sm tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </div>
      </div>
    );
  };
  
  export default SkillsCard;
  