import { Input } from '.'
import { Modal } from './Modal'
import { CloseButton } from './Modal/components'

export default function SignupModal() {
  return (
    <Modal header={<CloseButton className="-translate-x-2" />}>
      <div className="flex h-full flex-col px-20">
        <h2 className="py-5 text-3xl font-bold">Create your account</h2>
        <form className="flex h-full flex-col justify-between">
          <div className="flex flex-col">
            <Input label="Id" attributes={{ id: 'id' }} />
            <Input label="Nickname" attributes={{ id: 'nickname' }} />

            <Input
              label="Password"
              attributes={{ id: 'password', type: 'password' }}
            />
            <Input
              label="Profile"
              attributes={{ id: 'profile', type: 'file' }}
            />
          </div>
          <div className="px-20 py-6">
            <button
              type="submit"
              className="h-[50px] w-full rounded-3xl border-none bg-[rgb(15,20,25)] text-base font-bold text-white disabled:opacity-50 dark:bg-white dark:text-black">
              Create
            </button>
          </div>
        </form>
      </div>
    </Modal>
  )
}
