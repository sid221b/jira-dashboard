import { useState } from 'react'
import {
  dummyTicketsData,
  dummyTicketSections,
  ticketSectionDto,
} from '../../constants/dummyData'
import TicketCard from '../../components/TicketCard'
import { TicketStatus, TicketWithIndex } from '../../types/data'
import TicketCardDropArea from '../../components/TicketCardDropArea'

const MainBoard = () => {
  const [currentTickets, setCurrentTickets] = useState(dummyTicketsData)
  const [draggedTicket, setDraggedTicket] = useState<null | TicketWithIndex>(
    null
  )

  const onDrop = (newIndex: number, newColumn: TicketStatus) => {
    if (!draggedTicket) return

    const oldColumn = draggedTicket.status
    const oldIndex = draggedTicket.index

    // if the ticket is dropped in the same position
    if (oldColumn === newColumn && oldIndex === newIndex) return

    const newTickets = structuredClone(currentTickets)
    newTickets[oldColumn].splice(oldIndex, 1)
    const updatedTicket = structuredClone({
      ...draggedTicket,
      status: newColumn,
      index: null,
    })
    newTickets[newColumn].splice(newIndex, 0, updatedTicket)
    setCurrentTickets(newTickets)
  }
  return (
    <main className='bg-zinc-800 relative min-h-svh'>
      <div className='py-4 px-8 overflow-auto'>
        {/* tickets header */}
        <section className='flex  gap-1.5'>
          {dummyTicketSections.map((section) => {
            const { title, id } = ticketSectionDto[section]
            return (
              <div
                key={id}
                className='flex-1 bg-zinc-900 px-3 py-2 rounded-t-lg min-w-44'
              >
                <h2 className='text-gray-300'>{title}</h2>
              </div>
            )
          })}
        </section>
        {/* tickets */}
        <section className='flex gap-1.5 mt-2'>
          {dummyTicketSections.map((sectionId) => {
            const data = currentTickets[sectionId]
            return (
              <div
                key={sectionId}
                className='bg-zinc-900 flex-1 min-w-44 rounded-md pb-2'
              >
                {data.map((ticket, index) => {
                  return (
                    <div key={ticket.id}>
                      <TicketCardDropArea
                        onDrop={() => {
                          onDrop(index, sectionId)
                        }}
                      />
                      <TicketCard
                        index={index}
                        ticket={ticket}
                        sectionId={sectionId}
                        setActiveTicket={setDraggedTicket}
                      />
                    </div>
                  )
                })}
              </div>
            )
          })}
        </section>
      </div>
    </main>
  )
}

export default MainBoard
