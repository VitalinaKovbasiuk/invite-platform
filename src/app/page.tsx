"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Icon from "@/components/IconComponent ";
import * as icons from "./icons";
import Link from "next/link";

const Home = () => {
  const router = useRouter();
  const contact = {
    phone: "+38 (050) 123 45 67",
    email: "+38 (050) 123 45 67",
    website: "website.com",
    location: "12345, Some st., New York, NY, United States",
    imageUrl: "/images/jona2.jpg",
    blackSripe: "/images/blackStripe.png",
  };
  const { phone, email, website, location } = contact;

  const socialMedia = [
    {
      name: "instagram",
      url: "https://instagram.com",
      icon: icons.InstagramLogo,
    },
    {
      name: "facebook",
      url: "https://facebook.com",
      icon: icons.FacebookLogo,
    },
    {
      name: "linkedin",
      url: "https://linkedin.com",
      icon: icons.LinkedInLogo,
    },
    { name: "tiktok", url: "https://tiktok.com", icon: icons.TikTokLogo },
  ];

  const personalContact = [
    { label: "Phone number", value: phone, icon: icons.PhoneVector },
    { label: "Email", value: email, icon: icons.EmailVector },
    {
      label: "Website",
      value: website,
      isLink: true,
      icon: icons.WebsiteVector,
    },
    {
      label: "Location",
      value: location,
      icon: icons.LocationVector,
    },
  ];

  const cardIcon = [
    { label: "WifiCardIcon", icon: icons.WifiCardIcon },
    { label: "WifiCardIcon", icon: icons.WifiCardIcon },
    { label: "BatteryIcon", icon: icons.BatteryIcon },
  ];

  const templates = {
    default: {
      cnMainDiv:
        "relative max-w-sm mx-auto  w-[390px] h-[942px] my-12 shadow-md text-center bg-[#A23A77]",
      cnImage: "/image/jona2.jpg",
      cnCoverImage: "/image/jona2.jpg",
      cnInfoBlock: " bg-white mb-[16px] rounded-[24px] mx-5 mt-[102px]",
    },
    template1: {
      cnMainDiv:
        "relative max-w-sm mx-auto  w-[390px] h-[942px] my-12 shadow-md text-center bg-gradient1",
      cnInfoBlock: " bg-white mb-[16px] rounded-[0px] mx-5 mt-[102px]",
      image: "image1",
      radius: "radius1",
    },
    template2: { bg: "bg2", image: "image2", radius: "radius3" },
    template3: { bg: "bg3", image: "image3", radius: "radius3" },
    template4: { bg: "bg4", image: "image4", radius: "radius4" },
  };

  const createTemplate = templates.template1;

  return (
    <main className="mx-auto w-full ">
      <div className={cn(createTemplate.cnMainDiv)}>
        {/* Head of card */}
        <div>
          <div className="pl-6 pr-4 py-3 flex items-center justify-between">
            <p className="text-start text-[#FFFFFF] text-[15px]">9:41</p>
            <div className="top-0 absolute left-1/2 -translate-x-1/2">
              <Image
                src={contact.blackSripe}
                width={219}
                height={30}
                alt="Black Image"
              />
            </div>
            {/* List of card icon */}
            <ul className="flex gap-1 items-center">
              {cardIcon.map((item, index) => (
                <li key={index} className="">
                  <Icon name={item.icon} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-[140px] h-[140px] absolute top-[72px] rounded-[24px] overflow-hidden left-1/2 -translate-x-1/2 bg-white">
          <Image
            src={contact.imageUrl}
            width={140}
            height={140}
            alt="Profile Image"
          />
        </div>

        <div className={cn(createTemplate.cnInfoBlock)}>
          <h1 className=" text-2xl text-[#A23A77] font-bold text-[24px] pb-[4px] pt-[86px]">
            Jane Austin
          </h1>
          <h2 className="text-[14px] text-[#707087]">CEO at Hogwarts</h2>

          <p className="my-6 text-[14px] text-start text-[#011533] px-4 ">
            Lorem ipsum dolor sit amet consectetur. Praesent massa pharetra
            facilisis malesuada sem. Tellus erat rhoncus mauris eget eget
            ridiculus enim. Augue aenean non tincidunt suscipit pellentesque.
          </p>

          <ul className="text-left space-y-2 text-[#A23A77] px-4">
            {personalContact.map((item, index) => (
              <li key={index} className="text-[16px] pb-1 mb-4 flex gap-2">
                <Icon name={item.icon} />
                <div>
                  <strong>{item.label}</strong>
                  <p className="text-[#011533] text-[14px] ">{item.value}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className=" mt-2 w-[350px] h-[152px] bg-white rounded-[24px] mx-5">
          <p className="text-[#A23A77] text-5 pt-5 px-[118px]">Social media</p>
          <div className="flex gap-2 px-[28px] mt-4 mb-8">
            {socialMedia.map((media, index) => (
              <Link
                key={index}
                href={media.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={media.name}
                className="flex justify-center items-center px-[3px] w-[67.7px] h-[56px] rounded-[12px] border border-[#FFD3D7]"
              >
                <Icon className="w-[50px] h-[50px] " name={media.icon} />
              </Link>
            ))}
          </div>
        </div>

        <button className=" bg-[#FFD3D7] mt-4 mx-5 w-[350px] mb-8 text-gray-800 rounded-full py-3 px-[94px] text-5 font-bold">
          Save contact data
        </button>
      </div>
    </main>
  );
};

export default Home;
