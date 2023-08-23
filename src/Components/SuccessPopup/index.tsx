import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { SolidGreenButton } from "../Buttons";
import { SignedUpSuccessIcon } from "../Assets/Icons";

export default function SuccessPopup({
  open,
  handleClose,
  Icon,
  header,
  description,
}: any) {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-[9999]"
        // initialFocus={cancelButtonRef}
        onClose={handleClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-center shadow-xl transition-all sm:my-8 w-full h-full md:max-w-[750px] md:h-[450px] flex flex-col items-center justify-center">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="flex flex-col items-center justify-center">
                    <Icon />
                    <Dialog.Title
                      as="h3"
                      className="text-base text-brandBlack md:text-[20px] font-montserrat font-bold leading-[28px] my-[8px]">
                      {header}
                    </Dialog.Title>
                    <div className="mb-[32px]">
                      <p className="text-[13px] md:text-base text-[#808080] font-openSans font-light">
                        {description}
                      </p>
                    </div>
                    <SolidGreenButton width="180px" onClick={handleClose}>
                      Continue
                    </SolidGreenButton>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
