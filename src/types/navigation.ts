export interface SubPage {
  name: string;
  path: string;
}

export interface NavItem {
  name: string;
  path: string;
  subPages?: SubPage[];
}
