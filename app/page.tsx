import Link from 'next/link'

export default function Home() {
  return (
    <main className="bg-gray-800 flex min-h-screen flex-col items-center p-24 justify-center">

      <div className="relative flex place-items-center before:bg-gradient-radial before:blur-2xl after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl font-bold text-x1 items-center justify-center">
        <span className="font-bold text-6xl flex text-white">ASARINGO</span>
      </div>
      <p className={`mt-8 px-20 text-sm opacity-50 text-white group-hover:text-black`}>
        Hello! I am a brave hero who battles against villains, with love and courage as my only companions! I also reach out to those in need and cheer up crying children! Every day, I oversee the world<span>&apos;</span>s order from the sky, ensuring that no problems arise! My goal is to achieve world peace, and I long for the day when people can live every day with smiles on their faces! However, even I sometimes falter in the face of villains. They exploit my weakness, which is water, to weaken me. But that<span>&apos;</span>s not going to stop me. Everyone is rooting for my victory. I must adapt, change my tactics, and even alter my head to win. Today, as always, I rely on Ms. Batako<span>&apos;</span>s control and head out on patrol!
      </p>

      <div className="mb-32 flex text-center lg:mb-0 lg:grid-cols-4 lg:text-left bottom-0 pt-40">
        <Link href="/portfolio"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-200 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold text-white group-hover:text-black`}>
            Portfolio{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[40ch] text-xs opacity-50 text-white group-hover:text-black`}>
            If you really, truly want to view my portfolio, you can do so by clicking this link. However, only proceed if you are absolutely sure. If that<span>&apos;</span>s the case, please feel free to access the portfolio link.
          </p>
        </Link>
      </div>
    </main>
  )
}
