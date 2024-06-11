import { Link } from "react-router-dom";

type BreadcrumbsType = Array<{
  label: string,
  url?: string,
  [key: string]: string | undefined
}>

/**
 * This component renders a breadcrumb navigation list based on the provided breadcrumbs data.
 * It supports both clickable links and plain text items.
 * 
 * @component
 * 
 * @param {object} props - The properties object.
 * @param {BreadcrumbsType} props.breadCrumbs - An array of breadcrumb items, each containing a label and an optional URL.
 */
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