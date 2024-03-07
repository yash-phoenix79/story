import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { cva } from "class-variance-authority";
import Draggable from "react-draggable";

const ModalStyles = cva(
  [
    "bg-white",
    "transform",
    "text-left",
    "align-middle",
    "shadow-xl",
    "transition-all",
  ],
  {
    variants: {
      intent: {
        sm: ["w-full", "max-w-sm"],
        md: ["w-full", "max-w-md"],
        lg: ["w-full", "max-w-lg"],
        xl: ["w-full", "max-w-3xl"],
        xl7: ["w-full", "max-w-7xl"],
        xl5: ["w-full", "max-w-5xl"],
        full: ["w-full"],
        largeBottom: ["w-full"],
        right: ["w-full", "max-w-xl"],
      },
    },
    compoundVariants: [
      {
        intent: "md",
        class: "",
      },
    ],
    defaultVariants: {
      intent: "md",
    },
  }
);

type Props = {
  children: React.ReactNode;
  align?: string;
  p?: string;
  justify?: string;
  intent?:
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "xl5"
    | "xl7"
    | "right"
    | "full"
    | "largeBottom";
  close?: Function;
  className?: string;
  addOverflow?: boolean;
  wrapperClass?: string;
  closeFullscreen?: boolean;
  showOverflow?: string;
  draghandle?: string;
};

export default function Modal({
  children,
  className,
  align = "items-center",
  justify = "justify-center",
  p = "p-4",
  intent = "md",
  addOverflow = true,
  wrapperClass = "",
  closeFullscreen = false,
  showOverflow = "",
  draghandle = ".draghandle",
}: Props) {
  return (
    <>
      <Transition appear show={true} as={Fragment}>
        <Dialog
          as="div"
          className="modal-window relative"
          style={{
            zIndex: 999,
          }}
          onClose={() => {
            if (closeFullscreen && document.fullscreenElement)
              document.exitFullscreen();
          }}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <Draggable handle={draghandle}>
            <div
              className={`fixed inset-0 ${wrapperClass} ${
                addOverflow ? "overflow-y-auto" : ""
              }`}
            >
              <div
                className={`flex modal-wrp min-h-full ${align} ${justify} ${p} text-center `}
              >
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel
                    className={ModalStyles({
                      intent,
                      class:
                        showOverflow +
                        className +
                        (addOverflow
                          ? "overflow-auto modal-inner"
                          : " modal-inner"),
                    })}
                  >
                    {children}
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Draggable>
        </Dialog>
      </Transition>
    </>
  );
}
