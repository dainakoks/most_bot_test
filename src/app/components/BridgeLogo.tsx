import svgPaths from "../../imports/svg-hceghxyxfv";

interface BridgeLogoProps {
  color?: 'red' | 'blue' | 'white' | 'black';
  size?: 'sm' | 'md' | 'lg';
}

export default function BridgeLogo({ color = 'red', size = 'md' }: BridgeLogoProps) {
  const fillColor = 
    color === 'red' ? '#DA1F25' : 
    color === 'blue' ? '#96C1D1' : 
    color === 'black' ? 'black' :
    'white';
  
  const sizeClasses = {
    sm: 'h-[40px] w-[36px]',
    md: 'h-[70px] w-[63px]',
    lg: 'h-[100px] w-[90px]'
  };

  return (
    <div className={sizeClasses[size]}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 772 866">
        <g>
          <g>
            <path d={svgPaths.pc001800} fill={fillColor} />
            <path d={svgPaths.p85dd200} fill={fillColor} />
          </g>
          <path d={svgPaths.p33bf2f00} fill={fillColor} />
          <path d={svgPaths.p210b5200} fill={fillColor} />
          <path d={svgPaths.p3ea4b0c0} fill={fillColor} />
          <path d={svgPaths.pc7c7700} fill={fillColor} />
          <path d={svgPaths.p525f3f0} fill={fillColor} />
          <path d={svgPaths.p30812e00} fill={fillColor} />
        </g>
      </svg>
    </div>
  );
}
