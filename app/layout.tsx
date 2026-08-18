import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = { title: "Circula | Industrial materials, recirculated", description: "Circular economy marketplace" }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
