"use client";

import { useState } from "react";
import { Modal } from "./Modal";
import { CloseButton } from "./Modal/components";
import { Input } from ".";

export default function LoginModal() {
  const [id, setId] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState();
  const onSubmit = () => {};
  const onClickClose = () => {};

  const onChangeId = () => {};

  const onChangePassword = () => {};

  return (
    <Modal
      header={
        <div className="flex relative w-full">
          <CloseButton className="-translate-x-2" />
          <div className="absolute left-2/4 -translate-x-2/4 h-full">
            <svg
              className="fill-black dark:fill-white h-full w-full"
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="300.000000pt"
              height="292.000000pt"
              viewBox="0 0 300.000000 292.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,292.000000) scale(0.100000,-0.100000)"
                stroke="none"
              >
                <path
                  d="M1269 2719 c-125 -10 -297 -49 -393 -89 -159 -67 -309 -189 -385
  -315 -81 -134 -120 -324 -101 -491 17 -158 61 -252 167 -365 135 -143 305
  -228 718 -359 300 -95 402 -142 490 -222 70 -64 99 -130 93 -213 -10 -123 -92
  -215 -231 -262 -75 -25 -95 -27 -237 -26 -135 0 -168 3 -255 27 -125 33 -295
  115 -406 196 -46 34 -128 108 -182 163 l-98 100 -67 -46 c-37 -26 -80 -57 -96
  -70 l-30 -24 22 -30 c37 -52 215 -216 292 -269 152 -105 314 -173 505 -214
  127 -27 459 -38 615 -21 480 54 785 264 871 599 27 106 26 290 -1 396 -58 221
  -204 383 -455 506 -137 66 -212 94 -481 179 -308 97 -432 158 -489 240 -103
  149 -1 344 213 406 71 21 207 21 295 0 204 -47 399 -158 558 -316 49 -49 92
  -89 95 -89 3 0 43 32 89 72 l83 72 -18 26 c-11 15 -52 56 -92 92 -255 228
  -473 323 -802 348 -135 11 -150 11 -287 -1z m-195 -191 c-4 -7 -35 -46 -69
  -88 -78 -97 -107 -163 -113 -261 -8 -128 42 -235 146 -311 96 -71 219 -123
  529 -226 301 -100 449 -161 540 -223 183 -126 261 -277 250 -484 -11 -200 -96
  -347 -266 -459 -61 -40 -199 -106 -223 -106 -6 0 18 30 52 67 40 43 76 94 99
  142 34 72 36 81 36 181 0 94 -3 110 -27 158 -40 77 -73 117 -141 168 -97 72
  -221 125 -547 234 -474 158 -616 243 -703 419 -29 59 -32 76 -35 171 -5 128 8
  198 53 288 65 128 198 247 353 313 78 33 75 32 66 17z"
                />
              </g>
            </svg>
          </div>
        </div>
      }
    >
      <div className="flex flex-col items-center h-full">
        <div className="flex flex-col min-w-[364px] max-w-[364px] flex-1 px-8 pb-12">
          <h1 className="font-bold text-3xl my-5">Sign in to S</h1>
          <form onSubmit={onSubmit}>
            <div>
              <Input
                label="id"
                attributes={{ id: "id", value: id, onChange: onChangeId }}
              />
              <Input
                label="password"
                attributes={{
                  type: "password",
                  id: "password",
                  value: password,
                  onChange: onChangePassword,
                }}
              />
            </div>
            <div>{message}</div>
            <div className="py-6 px-20">
              <button
                type="submit"
                className="w-full h-[50px] rounded-3xl bg-[rgb(15,20,25)] dark:bg-white text-white dark:text-black text-base font-bold border-none disabled:opacity-50"
                disabled={!id && !password}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
}
