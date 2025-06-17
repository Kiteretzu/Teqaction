"use client"

import type { ReactNode } from "react"
import { useState, useEffect, useRef } from "react"

interface GridPoint {
  x: number
  y: number
  active: boolean
  intensity: number
}

interface InteractiveGridProps {
  children?: ReactNode
}

export default function InteractiveGrid({ children }: InteractiveGridProps) {
  const [gridPoints, setGridPoints] = useState<GridPoint[]>([])
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const points: GridPoint[] = []
    const gridSize = 40
    const cols = Math.ceil(window.innerWidth / gridSize)
    const rows = Math.ceil(window.innerHeight / gridSize)

    for (let i = 0; i <= cols; i++) {
      for (let j = 0; j <= rows; j++) {
        points.push({
          x: i * gridSize,
          y: j * gridSize,
          active: false,
          intensity: 0,
        })
      }
    }
    setGridPoints(points)
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (rect) {
      const mouseX = e.clientX - rect.left
      const mouseY = e.clientY - rect.top
      setMousePos({ x: mouseX, y: mouseY })

      setGridPoints((prev) =>
        prev.map((point) => {
          const distance = Math.sqrt(Math.pow(point.x - mouseX, 2) + Math.pow(point.y - mouseY, 2))
          const maxDistance = 120
          const intensity = Math.max(0, 1 - distance / maxDistance)
          return {
            ...point,
            active: distance < maxDistance,
            intensity,
          }
        }),
      )
    }
  }

  return (
    <>
    <div
      ref={containerRef}
      className="min-h-screen  bg-gradient-to-t from-black via-gray-900 to-black relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Animated SVG Background */}
      <div className="absolute  inset-0  pointer-events-none">
        <svg className="w-full h-full" style={{ minHeight: "100vh", minWidth: "100vw" }}>
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="rgba(59, 130, 246, 0.08)"
                strokeWidth="0.5"
                strokeDasharray="2,2"
              />
            </pattern>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="gentleGlow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <radialGradient id="bubbleEffect" cx="50%" cy="50%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.15)" />
              <stop offset="70%" stopColor="rgba(59, 130, 246, 0.08)" />
              <stop offset="100%" stopColor="rgba(59, 130, 246, 0.02)" />
            </radialGradient>
          </defs>

          <rect width="100%" height="100%" fill="url(#grid)" />

          {gridPoints.map(
            (point, index) =>
              point.active && (
                <g key={index}>
                  <line
                    x1={Math.max(0, point.x - 80)}
                    y1={point.y}
                    x2={Math.min(window.innerWidth, point.x + 80)}
                    y2={point.y}
                    stroke={`rgba(34, 197, 94, ${point.intensity * 0.4})`}
                    strokeWidth={Math.max(0.5, 1.5 * point.intensity)}
                    filter="url(#glow)"
                    strokeLinecap="round"
                  />
                  <line
                    x1={point.x}
                    y1={Math.max(0, point.y - 80)}
                    x2={point.x}
                    y2={Math.min(window.innerHeight, point.y + 80)}
                    stroke={`rgba(34, 197, 94, ${point.intensity * 0.4})`}
                    strokeWidth={Math.max(0.5, 1.5 * point.intensity)}
                    filter="url(#glow)"
                    strokeLinecap="round"
                  />
                  <circle
                    cx={point.x}
                    cy={point.y}
                    r={Math.max(1, 2.5 * point.intensity)}
                    fill={`rgba(59, 130, 246, ${point.intensity * 0.5})`}
                    filter="url(#gentleGlow)"
                  >
                    <animate
                      attributeName="r"
                      values={`${1.5 * point.intensity};${3 * point.intensity};${1.5 * point.intensity}`}
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle
                    cx={point.x}
                    cy={point.y}
                    r={Math.max(0.5, 4 * point.intensity)}
                    fill="none"
                    stroke={`rgba(168, 85, 247, ${point.intensity * 0.2})`}
                    strokeWidth="0.5"
                    filter="url(#glow)"
                  >
                    <animate
                      attributeName="r"
                      values={`${4 * point.intensity};${6 * point.intensity};${4 * point.intensity}`}
                      dur="3s"
                      repeatCount="indefinite"
                    />
                    <animate attributeName="stroke-opacity" values="0.2;0.05;0.2" dur="3s" repeatCount="indefinite" />
                  </circle>
                </g>
              ),
          )}

          <circle
            cx={mousePos.x}
            cy={mousePos.y}
            r="35"
            fill="url(#bubbleEffect)"
            opacity="0.3"
            filter="url(#gentleGlow)"
          >
            <animate attributeName="r" values="35;45;35" dur="4s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.3;0.15;0.3" dur="4s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>

      {/* Content goes here */}
      <div className="relative z-10">{children}</div>
    </div>
    
    </>
  )
}
