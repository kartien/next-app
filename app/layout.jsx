import Navigation from '@/components/Navigation'
import './globals.css'

export const metadata = {
  title: 'My first next app',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
