
//////////////////////////////////Logout///////////////////////////
let logout = document.getElementById("logout");

logout.addEventListener("click", () => {
  localStorage.setItem("isLoggedIn", "false");

  window.location.href = "login.html";
});


/////////////////////////////////// CRUD //////////////////////////
let id = "";
showData();
function manageData() {
  // console.log('clicked')
  document.getElementById("msg").innerHTML = "";
  let userName = document.getElementById("name").value;
  if (userName == "") {
    document.getElementById("msg").innerHTML = "Enter your name";
  } else {
    if (id == "") {
      let arr = JSON.parse(localStorage.getItem("crud"));
      if (arr == null) {
        let data = [userName];
        localStorage.setItem("crud", JSON.stringify(data));
      } else {
        arr.push(userName);
        localStorage.setItem("crud", JSON.stringify(arr));
      }
      document.getElementById("name").value = "";
      document.getElementById("msg").innerHTML = "Data Added";
    } else {
      let arr = JSON.parse(localStorage.getItem("crud"));
      arr[id] == userName;
      console.log(arr);
      localStorage.setItem("crud", JSON.stringify(arr));
      document.getElementById("msg").innerHTML = "Data Updated";
    }
    showData();
  }

}

function showData() {
  let arr = JSON.parse(localStorage.getItem("crud"));

  if (arr !== null) {
    let displayData = "";
    let serNo = 1;
    for (let k in arr) {
      displayData =
        displayData +
        `<tr><td>${serNo}</td><td>${arr[k]}</td><td><a href="javascript:void(0)" onClick="editData(${k})">Edit</a>&nbsp;&nbsp;<a href="javascript:void(0)" onClick="deleteData(${k})">Delete</a></td></tr>`;
      serNo++;
    }
    document.getElementById("t-body").innerHTML = displayData;
  }
}

function deleteData(did) {
  let arr = JSON.parse(localStorage.getItem("crud"));
  arr.splice(did, 1);
  localStorage.setItem("crud", JSON.stringify(arr));
  selectData();
}

function editData(edid) {
  id = edid;
  // console.log(edid);
  let arr = JSON.parse(localStorage.getItem("crud"));
  document.getElementById("name").value = arr[edid];
  // localStorage.setItem('crud',JSON.stringify(arr));
}
