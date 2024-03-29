 'use client'
import LiveCursors from '@/components/cursor/liveCursors'
import { useBroadcastEvent, useEventListener, useMyPresence, useOthers } from '@/liveblocks.config'
import { CursorMode, CursorState, Presence, MyPresence, Reaction, ReactionEvent, CustomFabricObject } from '@/types/type'
import React, { Suspense, forwardRef, useCallback, useEffect, useRef, useState } from 'react'
import CursorChat from './cursor/cursorChat'
import ReactionSelector from './reaction/reactionButton'
import FlyingReaction from './reaction/flyingReaction'
import useInterval from '@/hooks/useInterval'
import AppCanvas from '@/app/appCanvas'

type Cursor = {
    x: number,
    y: number

}

type LiveProp = {
    canvasRef: React.MutableRefObject<HTMLCanvasElement> | null
}

const Live = forwardRef<HTMLCanvasElement>( function Live({}, ref) {

    const [cursorState, setCursorState] = useState<CursorState>({
        mode: CursorMode.Hidden
    })

    const [reaction, setReaction] = useState<Reaction[]>([])
    const others = useOthers()
    const [{cursor}, updateMyPresence] = useMyPresence() as MyPresence

    const broadCast = useBroadcastEvent();



    useInterval(() => {
        if(cursorState.mode === CursorMode.Reaction && cursorState.isPressed && cursor) {
            setReaction((reactions) => [...reactions, {value: cursorState.reaction, timestamp: Date.now(), point: {x: cursor.x, y: cursor.y}}])
        

        broadCast({value: cursorState.reaction, x: cursor.x, y: cursor.y, timestamp: Date.now()})
        }
    }, 1000)

    useInterval(() => {
        setReaction((reactions) => {
            return reactions.filter((reaction) => {
                return reaction.timestamp > Date.now() - 4000
            })
        })
    }, 1000)

    useEventListener((eventData) => {
        const event = eventData.event as ReactionEvent

        setReaction((reactions) => [...reactions, {value: event.value, timestamp: Date.now(), point: {x: event.x, y: event.y}}])
        
    })

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
        className='w-[64%]'
        // style={{height: '100vh', width: '100vw', position: 'relative'}}
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
        <Suspense fallback={<div>Loading.....</div>}>
            <AppCanvas ref={ref} />
        </Suspense>
    </div>
  )
}
)
export default Live