import { useEffect, useState } from "react";

/**
 * Badge component for displaying a count with optional threshold.
 * @param {Object} props - The props for the badge component.
 * @param {number} [props.number=0] - The count to display.
 * @param {number} [props.greaterThan=99] - The threshold value for displaying count with '+'. If count exceeds this value, display `${greaterThan}+`.
 * @returns {JSX.Element} - The badge component.
 */
// eslint-disable-next-line react/prop-types
const Badge = ({ number = 0, greaterThan =99 }) => {
  const [count, setCound] = useState(0);

  useEffect(()=>{
    setCound(number)
  }, [number])
  return (
    <>
      {count > 0 && (
        <span className="inline-flex items-center rounded-full bg-[#0E78F9] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-gray-500/10 absolute top-0 right-0">
          {count > greaterThan ? `${greaterThan}+`: count }
        </span>
      )}
    </>
  );
};

export default Badge;
