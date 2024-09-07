export type TicketStatus = 'todo' | 'inProgress' | 'blocked' | 'done'

export type TicketTypes = 'story' | 'task' | 'bug'

export interface UserDto {
  id: number
  name: string
  email: string
  bgColor: string
}

type TicketSection = {
  id: TicketStatus
  title: string
}

export interface TicketSections {
  todo: TicketSection
  inProgress: TicketSection
  blocked: TicketSection
  done: TicketSection
}

export interface TicketDto {
  id: string
  title: string
  description: string
  type: TicketTypes
  status: TicketStatus
  userDto: UserDto
}

export interface TicketWithIndex extends TicketDto {
  index: number
}

export interface TicketsDto {
  todo: TicketDto[]
  inProgress: TicketDto[]
  blocked: TicketDto[]
  done: TicketDto[]
}
