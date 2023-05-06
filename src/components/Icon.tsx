import { useState } from 'react'

import LogoIcon from './icons/Logo'
import ArrowIcon from './icons/Arrow'
import MoonIcon from './icons/Moon'
import NewWindowIcon from './icons/NewWindow'
import SearchIcon from './icons/Search'
import PlayIcon from './icons/Play'

interface SvgMap {
  [key: string]: React.FC<React.SVGProps<SVGSVGElement> & { stroke?: string }>;
}

interface IconProps {
  svg: keyof SvgMap;
  className?: string;
  stroke: string;
}

const svgs: SvgMap = {
  logo: LogoIcon,
  arrow: ArrowIcon,
  moon: MoonIcon,
  newWindow: NewWindowIcon,
  search: SearchIcon,
  play: PlayIcon
}

// TODO - add stroke, className and svg to props in icon components
// TODO - add fill='currentColor' to all icons



function Icon({ svg, className }: IconProps) {
  const SvgComponent = svgs[svg]

  if (!SvgComponent) {
    return <div>Invalid SVG</div>
  }
  
  return (
    <SvgComponent className={className} />
  )
}

export default Icon