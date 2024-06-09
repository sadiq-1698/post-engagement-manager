import { Link } from "react-router-dom";

type BreadcrumbType = Array<{
  label: string,
  url?: string,
  [key: string]: string | undefined
}>

const Breadcrumbs = ({ breadCrumbs }: { breadCrumbs: BreadcrumbType }) => {
  return (
    <div
      role="navigation"
      aria-label="Breadcrumbs"
      className="breadcrumbs text-lg"
    >
      <ul>
        {
          breadCrumbs.map(el => {

            if (!el.url) {
              return <li role="link">{el.label}</li>
            }

            return (
              <li role="link">
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