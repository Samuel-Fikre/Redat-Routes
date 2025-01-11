import './globals.css'
import 'leaflet/dist/leaflet.css'

export const metadata = {
  title: 'Redat - Taxi Fare Calculator',
  description: 'Find the best and most affordable taxi routes in Addis Ababa',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
} 