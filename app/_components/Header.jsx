"use client";
import React, { useEffect, useState } from "react";
import { LayoutGrid, Search, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import GlobalApi from "../_utils/GlobalApi";
import Image from "next/image";
function Header() {
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    getCategoryList();
  }, []);
  const getCategoryList = () => {
    GlobalApi.getCategory().then((resp) => {
      console.log("categories:", resp.data.data);
      setCategoryList(resp.data.data);
    });
  };
  return (
    <div className="p-5 shadow-md flex justify-between">
      <div className="flex items-center gap-8">
        <h1 className="text-2xl text-[#31b65d] capitalize">
          grocery
          <span className="text-2xl text-orange-400 capitalize mx-2 ">
            Store
          </span>
        </h1>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <h2 className="capitalize hidden md:flex gap-2 items-center rounded-full border p-2 px-10 bg-slate-200 cursor-pointer">
              <LayoutGrid className="w-5 h-5" /> category
            </h2>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel className="capitalize">
              browse category
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            {categoryList.map((category, index) => (
              <DropdownMenuItem key={index} className="flex gap-4 items-center">
                <Image
                  src={
                    process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
                    category.attributes.icon.data.attributes.url
                  }
                  alt=""
                  width={30}
                  height={30}
                  unoptimized={true}
                />
                <h2 className="capitalize text-lg">{category.attributes.name}</h2>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="md:flex gap-3 items-center border rounded-full p-2 px-5 hidden">
          <Search />
          <input type="text" placeholder="Search" className="outline-none" />
        </div>
      </div>
      <div className="flex gap-5 items-center">
        <h2 className="flex gap-2 items-center text-lg">
          <ShoppingBag />0
        </h2>
        <Button>Login</Button>
      </div>
    </div>
  );
}

export default Header;
