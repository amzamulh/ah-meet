/**
 * Icon component for displaying icons with customizable corner type and fill type.
 *
 * @param {Object} props - The props for the icon component.
 * @param {string} props.cornerType -@default "rounded" - The type of corners for the icon. Options: "rectangle", "rounded", "roundedFull".
 * @param {string} props.type -@default "fill" - The type of fill for the icon. Options: "outline", "fill", "transparent".
 * @param {string} props.size -@default "medium" - The size of the icon. Options: "auto", "xsmall", "small", "medium", "large".
 * @param {string} props.iconColor- The color of the icon color 
 * @param {function} props.onClick- onClick function 
 */

// eslint-disable-next-line react/prop-types
const AhIcon=({children, cornerType='rounded', type='fill', size='medium', iconColor='', className='', onClick})=>{
    const cornerClasses = {
        rectangle: 'rounded-none',
        rounded: 'rounded-md',
        roundedFull: 'rounded-full',
      };
    
      const typeClasses = {
        outline: `border-[#252A41] border`,
        fill: `bg-[#252A41]`,
        transparent: 'bg-transparent'
      };
      const sizeClasses = {
        auto: 'w-auto h-auto shadow-none',
        xsmall: 'w-[1.5rem] h-[1.5rem]',
        small: 'w-[2rem] h-[2rem]',
        medium: 'w-[3rem] h-[3rem]',
        large: 'w-[4rem] h-[4rem]',
      };
    
      // Generate classes string
      const cornerClass = cornerClasses[cornerType] || '';
      const typeClass = typeClasses[type] || '';
      const sizeClass= sizeClasses[size] || '';
    
      // Combine classes for the final icon style
      const iconClasses = ` ${cornerClass} ${typeClass} ${sizeClass} flex justify-center items-center shadow-md ${className} relative ${iconColor}`;
    
      return <span onClick={onClick} className={iconClasses}>{children}</span>;
}

export default AhIcon;