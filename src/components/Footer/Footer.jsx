import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
      
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-200/30 via-purple-100/10 to-transparent blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-white font-bold">
                Q
              </div>
              <span className="text-lg font-semibold text-gray-900 dark:text-white">
                Qu<span className="text-purple-600">vouch</span>
              </span>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-sm">
              Transform customer feedback into powerful social proof with
              QR-powered Google Reviews. Your opinion matters.
            </p>

            {/* Social icons */}
    
<div className="flex items-center gap-4 mt-6 text-gray-500">
  <a
    href="https://twitter.com"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-purple-600 transition"
  >
    <FaTwitter size={18} />
  </a>

  <a
    href="https://linkedin.com"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-purple-600 transition"
  >
    <FaLinkedinIn size={18} />
  </a>

  <a
    href="https://github.com"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-purple-600 transition"
  >
    <FaGithub size={18} />
  </a>
</div>
          </div>

          {/* Links group 1 */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
              Product
            </h4>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li className="hover:text-purple-600 cursor-pointer">Features</li>
              <li className="hover:text-purple-600 cursor-pointer">Pricing</li>
              <li className="hover:text-purple-600 cursor-pointer">Integrations</li>
              <li className="hover:text-purple-600 cursor-pointer">API</li>
            </ul>
          </div>

          {/* Links group 2 */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li className="hover:text-purple-600 cursor-pointer">About</li>
              <li className="hover:text-purple-600 cursor-pointer">Blog</li>
              <li className="hover:text-purple-600 cursor-pointer">Careers</li>
              <li className="hover:text-purple-600 cursor-pointer">Contact</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-gray-200 dark:border-gray-800" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-500">
          
          <p>© 2025 Quvouch. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <span className="hover:text-purple-600 cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-purple-600 cursor-pointer">
              Terms of Service
            </span>
            <span className="hover:text-purple-600 cursor-pointer">
              Cookie Policy
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
