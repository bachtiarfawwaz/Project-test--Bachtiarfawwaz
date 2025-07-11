"use client"

import { useEffect, useRef } from "react"

interface BannerProps {
  imageUrl?: string
  title?: string
  subtitle?: string
  overlayOpacity?: number
  sketchOpacity?: number
}

export default function Banner({
  imageUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-bw2BXT6VjtJ34gm78YLwF1R8YxD0x0.png',
  title = 'Ideas',
  subtitle = 'Where all our great things begin',
  overlayOpacity = 0.5,
  sketchOpacity = 0.2
}: BannerProps) {
  const bannerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!bannerRef.current || !imageRef.current || !textRef.current) return

      const bannerTop = bannerRef.current.getBoundingClientRect().top
      const bannerHeight = bannerRef.current.offsetHeight
      
      // Only animate when banner is in view
      if (bannerTop < window.innerHeight && bannerTop > -bannerHeight) {
        const scrolled = window.pageYOffset
        const parallaxSpeed = 0.4
        
        // More natural parallax effect with easing
        const imageOffset = scrolled * parallaxSpeed * 0.7
        const textOffset = scrolled * 0.2
        
        imageRef.current.style.transform = `translateY(${imageOffset}px)`
        textRef.current.style.transform = `translateY(${textOffset}px)`
        
        // Fade effect as user scrolls
        const opacity = 1 - Math.min(Math.abs(bannerTop) / (bannerHeight * 0.5), 1)
        textRef.current.style.opacity = `${opacity}`
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section ref={bannerRef} className="relative h-[80vh] min-h-[400px] max-h-[800px] overflow-hidden bg-gray-800">
      {/* Background Image with Parallax */}
      <div
        ref={imageRef}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-300 ease-out"
        style={{
          backgroundImage: `url('${imageUrl}')`,
          backgroundBlendMode: "overlay",
          willChange: 'transform'
        }}
      >
        {/* Customizable Overlay */}
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundColor: `rgba(0,0,0,${overlayOpacity})`,
            background: `linear-gradient(to bottom, rgba(0,0,0,${overlayOpacity * 0.8}) 0%, rgba(0,0,0,${overlayOpacity * 0.4}) 100%)`
          }} 
        />

        {/* Sketched elements overlay - now customizable */}
        <div className="absolute inset-0" style={{ opacity: sketchOpacity }}>
          <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
            <path d="M100 100 Q200 50 300 100 T500 100" stroke="white" strokeWidth="2" fill="none" />
            <circle cx="800" cy="150" r="30" stroke="white" strokeWidth="2" fill="none" />
            <path d="M900 80 L950 130 L900 180 L850 130 Z" stroke="white" strokeWidth="2" fill="none" />
            <path d="M200 250 Q300 200 400 250 T600 250" stroke="white" strokeWidth="2" fill="none" />
            <path d="M700 400 L800 350 L900 400 L800 450 Z" stroke="white" strokeWidth="1.5" fill="none" />
            <path d="M400 500 Q500 450 600 500 T800 500" stroke="white" strokeWidth="1" fill="none" />
          </svg>
        </div>
      </div>

      {/* Content with Parallax */}
      <div 
        ref={textRef} 
        className="relative z-10 flex items-center justify-center h-full transition-all duration-300 ease-out"
        style={{ willChange: 'transform, opacity' }}
      >
        <div className="text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl opacity-90 font-light max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Diagonal Bottom Edge - now with smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 lg:h-40">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="w-full h-full fill-white"
        >
          <path d="M0,120 L1200,120 L1200,0 C800,60 400,80 0,60 Z" />
        </svg>
      </div>
    </section>
  )
}