"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white/95"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-[#e77c7c]">
            Creamory
          </Link>

          <nav>
            <ul className="flex space-x-6 md:space-x-8">
              <li>
                <Link href="#about" className="font-medium text-[#4a3e3e] hover:text-[#e77c7c] transition-colors">
                  關於我們
                </Link>
              </li>
              <li>
                <Link href="#courses" className="font-medium text-[#4a3e3e] hover:text-[#e77c7c] transition-colors">
                  課程介紹
                </Link>
              </li>
              <li>
                <Link href="#schedule" className="font-medium text-[#4a3e3e] hover:text-[#e77c7c] transition-colors">
                  課程時間
                </Link>
              </li>
              <li>
                <Link href="#contact" className="font-medium text-[#4a3e3e] hover:text-[#e77c7c] transition-colors">
                  聯絡我們
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
