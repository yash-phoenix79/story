"use client";
import { Formik, Form } from "formik";
import Input from "@/public/ui/input";
import { Dropdown } from "@/public/ui/Dropdown";
import { Phone } from "@/public/ui/phone";
import { CountryCodes } from "@/utils/countryCodes";
import Button from "@/public/ui/Button";
import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";
import * as Yup from "yup";
import Checkbox from "@/public/ui/checkbox";

export const Signup = () => {
  const [ipInfo, setIpInfo] = useState<any>({});
  const [termsAndCo, setTermsAndCo] = useState<any>(false);
  console.log(ipInfo);
  useEffect(() => {
    const fetchIp = async () => {
      try {
        const response = await fetch("https://ipapi.co/json");
        if (!response.ok) {
          throw new Error("Unknow error");
        }
        const data = await response.json();
        setIpInfo(data);
      } catch (e) {
        console.log(e);
      }
    };
    if (termsAndCo) {
      fetchIp();
    }
  }, [termsAndCo]);

  const formValidation = Yup.object({
    email: Yup.string()
      .matches(
        /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        "Invalid email address"
      )
      .required("Required Email Id"),
    userName: Yup.string()
      .max(35, "max characters limit exceed")
      .required("Required User Name"),
    password: Yup.mixed()
      .required("Required Password")
      .test(
        "password-length",
        "password required atleast 8 Characters",
        (value) => {
          const stringPassword = String(value);
          return stringPassword.length >= 8;
        }
      )
      .nullable(),
    ip_address: Yup.object().required(),
    termsAndCon: Yup.boolean().oneOf([true], "Accept Terms And Policies"),
    firstName: Yup.string().required("Required First Name"),
    lastName: Yup.string().required("Required Last Name"),
    country: Yup.string().required("Required Country"),
    gender: Yup.string().required("Required Gender"),
    phone: Yup.string().required("Required Tele/Mobile"),
  });
  return (
    <div
      style={{
        backgroundImage: `url('/bgImages/signup.jpg')`,
        zIndex: "-999", // En
      }}
      className=" w-full bg-cover bg-center bg-no-repeat min-h-screen absolute flex justify-center p-2 items-center text-black "
    >
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Black color with 50% opacity
          zIndex: "9999", // Ensures the pseudo-element is behind the background image
        }}
        className=" w-11/12 p-5 my-5 md:my-0 min-h-5/6  flex z-50 border-orange-400 border-t-4  font-Inconsolata flex-col justify-start  rounded-sm"
      >
        <div className="w-full h-/6  mt-5 ">
          <h1 className="text-center font-semibold mb-5 text-white text-xl font-dancing">
            Sign Up Here
          </h1>
        </div>
        <div className="w-full h-full flex justify-center items-center ">
          <div className="w-full ">
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                userName: "",
                password: "",
                ip_address: ipInfo,
                gender: "",
                country: "",
                country_code: "",
                phone: "",
                termsAndCon: termsAndCo,
              }}
              validationSchema={formValidation}
              onSubmit={(values, { setSubmitting }) => {
                console.log(values);
                setSubmitting(false);
              }}
            >
              {(props) => {
                const { values, setFieldValue, touched, errors, isSubmitting } =
                  props;
                console.log(isSubmitting);
                console.log(values);
                return (
                  <Form>
                    <div className="grid  justify-start items-center mt-4  text-white font-semibold text-md w-full gap-1 md:grid-cols-2">
                      <div className="w-11/12 pl-4 md:pl-0 mb-3 ">
                        <Input
                          label="First Name"
                          value={values.firstName}
                          name="firstName"
                          updateValue={(e) => setFieldValue("firstName", e)}
                          error={errors.firstName}
                          touched={touched.firstName}
                          className="text-white !placeholder-white"
                          intent="primary"
                          placeholder="Enter Your First Name"
                        />
                      </div>
                      <div className="w-11/12 pl-4 md:pl-0">
                        <Input
                          label="Last Name"
                          value={values.lastName}
                          name="lastName"
                          intent="primary"
                          placeholder="Enter Last Name"
                          updateValue={(e) => setFieldValue("lastName", e)}
                          error={errors.lastName}
                          className="text-white !placeholder-white"
                          touched={touched.lastName}
                        />
                      </div>
                      <div className="w-11/12 pl-4 md:pl-0 mt-5">
                        <Input
                          label="User Name"
                          value={values.userName}
                          name="userName"
                          intent="primary"
                          placeholder="Enter Last Name"
                          updateValue={(e) => setFieldValue("userName", e)}
                          error={errors.userName}
                          className="text-white !placeholder-white"
                          touched={touched.userName}
                        />
                      </div>
                      <div className="w-11/12 mt-5  pl-4 md:pl-0 mb-3">
                        <Input
                          label="Email"
                          value={values.email}
                          name="email"
                          intent="primary"
                          placeholder="Enter Last Name"
                          updateValue={(e) => setFieldValue("email", e)}
                          error={errors.email}
                          className="text-white !placeholder-white"
                          touched={touched.email}
                        />
                      </div>{" "}
                      <div className="w-11/12 pl-4 md:pl-0 mt-5 mb-3">
                        <Input
                          type="password"
                          label="Password"
                          value={values.password}
                          name="password"
                          intent="primary"
                          placeholder="Enter Last Name"
                          className="text-white !placeholder-white "
                          updateValue={(e) => setFieldValue("password", e)}
                          error={errors.password}
                          touched={touched.password}
                          passwordIconColor="text-red-900"
                        />
                      </div>{" "}
                      <div className="w-11/12 pl-4 md:pl-0 text-white mt-5 mb-3">
                        <Phone
                          label="Tele/Mobile"
                          optionsClassName="bg-transparent text-white"
                          phoneCodes={CountryCodes}
                          inputClassName="text-white !placeholder-white"
                          placeHolder="Enter Your Mobile/TelePhone Number"
                          optionValuesClassName="text-black text-center"
                          setFieldValue={setFieldValue}
                          values={values}
                          code="country_code"
                          value="phone"
                        />
                      </div>
                      <div className="w-11/12 pl-4 md:pl-0 mt-5 mb-3">
                        <Dropdown
                          options={[
                            { name: "Select Gender", value: "" },
                            { name: "Male", value: "male" },
                            { name: "Female", value: "female" },
                            { name: "Others", value: "others" },
                          ]}
                          optionsClassname="w-full h-full pb-2 pt-2 bg-transparent text-white border-white border"
                          optionValuesClassname="text-black uppercase"
                          label="Gender"
                          name="gender"
                          value={values.gender}
                          updateValue={(e: any) => setFieldValue("gender", e)}
                        />
                      </div>
                      <div className="w-11/12 pl-4 md:pl-0  mt-5 mb-3">
                        <Dropdown
                          options={CountryCodes}
                          value={values.country}
                          optionsClassname="w-full h-full pb-2 pt-2 bg-transparent text-white border-white border"
                          optionValuesClassname="text-black uppercase"
                          label="Country"
                          name="country"
                          updateValue={(e: any) => setFieldValue("country", e)}
                        />
                      </div>
                    </div>
                    <div className="text-center justify-around flex flex-col md:flex-row items-center mt-5">
                      <div className="text-white">
                        <Checkbox
                          value={values.termsAndCon}
                          name="termsAndCo"
                          label="Do you accept the permission? "
                          updateValue={(e) => {
                            setFieldValue("termsAndCo", e);
                            setTermsAndCo(e == true ? true : false);
                          }}
                        />
                      </div>{" "}
                      <div>
                        <p className="text-white">
                          Already Have Account{" "}
                          <span>
                            <Link className="text-blue-400" href="/login">
                              Login
                            </Link>
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center w-full mt-3 mb-3 ">
                      <div className="w-6/12">
                        <Button
                          className="w-full"
                          type="submit"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Processing" : "Submit"}
                        </Button>
                      </div>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};
