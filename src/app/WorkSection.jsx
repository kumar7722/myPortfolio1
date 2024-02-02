import React from "react";
import wwwImage from "../../public/www.png";
import Image from "next/image";
import { TiSocialLinkedinCircular } from "react-icons/ti";

const WorkSection = () => {
  return (
    <>
      <div className="bg-backgroundFirst py-10">
        <h2 className="text-center font-bold">WORK</h2>
        <div className="text-center flex items-center justify-center mt-8">
          <ol className="relative border-s border-l-2 border-black dark:border-gray-700 text-left">
            <li className="mb-10 ms-6 border-2 border-reactColor rounded-lg w-96 bg-white pt-2 px-4 hover:shadow-[5px_5px_0px_0px_rgba(156,39,176)]">
              <span class="absolute flex items-center justify-center mt-9 w-4 h-4 bg-reactColor rounded-full -start-2 ring-8 ring-white hover:ring-textColor dark:ring-gray-900 dark:bg-blue-900"></span>
              <span className="flex justify-between">
                {" "}
                <span class="mb-1 text-lg font-semibold text-gray-900">
                  SolveBee
                </span>
                <a href="https://cityluxedxb.com">
                  <Image
                    class="rounded-t-lg"
                    width={100}
                    height={100}
                    src={wwwImage}
                    style={{ width: "25px", height: "25px" }}
                    alt="product image"
                  />
                </a>
              </span>
              <time class="block mb-2 text-sm font-normal leading-none text-gray-400">
                Frontend Developer(ReactJS Developer)
              </time>
              <span className="flex justify-between">
                {" "}
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                  Jul2023 - Present
                </p>{" "}
                <span className="text-3xl">
                  <a href="#"><TiSocialLinkedinCircular color="#0075B5" /></a>
                </span>
              </span>{" "}
            </li>
            <li className="mb-10 ms-6 border-2 border-reactColor rounded-lg w-96 bg-white px-4 pt-2 hover:shadow-[5px_5px_0px_0px_rgba(156,39,176)]">
              <span class="absolute flex items-center justify-center mt-9 w-4 h-4 bg-reactColor rounded-full -start-2 ring-8 ring-white hover:ring-textColor dark:ring-gray-900 dark:bg-blue-900"></span>
              <span className="flex justify-between">
                {" "}
                <span class="mb-1 text-lg font-semibold text-gray-900 ">
                  Mentorpal.ai
                </span>
                <a href="https://mentorpal.ai">
                  <Image
                    class="rounded-t-lg"
                    width={100}
                    height={100}
                    src={wwwImage}
                    style={{ width: "25px", height: "25px" }}
                    alt="product image"
                  />
                </a>
              </span>{" "}
              <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Frontend Developer(ReactJS Developer)
              </time>
              <span className="flex justify-between">
                {" "}
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                  Jan2023 - Jul2023
                </p>{" "}
                <span className="text-3xl">
                <a href="#"><TiSocialLinkedinCircular color="#0075B5" /></a>
                </span>
              </span>{" "}
            </li>
            <li className="mb-10 ms-6 border-2 border-reactColor rounded-lg w-96 pt-2 bg-white px-4 hover:shadow-[5px_5px_0px_0px_rgba(156,39,176)]">
              <span class="absolute flex items-center justify-center mt-9 w-4 h-4 bg-reactColor rounded-full -start-2 ring-8 ring-white hover:ring-textColor dark:ring-gray-900 dark:bg-blue-900"></span>
              <span className="flex justify-between">
                {" "}
                <span class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                  Mentorpal.ai
                </span>
                <a href="mentorpal.ai">
                  <Image
                    class="rounded-t-lg"
                    width={100}
                    height={100}
                    src={wwwImage}
                    style={{ width: "25px", height: "25px" }}
                    alt="product image"
                  />
                </a>
              </span>{" "}
              <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Intern Frontend Developer
              </time>
              <span className="flex justify-between">
                {" "}
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                  Jul2022 - Dec2022
                </p>{" "}
                <span className="text-3xl">
                <a href="#"><TiSocialLinkedinCircular color="#0075B5" /></a>
                </span>
              </span>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default WorkSection;
