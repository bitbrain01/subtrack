import Link from 'next/link'
import { Home, PieChart, PlusCircle, Settings } from 'lucide-react'

export function Sidebar() {
  return (
    <div className="flex flex-col w-64 bg-white border-r">
      <div className="flex items-center justify-center h-16 border-b">
        <span className="text-2xl font-semibold text-gray-800">SubTracker</span>
      </div>
      <nav className="flex-1 overflow-y-auto">
        <ul className="p-4 space-y-2">
          <li>
            <Link href="/" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
              <Home className="w-5 h-5 mr-3" />
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/analytics" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
              <PieChart className="w-5 h-5 mr-3" />
              Analytics
            </Link>
          </li>
          <li>
            <Link href="/add" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
              <PlusCircle className="w-5 h-5 mr-3" />
              Add Subscription
            </Link>
          </li>
          <li>
            <Link href="/settings" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
              <Settings className="w-5 h-5 mr-3" />
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

