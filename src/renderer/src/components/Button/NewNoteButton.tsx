/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useSetAtom } from 'jotai'
import { ActionButton, ActionButtonProps } from './ActionButton'
import { LuFileSignature } from 'react-icons/lu'
import { createEmptyNoteAtom } from '@/store'

export const NewNoteButton = ({ ...props }: ActionButtonProps) => {
  const createEmptyNote = useSetAtom(createEmptyNoteAtom)
  const handleCreation = () => {
    createEmptyNote()
  }
  return (
    <ActionButton {...props} onClick={handleCreation}>
      <LuFileSignature className="w-4 h-4 text-zinc-300" />
    </ActionButton>
  )
}
