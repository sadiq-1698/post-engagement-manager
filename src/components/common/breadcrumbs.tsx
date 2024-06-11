import { Link } from "react-router-dom";

type BreadcrumbsType = Array<{
  label: string,
  url?: string,
  [key: string]: string | undefined
}>

const Breadcrumbs = ({ breadCrumbs }: { breadCrumbs: BreadcrumbsType }) => {
  return (
    <div
      role="navigation"
      aria-label="Breadcrumbs"
      className="breadcrumbs text-lg"
    >
      <ul>
        {
          breadCrumbs.map((el, idx) => {

            if (!el.url) {
              return <li key={el.url + "-|-" + idx} role="link">{el.label}</li>
            }

            return (
              <li role="link" key={el.url + "-|-" + idx}>
                <Link to={el.url}>{el.label}</Link>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}

export default Breadcrumbs;