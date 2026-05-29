type ChipProps = {
  label: string
}

const Chip = ({ label }: ChipProps) => {
  return (
    <div className='w-fit rounded-md bg-black py-0.5 px-2.5 border border-transparent text-sm text-white transition-all shadow-sm'>
      {label}
    </div>
  )
}

export default Chip
