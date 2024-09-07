import React, { useState } from 'react'

type TicketCardDropAreaProps = {
  onDrop: () => void
}
const TicketCardDropArea: React.FC<TicketCardDropAreaProps> = ({
  onDrop: onDropProp,
}) => {
  const [showDropArea, setShowDropArea] = useState(false)

  const onDrop = () => {
    onDropProp()
    setShowDropArea(false)
  }
  return (
    <div
      onDragEnter={() => setShowDropArea(true)}
      onDragLeave={() => setShowDropArea(false)}
      className={
        showDropArea
          ? `bg-zinc-600 rounded min-w-44 h-1 cursor-pointer`
          : 'opacity-0 '
      }
      onDragOver={(e) => e.preventDefault()}
      onDrop={onDrop}
    >
      <div className='w-full bg-green-400 h-1' />
    </div>
  )
}

export default TicketCardDropArea
