import Footer from "@/components/Footer"
import Sidebar from "@/components/Sidebar"
import {Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize2} from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="flex items-center gap-5">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10"> Good afternoon</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-5">
              <a href="#" className="bg-white/5 rounded-md group overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors">
                <Image src="/Foo_Fighters_Wasting_Light_Album_Cover.jpg" width={104} height={104} alt="Foo Fighters Wasting Light Album Cover" />
                <strong>Wasting Light</strong>
                <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                  <Play />
                </button>
              </a>
              <a href="#" className="bg-white/5 rounded-md group overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors">
                <Image src="/pop-brazil.jpg" width={104} height={104} alt="Pop Brazil Album Cover" />
                <strong>Pop Brasil</strong>
                <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                  <Play />
                </button>
              </a>
              <a href="#" className="bg-white/5 rounded-md group overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors">
                <Image src="/Hiphop.jpg" width={104} height={104} alt="Hip Hop Album Cover" />
                <strong>Hip Hop</strong>
                <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                  <Play />
                </button>
              </a>
              <a href="#" className="bg-white/5 rounded-md group overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors">
                <Image src="/top-50-gllobal.jpg" width={104} height={104} alt="Top 50 Global Album Cover" />
                <strong>Top 50 Global</strong>
                <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                  <Play />
                </button>
              </a>
              <a href="#" className="bg-white/5 rounded-md group overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors">
                <Image src="/ed-playlist.jpg" width={104} height={104} alt="Ed Sheeran Playlist Album Cover" />
                <strong>Ed Sheeran Playlist</strong>
                <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                  <Play />
                </button>
              </a>
              <a href="#" className="bg-white/5 rounded-md group overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors">
                <Image src="/top50.jpg" width={104} height={104} alt="Top 50 Album Cover" />
                <strong>Top 50 Brazil</strong>
                <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                  <Play />
                </button>
              </a>
          </div>

          <h2 className="font-semibold text-2xl mt-10"> Made for Ricardo Gomes</h2>

          <div className="grid grid-cols-3 lg:grid-cols-5 gap-3 mt-5">
              <a href="#" className="bg-white/5 rounded-md p-3 hover:bg-white/10 flex flex-col gap-2 group transition-opacity">
                <Image src="/Foo_Fighters_Wasting_Light_Album_Cover.jpg" className="w-full rounded-md" width={200} height={200} alt="Foo Fighters Wasting Light Album Cover" />
                <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-3 -mt-16 invisible group-hover:visible">
                  <Play />
                </button>
                <strong className="font-semibold mt-2">Foo Fighters</strong>
                <div className="text-sm text-zinc-400">
                  Wallows, COIN, girl in red and more
                </div>
              </a>
              <a href="#" className="bg-white/5 rounded-md p-3 hover:bg-white/10 flex flex-col gap-2 group transition-opacity">
                <Image src="/red_hot_californication.jpg" className="w-full rounded-md" width={200} height={200} alt="Red Hot Californication Album Cover" />
                <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-3 -mt-16 invisible group-hover:visible">
                  <Play />
                </button>
                <strong className="font-semibold mt-2">Californication</strong>
                <div className="text-sm text-zinc-400">
                  Californication - Red Hot Chili Peppers
                </div>
              </a>
              <a href="#" className="bg-white/5 rounded-md p-3 hover:bg-white/10 flex flex-col gap-2 group transition-opacity">
                <Image src="/edsheeran.jpg" className="w-full rounded-md" width={200} height={200} alt="Ed Sheeran Album Cover" />
                <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-3 -mt-16 invisible group-hover:visible">
                  <Play />
                </button>
                <strong className="font-semibold mt-2">Ed Sheeran</strong>
                <div className="text-sm text-zinc-400">
                  Wallows, COIN, girl in red and more
                </div>
              </a>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
