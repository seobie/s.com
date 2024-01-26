'use client'

import { useAlert } from '@/components'
import { useConfirm } from '@/components/Confirm/useConfirm'

import { Tab } from './components/Tab'
import { SearchForm } from '../components'

export default function HomePage() {
  const { addAlert } = useAlert()
  const { addConfirm } = useConfirm()
  return (
    <div className="flex w-full flex-col overflow-auto border-[1px] border-solid border-[rgb(47,51,54)]">
      <Tab />
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
      <SearchForm />
      <SearchForm />
      <SearchForm />
      <SearchForm />
      <SearchForm />
      <SearchForm />
      <SearchForm />
      <SearchForm />
      <SearchForm />
      <SearchForm />
      <SearchForm />
      <SearchForm />
      <SearchForm />
      <SearchForm />
      <SearchForm />
      <SearchForm />
    </div>
  )
}
