import React from "react";
import { Dialog } from "@headlessui/react";
import { useStore } from "../../../store/store";

const ErrorModal = () => {
  const isError = useStore((state) => state.isError);
  const setError = useStore((state) => state.setError);
  const errorCode = useStore((state) => state.errorCode);

  return (
    <Dialog
      role="Error Modal"
      className="fixed"
      open={isError}
      onClose={() => {
        setError();
      }}
    >
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <div className="fixed inset-0 bg-black/30 " aria-hidden="true" />

        <Dialog.Panel className="z-10 w-4/5 h-[50rem] md:w-96 md:h-48 rounded-3xl md:rounded-md bg-white flex flex-col overflow-hidden">
          <div className="h-48 md:h-12 bg-rose-600 rounded-t-3xl md:rounded-t-md flex items-center">
            <Dialog.Title className="ml-5 text-white font-montserrat text-9xl md:text-2xl">
              Erro
            </Dialog.Title>
          </div>
          <div className="flex flex-col items-center h-full ">
            <Dialog.Description className="text-center font-montserrat text-8xl mx-14 md:mx-4 md:text-xl mt-auto ">
              {errorCode.erro}
            </Dialog.Description>
            <button
              onClick={() => setError()}
              className="rounded-3xl h-40 w-56 md:h-fit md:w-fit md:rounded-md bg-rose-600 px-4 py-2 text-8xl md:text-sm font-medium text-white hover:bg-rose-700 focus:outline-none mb-16 mt-auto md:mt-7 md:mb-7"
            >
              OK
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default ErrorModal;
