import CursorSVG from "@/public/assets/CursorSVG"

type CursorProps = {
    color: string,
    x: number,
    y: number,
    message: string | undefined;
    }


const Cursor = ({color, x, y, message}: CursorProps) => {
  return (
    <div className="pointer-events-none absolute top-0 left-0"
        style={{
            transform: `translate(${x}px, ${y}px)`
        }}
    >
        <CursorSVG color={color} />

        {/* message */}
        {message && (
            <div className={`absolute top-5 left-2 leading-relaxed text-white px-4 py-2 text-sm rounded-full shadow-md min-w-max`}
              style={{backgroundColor: color}}
            >
                <p className="text-white whitespace-nowrap">{message}</p>
            </div>
        )}
    </div>
  )
}

export default Cursor