/**
 * Button component for displaying Buttons with customizable corner type and fill type.
 *
 * @param {Object} props - The props for the Button component.
 * @param {string} props.cornerType -@default "rounded" - The type of corners for the Button. Options: "rectangle", "rounded", "roundedFull".
 * @param {string} props.type -@default "fill" - The type of fill for the Button. Options: "outline", "fill".
 * @param {string} props.alignment -@default "inline" - The alignment of the Button. Options: "inline" "full".
 * @param {string} props.textType -@default "capitalize" - The Text Transform of the Button. Options: "capitalize" "uppercase".
 * @param {string} props.className- Add Custom classess
 * @param {function} props.onClick- onClick function 
 */

// eslint-disable-next-line react/prop-types
const AhButton = ({children, cornerType='rounded', type='fill', alignment='inline', textType='capitalize', className, onClick})=>{
  const cornerClasses = {
      rectangle: 'rounded-none',
      rounded: 'rounded-md',
      roundedFull: 'rounded-full',
    };
  
    const typeClasses = {
      outline: `border-[#0E78F9] border`,
      fill: `bg-[#0E78F9]`,
    };
    const alignmentClasses={
      full: 'w-full flex',
      inline:'inline-flex',
    }
    const TextTypeClassed={
      uppercase: 'uppercase',
      capitalize: 'capitalize'

    }
   
    // Generate classes string
    const cornerClass = cornerClasses[cornerType] || '';
    const typeClass = typeClasses[type] || '';
    const alignmentClass = alignmentClasses[alignment] || '';
    const TextTypeClass = TextTypeClassed[textType] || '';
  
    // Combine classes for the final Button style
    const iconClasses = ` ${cornerClass} ${typeClass} ${alignmentClass} ${TextTypeClass}  text-md tracking-wider py-2 my-4 px-4 justify-center items-center shadow-md gap-2 ${className}`;
  
    return <button onClick={onClick} className={iconClasses}>{children}</button>;
};

export default AhButton;
