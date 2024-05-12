// eslint-disable-next-line react/prop-types
const AhCard = ({ heading, children, padding='p-4' }) => {

 
  return (
    <div
      className={`bg-[#121212] w-full h-auto text-white rounded-lg border-[1px] border-[#1C1F2E] shadow-xl overflow-hidden`}
    >
      {heading && (
        <div className="bg-[#1C1F2E] py-2 px-4 flex items-center jusfify-between text-xl leading-normal ">
          {heading}
        </div>
      )}
      <div className={`${padding? padding: ''}`}>{children}</div>
    </div>
  );
};

export default AhCard;
