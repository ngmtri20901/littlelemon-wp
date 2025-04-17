"use client"

const h3Class = "text-2xl font-bold text-neutral-600 pb-5 pt-0"
const price = "text-yellow-400 text-4xl font-tiro font-light"

export default function InfoSection() {
  return (
    <div className="flex flex-wrap justify-center items-stretch text-center shadow-lg hover:shadow-xl pb-9 p-4 bg-white">
      {/* Kids */}
      <div className="flex-1 p-4 transform transition-transform hover:translate-y-[-10px]">
        <h3 className={h3Class}>Kids</h3>
        <div className="grid grid-cols-2 gap-4 items-center">
          {/* Cột 1 */}
          <div>
            <div className={`${price} ml-[-10px] hidden:lg`}>FREE</div>
            <div className="text-lg text-gray-500 font-tiro">&lt;1m</div>
          </div>
          {/* Cột 2 */}
          <div>
            <div className={price}>-75%</div>
            <div className="text-lg text-gray-500 font-tiro">&lt;1.3m</div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="dashed-line-50"></div>
      </div>

      {/* Main Dishes */}
      <div className="flex-1 p-4 transform transition-transform hover:translate-y-[-10px]">
        <h3 className={h3Class}>Main dishes</h3>
        <div className={price}>
          <span className="text-gray-500 text-sm inline px-2">from</span>4.99$/
        </div>
        <div className="text-xl text-gray-500 font-tiro">dish</div>
      </div>

      <div className="flex items-center justify-between">
        <div className="dashed-line-50"></div>
      </div>

      {/* Buffet */}
      <div className="flex-1 p-4 transform transition-transform hover:translate-y-[-10px]">
        <h3 className={h3Class}>Buffet</h3>
        <div className={price}>12.99$/</div>
        <div className="text-xl text-gray-500 font-tiro">person</div>
      </div>

      <div className="flex items-center justify-between">
        <div className="dashed-line-50"></div>
      </div>

      {/* Events */}
      <div className="flex-1 p-4 transform transition-transform hover:translate-y-[-10px]">
        <h3 className={`${h3Class}`}>Events</h3>
        <a href="#" className={`${price} hover:underline`}>
          contact
        </a>
      </div>
    </div>
  )
}
