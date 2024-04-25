import {
  Sidebar,
  RootLayout,
  Content,
  DraggableTopbar,
  ActionButtonsRow,
  NotePreviewList
} from '@/components'
import MarkdonwEditor from './components/MarkdonwEditor'
import FloatingNoteTitle from './components/FloatingNoteTitle'
import { useRef } from 'react'

function App(): JSX.Element {
  const contentContainerRef = useRef<HTMLDivElement>(null)
  const resetScroll = () => {
    contentContainerRef.current?.scrollTo(0, 0)
  }
  return (
    <>
      <DraggableTopbar />
      <RootLayout>
        <Sidebar className="p-2">
          <ActionButtonsRow className="flex justify-between mt-1" />
          <NotePreviewList className="mt-4 space-y-1" onSelect={resetScroll}/>
        </Sidebar>
        <Content ref={contentContainerRef} className="border-l bg-zinc-900/50 border-l-white/20">
          <FloatingNoteTitle className="pt-2" />
          <MarkdonwEditor />
        </Content>
      </RootLayout>
    </>
  )
}

export default App
