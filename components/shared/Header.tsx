import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { SignedOut } from "@clerk/nextjs";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex container justify-between items-center  ">
        <Link className="" href={"/"}>
          <Image
            src={"/assets/images/logo.svg"}
            alt="logo"
            width={128}
            height={38}
          />
        </Link>
        <div>
          <SignedOut>
            <Button asChild className="rounded-full" size={"lg"} >
              <Link href={"/sign-in"}>
                Login
              </Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Header;
