import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Creamory - 兒童烘焙體驗課程",
  description: "為兒童提供有趣的烘焙體驗課程",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW">
      <body className={`${inter.className} bg-[#fff9f9] text-[#4a3e3e]`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
