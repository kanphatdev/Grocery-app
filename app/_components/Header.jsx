import { Button } from '@/components/ui/button'
import { LayoutGrid, Search, ShoppingBag } from 'lucide-react'
import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

function Header() {
    return (
        <div className='p-5 shadow-md flex justify-between'>
            <div className="flex items-center gap-8 ">
                <h1 className='text-2xl capitalize text-orange-400'>Grocery <span className='text-[#31b651]'>store</span></h1>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <h2 className="capitalize cursor-pointer hidden md:flex gap-2 items-center border rounded-full p-2 px-10 bg-slate-200"> <LayoutGrid className='w-5 h-5' /> category</h2>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel >
                            browse category
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Billing</DropdownMenuItem>
                        <DropdownMenuItem>Team</DropdownMenuItem>
                        <DropdownMenuItem>Subscription</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                <div className="md:flex gap-3 items-center border rounded-full p-2 mx-5 hidden">
                    <Search />
                    <input type="text" placeholder='Search' className='outline-none' />
                </div>
            </div>
            <div className="flex gap-5 items-center">
                <h2 className='flex gap-2 items-center text-lg'> <ShoppingBag />0</h2>
                <Button className="capitalize">sign in</Button>
            </div>
        </div>
    )
}

export default Header