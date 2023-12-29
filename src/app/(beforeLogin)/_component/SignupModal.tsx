import { Input } from ".";
import { Modal } from "./Modal";
import { CloseButton } from "./Modal/components";

export default function SignupModal() {
  return (
    <Modal header={<CloseButton className="-translate-x-2" />}>
      <div className="flex flex-col px-20 h-full">
        <h2 className="py-5 font-bold text-3xl">Create your account</h2>
        <form className="h-full flex flex-col justify-between">
          <div className="flex flex-col">
            <Input label="Id" attributes={{ id: "id" }} />
            <Input label="Nickname" attributes={{ id: "nickname" }} />
            <Input
              label="Password"
              attributes={{ id: "password", type: "password" }}
            />
            <Input
              label="Profile"
              attributes={{ id: "profile", type: "file" }}
            />
          </div>
          <div className="py-6 px-20">
            <button className="w-full h-[50px] rounded-3xl bg-[rgb(15,20,25)] dark:bg-white text-white dark:text-black text-base font-bold border-none disabled:opacity-50">
              Create
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
