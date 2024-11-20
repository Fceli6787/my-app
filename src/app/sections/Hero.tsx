import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="bg-[#495E57] text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-yellow-400">
              Little Lemon
            </h1>
            <h2 className="text-2xl md:text-3xl">Chicago</h2>
            <p className="text-lg max-w-md">
              We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
            </p>
            <Button className="bg-yellow-400 text-black hover:bg-yellow-500">
              Reserve a Table
            </Button>
          </div>
          <div className="relative h-[300px] rounded-lg overflow-hidden">
            <Image
              src="/images/hero-image.jpg"
              alt="Featured dish"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}