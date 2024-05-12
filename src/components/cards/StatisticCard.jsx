

// eslint-disable-next-line react/prop-types
const StatisticCard = ({icon, title, description, color, onClick}) => {
  return (
    <div onClick={onClick} className={`${color} w-full h-auto text-white p-4 rounded-lg cursor-pointer`}>
        <div className="w-full flex justify-between">
            {icon}
        </div>
        <div className="mt-6">
        <div className="text-2xl font-medium tracking-wider ">{title}</div>
        <div className="text-base pt-1">{description}</div>
        </div>
    </div>
  )
}

export default StatisticCard