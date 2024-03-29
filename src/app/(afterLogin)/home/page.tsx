'use client'

import { useAlert } from '@/components'
import { useConfirm } from '@/components/Confirm/useConfirm'

import { Posts } from './components'
import { Tab } from './components/Tab'

export default function HomePage() {
  const { addAlert } = useAlert()
  const { addConfirm } = useConfirm()
  return (
    <div className="flex w-full max-w-[600px] flex-col border-[1px] border-solid border-[rgb(47,51,54)]">
      <Tab />
      <Posts />
      <button
        className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        onClick={() =>
          addAlert(
            <button
              className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
              onClick={() =>
                addAlert(
                  <button onClick={() => addAlert('world!')}>hello</button>
                )
              }>
              world
            </button>
          )
        }>
        hello
      </button>
      <button
        onClick={() =>
          addConfirm(
            <div>are you sure?</div>,
            () =>
              addConfirm(
                'really?',
                () => addAlert('oh'),
                () => addAlert('wow')
              ),
            () => addAlert('canceled!!')
          )
        }>
        confirm?
      </button>
    </div>
  )
}
