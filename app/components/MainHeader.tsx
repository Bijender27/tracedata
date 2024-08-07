'use client'
import { useState } from 'react';
import logo from '../../public/TraceData-logo.png'
import Image from 'next/image'
import Link from 'next/link'
import {
  IoSearch,
  IoChevronDown,
  IoMenuOutline,
  IoClose,
} from "react-icons/io5";
import { industryList } from '../Constants';
import MobileMenu from './MobileMenu';

const MainHeader = () => {
   const [mobileMenu, setMobileMenu] = useState(false);

   const handelMobileMenu=()=>{
    setMobileMenu(!mobileMenu);
   }

  return (
    <div className="h-[70px] bg-white sticky top-0 z-30 flex items-center w-full border-b shadow-md">
      <div className="w-full h-full relative">
        <div className="max-w-[1440px] px-5 flex items-center w-full m-auto justify-between h-full">
          <Image
            alt="TaceData Logo"
            src={logo.src}
            width={185}
            height={42}
            style={{ width: "185px", height: "42px" }}
            priority
          />
          <div className="hidden lg:flex items-center gap-5">
            <ul className="flex gap-5 text-sm">
              <li className=" h-[62px]  group relative">
                <Link
                  href={"/report-store"}
                  className="flex gap-2 items-center font-medium h-[62px] outline-none"
                >
                  Report Store <IoChevronDown />
                </Link>
                <ul className="absolute top-[62px] -left-60 w-[800px] border-t-2 border-t-[#155bd5] bg-[#F7F7F7] border border-[#EDEDED] z-10 text-sm pl-2 pt-2 pb-1 font-bold text-[#4F4F4F] hidden group-hover:block columns-2 w">
                  {industryList.map((resource) => {
                    return (
                      <li
                        className="mb-2 text-[#7A7A7A] hover:text-[#155bd5] font-normal hover:font-bold"
                        key={resource.industryName}
                      >
                        <Link href={`/${resource.industrySlug}`}>
                          {resource.industryName}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
              <li className="h-[62px] relative group">
                <Link
                  href={"/consulting"}
                  className="flex gap-2 items-center font-medium h-[62px]"
                >
                  Consultig <IoChevronDown />
                </Link>
              </li>
              <li className="h-[62px] relative group">
                <Link
                  href={""}
                  className="flex gap-2 items-center font-medium h-[62px]"
                >
                  Resources <IoChevronDown />
                </Link>
              </li>
              <li className="h-[62px] relative group flex items-center">
                <Link
                  href={""}
                  className="font-medium flex items-center h-[62px]"
                >
                  Survey
                </Link>
              </li>
              <li className="h-[62px] flex items-center">
                <Link
                  href={""}
                  className="font-medium flex items-center h-[62px]"
                >
                  About Us
                </Link>
              </li>
              <li className="text-xl flex items-center h-[62px]">
                <span className="h-10 w-10 rounded-full shadow-lg flex items-center justify-center bg-[#155bd5]/10 cursor-pointer">
                  <IoSearch />
                </span>
              </li>
            </ul>
            <Link
              href={"/talk-to-us"}
              className="w-[150px] flex items-center justify-center text-white h-[45px] rounded-full bg-[#155bd5]"
            >
              Get in Touch
            </Link>
          </div>
          <div className="lg:hidden flex gap-3">
            <span className="h-10 w-10 rounded-full shadow-lg flex items-center justify-center bg-[#155bd5]/10 cursor-pointer">
              <IoSearch />
            </span>
            {mobileMenu ? (
              <IoClose
                className="text-4xl text-[#155bd5] transition-all ease-in duration-300"
                onClick={handelMobileMenu}
              />
            ) : (
              <IoMenuOutline
                className="text-4xl text-[#155bd5] transition-all ease-in duration-300"
                onClick={handelMobileMenu}
              />
            )}
          </div>
        </div>
        {mobileMenu && <MobileMenu />}
      </div>
    </div>
  );
}

export default MainHeader