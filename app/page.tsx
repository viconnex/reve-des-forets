import Image from 'next/image'
import treeTop from '@/public/pexels-felix-mittermeier-957024.jpeg'

export default function Home() {
  return (
    <div className="relative flex-1 flex flex-col justify-center items-center w-screen p-8 md:p-12">
      <div className="absolute h-full w-full -z-10">
        <Image
          src={treeTop}
          placeholder="blur"
          fill
          style={{ objectFit: 'cover' }}
          priority
          alt="Grimpe d'arbres en hiver"
        />
      </div>
      <div className="flex flex-col w-full justify-center items-center">
        <Image
          className="border-black border-2"
          src="/leaflet_2024/activities.jpeg"
          width={600}
          height={1000}
          alt="brochure-activités"
        />
        <Image
          className="border-black border-2 mt-8"
          src="/leaflet_2024/program_spring.jpeg"
          width={600}
          height={1000}
          alt="brochure-programme-printemps"
        />
      </div>
    </div>
  )
}
