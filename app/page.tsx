'use client';

import Live from "@/components/live";
import Navbar from "./navbar";
import LeftSidebar from "./leftSidebar";
import RightSidebar from "./rightSidebar";
import { fabric } from 'fabric'
import { useEffect, useRef } from "react";
import { handleCanvasMouseDown, handleResize, initializeFabric } from "@/lib/canvas";

export default function Page() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const fabricRef = useRef<fabric.Canvas | null>(null)
    const isDrawing = useRef<boolean>(false)
    const shapeRef = useRef<fabric.Object | null>(null)
    const selectedShapeRef = useRef<string | null>('rectangle')

    

    useEffect(() => {


      if (canvasRef.current) {

        const canvas = initializeFabric({fabricRef, canvasRef})

        canvas.on('mouse:down', (options) => {
          handleCanvasMouseDown({
            options,
            canvas, 
            isDrawing,
            shapeRef,
            selectedShapeRef
          });
  
        })

      }

      function pageResize() {
        handleResize({
          canvas: fabricRef.current,
        });
      }

      window.addEventListener("resize", pageResize);

      return () => {
        window.removeEventListener("resize", pageResize);

      }
      }, [])

  return (
      <main className="flex flex-col h-screen overflow-hidden">
        <Navbar />
        <section className="flex max-md:gap-0 w-full max-md:max-w-full">
        
          <LeftSidebar />
          <Live ref={canvasRef} />
          <RightSidebar />
        </section>
        
      </main>
  );
}