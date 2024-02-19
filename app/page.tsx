import Image from 'next/image'
import winterClimb from '@/public/winter_climb.jpeg'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Home() {
  return (
    <div className="relative flex flex-col justify-center items-center h-screen w-screen -mt-[104px] h-full p-8 md:p-16">
      <div className="absolute h-full w-full -z-10">
        <Image
          src={winterClimb}
          placeholder="blur"
          quality={100}
          fill
          style={{ objectFit: 'cover' }}
          alt="Grimpe d'arbres en hiver"
        />
      </div>
      <Card className="p-4 md:p-8 max-w-[450px]">
        <CardHeader>
          <CardTitle>Admirer le monde</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Une activité nature pour petits et grands qui aiment vivre de nouvelles aventures.</p>
          <p className="mt-2">
            Atteindre la cime, dormir dans les branches, danser dans les airs, rencontrer des êtres majestueux.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
