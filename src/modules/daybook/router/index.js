export default {
  name: "daybook",
  component: () =>
    import(
      /* webpackChunkName: "darybook" */ "@/modules/daybook/layouts/DarBookLayout.vue"
    ),
  children: [
    {
      path: "",
      name: "not-entry",
      component: () =>
        import(
          /* webpackChunkName: "daybook-noentry" */ "@/modules/daybook/views/NoEntrySelected.vue"
        ),
    },
    {
      path: ":entryId",
      name: "entry-id",
      component: () =>
        import(
          /* webpackChunkName: "daybook-id" */ "@/modules/daybook/views/EntryView.vue"
        ),
    },
    {
      path: "",
      redirect: "/daybook",
    },
  ],
};
