import type { Metadata } from 'next'
import { Quattrocento } from 'next/font/google'
import './globals.css'
import clsx from 'clsx'
import logo from '@/public/logo_balancoire.png'
import Image from 'next/image'
import Link from 'next/link'
import { FACEBOOK_URL } from '@/lib/constants'

const inter = Quattrocento({ weight: ['400', '700'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rêve des Forêts',
  description: "Association de grimpe d'arbres et de spectacles perchés",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, 'flex flex-col min-h-screen')}>
        <div className="flex bg-primary p-3 items-center shadow-sm">
          <Image src={logo} alt="logo-rêve-des-forêts" width={80} height={80} />
          <div className="ml-4">
            <h1 className="text-2xl font-semibold">Rêve des Forêts</h1>
            <h3>Association de grimpe d'arbres</h3>
          </div>
        </div>
        {children}
        <div className="p-4 bg-primary flex flex-column items-center justify-between color-white">
          <div>Rêve des Forêts - 2024</div>
          <div className="flex flex-col items-end">
            <Link href="mailto:revedesforets@gmail.com">revedesforets@gmail.com</Link>
            <div>07 82 52 89 05</div>
            <Link href={FACEBOOK_URL}>Facebook</Link>
          </div>
        </div>
      </body>
    </html>
  )
}
