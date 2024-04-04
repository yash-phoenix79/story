"use client";
import React from "react";
import { Formik, Form } from "formik";
import Input from "@/public/ui/input";
import Button from "@/public/ui/Button";
import * as Yup from "yup";
import forgotpassword from "@/public/bgImages/forgotPassword.jpg";
import Image from "next/image";

export default function ForgotPaswword() {
  const ForgotSchema = Yup.object({
    email: Yup.string()
      .matches(
        /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        "Invalid email address"
      )
      .required("Email required"),
    new_password: Yup.string()
      .min(8, "passwword contain atleast 8 Characters")

      .required("password required "),
    re_password: Yup.string().oneOf(
      [Yup.ref("new_password")],
      "Password doesnt match"
    ),
  });
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen font-medium text-black bg-gradient-radial from-cyan-200 to-cyan-700 ">
      <div className="flex  flex-col md:flex-row items-center w-11/12 p-5 my-5  bg-white rounded-md shadow-lg min-h-5/6 justify-evenly md:w-8/12 md:h-2/3">
        <div className="w-8/12 h-1/6 md:6/12 ">
          <Image src={forgotpassword} alt="forgot" className="w-full h-full " />
        </div>
        <hr className="h-full m-2 border border-gray-300 border-dashed" />
        <div className="flex flex-col items-center justify-center  w-12/12 h-full md:w-7/12 ">
          <div className="w-full text-center h-1/6">
            <h1 className="teext-base md:text-xl pb-5 md:pb-10">
              Forgot Password ?
            </h1>
          </div>
          <div className="flex flex-col w-full h-full text-sm md:text-base ">
            <Formik
              initialValues={{ email: "", new_password: "", re_password: "" }}
              validationSchema={ForgotSchema}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              {(props: any) => {
                const { values, setFieldValue, touched, errors, isSubmitting } =
                  props;

                console.log(values);
                return (
                  <Form>
                    <div className="w-full h-auto mb-3">
                      <Input
                        label="Email"
                        name="email"
                        value={values.email}
                        size="md"
                        autofocus={true}
                        setFieldValue={setFieldValue}
                        touched={touched.email}
                        intent="primary"
                        error={errors.email}
                      />
                    </div>
                    <div className="w-full h-auto mb-3 ">
                      <Input
                        label="New Password"
                        name="new_password"
                        value={values.new_password}
                        size="md"
                        setFieldValue={setFieldValue}
                        touched={touched.new_password}
                        intent="primary"
                        type="password"
                        error={errors.new_password}
                      />
                    </div>
                    <div className="w-full h-auto mb-3 ">
                      <Input
                        label="Confirm Password"
                        name="re_password"
                        value={values.re_password}
                        size="md"
                        setFieldValue={setFieldValue}
                        touched={touched.re_password}
                        intent="primary"
                        type="password"
                        error={errors.re_password}
                      />
                    </div>

                    <div className="flex items-center justify-center w-full h-15 ">
                      <Button
                        type="submit"
                        className="md:w-6/12 "
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Processing..." : "Reset Password"}
                      </Button>
                    </div>
                    <div className="mt-5 space-y-4 text-center text-gray-600 items">
                      <p className="text-xs">
                        By proceeding, you agree to our{" "}
                        <a className="underline" target="_blank">
                          Terms of Use
                        </a>{" "}
                        and confirm you have read our{" "}
                        <a className="underline" target="_blank">
                          Privacy and Cookie Statement
                        </a>
                        .
                      </p>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
