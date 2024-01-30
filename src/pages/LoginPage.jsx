import SignInButton from '@/components/buttons/signInButton'
import SignInForm from '@/components/forms/SignInForm'
import HorizontalDivider from '@/components/dividers/HorizontalDivider'

import slackLogo from '@/assets/slack_logo.svg'
import googleLogo from '@/assets/google.svg'
import appleLogo from '@/assets/apple.svg'

function LoginPage() {
  const onGoogleLogin = () => {
    console.log('Sigin with google')
  }

  const onAppleLogin = () => {
    console.log('Sigin with apple')
  }

  return (
    <div className="max-w-7xl mx-auto ">
      <div id="header" className="w-full flex flex-row justify-center align-middle pt-12 pb-10">
        <div className="w-1/3 max-[981px]:hidden"></div>
        <div className="max-[981px]:w-full w-1/3 flex flex-row justify-center items-center">
          <img src={slackLogo} alt="Slack logo" className="w-[103px] h-[26px]" />
        </div>
        <div className="w-1/3 max-[981px]:hidden flex flex-col items-end pr-10">
          <p className="text-xs">Don&apos;t have an account yet?</p>
          <a
            href="#"
            className="text-[#1264a3] text-xs font-bold"
            onClick={() => console.log('Redirect to Sign Up page...')}
          >
            Create an account
          </a>
        </div>
      </div>

      <div id="body" className="max-w-[400px] mx-auto flex flex-col items-center justify-center max-[981px]:px-3">
        <span className="text-4xl mb-8 font-bold font-['Slack-Larsseit, Helvetica Neue, Helvetica, Segoe UI, Tahoma, Arial, sans-serif']">Sign in</span>

        <SignInButton
          className="text-gray-900 bg-white hover:bg-gray-5 border-gray-400"
          key="google-sigin-button"
          text="Sign In With Google"
          textColor="gray-900"
          bgColor="white"
          hoverBgColor="gray-50"
          borderColor="gray-400"
          imageSrc={googleLogo}
          imageAlt="Google"
          onClick={onGoogleLogin}
        />
        <SignInButton
          key="apple-sigin-button"
          text="Sign In With Apple"
          textColor="gray-900"
          bgColor="white"
          hoverBgColor="gray-50"
          borderColor="gray-400"
          imageSrc={appleLogo}
          imageAlt="Apple"
          onClick={onAppleLogin}
        />

        <HorizontalDivider text="OR" className="mt-6 mb-6 border-gray-300 text-gray-700" />

        <SignInForm />
      </div>
    </div>
  )
}

export default LoginPage

