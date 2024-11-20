export default function Footer() {
    return (
      <footer className="bg-gray-100">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-gray-600">
            © {new Date().getFullYear()} Little Lemon. All rights reserved.
          </div>
        </div>
      </footer>
    )
  }