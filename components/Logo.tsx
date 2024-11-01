import Image from "next/image";
import Link from "next/link";
import React from "react";

import logo from "../assets/logo.png";

const Logo = () => {
  return (
    <Link href="/">
      <Image src={logo} alt="logo" className="w-[60px] rounded-full" />
    </Link>
  );
};

export default Logo;
