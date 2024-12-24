'use client'

import { useEffect, useRef } from 'react'

interface ProgressChartProps {
  progress: number
  title: string
}

export default function ProgressChart({ progress, title }: ProgressChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const size = 200
    canvas.width = size
    canvas.height = size

    // Calculate center and radius
    const centerX = size / 2
    const centerY = size / 2
    const radius = 80

    // Clear canvas
    ctx.clearRect(0, 0, size, size)

    // Draw background circle
    ctx.beginPath()
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI)
    ctx.strokeStyle = '#E2E8F0'
    ctx.lineWidth = 15
    ctx.stroke()

    // Draw progress arc
    if (progress > 0) {
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius, -Math.PI / 2, (-Math.PI / 2) + (2 * Math.PI * progress / 100))
      ctx.strokeStyle = '#4338CA'
      ctx.lineWidth = 15
      ctx.stroke()
    }

    // Draw center text
    ctx.fillStyle = '#4338CA'
    ctx.font = 'bold 32px Inter'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(`${progress.toFixed(1)}%`, centerX, centerY)

  }, [progress])

  return (
    <div className="flex flex-col items-center mb-6">
      <h2 className="text-2xl font-bold text-[#4338CA] mb-4">{title}</h2>
      <canvas ref={canvasRef} className="w-[200px] h-[200px]" />
      <p className="text-[#4338CA] mt-2">{progress.toFixed(1)}% Complete</p>
    </div>
  )
}

