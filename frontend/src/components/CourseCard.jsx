import avatar from '../assets/avatar.png'

function CourseCard({ image, title, description, instructor, role, price }) {
  return (
    <article className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex gap-3 md:block">
        <img
          src={image}
          alt={title}
          className="h-[82px] w-[82px] flex-none rounded-md object-cover md:h-[193px] md:w-full"
        />

        <div className="min-w-0 flex-1 md:mt-4">
          <h3 className="line-clamp-2 text-base font-bold leading-tight text-[#222325] md:text-lg">
            {title}
          </h3>

          <p className="mt-2 hidden text-sm leading-relaxed text-gray-500 md:line-clamp-2 md:block">
            {description}
          </p>

          <div className="mt-2 flex items-center gap-2 md:mt-4">
            <img src={avatar} alt={instructor} className="h-9 w-9 rounded-lg object-cover" />

            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-[#222325]">{instructor}</p>
              <p className="truncate text-xs text-gray-500">{role}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between md:mt-4">
        <div className="flex items-center gap-2">
          <div className="text-sm tracking-wide text-yellow-400" aria-hidden="true">
            &#9733;&#9733;&#9733;&#9734;&#9734;
          </div>
          <span className="text-xs font-medium text-gray-500 underline">
            3.5 (86)
          </span>
        </div>

        <p className="text-lg font-bold text-[#3ECF4C] md:text-2xl">{price}</p>
      </div>
    </article>
  )
}

export default CourseCard
