import React, { useMemo } from 'react'
import { TicketDto, TicketWithIndex } from '../types/data'

interface TicketCardProps {
  ticket: TicketDto
  index: number
  sectionId: string
  setActiveTicket: (ticket: TicketWithIndex | null) => void
}

const TicketCard: React.FC<TicketCardProps> = ({
  ticket,
  setActiveTicket,
  index,
}) => {
  const {
    id,
    title,
    type,
    userDto: { name, bgColor },
  } = ticket
  const leftBorder = useMemo(() => {
    if (type === 'task') {
      return 'border-l-4 border-blue-400'
    } else if (type === 'story') {
      return 'border-l-4 border-yellow-500'
    } else if (type === 'bug') {
      return 'border-l-4 border-red-600'
    }
  }, [type])

  const icon = useMemo(() => {
    if (type === 'task') {
      return (
        <div className='rounded h-4 w-4 flex justify-center align-middle items-center bg-blue-400'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 -960 960 960'
            className='fill-gray-200 h-3 w-3 '
          >
            <path d='M382-200 113-469l97-97 172 173 369-369 97 96-466 466Z' />
          </svg>
        </div>
      )
    } else if (type === 'bug') {
      return (
        <div className='rounded h-4 w-4 flex justify-center align-middle items-center bg-red-600'>
          <span className='h-1.5 w-1.5 bg-white rounded-full' />
        </div>
      )
    } else if (type === 'story') {
      return (
        <div className='rounded h-4 w-4 flex justify-center align-middle items-center bg-gray-400'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 -960 960 960'
            className='fill-gray-200 h-3 w-3 '
          >
            <path d='M480-480Zm0 280q-116 0-198-82t-82-198q0-116 82-198t198-82q116 0 198 82t82 198q0 116-82 198t-198 82Zm0-80q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Z' />
          </svg>
        </div>
      )
    }
  }, [type])

  const onDragStart = () => {
    setActiveTicket({ ...ticket, index })
  }

  const onDragEnd = () => {
    setActiveTicket(null)
  }

  return (
    <div
      key={id}
      className={`group/item relative mx-1 bg-zinc-800 px-3 py-2 rounded min-w-44 cursor-pointer ${leftBorder} focus:outline-1 active:outline-1 outline-purple-600`}
      draggable
      tabIndex={0}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <div
        className={`absolute right-3 top-2 invisible group-hover/item:visible bg-zinc-700 h-7 w-7 rounded hover:bg-zinc-600 flex justify-center items-center`}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 -960 960 960'
          className='h-5 w-5 fill-zinc-400'
        >
          <path d='M195.76-380q-41.76 0-71.26-29.07Q95-438.13 95-479.66 95-522 124.42-551t70.74-29q42.14 0 71.99 29.02Q297-521.97 297-480.34 297-438 267.26-409t-71.5 29Zm284.58 0Q438-380 409-409.07q-29-29.06-29-70.59Q380-522 409.07-551q29.06-29 70.59-29Q522-580 551-550.98q29 29.01 29 70.64Q580-438 550.98-409q-29.01 29-70.64 29Zm284.78 0q-42.25 0-72.19-29.07Q663-438.13 663-479.66 663-522 692.95-551q29.94-29 72-29Q807-580 836-550.98q29 29.01 29 70.64Q865-438 835.98-409q-29.01 29-70.86 29Z' />
        </svg>
      </div>
      <p className='text-gray-300'>{title}</p>
      <div className='flex justify-between mt-2'>
        <div className='flex text-gray-200 text-sm items-center'>
          <div className='mr-1'>{icon}</div>
          <span>{id}</span>
        </div>
        <div
          title={name}
          className={`${bgColor} rounded-full w-7 h-7 text-gray-100 flex justify-center items-center text-base`}
        >
          {name.charAt(0)}
        </div>
      </div>
    </div>
  )
}

export default TicketCard
