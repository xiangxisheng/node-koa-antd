export default async (param) => {
  return {
    template: await (await fetch('./page/panel/index.htm')).text(),
    data() {
      return {

      }
    },
    async created() {

    },
    methods: {

    },
  }
}
