import { cn } from "@/lib/utils"
import { forwardRef } from "react"

type AppCanvasProps = {
  ref: React.MutableRefObject<HTMLCanvasElement> | null
}

const AppCanvas = forwardRef<HTMLCanvasElement>( function AppCanvas({ }, ref) {
  return (
    <canvas id='canvas' ref={ref} className={cn("flex grow w-full backdrop-blur-[96.13656616210938px] bg-zinc-900 max-md:max-w-full")} />
  )
})

export default AppCanvas

