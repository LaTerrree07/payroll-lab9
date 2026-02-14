const form = document.getElementById("payrollForm");
const tbody = document.getElementById("payrollTbody");

const sumEmployees = document.getElementById("sumEmployees");
const sumGross = document.getElementById("sumGross");
const sumDed = document.getElementById("sumDed");
const sumNet = document.getElementById("sumNet");

const msg = document.getElementById("msg");
const submitBtn = document.getElementById("submitBtn");
const clearAllBtn = document.getElementById("clearAllBtn");
const resetBtn = document.getElementById("resetBtn");

let records = [];
let editIndex = null;

function formatMoney(n) {
  return "₱" + n.toFixed(2);
}

function updateSummary() {
  let grossTotal = 0;
  let dedTotal = 0;
  let netTotal = 0;

  records.forEach((r) => {
    grossTotal += r.gross;
    dedTotal += r.taxDeduction + r.other;
    netTotal += r.net;
  });

  sumEmployees.textContent = records.length;
  sumGross.textContent = formatMoney(grossTotal);
  sumDed.textContent = formatMoney(dedTotal);
  sumNet.textContent = formatMoney(netTotal);
}

function renderTable() {
  tbody.innerHTML = "";

  records.forEach((r, index) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${index + 1}</td>
      <td>${r.name}</td>
      <td>${r.hours}</td>
      <td>${r.rate}</td>
      <td>${formatMoney(r.gross)}</td>
      <td>${formatMoney(r.taxDeduction)}</td>
      <td>${formatMoney(r.other)}</td>
      <td>${formatMoney(r.net)}</td>
      <td>
        <button onclick="editRecord(${index})">Edit</button>
        <button onclick="deleteRecord(${index})">Delete</button>
      </td>
    `;

    tbody.appendChild(tr);
  });

  updateSummary();
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("empName").value;
  const hours = parseFloat(document.getElementById("hours").value);
  const rate = parseFloat(document.getElementById("rate").value);
  const taxPercent = parseFloat(document.getElementById("tax").value);
  const other = parseFloat(document.getElementById("otherDed").value);

  const gross = hours * rate;
  const taxDeduction = gross * (taxPercent / 100);
  const net = gross - taxDeduction - other;

  const record = { name, hours, rate, gross, taxDeduction, other, net };

  if (editIndex === null) {
    records.push(record);
  } else {
    records[editIndex] = record;
    editIndex = null;
    submitBtn.textContent = "Add Payroll";
  }

  form.reset();
  renderTable();
});

function editRecord(index) {
  const r = records[index];

  document.getElementById("empName").value = r.name;
  document.getElementById("hours").value = r.hours;
  document.getElementById("rate").value = r.rate;
  document.getElementById("tax").value = (r.taxDeduction / r.gross) * 100;
  document.getElementById("otherDed").value = r.other;

  editIndex = index;
  submitBtn.textContent = "Update Payroll";
}

function deleteRecord(index) {
  records.splice(index, 1);
  renderTable();
}

clearAllBtn.addEventListener("click", function () {
  records = [];
  renderTable();
});

resetBtn.addEventListener("click", function () {
  form.reset();
  editIndex = null;
  submitBtn.textContent = "Add Payroll";
});
