'use client';
import React, { use } from 'react'
import { headerLinks } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { clients } from '@clerk/nextjs/api'
const NavItems = () => {
    const pathname = usePathname();
    return (
        <ul className='flex flex-col md:flex-row gap-5'>
            {
                headerLinks.map((item) => {
                    const isActive = pathname === item.route;
                    return <li key={item.label} className={`${isActive && 'text-primary-500'} md:flex-center p-medium-16 whitespace-nowrap `}>
                        <Link href={item.route} >{item.label}</Link>
                    </li>
                })
            }
        </ul>
    )
}

export default NavItems
