import { Dialog, Transition } from "@headlessui/react";
import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import { Fragment, useRef, useState } from "react";
import toast from "react-hot-toast";
import * as Yup from "yup";

import { postGetresponseRequest } from "../../API-Service";
import { CloseIcon, SignedUpSuccessIcon } from "../Assets/Icons";
import { SolidGreenButton } from "../Buttons";
import CustomInput from "../CustomInput";
import SuccessPopup from "../SuccessPopup";

const trainingFormSchema = Yup.object().shape({
  firstName: Yup.string().min(2).required("First name is required"),
  lastName: Yup.string().min(2).required("Last name is required"),
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Email address is required"),
});

export default function TrainingPopup({ open, handleClose }: any) {
  const [successOpen, setSuccessOpen] = useState(false);
  const cancelButtonRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const freeTrainingRequest = useMutation({
    mutationFn: postGetresponseRequest,
    onSuccess(data, variables, context) {
      handleClose();
      setSuccessOpen(true);
    },
    onError(error: any, variables, context) {
      toast.error(error?.message || "error");
    },
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      requestType: "Free On-demand Training",
    },
    validationSchema: trainingFormSchema,
    onSubmit: (values) => {
      console.log(values);
      setLoading(true);
      // freeTrainingRequest.mutate(values);
      const formData = new FormData();
      Object.entries(values).forEach(([key, value]) => {
        formData.append(key, value);
      });
      fetch("https://formkeep.com/f/72c02fe18be8", {
        method: "POST",
        body: formData,
      })
        .then(() => {
          setLoading(false);
          handleClose();
          setSuccessOpen(true);
        })
        .catch((err) => {
          setLoading(false);
          toast.error(
            err?.message ||
              err?.response.message ||
              "Something went wrong, please try again"
          );
        });
    },
  });

  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-[9000]"
          initialFocus={cancelButtonRef}
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
            <div className="flex min-h-full items-center justify-center p-4 sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white shadow-xl transition-all sm:my-8 sm:w-full md:max-w-[670px] p-5 md:p-10">
                  <div className="w-full flex items-start justify-between mb-[20px] md:gap-[40px]">
                    <div>
                      <h6 className="mb-[8px] text-brandBlack text-[20px] font-bold font-montserrat leading-[140%]">
                        Sign up for a free on-demand training
                      </h6>
                      <p className="font-openSans font-light text-base leading-[normal] text-[#808080]">
                        Enter your name and email below and get access to the
                        on-demand training. Start building your personal brand
                        today!
                      </p>
                    </div>
                    <div onClick={handleClose} className="cursor-pointer">
                      <CloseIcon />
                    </div>
                  </div>

                  <form onSubmit={formik.handleSubmit}>
                    <div className="w-full grid grid-cols-1  md:grid-cols-2 gap-4 md:gap-8 items-start mb-[32px]">
                      <div>
                        <CustomInput
                          name="firstName"
                          label="First name"
                          placeholder="Enter first name"
                          onChange={formik.handleChange}
                          value={formik.values.firstName}
                        />
                        {formik.errors.firstName && formik.touched.firstName ? (
                          <div className="text-red-700 font-raleway text-[14px]">
                            {formik.errors.firstName}
                          </div>
                        ) : null}
                      </div>
                      <div>
                        <CustomInput
                          name="lastName"
                          label="Last name"
                          placeholder="Enter last name"
                          onChange={formik.handleChange}
                          value={formik.values.lastName}
                        />

                        {formik.errors.lastName && formik.touched.lastName ? (
                          <div className="text-red-700 font-raleway text-[14px]">
                            {formik.errors.lastName}
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <div className="w-full mb-[47px]">
                      <CustomInput
                        name="email"
                        label="Email Address"
                        placeholder="Enter email address"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                      />
                      {formik.errors.email && formik.touched.email ? (
                        <div className="text-red-700 font-raleway text-[14px]">
                          {formik.errors.email}
                        </div>
                      ) : null}
                    </div>
                    <SolidGreenButton
                      width="100%"
                      //   onClick={handleSubmit}
                      type={"submit"}
                      loading={loading}>
                      Proceed
                    </SolidGreenButton>
                  </form>

                  <div className="mt-5">
                    <p className="text-[14px] text-[#808080] font-openSans font-normal leading-[normal]">
                      Leadlift is committed to securing your privacy. We promise
                      to keep your information safe and will never share it with
                      third parties. By submitting this form, you acknowledge
                      Leadlift uses your information in accordance with its
                      Terms of use and Privacy policy. You'll receive occasional
                      updates from us but you can unsubscribe at any time.
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      <SuccessPopup
        open={successOpen}
        handleClose={() => setSuccessOpen(false)}
        Icon={SignedUpSuccessIcon}
        header="You've signed up for the video!"
        description=" You'll get the link to the video soon"
      />
    </>
  );
}
