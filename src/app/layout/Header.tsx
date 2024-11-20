import Image from "next/image"
import Link from "next/link"

export default function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-3">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/logo.svg"
              alt="Little Lemon logo"
              width={40}
              height={40}
              className="text-yellow-400"
            />
            <span className="text-xl font-semibold">LITTLE LEMON</span>
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link className="text-sm font-medium hover:text-yellow-500" href="/">
              Home
            </Link>
            <Link className="text-sm font-medium hover:text-yellow-500" href="/about">
              About
            </Link>
            <Link className="text-sm font-medium hover:text-yellow-500" href="/menu">
              Menu
            </Link>
            <Link className="text-sm font-medium hover:text-yellow-500" href="/reservations">
              Reservations
            </Link>
            <Link className="text-sm font-medium hover:text-yellow-500" href="/order">
              Order Online
            </Link>
            <Link className="text-sm font-medium hover:text-yellow-500" href="/login">
              Login
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}