"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import menu_icon from '@/public/assests/menuicon.svg';
import cross_button from '@/public/assests/crossbutton.svg';
import apple_store_button from '@/public/assests/applestorebutton.svg';
import google_play_button from '@/public/assests/googleplaybutton.svg';
import twitter_icon from '@/public/assests/twittericon.svg';
import facebook_icon from '@/public/assests/facebookicon.svg';
import instagram_icon from '@/public/assests/instagramicon.svg';
import tiktok_icon from '@/public/assests/tiktokicon.svg';
import linkedin_icon from '@/public/assests/linkedinicon.svg';
import medium_icon from '@/public/assests/mediumicon.svg';



export default function Navbar() {
    
    const [isClient, setIsClient] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    // Ensure that the code only runs on the client side
    useEffect(() => {
    setIsClient(true);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className={`relative z-[1000] w-full ${menuOpen ? 'bg-product-background' : 'bg-transparent'}`}>
            <div className="flex h-[80px] w-full items-center justify-between px-6 py-4 text-marketing-text-primary md:px-10">
                <div className="flex md:flex-grow-0 xl:flex-1">
                    <a href="/">
                        {/* Logo here */}
                    </a>
                </div>

                <div className="hidden flex-1 space-x-10 lg:mr-10 lg:flex lg:justify-end xl:mr-0 xl:flex xl:justify-center xl:space-x-10">
                    {[
                        { name: 'Glossary', link: '/glossary/html/attributes' },
                        { name: 'Blog', link: '/blog' },
                        { name: 'Learner stories', link: '/learner-stories' },
                        { name: 'Pricing', link: '/pro' },
                    ].map((item, index) => (
                        <a key={index} href={item.link} className="font-bold">
                            {item.name}
                        </a>
                    ))}
                </div>

                <div className="hidden items-center justify-end space-x-10 lg:flex lg:flex-grow-0 xl:flex-1">
                    <a href="/web/login" className="font-bold">
                        Log in
                    </a>
                    <a className="flex shrink-0 items-center justify-between px-6 py-3 rounded-xl bg-marketing-button-primary-enabled text-marketing-button-primary-text" href="/web/register">
                        <p className="font-bold">
                            Sign up
                        </p>
                    </a>
                </div>

                <button className="lg:hidden" onClick={toggleMenu} >
                    <Image src={menuOpen ? cross_button : menu_icon} alt="menu button" width={24} height={24} />
                </button>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
            <div className={`absolute top-[80px] left-0 right-0 z-40 flex flex-col justify-between bg-marketing-background-secondary overflow-y-auto transition-all duration-300 ${menuOpen ? 'h-[calc(100vh-80px)]' : 'h-0'}`}>
                <div className="mx-10 mt-16 flex flex-1 flex-col items-start space-y-6">
                    {[
                        { name: 'Glossary', link: '/glossary/html/attributes' },
                        { name: 'Blog', link: '/blog' },
                        { name: 'Learner stories', link: '/learner-stories' },
                        { name: 'Pricing', link: '/pro' },
                        { name: 'Log in', link: '/web/login' },
                        { name: 'Create an account', link: '/web/register' },
                    ].map((item, index) => (
                        <a key={index} href={item.link} className="text-xl font-bold">
                            {item.name}
                        </a>
                    ))}
                </div>

                <div className="mx-10 mb-20 mt-10 flex flex-col space-y-10">
                    <div className="flex flex-col space-y-4">
                        <h5 className="text-xl font-bold">Download</h5>
                        <div className="flex gap-4">
                            <a target="_blank" rel="noreferrer" href="https://itunes.apple.com">
                                <Image src={apple_store_button} alt="apple store button" width={100} height={40} />
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://play.google.com">
                                <Image src={google_play_button} alt="google play button" width={100} height={40} />
                            </a>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h5 className="text-xl font-bold">Follow us</h5>
                        <div className="flex gap-6">
                            <a href="https://twitter.com" aria-label="Twitter">
                                <Image src={twitter_icon} alt="twitter icon" width={50} height={20} />
                            </a>
                            <a href="https://facebook.com" aria-label="Facebook">
                                <Image src={facebook_icon} alt="facebook icon" width={50} height={20} />
                            </a>
                            <a href="https://instagram.com" aria-label="Instagram">
                                <Image src={instagram_icon} alt="instagram icon" width={50} height={20} />
                            </a>
                        </div>
                    </div>
                    <p className="text-xs text-marketing-text-secondary">© 2024 Mimo GmbH</p>
                </div>
            </div>
            )}
        </div>
    );
}
