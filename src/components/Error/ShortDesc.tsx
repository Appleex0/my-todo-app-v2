import { MdErrorOutline } from "react-icons/md"

function ShortDesc() {
  return (
    <div className='flex justify-center items-center gap-2 fixed bottom-20 border px-2 py-3 rounded-2xl bg-red-800 text-amber-50 '>Detayları 20 Simvoldan Az Girə Bilməzsiniz!<MdErrorOutline className="text-2xl" /></div>
      )
}

export default ShortDesc