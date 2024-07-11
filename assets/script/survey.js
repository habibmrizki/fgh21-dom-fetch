const link = "https://st2lww-8888.csb.app/habib/data";
const formFetch = document.getElementById("form-survey");

// yang di tampilkan di server
formFetch.addEventListener("submit", async (event) => {
  event.preventDefault();
  const fname = event.target.fname.value;
  const age = event.target.age.value;
  const gender = event.target.gender.value;
  const smoke = event.target.smoke.value;
  console.log(smoke);
  const smoker = event.target.smoker;
  let cigar = [];
  for (let i = 0; i < smoker.length; i++) {
    if (smoker[i].checked) {
      cigar.push(smoker[i].value);
    }
  }

  if (fname === "" || age <= 0 || gender === "" || smoke === "") {
    window.alert("You must fill the form!");
    return;
  }

  const arrCigar = cigar.join("; ");
  const formData = new URLSearchParams();
  formData.append("name", fname);
  formData.append("age", age);
  formData.append("gender", gender);
  formData.append("isSmoker", smoke);
  formData.append("cigarVariant", arrCigar);

  for (const [key, value] of formData.entries()) {
    console.log(`${key}, ${value}`);
  }

  fetch("https://st2lww-8888.csb.app/habib/data", {
    method: "POST",
    body: formData,
  }).then((response) => {
    response.json().then((data) => {
      if (data.success === true) {
        window.alert(data.message);
        getData();
      } else {
        window.alert(data.message);
      }
    });
  });
  formFetch.reset();
});

// table
const tBody = document.getElementById("tbody");
async function getData() {
  console.log("start...........");
  const response = await fetch(link);
  const data = await response.json();
  tBody.innerHTML = "";
  data.results.forEach((element) => {
    const row = document.createElement("tr");
    const dataName = document.createElement("td");
    const dataAge = document.createElement("td");
    const dataGender = document.createElement("td");
    const dataSmoker = document.createElement("td");
    const dataVariant = document.createElement("td");
    dataName.textContent = element.name;
    dataAge.textContent = element.age;
    dataGender.textContent = element.gender;
    if (element.isSmoker) {
      dataSmoker.textContent = document.getElementById("yes").value;
    } else {
      dataSmoker.textContent = document.getElementById("no").value;
    }
    dataVariant.textContent = element.cigarVariant.join("; ");
    row.appendChild(dataName);
    row.appendChild(dataAge);
    row.appendChild(dataGender);
    row.appendChild(dataSmoker);
    row.appendChild(dataVariant);
    tBody.appendChild(row);
  });
}
getData();
