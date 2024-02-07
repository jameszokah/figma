'use client'
import LiveCursors from '@/components/cursor/liveCursors'
import { useMyPresence, useOthers } from '@/liveblocks.config'
import { CursorMode, CursorState, Presence, MyPresence } from '@/types/type'
import React, { useCallback, useEffect, useState } from 'react'
import Cursor from './cursor/cursor'
import CursorChat from './cursor/cursorChat'

type Cursor = {
    x: number,
    y: number

}

const Live = () => {

    const [cursorState, setCursorState] = useState<CursorState>({
        mode: CursorMode.Hidden
    })
    const others = useOthers()
    const [{cursor}, updateMyPresence] = useMyPresence() as MyPresence

    const onPointerMove = useCallback((e: React.PointerEvent) => {
        e.preventDefault()

        const x = e.clientX - e.currentTarget.getBoundingClientRect().x;
        const y = e.clientY - e.currentTarget.getBoundingClientRect().y;

        updateMyPresence({cursor: {x, y}} as Presence)
    }, [])

    const onPointerLeave = useCallback((e: React.PointerEvent) => {
        setCursorState({mode: CursorMode.Hidden});
        const x = e.clientX - e.currentTarget.getBoundingClientRect().x;
        const y = e.clientY - e.currentTarget.getBoundingClientRect().y;

        updateMyPresence({cursor: {x, y}} as Presence)
    }, [])

    const onPointerDown = useCallback((e: React.PointerEvent) => {

        const x = e.clientX - e.currentTarget.getBoundingClientRect().x;
        const y = e.clientY - e.currentTarget.getBoundingClientRect().y;

        updateMyPresence({cursor: {x, y}} as Presence)
    }, [])

    useEffect(() => {

        const handleKeUp = (e: KeyboardEvent) => {
            if(e.key === '/') {
                setCursorState({mode: CursorMode.Chat, previousMessage: null, message: ''})

            }
            else if(e.key === 'Escape') {
                setCursorState({mode: CursorMode.Hidden})
                updateMyPresence({massage: ''})
            }
        }

        const handleKeyDown = (e: KeyboardEvent) => {
            if(e.key === '/') {
                e.preventDefault()
            }
        }

        window.addEventListener('keyup', handleKeUp)
        window.addEventListener('keydown', handleKeyDown)

        return () => {
            window.removeEventListener('keyup', handleKeUp)
            window.removeEventListener('keydown', handleKeyDown)
        }

    }, [updateMyPresence, setCursorState]);
  return (
    <div
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
        onPointerDown={onPointerDown}
        className='w-full h-screen flex justify-center items-center'
        style={{height: '100vh', width: '100vw', position: 'relative'}}
    >
        {
            cursor && (
                <CursorChat 
                    cursor={cursor}
                    cursorState={cursorState}
                    setCursorState={setCursorState}
                    updateMyPresence={updateMyPresence}
                />
            )
        }
        <LiveCursors others={others} />
        <h1 className="text-white text-5xl">My Figma Clone </h1>
    </div>
  )
}

export default Live