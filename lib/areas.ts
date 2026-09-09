export const areaGroups = [
  {
    title: "Glasgow City & Inner Districts",
    areas: [
      "Glasgow City Centre",
      "Merchant City",
      "Finnieston",
      "Partick",
      "Hillhead",
      "Dennistoun",
      "Bridgeton",
      "Govan",
      "Ibrox",
    ],
  },
  {
    title: "Southside",
    areas: [
      "Shawlands",
      "Pollokshields",
      "Giffnock",
      "Clarkston",
      "Newton Mearns",
      "Barrhead",
      "Neilston",
      "Rutherglen",
      "Cambuslang",
    ],
  },
  {
    title: "North & West / Dunbartonshire",
    areas: [
      "Bearsden",
      "Milngavie",
      "Bishopbriggs",
      "Clydebank",
      "Dumbarton",
      "Greenock",
    ],
  },
  {
    title: "Renfrewshire & Airport Corridor",
    areas: ["Paisley", "Renfrew", "Johnstone"],
  },
  {
    title: "Lanarkshire & Beyond",
    areas: [
      "East Kilbride",
      "Hamilton",
      "Motherwell",
      "Coatbridge",
      "Airdrie",
      "Cumbernauld",
      "Uddingston",
      "Stirling",
      "Falkirk",
    ],
  },
  {
    title: "Ayrshire",
    areas: ["Kilmarnock", "Irvine", "Ayr"],
  },
];

export const allAreas = areaGroups.flatMap((g) => g.areas);
