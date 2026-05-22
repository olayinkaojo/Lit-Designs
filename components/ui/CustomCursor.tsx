'use client'

import { useEffect, useRef, useCallback } from 'react'
import { lerp } from '@/lib/utils'

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  const mouse = useRef({ x: -100, y: -100 })
  const ring = useRef({ x: -100, y: -100 })
  const rafId = useRef<number>(0)

  const onMouseMove = useCallback((e: MouseEvent) => {
    mouse.current = { x: e.clientX, y: e.clientY }
  }, [])

  const onMouseEnterInteractive = useCallback(() => {
    ringRef.current?.classList.add('hovered')
  }, [])

  const onMouseLeaveInteractive = useCallback(() => {
    ringRef.current?.classList.remove('hovered')
  }, [])

  const onMouseDown = useCallback(() => {
    ringRef.current?.classList.add('clicking')
  }, [])

  const onMouseUp = useCallback(() => {
    ringRef.current?.classList.remove('clicking')
  }, [])

  const onMouseLeaveWindow = useCallback(() => {
    if (dotRef.current) dotRef.current.style.opacity = '0'
    if (ringRef.current) ringRef.current.style.opacity = '0'
  }, [])

  const onMouseEnterWindow = useCallback(() => {
    if (dotRef.current) dotRef.current.style.opacity = '1'
    if (ringRef.current) ringRef.current.style.opacity = '1'
  }, [])

  useEffect(() => {
    // Don't render on touch devices
    if (window.matchMedia('(hover: none)').matches) return

    const animate = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouse.current.x}px, ${mouse.current.y}px) translate(-50%, -50%)`
      }

      ring.current.x = lerp(ring.current.x, mouse.current.x, 0.12)
      ring.current.y = lerp(ring.current.y, mouse.current.y, 0.12)

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px) translate(-50%, -50%)`
      }

      rafId.current = requestAnimationFrame(animate)
    }

    rafId.current = requestAnimationFrame(animate)

    window.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mousedown', onMouseDown)
    document.addEventListener('mouseup', onMouseUp)
    document.addEventListener('mouseleave', onMouseLeaveWindow)
    document.addEventListener('mouseenter', onMouseEnterWindow)

    const attachInteractiveListeners = () => {
      const interactives = document.querySelectorAll<HTMLElement>(
        'a, button, [data-cursor-hover], input, textarea, select, label'
      )
      interactives.forEach((el) => {
        el.addEventListener('mouseenter', onMouseEnterInteractive)
        el.addEventListener('mouseleave', onMouseLeaveInteractive)
      })
    }

    attachInteractiveListeners()

    // Re-attach on DOM mutations (for dynamic content)
    const observer = new MutationObserver(attachInteractiveListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      cancelAnimationFrame(rafId.current)
      window.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mousedown', onMouseDown)
      document.removeEventListener('mouseup', onMouseUp)
      document.removeEventListener('mouseleave', onMouseLeaveWindow)
      document.removeEventListener('mouseenter', onMouseEnterWindow)
      observer.disconnect()
    }
  }, [onMouseMove, onMouseDown, onMouseUp, onMouseLeaveWindow, onMouseEnterWindow, onMouseEnterInteractive, onMouseLeaveInteractive])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  )
}
