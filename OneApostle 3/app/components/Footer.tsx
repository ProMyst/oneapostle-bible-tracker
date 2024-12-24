export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-[#244855] text-[#FBE9D0] py-4 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm">
          © {currentYear} OneApostle. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

