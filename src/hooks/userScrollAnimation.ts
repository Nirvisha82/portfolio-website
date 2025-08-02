// hooks/useScrollAnimation.ts
import { useEffect, useState, useRef } from 'react'

interface ScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
  staggerDelay?: number
}

export function useScrollAnimation(
  options: ScrollAnimationOptions = {}
) {
  const {
    threshold = 0.15, // Consistent threshold across all components
    rootMargin = '0px 0px -50px 0px', // Trigger slightly before element is fully visible
    triggerOnce = true, // Prevent disappearing on scroll up
    staggerDelay = 100
  } = options

  const [isVisible, setIsVisible] = useState(false)
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const elementRef = useRef<HTMLElement | null>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Don't disconnect if triggerOnce is false
          if (triggerOnce && observerRef.current) {
            observerRef.current.disconnect()
          }
        } else if (!triggerOnce) {
          setIsVisible(false)
          setVisibleItems([]) // Reset staggered items when not visible
        }
      },
      { 
        threshold, 
        rootMargin 
      }
    )

    observerRef.current = observer
    
    // Auto-detect element if no ref provided
    const element = elementRef.current || document.querySelector(`[data-scroll-section]`)
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [threshold, rootMargin, triggerOnce])

  // Staggered animation for multiple items
  const triggerStaggeredAnimation = (itemCount: number, customDelay?: number) => {
    if (!isVisible) return

    const delay = customDelay || staggerDelay
    
    // Clear existing items
    setVisibleItems([])
    
    // Add items one by one with stagger
    for (let i = 0; i < itemCount; i++) {
      setTimeout(() => {
        setVisibleItems(prev => [...prev, i])
      }, i * delay)
    }
  }

  return {
    isVisible,
    visibleItems,
    elementRef,
    triggerStaggeredAnimation,
    // Helper function to get consistent animation classes
    getAnimationClasses: (index?: number, customDelay?: number) => {
      const baseDelay = customDelay || (index !== undefined ? index * staggerDelay : 0)
      return {
        base: `transition-all duration-700 ease-out`,
        visible: 'opacity-100 translate-y-0 translate-x-0',
        hidden: 'opacity-0 translate-y-8',
        style: {
          transitionDelay: `${baseDelay}ms`
        }
      }
    }
  }
}

// Specialized hook for staggered list animations
export function useStaggeredAnimation(
  itemCount: number,
  options: ScrollAnimationOptions = {}
) {
  const animation = useScrollAnimation(options)

  useEffect(() => {
    if (animation.isVisible && itemCount > 0) {
      animation.triggerStaggeredAnimation(itemCount)
    }
  }, [animation.isVisible, itemCount])

  return animation
}