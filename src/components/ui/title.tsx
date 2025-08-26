import { ReactNode } from 'react'

interface TitleProps {
  children: ReactNode
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  size?: 'small' | 'medium' | 'large' | 'xl'
  className?: string
  textAlign?: 'left' | 'center' | 'right'
}

export const Title = ({ 
  children, 
  as: Component = 'h2',
  size = 'medium',
  className = '',
  textAlign = 'left'
}: TitleProps) => {
    
  const sizeClasses = {
    small: 'text-[20px] md:text-[24px] font-[590] leading-[120%] mb-4',
    medium: 'text-[26px] md:text-[40px] font-[590] leading-none md:leading-[108%] mb-6',
    large: 'text-[32px] md:text-[48px] font-[700] leading-none md:leading-[108%] mb-8',
    xl: 'text-[40px] md:text-[64px] font-[700] leading-none md:leading-[100%] mb-10'
  }
  
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  }

  return (
    <Component 
      className={`text-title ${sizeClasses[size]} ${alignClasses[textAlign]} ${className}`}
    >
      {children}
    </Component>
  )
}