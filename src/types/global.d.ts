export type ToolsOption = {
  label: string;
  url: string;
  svg?: JSX.Element;
}[];

export type TableSortOrder = "asc" | "desc" | "reset";

export type TableRowDataType = {
  id: string;
  [key: string]: string | number;
};

export type SelectOptionType = {
  value: string;
  label: string;
  [key: string]: string;
};

export type ReactionsType = Array<{ key: string; label: string }>;

export type TableRowActionType = {
  label: string;
  action: (params: any) => void;
};
