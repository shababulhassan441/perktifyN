"use client";

import Image from "next/image";
import React, { useState } from "react";
import poster from "/public/whyglobe.png";
import { IoMdCloseCircleOutline } from "react-icons/io";

const PopUp = ({ banner }) => {
  const [open, setOpen] = useState(true);
//  console.log("banner",banner)
  return (
    <>
      {open && banner && (
        <div className="poster">
          <div className="popup-content">
            <div className="close-icon" onClick={() => setOpen(false)}>
              <IoMdCloseCircleOutline />
            </div>
           <div onClick={() => {setOpen(false);document.getElementById('herocta')?.scrollIntoView({ behavior: 'smooth' })}} className="popup-wrapper" >
           <Image fill src={`${process.env.NEXT_PUBLIC_ENDPOINT}/storage/buckets/${process.env.NEXT_PUBLIC_POSTERS_STORAGE}/files/${banner.poster}/view?project=${process.env.NEXT_PUBLIC_PERKTIFY_PROJECT_ID}`} alt="Poster" className="popup-image" />
           </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopUp;
