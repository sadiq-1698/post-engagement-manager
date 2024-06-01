import { ReactComponent as HamburgerIcon } from '../../assets/svgs/hamburger.svg'

const AppLogo = () => {
  return (
    <div className="lg:px-2">
      <a className="hidden lg:block" href="/home">
        <div className="avatar">
          <div className="w-10 rounded-full">
            <img
              src="https://graph.facebook.com/237352949662793/picture?type=normal"
              alt="Page Name"
            />
          </div>
        </div>
      </a>
      <label className="btn btn-circle btn-ghost lg:hidden">
        <HamburgerIcon />
      </label>
    </div>
  );
}

export default AppLogo;