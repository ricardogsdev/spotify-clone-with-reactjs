import {Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize2} from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-zinc-800 border-t border-zinc-700 py-5 px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/Foo_Fighters_Wasting_Light_Album_Cover.jpg" className="rounded-md" width={56} height={56} alt="Foo Fighters Wasting Light Album Cover" />
          <div className="flex flex-col">
            <a href="#" className="font-normal">Wasting Light</a>
            <span className="text-xs text-zinc-400">Foo Fighters</span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-6">
            <Shuffle size={20} className="text-green-400"/>
            <SkipBack size={20} className="text-zinc-200"/>

            <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black">
              <Play />
            </button>

            <SkipForward size={20} className="text-zinc-200"/>
            <Repeat size={20} className="text-zinc-200"/>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-400">0:31</span>
            <div className="h-1 rounded-full w-96 bg-zinc-700">
              <div className="bg-zinc-200 w-40 h-1"></div>
            </div>
            <span className="text-xs text-zinc-400">2:14</span>

          </div>
        </div>
        <div className="flex items-center gap-2">
            <Mic2 size={20} className="text-zinc-200"/>
            <LayoutList size={20} className="text-zinc-200"/>
            <Laptop2 size={20} className="text-zinc-200"/>
            <div  className="flex items-center gap-2">
              <Volume size={20} className="text-zinc-200"/>
              <div className="h-1 rounded-full w-24 bg-zinc-600">
                <div className="bg-zinc-200 w-10 h-1 rounded-full"></div>
              </div>
            </div>
            <Maximize2 size={20} className="text-zinc-200"/>
            
        </div>
      </footer>
  )
}
