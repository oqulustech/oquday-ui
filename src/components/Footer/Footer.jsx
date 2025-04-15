export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 text-sm mt-10 border-t">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <p>
          &copy; {new Date().getFullYear()} Oquday Inc. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <a href="/privacy" className="hover:text-blue-600">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:text-blue-600">
            Terms of Service
          </a>
          <a href="/contact" className="hover:text-blue-600">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
}
