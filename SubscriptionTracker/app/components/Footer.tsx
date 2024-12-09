import { Github } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            © 2024 SubTracker. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Terms of Service
            </a>
            <a
              href="https://github.com"
              className="text-muted-foreground hover:text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

