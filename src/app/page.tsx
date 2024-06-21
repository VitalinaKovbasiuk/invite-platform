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

  //   /* Section vCard plus */
  // const contact = {
  //   phone: "+38 (050) 123 45 67",
  //   email: "+38 (050) 123 45 67",
  //   website: "website.com",
  //   location: "12345, Some st., New York, NY, United States",
  //   imageUrl: "/images/jona2.jpg",
  //   blackStripe: "/images/blackStripe.png",
  // };
  // const { phone, email, website, location } = contact;
  // const socialMedia = [
  //   {
  //     name: "instagram",
  //     url: "https://instagram.com",
  //     icon: icons.InstagramLogo,
  //   },
  //   {
  //     name: "facebook",
  //     url: "https://facebook.com",
  //     icon: icons.FacebookLogo,
  //   },
  //   {
  //     name: "linkedin",
  //     url: "https://linkedin.com",
  //     icon: icons.LinkedInLogo,
  //   },
  //   { name: "tiktok", url: "https://tiktok.com", icon: icons.TikTokLogo },
  // ];
  // const personalContact = [
  //   { label: "Phone number", value: phone, icon: icons.PhoneVector },
  //   { label: "Email", value: email, icon: icons.EmailVector },
  //   {
  //     label: "Website",
  //     value: website,
  //     isLink: true,
  //     icon: icons.WebsiteVector,
  //   },
  //   {
  //     label: "Location",
  //     value: location,
  //     icon: icons.LocationVector,
  //   },
  // ];
  // const cardIcon = [
  //   { label: "WifiCardIcon", icon: icons.MobileSignalIcon },
  //   { label: "WifiCardIcon", icon: icons.WifiCardIcon },
  //   { label: "BatteryIcon", icon: icons.BatteryIcon },
  // ];
  // const templates = {
  //   default: {
  //     cnMainDiv:
  //       "relative max-w-sm mx-auto h-full my-12 shadow-md text-center bg-[#A23A77]",
  //     cnImage: "/image/jona2.jpg",
  //     cnCoverImage: "/image/jona2.jpg",
  //     cnImageJane:
  //       "w-[140px] h-[140px] absolute top-[76px] rounded-[24px] overflow-hidden left-1/2 -translate-x-1/2",
  //     cnName:
  //       " text-2xl text-[#A23A77] font-bold text-[24px] pb-[4px] pt-[86px]",
  //     cnInfoBlock: " bg-white mb-[16px] rounded-[24px] mx-5 mt-[102px]",
  //     cnSocialMedia: "mt-2 h-[152px] bg-white rounded-[24px] mx-5",
  //     cnButton:
  //       " bg-[#FFD3D7] mt-4 mb-[32px] text-gray-800 rounded-[24px] py-3 px-[102px] text-5 font-bold",
  //   },
  //   template1: {
  //     cnMainDiv:
  //       "relative max-w-sm mx-auto h-full my-12 shadow-md text-center bg-gradient1 bgImg",
  //     cnImageJane:
  //       "w-[140px] h-[140px] absolute top-[120px] rounded-full border-[5px] overflow-hidden left-1/2 -translate-x-1/2",
  //     cnName:
  //       " text-2xl text-[#A23A77] font-bold text-[24px] pb-[4px] pt-[24px]",
  //     cnInfoBlock: " bg-white mb-[16px] rounded-[0px] mx-5 mt-[234px]",
  //     cnSocialMedia: "mt-2 h-[152px] bg-white rounded-[0px] mx-5",
  //     cnButton:
  //       " bg-[#FFD3D7] mt-4 mb-[32px] text-gray-800 py-3 pl-[102px] pr-[102px] text-5 font-bold",
  //   },
  //   template2: {
  //     cnMainDiv:
  //       "relative max-w-sm mx-auto h-full my-12 shadow-md text-center bg-gradient1 bgImg",
  //     cnImageJane:
  //       "w-[140px] h-[140px] absolute top-[120px] rounded-full border-[5px] overflow-hidden left-1/2 -translate-x-1/2",
  //     cnName:
  //       " text-2xl text-[#A23A77] font-bold text-[24px] pb-[4px] pt-[24px]",
  //     cnInfoBlock: " bg-white mb-[16px] rounded-[24px] mx-5 mt-[234px]",
  //     cnSocialMedia: "mt-2 h-[152px] bg-white rounded-[24px] mx-5",
  //     cnButton:
  //       " bg-[#FFD3D7] mt-4 mb-[32px] text-gray-800 rounded-[24px] py-3 px-[102px] text-5 font-bold",
  //   },
  //   template3: {
  //     cnMainDiv:
  //       "relative max-w-sm mx-auto h-full my-12 shadow-md text-center bg-gradient2 joBack",
  //     cnImageJane: null,
  //     cnName:
  //       " text-2xl text-[#A23A77] font-bold text-[24px] pb-[4px] pt-[24px]",
  //     cnInfoBlock: " bg-white mb-[16px] rounded-[0px] mx-5 mt-[124px]",
  //     cnSocialMedia: "mt-2 h-[152px] bg-white rounded-[24px] mx-5",
  //     cnButton:
  //       " bg-[#FFD3D7] mt-4 mb-[32px] text-gray-800 rounded-[0px] py-3 px-[102px] text-5 font-bold",
  //   },
  //   template4: {
  //     cnMainDiv:
  //       "relative max-w-sm mx-auto h-full my-12 shadow-md text-center bg-[#A23A77]",
  //     cnImageJane: null,
  //     cnName:
  //       " text-2xl text-[#A23A77] font-bold text-[24px] pb-[4px] pt-[24px]",
  //     cnInfoBlock: " bg-white mb-[16px] rounded-[24px] mx-5 mt-[168px]",
  //     cnSocialMedia: "mt-2 h-[152px] bg-white rounded-[24px] mx-5",
  //     cnButton:
  //       " bg-[#FFD3D7] mt-4 mb-[32px] text-gray-800 rounded-[24px] py-3 px-[102px] text-5 font-bold",
  //   },
  // };
  // const createTemplate = templates.template3;

  //   /* Section email */
  // const cardIcon = [
  //   { label: "Signal", icon: icons.MobileSignalIcon },
  //   { label: "Wifi", icon: icons.WifiCardIcon },
  //   { label: "Battery", icon: icons.BatteryIcon },
  // ];
  // const emeilSenderIcon = [
  //   {
  //     name: "PaperClipIcon",
  //     icon: icons.PaperClipIcon,
  //   },
  //   {
  //     name: "ArrowSendIcon",
  //     icon: icons.ArrowSendIcon,
  //   },
  //   {
  //     name: "ThreeDotsIcon",
  //     icon: icons.ThreeDotsIcon,
  //   },
  // ];

  //   /* Section PDF */
  // const cardIcon = [
  //   { label: "Signal", icon: icons.MobileSignalIcon },
  //   { label: "Wifi", icon: icons.WifiCardIcon },
  //   { label: "Battery", icon: icons.BatteryIcon },
  // ];

  //   /* Section Images */
  const cardIcon = [
    { label: "Signal", icon: icons.MobileSignalIcon },
    { label: "Wifi", icon: icons.WifiCardIcon },
    { label: "Battery", icon: icons.BatteryIcon },
  ];

  return (
    <main className=" mx-auto w-[full] ">
      {/* Preview Section Images */}
      <div className="relative max-w-sm mx-auto h-[844px] my-12 shadow-md bg-gradientImegesPreview">
        <div className="pl-6 pr-4 py-3 flex items-center justify-between">
          <p className="text-start text-[#FFFFFF] text-[15px]">9:41</p>
          <div className="top-0 absolute left-1/2 -translate-x-1/2">
            <Image
              src="/images/blackStripe.png"
              width={219}
              height={30}
              alt="Black Image"
            />
          </div>
          <ul className="flex gap-1 items-center">
            {cardIcon.map((item, index) => (
              <li key={index} className="">
                <Icon name={item.icon} />
              </li>
            ))}
          </ul>
        </div>
        <div className="w-[320px] h-[124px] mt-[40px] ml-[36px] mr-[36px] text-center">
          <h1 className="text-[28px] font-proximaSemibolt pb-[8px] text-white">
            Photos
          </h1>
          <p className="text-[16px] font-proximaRegular pb-[24px]  text-white">
            Check out the photos of nature I took during my hike!
          </p>
          <p className="text-white text-center flex items-center text-[16px] font-proximaRegular ml-[81px]">
            <Icon name={icons.GlobeIcon} className="stroke-white" />
            <span className="ml-2">www.website.com</span>
          </p>
        </div>
        <div className="mt-8 w-full flex flex-col items-center space-y-4">
          <Image
            src="/images/SectinRrePhoto1.jpg"
            width={350}
            height={200}
            alt="Nature Photo 1"
            className="rounded-[24px]"
          />
          <Image
            src="/images/SectinRrePhoto2.jpg"
            width={350}
            height={200}
            alt="Nature Photo 2"
            className="rounded-[24px]"
          />
        </div>
        <button className="absolute bottom-[88px] bg-[#276435] mt-20 ml-[20px] text-white rounded-[24px] pt-[9px] pb-[9px] pl-[105px] pr-[105px] text-[20px] font-proximaButton font-bold ">
          View all photos
        </button>
      </div>

      {/* Preview Section PDF */}
      {/* <div className="relative max-w-sm mx-auto h-[844px] my-12 shadow-md bg-gradientPdfPreview">
        <div className="pl-6 pr-4 py-3 flex items-center justify-between ">
          <p className="text-start text-black text-[15px]">9:41</p>
          <div className="top-0 absolute left-1/2 -translate-x-1/2">
            <Image
              src="/images/blackStripe.png"
              width={219}
              height={30}
              alt="Black Stripe"
            />
          </div>
          <ul className="flex gap-1 items-center">
            {cardIcon.map((item, index) => (
              <li key={index}>
                <Icon name={item.icon} className="primary" />
              </li>
            ))}
          </ul>
        </div>
        <div className="w-[273px h-[76px] mt-[66px] ml-[60px] mr-[60px] text-center">
          <p className="text-[28px] font-proximaSemibolt pb-[8px]">
            My summer wardrobe
          </p>
          <p className="text-[16px] font-proximaRegular">
            Check out my outfits. <br />
            Let me know what you think!
          </p>
        </div>
        <Image
          src="/images/PreviewPdfImage.jpg"
          width={280}
          height={360}
          alt="PDF Image"
          className="rounded-[24px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
        />

        <button className="absolute bottom-[150px] bg-[#FFD3D7] mt-20 ml-[20px] text-gray-800 rounded-[24px] pt-[9px] pb-[9px] pl-[130px] pr-[130px] text-[20px] font-proximaButton font-bold ">
          View PDF
        </button>
      </div> */}

      {/* Preview Section email */}
      {/* <div className="relative max-w-sm mx-auto h-[844px] my-12 shadow-md bg-white">
        <div className="pl-6 pr-4 py-3 flex items-center justify-between">
          <p className="text-start text-black text-[15px]">9:41</p>
          <div className="top-0 absolute left-1/2 -translate-x-1/2">
            <Image
              src="/images/blackStripe.png"
              width={219}
              height={30}
              alt="Black Stripe"
            />
          </div>
          <ul className="flex gap-1 items-center">
            {cardIcon.map((item, index) => (
              <li key={index}>
                <Icon name={item.icon} className="primary" />
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-between gap-4 items-center pl-4 pr-4 pt-4 pb-4">
          <p>
            <Icon name={icons.CrossIcon} />
          </p>
          <ul className=" flex gap-8 items-center mt-2 mb-2">
            {emeilSenderIcon.map((item, index) => (
              <li key={index}>
                <Icon name={item.icon} />
              </li>
            ))}
          </ul>
        </div>
        <div className="px-4 py-4">
          <p className="text-gray-500 text-[14px] pb-4 border-b border-gray-200">
            YourCompany
            <span className="text-[14px] text-black pl-2">Email@gmail.com</span>
          </p>
          <div className="flex border-b border-gray-200 justify-between items-center">
            <p className="text-gray-500 text-[14px] pb-4 mt-2 pt-1">
              From
              <span className="text-[14px] text-black pl-3">
                InterestedClient@gmail.com
              </span>
            </p>
            <Icon name={icons.TickIcon} className="mr-2" />
          </div>

          <p className="text-black text-[15px] pb-4 mt-4 border-b border-gray-200">
            That amazing offer
          </p>
          <p className="text-black text-[15px] mt-4 whitespace-pre-wrap">
            Hey!
            <br />
            Texting you about that amazing offer you put up. I’m very
            interested, could we schedule a call to discuss it?
          </p>
        </div>
        <div className="bottom-0 absolute mb-[10px] left-1/2 -translate-x-1/2">
          <Image
            src="/images/LineBt.png"
            width={139}
            height={5}
            alt="Line Fotter "
          />
        </div>
      </div> */}

      {/*Preview Section vCard plus */}
      {/* <div className={cn(createTemplate.cnMainDiv)}>
        <div>
          <div className="pl-6 pr-4 py-3 flex items-center justify-between">
            <p className="text-start text-[#FFFFFF] text-[15px]">9:41</p>
            <div className="top-0 absolute left-1/2 -translate-x-1/2">
              <Image
                src={contact.blackStripe}
                width={219}
                height={30}
                alt="Black Image"
              />
            </div>

            <ul className="flex gap-1 items-center">
              {cardIcon.map((item, index) => (
                <li key={index} className="">
                  <Icon name={item.icon} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {createTemplate !== templates.template3 &&
          createTemplate !== templates.template4 && (
            <div className={cn(createTemplate.cnImageJane)}>
              <Image
                src={contact.imageUrl}
                width={140}
                height={140}
                alt="Profile Image"
              />
            </div>
          )}

        <div className={cn(createTemplate.cnInfoBlock)}>
          <h1 className={cn(createTemplate.cnName)}>Jane Austin</h1>
          <h2 className="text-[14px] text-[#707087]">CEO at Hogwarts</h2>

          <p className="my-6 text-[14px] text-start text-[#011533] px-4 ">
            Lorem ipsum dolor sit amet consectetur. Praesent massa pharetra
            facilisis malesuada sem. Tellus erat rhoncus mauris eget eget
            ridiculus enim. Augue aenean non tincidunt suscipit pellentesque.
          </p>

          <ul className="text-left space-y-2 text-[#A23A77] px-4 pb-[40px]">
            {personalContact.map((item, index) => (
              <li key={index} className="text-[16px] flex gap-2">
                <Icon name={item.icon} />
                <div>
                  <strong>{item.label}</strong>
                  <p className="text-[#011533] text-[14px] ">{item.value}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className={cn(createTemplate.cnSocialMedia)}>
          <p className="text-[#A23A77] text-5 pt-5 px-[118px]">Social media</p>
          <div className="flex gap-2 px-[28px] pt-4 pb-8">
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

        <button className={cn(createTemplate.cnButton)}>
          Save contact data
        </button>
      </div> */}
    </main>
  );
};

export default Home;
