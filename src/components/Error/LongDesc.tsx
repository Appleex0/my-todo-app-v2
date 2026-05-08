import { MdErrorOutline } from "react-icons/md"

function LongDesc() {
  return (
    <div className='flex justify-center items-center gap-2 fixed bottom-20 border px-2 py-3 rounded-2xl bg-red-800 text-amber-50 '>Detaylara 500 Simvoldan Çox Girə Bilməzsiniz!<MdErrorOutline className="text-2xl" /></div>
  )
}

export default LongDesc