import { connect } from "react-redux";
import { Navigate } from "react-router";
import { AtSymbolIcon, KeyIcon } from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import Button from "./Button";
import { login } from "../../../redux/actions/auth";
import { useEffect, useState } from "react";

const LoginForm = ({ login }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const [activated, setActivated] = useState(false);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);
    setActivated(true);
  };

  if (activated) return <Navigate to="/" />;

  return (
    <main className="flex min-h-screen flex-col p-40">
      <form className="space-y-3" onSubmit={(e) => onSubmit(e)}>
        <div className="flex-1 rounded-lg bg-fuchsia-950 px-6 pb-4 pt-8">
          <h1 className={`mb-3 text-2xl text-gray-50`}>
            Please log in to continue.
          </h1>
          <div className="w-full">
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
            </div>
          </div>
          <LoginButton />
          <div className="flex h-8 items-end space-x-1">
            {/* Add form errors here */}
          </div>
        </div>
      </form>
    </main>
  );
};

function LoginButton() {
  return (
    <Button className="mt-4 w-full">
      Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
    </Button>
  );
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {
  login,
})(LoginForm);
