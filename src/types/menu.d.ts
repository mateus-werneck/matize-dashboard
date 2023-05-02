export type MenuAdminView = {
  matizeId: string;
  parentId?: string;
  name: string;
  route: string;
  icon: string;
  Children: MenuAdminView[];
};
