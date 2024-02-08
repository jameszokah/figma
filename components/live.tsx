'use client'
import LiveCursors from '@/components/cursor/liveCursors'
import { useMyPresence, useOthers } from '@/liveblocks.config'
import { CursorMode, CursorState, Presence, MyPresence, Reaction } from '@/types/type'
import React, { useCallback, useEffect, useState } from 'react'
import Cursor from './cursor/cursor'
import CursorChat from './cursor/cursorChat'
import ReactionSelector from './reaction/reactionButton'
import FlyingReaction from './reaction/flyingReaction'
import useInterval from '@/hooks/useInterval'

type Cursor = {
    x: number,
    y: number

}

const Live = () => {

    const [cursorState, setCursorState] = useState<CursorState>({
        mode: CursorMode.Hidden
    })

    const [reaction, setReaction] = useState<Reaction[]>([])
    const others = useOthers()
    const [{cursor}, updateMyPresence] = useMyPresence() as MyPresence



    useInterval(() => {
        if(cursorState.mode === CursorMode.Reaction && cursorState.isPressed && cursor) {
            setReaction((reactions) => [...reactions, {value: cursorState.reaction, timestamp: Date.now(), point: {x: cursor.x, y: cursor.y}}])
        }
    }, 40)

    const setReactions = useCallback((reaction: string) => {
        setCursorState({mode: CursorMode.Reaction, reaction, isPressed: false})
    }, [setCursorState])

    const onPointerMove = useCallback((e: React.PointerEvent) => {
        e.preventDefault()

        if(cursor === null || cursorState.mode !== CursorMode.ReactionSelector) {
            
        const x = e.clientX - e.currentTarget.getBoundingClientRect().x;
        const y = e.clientY - e.currentTarget.getBoundingClientRect().y;

        updateMyPresence({cursor: {x, y}} as Presence)   
        }

    }, [])

    const onPointerLeave = useCallback((e: React.PointerEvent) => {
        
        const x = e.clientX - e.currentTarget.getBoundingClientRect().x;
        const y = e.clientY - e.currentTarget.getBoundingClientRect().y;

        updateMyPresence({cursor: {x, y}} as Presence)
        setCursorState((state) => cursorState.mode === CursorMode.Reaction ? {...state, isPressed: true} : {...state, mode: CursorMode.Hidden});

    }, [])

    const onPointerUp = useCallback((e: React.PointerEvent) => {
        setCursorState((state) => cursorState.mode === CursorMode.Reaction ? {...state, isPressed: true} : state)
    }, [cursorState.mode, setCursorState])

    const onPointerDown = useCallback((e: React.PointerEvent) => {

        const x = e.clientX - e.currentTarget.getBoundingClientRect().x;
        const y = e.clientY - e.currentTarget.getBoundingClientRect().y;

        updateMyPresence({cursor: {x, y}} as Presence)
    }, [cursorState.mode, setCursorState])

    useEffect(() => {

        const handleKeUp = (e: KeyboardEvent) => {
            if(e.key === '/') {
                setCursorState({mode: CursorMode.Chat, previousMessage: null, message: ''})

            }
            else if(e.key === 'Escape') {
                setCursorState({mode: CursorMode.Hidden})
                updateMyPresence({message: ''})
            }

            else if(e.key == 'e') {
                setCursorState({mode: CursorMode.ReactionSelector})
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
        onPointerUp={onPointerUp}
        onPointerDown={onPointerDown}
        className='w-full h-screen flex justify-center items-center'
        style={{height: '100vh', width: '100vw', position: 'relative'}}
    >
        {
            reaction.map((r, index) => (
                <FlyingReaction
                    key={r.timestamp.toString() + index.toString()}
                    x={r.point.x}
                    y={r.point.y}
                    timestamp={r.timestamp}
                    value={r.value}
                />
            ))
        }
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

        {
            cursorState.mode === CursorMode.ReactionSelector && (
                <ReactionSelector
                    setReaction={setReactions}

                        />
            )
        }
        <LiveCursors others={others} />
        <h1 className="text-white text-5xl">My Figma Clone </h1>
    </div>
  )
}

export default Live