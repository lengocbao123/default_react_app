import AdminIndexPage from "../pages/admin";

const routes = {
  path: "/admin/",
  element: "",
  children: [
    {
      key: "dashboard",
      path: "dashboard",
      icon: "",
      element: AdminIndexPage,
    },
  ],
};

export default routes;
