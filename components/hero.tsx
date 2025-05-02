import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section
      className="relative h-screen flex items-center justify-center text-center text-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(/placeholder.svg?height=1200&width=2000)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        paddingTop: "70px",
      }}
    >
      <div className="container mx-auto px-4 md:px-6 z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Creamory 兒童烘焙體驗</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">讓孩子在有趣的烘焙過程中學習、創造和成長</p>
        <Button className="bg-[#e77c7c] hover:bg-[#d66c6c] text-white px-8 py-6 rounded-full text-lg">立即報名</Button>
      </div>
    </section>
  )
}
