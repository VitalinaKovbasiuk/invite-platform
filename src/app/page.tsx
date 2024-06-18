"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Icon from "@/components/IconComponent ";
import * as icons from "./icons";

const Home = () => {
  const router = useRouter();
  const contact = {
    phone: "+38 (050) 123 45 67",
    email: "+38 (050) 123 45 67",
    website: "website.com",
    location: "12345, Some st., New York, NY, United States",
    socialMedia: [
      { name: "instagram", url: "./icons/", icon: icons.Instagram },
      { name: "facebook", url: "https://facebook.com", icon: icons.Instagram },
      { name: "linkedin", url: "https://linkedin.com", icon: icons.Instagram },
      { name: "tiktok", url: "https://tiktok.com", icon: icons.Instagram },
    ],
    imageUrl: "/images/jona2.jpg",
  };

  const { phone, email, website, location, socialMedia } = contact;

  return (
    <main className="mx-auto px-5 w-full h-[942px] bg-black">
      <div className=" max-w-sm mx-auto rounded-lg pt-[146px] my-12 shadow-md text-center bg-[#A23A77]">
        {/* Foto */}
        {/* <div className="w-35 h-35 absolute -top-[70px] rounded-[24px] overflow-hidden left-1/2 -translate-x-1/2 bg-white">
          <Image

            src={contact.imageUrl}
            width={140}
            height={140}
            alt="Profile Image"
          />
        </div> */}

        <div className="relative bg-white w-[350px] h-[528px] mb-[16px] rounded-[24px] mx-5 ">
          <div className="w-[140px] h-[140px] absolute -top-[70px] rounded-[24px] overflow-hidden left-1/2 -translate-x-1/2 bg-white">
            <Image
              src={contact.imageUrl}
              width={140}
              height={140}
              alt="Profile Image"
            />
          </div>
          {/* Contact details section */}
          <h1 className=" text-2xl text-[#A23A77] font-bold text-[24px] pb-[4px] mt-[86px]">
            Jane Austin
          </h1>
          <h2 className="text-[14px]  text-[#707087]">CEO at Hogwarts</h2>

          {/* Description */}
          <p className="my-6 text-[14px] text-start text-[#011533] px-4 ">
            Lorem ipsum dolor sit amet consectetur. Praesent massa pharetra
            facilisis malesuada sem. Tellus erat rhoncus mauris eget eget
            ridiculus enim. Augue aenean non tincidunt suscipit pellentesque.
          </p>

          {/* Contact */}

          <ul className="text-left space-y-2 text-[#A23A77] px-6">
            {[
              { label: "Phone number:", value: phone },
              { label: "Email:", value: email },
              { label: "Website:", value: website, isLink: true },
              { label: "Location:", value: location },
            ].map((item, index) => (
              <li key={index} className="text-[16px] pb-1 mb-4">
                <strong>{item.label}</strong>
                {item.isLink ? (
                  <a
                    href={item.value}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#011533] text-[14px]"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-[#011533] text-[14px]">{item.value}</p>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Section social-media */}
        <div className=" mt-2 w-[350px] h-[152px] bg-white rounded-[24px] mx-5">
          <p className="text-[#A23A77] text-5 pt-5 px-[118px]">Social media</p>
          <div className="icons flex">
            {socialMedia.map((media, index) => (
              <a
                key={index}
                href={media.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="w-[67.7px] h-[56px]" name={media.icon} />
              </a>
            ))}
          </div>
        </div>

        {/* Button */}
        <button className="mt-4 bg-[#FFD3D7] text-gray-800 rounded-full mb-8 py-3 px-[94px] text-5 font-bold">
          Save contact data
        </button>
      </div>
    </main>
  );
};

export default Home;
