"use client";
import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import Input from "@/public/ui/input";
import * as yup from "yup";
import { GetIcon } from "@/components/svg-icons";
import Button from "@/public/ui/Button";
import Link from "next/link";
import Checkbox from "@/public/ui/checkbox";

export default function Login() {
  // const [data, setData] = useState<any>({});

  const ipAndLocatoion = () => {
    fetch("https://ipapi.co/json")
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    ipAndLocatoion();
  }, []);

  const loginSchema = yup.object({
    email: yup
      .string()
      .matches(
        /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        "Invalid email address"
      )
      .required("Email is required"),
    password: yup.string().max(10).required("Password Required"),
  });

  return (
    <div className="flex flex-col justify-center w-full h-screen text-xs font-semibold md:text-base md:flex-row">
      <div
        className="flex flex-col items-center justify-center w-full bg-no-repeat bg-cover h-1/3 md:h-screen md:w-1/2"
        style={{
          backgroundImage:
            'url( "https://img.freepik.com/free-vector/colorful-icons-set-design_79603-1268.jpg?w=996")',
        }}
      >
        <div className="flex flex-col items-center p-3 m-3 text-xs md:text-base">
          <h1 className="font-mono text-sm font-semibold text-center md:text-xl">
            Join Us Today!
          </h1>
          <p className="font-sans font-semibold">
            We invite you to join our growing community of passionate
            individuals who are ready to explore, connect, and create
            unforgettable memories together. Sign up now and embark on a journey
            filled with endless possibilities! Ready to get started? Click Sign
            Up Now to create your account and join the our Social Media Platform
            family today!
          </p>
          <div className="flex items-center justify-center w-full p-2">
            <Button
              intent="primary"
              size="md"
              as="button"
              className="flex items-center justify-center w-6/12"
              onClick={() => {
                window.location.href = "/";
              }}
            >
              Signup {"  "}
              <GetIcon type="rightArrow" stroke="#fff" />
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-start w-full py-2 bg-gray-100 md:justify-center h-2/3 md:h-screen md:w-1/2">
        <div className="flex flex-col items-center justify-start w-11/12 h-full text-black bg-white rounded-md shadow-md md:justify-center md:w-11/12 md:px-3 md:h-2/3">
          <div className="flex items-center justify-center w-full p-2 mb-3 text-sm md:text-lg">
            <h1 className="font-serif animate-bounce">Login Here</h1>
          </div>
          <div className="w-11/12 text-sm md:w-full md:text-base" >
            <Formik
              initialValues={{
                email: "",
                password: "",
                remember: false,
              }}
              validationSchema={loginSchema}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              {(prop: any) => {
                const {
                  values,
                  touched,
                  errors,
                  isSubmitting,
                  setFieldValue,
                } = prop;
                return (
                  <Form>
                    <div className="w-full h-auto mb-5">
                      <Input
                        label="Email"
                        className="w-full bg-transparent "
                        type="text"
                        name="Email"
                        intent="primary"
                        size="md"
                        autofocus={true}
                        touched={touched.email}
                        value={values.email}
                        error={errors.email}
                        disabled={false}
                        updateValue={(e) => setFieldValue("email", e)}
                      />
                    </div>
                    <div className="flex items-center justify-between w-full mb-5 border-gray-400 items-centers">
                      <div className="w-full h-auto ">
                        <Input
                          label="Password"
                          className="w-full"
                          type="password"
                          name="password"
                          intent="primary"
                          size="md"
                          autofocus={true}
                          touched={touched.password}
                          value={values.password}
                          error={errors.password}
                          disabled={false}
                          updateValue={(e) => setFieldValue("password", e)}
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center justify-center">
                        <div>
                          <Checkbox
                            label="Rememeber Me"
                            value={values.remeber}
                            setFeildValue={setFieldValue}
                            name="remember"
                          />
                        </div>
                      </div>
                      <div>
                        <Link
                          href={"/login/reset"}
                          className="font-semibold text-blue-700"
                        >
                          Forgot Password ?
                        </Link>
                      </div>
                    </div>
                    <div className="flex items-center justify-center w-full h-10 mt-5 mb-5">
                      <Button
                        as="button"
                        intent="primary"
                        rounded="md"
                        className=""
                        type="submit"
                        disabled={isSubmitting}
                      >
                        {isSubmitting
                          ? "processing..."
                          : "Login to Your Account"}
                      </Button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
            <div className="flex items-center justify-center mt-5 space-y-4 text-gray-600 items">
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
          </div>
        </div>
      </div>
    </div>
  );
}
