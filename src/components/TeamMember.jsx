export default function TeamMember({ name, role, image, icon, role2 }) {
    return (
      <div className="bg-white p-6 rounded-xl shadow-2xl flex flex-col items-center gap-[16px]">
        <img
          src={image}
          alt={name}
          className="w-64 h-64 rounded-full object-cover mb-4 transform transition-transform duration-500 hover:scale-125"
        />
        <h3 className="text-[34px] text-[#14213D] font-semibold">{name}</h3>
        <p className=" text-[22px] text-[#FCA311] font-semibold border-b-[1px]">{role}</p>
        <p className="text-[#14213D] justify-self-center">{role2}</p>
        {icon && (
        <img
          src={icon}
          alt={`${name} icon`}
          className="w-12 h-12 mx-auto mb-2 cursor-pointer"
        />
      )}
      </div>
    );
  }
  