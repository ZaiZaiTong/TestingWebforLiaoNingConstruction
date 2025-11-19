const img = (name) => `/assets/properties/${name}.jpg`;

const data = {
  forSale: [
    { id: "kembangan", title: "No. 5 Tuas View Close", district: 14, image: img("kembangan"), link: "/properties/kembangan" },
    { id: "katong-joo-chiat", title: "No. 11 Tuas View Close", district: 22, image: img("katong"), link: "/properties/katong-joo-chiat" },
    { id: "serangoon-gardens-1", title: "No. 65 Farleigh Ave", district: 19, image: img("serangoon1"), link: "/properties/serangoon-gardens-1" },
  ],
  underConstruction: [
    { id: "uc-1", title: "Project A", district: 10, image: img("placeholder"), link: "/properties/project-a" },
    { id: "uc-2", title: "Project B", district: 11, image: img("placeholder"), link: "/properties/project-b" },
  ],
  completed: [
    { id: "c-1", title: "No. 19 Tannery Lane", district: 13, image: img("placeholder"), link: "/properties/completed-a" },
    { id: "c-2", title: "No. 32 Jalan Jitong", district: 28, image: img("placeholder"), link: "/properties/completed-b" },
    { id: "chiselhurst63", title: "No. 63 Chiselhurst Grove", district: 19, image: img("placeholder"), link: "/properties/chiselhurst63" },
    { id: "crowhurst52", title: "No. 52 Crowhurst Drive", district: 19, image: img("placeholder"), link: "/properties/crowhurst52" },
    { id: "huddington2", title: "No. 2 Huddington Ave", district: 19, image: img("huddington2"), link: "/properties/huddington2" },
    { id: "portchester10", title: "No. 10 Portchester Ave", district: 19, image: img("portchester10"), link: "/properties/portchester10" },
    { id: "crowhurst57", title: "No. 57 Crowhurst Drive", district: 19, image: img("crowhurst57"), link: "/properties/crowhurst57" },
    { id: "farleigh81", title: "No. 81 Farleigh Ave", district: 19, image: img("farleigh81"), link: "/properties/farleigh81" },
    { id: "orchard320", title: "320 Orchard Road", district: 9, image: img("orchard320"), link: "/properties/orchard320" },
    { id: "geyland582", title: "No. 582 Geylang Road", district: 14, image: img("geyland582"), link: "/properties/geylang582" },
    { id: "kalidasa16", title: "No. 16 Kalidasa Ave", district: 26, image: img("kalidasa16"), link: "/properties/kalidasa16" },
    { id: "jalanlakum20", title: "No. 20 Jalan Lakum", district: 28, image: img("jalanlakum20"), link: "/properties/jalanlakum20" },
    { id: "borthwick29", title: "No. 29 Borthwick Drive", district: 19, image: img("borthwick29"), link: "/properties/borthwick29" },
    { id: "blandford50", title: "No. 50 Blandford Drive", district: 19, image: img("blandford50"), link: "/properties/blandford50" },
    { id: "happyavenue48", title: "No. 48 Happy Avenue North", district: 13, image: img("happyavenue48"), link: "/properties/happyavenue48" },
    { id: "braemer32", title: "No. 32 Braemer Dr", district: 19, image: img("braemer32"), link: "/properties/braemer32" },
    { id: "stokesay8", title: "No. 8 Stokesay Dr", district: 19, image: img("stokesay8"), link: "/properties/stokesay8" },
    { id: "bodmin75", title: "No. 75 Bodmin Dr", district: 19, image: img("bodmin75"), link: "/properties/bodmin75" },
    { id: "florissa58", title: "No. 58 Florissa Park", district: null, image: img("florissa58"), link: "/properties/florissa58" },
    { id: "cassia2", title: "No. 2 Cassia Dr", district: null, image: img("cassia2"), link: "/properties/cassia2" },
  ],
};

export default data;
