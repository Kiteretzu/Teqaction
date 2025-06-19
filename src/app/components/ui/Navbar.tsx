"use client"
import { cn } from "@/lib/utils"
import { IconMenu2, IconX } from "@tabler/icons-react"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import React, { useRef, useState } from "react"

interface NavbarProps {
  children: React.ReactNode
  className?: string
}

interface NavBodyProps {
  children: React.ReactNode
  className?: string
  visible?: boolean
}

interface NavItemsProps {
  items: {
    name: string
    link: string
  }[]
  className?: string
  onItemClick?: () => void
}

interface MobileNavProps {
  children: React.ReactNode
  className?: string
  visible?: boolean
}

interface MobileNavHeaderProps {
  children: React.ReactNode
  className?: string
}

interface MobileNavMenuProps {
  children: React.ReactNode
  className?: string
  isOpen: boolean
  onClose: () => void
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const [visible, setVisible] = useState<boolean>(true) // Start visible
  const [isScrolling, setIsScrolling] = useState<boolean>(false)
  const [isAtTop, setIsAtTop] = useState<boolean>(true) // Start at top
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useMotionValueEvent(scrollY, "change", (latest) => {
    const atTop = latest < 50 // Consider "at top" if within 50px of top
    setIsAtTop(atTop)

    if (atTop) {
      // At top: always show in initial state
      setVisible(true)
      setIsScrolling(false)
      // Clear any existing timeout when at top
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    } else {
      // Not at top: show only when actively scrolling
      if (!isScrolling) {
        setIsScrolling(true)
        setVisible(true)
      }

      // Clear existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }

      // Set timeout to hide navbar when scrolling stops (only if not at top)
      scrollTimeoutRef.current = setTimeout(() => {
        // Double check we're still not at top before hiding
        if (scrollY.get() >= 50) {
          setIsScrolling(false)
          setVisible(false)
        }
      }, 3000) // Increased timeout to 3000ms for longer visibility
    }
  })

  React.useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [])

  return (
    <motion.div ref={ref} className={cn("fixed inset-x-0 top-0 z-50 w-full", className)}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child as React.ReactElement<{ visible?: boolean; isAtTop?: boolean }>, {
              visible,
              isAtTop,
            })
          : child,
      )}
    </motion.div>
  )
}

export const NavBody = ({ children, className, visible, isAtTop }: NavBodyProps & { isAtTop?: boolean }) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible && !isAtTop ? "blur(16px)" : "none",
        boxShadow:
          visible && !isAtTop
            ? "0 0 32px rgba(0, 0, 0, 0.4), 0 8px 32px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.05), 0 4px 16px rgba(0, 0, 0, 0.3), 0 16px 68px rgba(0, 0, 0, 0.15), 0 1px 0 rgba(255, 255, 255, 0.05) inset"
            : "none",
        width: visible && !isAtTop ? "40%" : "100%",
        y: visible && !isAtTop ? 20 : 0,
        opacity: visible ? 1 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 30,
        mass: 0.8,
        duration: 0.4,
      }}
      style={{
        minWidth: "800px",
      }}
      className={cn(
        "relative z-[60] mx-auto hidden w-full  max-w-7xl flex-row items-center justify-between self-start rounded-full bg-transparent px-4 py-2 lg:flex",
        visible && !isAtTop && "bg-gray-800/90 border border-gray-700/50",
        className,
      )}
    >
      {children}
    </motion.div>
  )
}

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-gray-300 transition-all duration-300 hover:text-white lg:flex lg:space-x-2",
        className,
      )}
    >
      {items.map((item, idx) => (
        <a
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className="relative px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200"
          key={`link-${idx}`}
          href={item.link}
        >
          {hovered === idx && (
            <motion.div
              layoutId="hovered"
              className="absolute inset-0 h-full w-full rounded-full bg-gray-700/60 border border-gray-600/30"
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
              }}
            />
          )}
          <span className="relative z-20">{item.name}</span>
        </a>
      ))}
    </motion.div>
  )
}

