/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { DeleteNoteButton, NewNoteButton } from '@/components'
import { ComponentProps } from 'react'

export const ActionButtonsRow = ({ ...props }: ComponentProps<'div'>) => {
  return (
    <div {...props}>
      <NewNoteButton />
      <DeleteNoteButton />
    </div>
  )
}