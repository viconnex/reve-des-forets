import Image from 'next/image'
import winterClimb from '@/public/winter_climb.jpeg'

export default function Home() {
  return (
    <div className="relative h-full">
      <div className="relative h-screen w-screen -mt-[104px] -z-10">
        <Image
          src={winterClimb}
          placeholder="blur"
          quality={100}
          fill
          style={{ objectFit: 'cover' }}
          alt="Grimpe d'arbre en hiver"
        />
      </div>
      <div></div>
    </div>
  )
}