export const MobileNav = ({ children, className, visible, isAtTop }: MobileNavProps & { isAtTop?: boolean }) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible && !isAtTop ? "blur(16px)" : "none",
        boxShadow:
          visible && !isAtTop
            ? "0 0 32px rgba(0, 0, 0, 0.4), 0 8px 32px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.05), 0 4px 16px rgba(0, 0, 0, 0.3), 0 16px 68px rgba(0, 0, 0, 0.15), 0 1px 0 rgba(255, 255, 255, 0.05) inset"
            : "none",
        width: visible && !isAtTop ? "90%" : "100%",
        paddingRight: visible && !isAtTop ? "12px" : "0px",
        paddingLeft: visible && !isAtTop ? "12px" : "0px",
        borderRadius: visible && !isAtTop ? "12px" : "2rem",
        y: visible && !isAtTop ? 20 : 0,
        opacity: visible ? 1 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 30,
        mass: 0.8,
        duration: 0.4,
      }}
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-transparent px-0 py-2 lg:hidden",
        visible && !isAtTop && "bg-gray-800/90 border border-gray-700/50",
        className,
      )}
    >
      {children}
    </motion.div>
  )
}

export const MobileNavHeader = ({ children, className }: MobileNavHeaderProps) => {
  return <div className={cn("flex w-full flex-row items-center justify-between", className)}>{children}</div>
}

export const MobileNavMenu = ({ children, className, isOpen, onClose }: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25,
            duration: 0.3,
          }}
          className={cn(
            "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-gray-800/95 border border-gray-700/50 px-4 py-8 shadow-[0_0_32px_rgba(0,_0,_0,_0.4),_0_8px_32px_rgba(0,_0,_0,_0.2),_0_0_0_1px_rgba(255,_255,_255,_0.05),_0_4px_16px_rgba(0,_0,_0,_0.3),_0_16px_68px_rgba(0,_0,_0,_0.15),_0_1px_0_rgba(255,_255,_255,_0.05)_inset] backdrop-blur-md",
            className,
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean
  onClick: () => void
}) => {
  return (
    <motion.div
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {isOpen ? (
        <IconX className="text-white hover:text-gray-300 transition-colors duration-200 cursor-pointer" onClick={onClick} />
      ) : (
        <IconMenu2 className="text-white hover:text-gray-300 transition-colors duration-200 cursor-pointer" onClick={onClick} />
      )}
    </motion.div>
  )
}

export const NavbarLogo = () => {
  return (
    <a href="#" className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal">
      <img src="https://assets.aceternity.com/logo-dark.png" alt="logo" width={30} height={30} />
      <span className="font-medium text-white">Teqaction</span>
    </a>
  )
}

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}: {
  href?: string
  as?: React.ElementType
  children: React.ReactNode
  className?: string
  variant?: "primary" | "secondary" | "dark" | "gradient"
} & (React.ComponentPropsWithoutRef<"a"> | React.ComponentPropsWithoutRef<"button">)) => {
  const baseStyles =
    "px-4 py-2 rounded-md text-sm font-bold relative cursor-pointer transition-all duration-200 inline-block text-center"

  const variantStyles = {
    primary:
      "bg-white text-gray-900 hover:bg-gray-100 hover:-translate-y-0.5 shadow-[0_0_20px_rgba(255,_255,_255,_0.1),_0_4px_16px_rgba(255,_255,_255,_0.1),_0_0_0_1px_rgba(255,_255,_255,_0.1),_0_2px_8px_rgba(255,_255,_255,_0.05),_0_8px_32px_rgba(255,_255,_255,_0.05),_0_1px_0_rgba(255,_255,_255,_0.2)_inset]",
    secondary: "bg-transparent text-gray-300 hover:text-white border border-gray-600 hover:border-gray-500 hover:-translate-y-0.5",
    dark: "bg-gray-800 text-white hover:bg-gray-700 hover:-translate-y-0.5 shadow-[0_0_20px_rgba(0,_0,_0,_0.3),_0_4px_16px_rgba(0,_0,_0,_0.2),_0_0_0_1px_rgba(255,_255,_255,_0.05),_0_2px_8px_rgba(0,_0,_0,_0.2),_0_8px_32px_rgba(0,_0,_0,_0.1),_0_1px_0_rgba(255,_255,_255,_0.05)_inset]",
    gradient:
      "bg-gradient-to-b from-blue-500 to-blue-700 text-white hover:from-blue-400 hover:to-blue-600 hover:-translate-y-0.5 shadow-[0px_2px_0px_0px_rgba(255,255,255,0.2)_inset,_0_4px_16px_rgba(59,_130,_246,_0.3)]",
  }

  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      <Tag href={href || undefined} className={cn(baseStyles, variantStyles[variant], className)} {...props}>
        {children}
      </Tag>
    </motion.div>
  )
}