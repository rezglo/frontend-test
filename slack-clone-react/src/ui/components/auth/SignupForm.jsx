import { AtSymbolIcon, KeyIcon } from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import Button from "./Button";
import { Navigate } from "react-router";
import { connect } from "react-redux";
import { signup } from "../../../redux/actions/auth";
import { useEffect, useState } from "react";
import RootLayout from "../../hocs/RootLayout";

const SignupForm = ({ signup }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [accountCreated, setAccountCreated] = useState(false);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    re_password: "",
  });

  const { first_name, last_name, email, password, re_password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    signup(first_name, last_name, email, password, re_password);
    setAccountCreated(true);
    window.scrollTo(0, 0);
  };
  if (accountCreated) return <Navigate to="/" />;

  return (
    <RootLayout>
      <div className="flex min-h-screen flex-col p-40 pt-6">
        <form className="space-y-3" onSubmit={(e) => onSubmit(e)}>
          <div className="flex-1 rounded-lg bg-fuchsia-950 px-6 pb-4 pt-8">
            <h1 className={`mb-3 text-2xl text-gray-50`}>
              Please Sign up to continue.
            </h1>
            <div className="w-full">
              <div>
                <label
                  className="mb-3 mt-5 block text-xs font-medium text-gray-50"
                  htmlFor="name"
                >
                  Name
                </label>
                <div className="relative">
                  <input
                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                    id="first_name"
                    type="text"
                    name="first_name"
                    value={first_name}
                    onChange={(e) => onChange(e)}
                    placeholder="Enter your name"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  className="mb-3 mt-5 block text-xs font-medium text-gray-50"
                  htmlFor="lastname"
                >
                  Last Name
                </label>
                <div className="relative">
                  <input
                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                    id="last_name"
                    type="text"
                    name="last_name"
                    value={last_name}
                    onChange={(e) => onChange(e)}
                    placeholder="Enter your last name"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  className="mb-3 mt-5 block text-xs font-medium text-gray-50"
                  htmlFor="email"
                >
                  Email
                </label>
                <div className="relative">
                  <input
                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => onChange(e)}
                    placeholder="Enter your email address"
                    required
                  />
                  <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                </div>
              </div>
              <div className="mt-4">
                <label
                  className="mb-3 mt-5 block text-xs font-medium text-gray-50"
                  htmlFor="password"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                    id="password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => onChange(e)}
                    placeholder="Enter password"
                    required
                    minLength={6}
                  />
                  <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                </div>
                <div className="mt-4">
                  <label
                    className="mb-3 mt-5 block text-xs font-medium text-gray-50"
                    htmlFor="password"
                  >
                    Re-Password
                  </label>
                  <div className="relative">
                    <input
                      className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                      id="re_password"
                      type="password"
                      name="re_password"
                      value={re_password}
                      onChange={(e) => onChange(e)}
                      placeholder="Enter re-password"
                      required
                      minLength={6}
                    />
                    <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                  </div>
                </div>
              </div>
            </div>
            <SignupFormButton />
            <div className="flex h-8 items-end space-x-1">
              {/* Add form errors here */}
            </div>
          </div>
        </form>
      </div>
    </RootLayout>
  );
};

function SignupFormButton() {
  return (
    <Button className="mt-4 w-full">
      Sign up <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
    </Button>
  );
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {
  signup,
})(SignupForm);
