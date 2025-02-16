"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { buttonVariants } from "@/components/ui/button"
import { ModeToggle } from './theme-toggle'
import { Menu } from 'lucide-react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import LoadingBar from 'react-top-loading-bar'
import { usePathname } from 'next/navigation'
import MobileNav from './mobile-nav'

const NavBar = () => {
    const [progress, setProgress] = useState(0)
    const pathname = usePathname();

    useEffect(() => {
        setProgress(30)

        setTimeout(() => {
            setProgress(70)
        }, 100);

        setTimeout(() => {
            setProgress(100)
        }, 800);
    }, [pathname])

    useEffect(() => {
        setTimeout(() => {
            setProgress(0)
        }, 900);
    }, [])

    return (
        <nav className='h-16 bg-background/50 sticky top-0 border-b px-8 backdrop-blur flex items-center justify-between z-10'>
            <LoadingBar
                color='#f11946'
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
            />
            <div className='text-lg font-bold md:text-xl'>
                <Link href={"/"}>
                    BlogIn
                </Link>
            </div>
            <ul className='hidden md:flex w-full justify-end items-center space-x-4'>
                <li><Link href={"/"}>Home</Link></li>
                <li><Link href={"/about"}>About</Link></li>
                <li><Link href={"/blog"}>Blog</Link></li>
                <li><Link href={"/contact"}>Contact</Link></li>
                <li className="buttons px-4 space-x-2">
                    <Link href={"/login"} className={buttonVariants({ variant: "outline" })}>Login</Link>
                    <Link href={"/login"} className={buttonVariants({ variant: "outline" })}>Sign Up</Link>
                </li>

            </ul>
            <ModeToggle />
            <div className='flex gap-2 items-center'>
                
                <Sheet>
                    <SheetTrigger><Menu className='size-7 md:hidden' /></SheetTrigger>
                    <SheetContent>
                    <MobileNav />
                        <SheetHeader>
                            <SheetTitle>Are you absolutely sure?</SheetTitle>
                            <SheetDescription>
                                This action cannot be undone. This will permanently delete your account
                                and remove your data from our servers.
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
               
            </div>
        </nav>
    )
}

export default NavBar