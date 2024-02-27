import Image from 'next/image'
import treeTop from '@/public/pexels-felix-mittermeier-957024.jpeg'
import { Card, CardTitle } from '@/components/ui/card'

export default function Home() {
  return (
    <div className="relative flex-1 flex flex-col justify-center items-center w-screen p-8 md:p-16">
      <div className="absolute h-full w-full -z-10">
        <Image src={treeTop} placeholder="blur" fill style={{ objectFit: 'cover' }} alt="Grimpe d'arbres en hiver" />
      </div>
      <div className="flex flex-wrap w-full gap-y-16 gap-x-10 md:gap-x-36">
        <Card className="p-8 md:p-12 max-w-[500px] bg-primary border-0 flex flex-col justify-between">
          <div>
            <CardTitle>La grimpe d'arbre</CardTitle>
            <p className="mt-2">Une activité nature pour petits et grands qui aiment vivre de nouvelles aventures.</p>
            <p className="mt-2">
              Atteindre la cime pour admirer le monde, dormir dans les branches, danser dans les airs... et surtout
              rencontrer ces êtres majestueux que sont les arbres !
            </p>
          </div>
          <div className="mt-4">
            <CardTitle>Rêve des Forêts vous propose...</CardTitle>
            <p className="mt-2">Des ateliers initiations, des animations de séjour, des ateliers à thèmes...</p>
          </div>
          <div className="mt-4">
            <CardTitle>Contactez-nous !</CardTitle>
            <p className="mt-2">07 82 52 89 05</p>
            <p className="mt-2">90 Rue des Marseillais</p>
            <p> 38350 Susville</p>
          </div>
        </Card>
        <Card className="p-8 bg-primary border-0">
          <Image src="/suspendus.png" width={300} height={300} alt="funambules"></Image>
        </Card>
      </div>
    </div>
  )
}
