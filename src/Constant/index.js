export const headCells = [
  {
    id: "date",
    label: "تاريخ الرفع",
  },
  {
    id: "type",
    label: "النوع",
  },
  {
    id: "name",
    label: "الاسم",
  },
  {
    id: "id",
    label: "ID",
  },
];
function createData(id, name, type, date) {
  return {
    id,
    name,
    type,
    date,
  };
}

export const rows = [
  createData("#32261", "سورة الفلق", "ورد يومي", "10-10-2024"),
  createData("#32261", "سورة الانعام", "اذكار", "10-10-2024"),
  createData("#32261", "سورة محمد", "ورد يومي", "10-10-2024"),

];
