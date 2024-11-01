import Image from "next/image";
import React from "react";

import hitachi from "@/assets/hitachi.png";
import linkedin from "@/assets/linkedin.png";
import nissay from "@/assets/nissay.png";
import prudential from "@/assets/prudential.png";
import herbalife from "@/assets/herbalife.png";
import abaeca from "@/assets/abaeca.png";

const UserCustomers = () => {
  return (
    <section className="border-t">
      <div className="container mx-auto py-8 md:py-12 px-4">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6 items-center">
          <div className="flex justify-center">
            <Image
              src={hitachi}
              alt="Hitachi logo"
              className="h-8"
              width={120}
              height={32}
            />
          </div>
          <div className="flex justify-center">
            <Image
              src={linkedin}
              alt="LinkedIn logo"
              className="h-8"
              width={120}
              height={32}
            />
          </div>
          <div className="flex justify-center">
            <Image
              src={nissay}
              alt="Nissay logo"
              className="h-8"
              width={120}
              height={32}
            />
          </div>
          <div className="flex justify-center">
            <Image
              src={prudential}
              alt="Prudential logo"
              className="h-8"
              width={120}
              height={32}
            />
          </div>
          <div className="flex justify-center">
            <Image
              src={herbalife}
              alt="Herbalife logo"
              className="h-8"
              width={120}
              height={32}
            />
          </div>
          <div className="flex justify-center">
            <Image
              src={abaeca}
              alt="Abaeca logo"
              className="h-8"
              width={120}
              height={32}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserCustomers;
