import { Fragment } from 'react'
import { Menu, Transition } from "@headlessui/react";

/**
 * Dropdwon Component.
 * @requires import { Menu } from "@headlessui/react" 
 * @requires  menu.item  this tag used at first for children elements for each item
 * @param {Object} props - The props for the Dropdown component.
 * @param {string} props.buttonLabel -@default "Options" - This is Dropdown header button.
 * @param {string} props.displayPosition -@default "positionBottomRight" - The type of displayPosition for the Dropdown. Options: "topRight", "topLeft", "bottomRight", "bottomLeft".
 * @param {string} props.children -This is child element for dropdown items
 * 
 * 
 */

// eslint-disable-next-line react/prop-types
const Dropdown=({buttonLabel, children, displayPosition= 'positionBottomRight',})=>{
  const displayPositionClasses = {
    topRight: 'right-0 bottom-full origin-bottom-right  mb-2',
    topLeft: 'left-0 bottom-full origin-bottom-right  mb-2',
    bottomRight: 'right-0 origin-top-right mt-2',
    bottomLeft: 'left-0 origin-top-right  mt-2',
 
  };

  // Generate classes string
  const displayPositionClass = displayPositionClasses[displayPosition] || '';
  // const positionBottomRightClass = positionBottomRightClasses[positionBottomRight] || '';

    return(
        <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 text-sm font-semibold text-gray-900 shadow-sm outline-none border-0">
            {buttonLabel}
          </Menu.Button>
        </div> 
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className={`absolute ${displayPositionClass}  z-10 w-56  rounded-md bg-[#1C1F2E] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-white`}>
            <div className="py-1">
             {children}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    )
}


export default Dropdown;