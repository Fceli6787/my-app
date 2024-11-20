import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const menuItems = [
  {
    name: "Greek salad",
    price: 12.99,
    description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    image: "/images/greek-salad.jpg"
  },
  {
    name: "Bruschetta",
    price: 5.99,
    description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    image: "/images/bruschetta.jpg"
  },
  {
    name: "Lemon Dessert",
    price: 5.00,
    description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    image: "/images/lemon-dessert.jpg"
  }
]

export default function Specials() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">This weeks specials!</h2>
          <Button className="bg-yellow-400 text-black hover:bg-yellow-500">
            Online Menu
          </Button>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <Card key={index} className="overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                width={300}
                height={200}
                className="w-full object-cover h-[200px]"
              />
              <CardContent className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <span className="text-lg text-yellow-600">${item.price.toFixed(2)}</span>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <Button variant="outline" className="w-full">
                  Order a delivery
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}