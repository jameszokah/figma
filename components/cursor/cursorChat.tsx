import CursorSVG from "@/public/assets/CursorSVG"
import { CursorChatProps, CursorMode } from "@/types/type"
import { useCallback } from "react"

const CursorChat = ({cursor, cursorState, setCursorState, updateMyPresence}: CursorChatProps) => {

    const handleChangle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCursorState({
            ...cursorState,
             mode: CursorMode.Chat,
             previousMessage: null,
               message: e.target.value,
            })
            updateMyPresence({message: e.target.value})
        
    }

    const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter') {
            if (cursorState.mode === CursorMode.Chat) {
            updateMyPresence({cursor: cursor, message: cursorState.message})
            setCursorState({...cursorState, previousMessage: cursorState.message, message: '', mode: CursorMode.Chat})
            }
        
        }
        else if(e.key === 'Escape') {
            setCursorState({...cursorState, mode: CursorMode.Hidden})
        }

    }, [])
  return (
    <div className="absolute z-[9999] top-0 left-0"
        style={{
            transform: `translate(${cursor.x}px, ${cursor.y}px)`
        
        }}
    >
        {cursorState.mode === CursorMode.Chat && (
            <>
            <CursorSVG color="#000" />

            <div className="absolute top-5 left-2 bg-blue-500 leading-relaxed text-white px-4 py-2 text-sm rounded-full shadow-md"
                onKeyUp={(e) => e.stopPropagation()}
            >
                
                {cursorState.previousMessage && (
                    <div>
                        {cursorState.previousMessage}s
                    </div>
                )}
                <input
                    className="bg-transparent outline-none border-none text-white w-40 placeholder-blue-300 "
                    value={cursorState.message}
                    onChange={handleChangle}
                    autoFocus
                    onKeyDown={handleKeyDown}
                    placeholder={cursorState.previousMessage ? 'Enter to send' : 'Type a message'}
                    
                />
            </div>
            </>
        
        )} 
    </div>
  )
}

export default CursorChat