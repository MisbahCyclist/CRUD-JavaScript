var selectedRow = null

// Form Submit Function
function onFormSubmit() {
    // check validity
    if (validate()) {
        // store user data
        var formData = readFormData();
        // check empty row
        if (selectedRow == null)
        {
            // Insert New User Record
            insertNewRecord(formData);
        }
        else
        {
            // Update New User Record
            updateRecord(formData);
        }
        // Reset Input Values
        resetForm();
    }
}
// Get Values From Form
function readFormData() {
    var formData = {};
    // Get Values From  Input
    formData["fuserName"] = document.getElementById("fuserName").value;
    formData["luserName"] = document.getElementById("luserName").value;
    formData["Department"] = document.getElementById("Department").value;
    formData["userName"] = document.getElementById("userName").value;
    formData["password"] = document.getElementById("password").value;
    formData["cpassword"] = document.getElementById("cpassword").value;
    formData["email"] = document.getElementById("email").value;
    formData["contactNo"] = document.getElementById("contactNo").value;
    // return Form Data
    return formData;
}
// Insert New User Record
function insertNewRecord(data) {
    var table = document.getElementById("stdlist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fuserName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.luserName;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Department;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.userName;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.password;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.cpassword;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.email;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = data.contactNo;
    cell9 = newRow.insertCell(8);
    cell9.innerHTML = `<a onClick="onEdit(this)">Edit</a>
    <a onClick="onDelete(this)">Delete</a>`;
}
// Reset Function
function resetForm() {
    document.getElementById("fuserName").value = "";
    document.getElementById("luserName").value = "";
    document.getElementById("Department").value = "";
    document.getElementById("userName").value = "";
    document.getElementById("password").value = "";
    document.getElementById("cpassword").value = "";
    document.getElementById("email").value = "";
    document.getElementById("contactNo").value = "";
    selectedRow = null;
}
// Edit Function
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fuserName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("luserName").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Department").value = selectedRow.cells[2].innerHTML;
    document.getElementById("userName").value = selectedRow.cells[3].innerHTML;
    document.getElementById("password").value = selectedRow.cells[4].innerHTML;
    document.getElementById("cpassword").value = selectedRow.cells[5].innerHTML;
    document.getElementById("email").value = selectedRow.cells[6].innerHTML;
    document.getElementById("contactNo").value = selectedRow.cells[7].innerHTML;
}
// Update Record
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fuserName;
    selectedRow.cells[1].innerHTML = formData.luserName;
    selectedRow.cells[2].innerHTML = formData.Department;
    selectedRow.cells[3].innerHTML = formData.userName;
    selectedRow.cells[4].innerHTML = formData.password;
    selectedRow.cells[5].innerHTML = formData.cpassword;
    selectedRow.cells[6].innerHTML = formData.email;
    selectedRow.cells[7].innerHTML = formData.contactNo;
}
// Delete Function
function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("stdlist").deleteRow(row.rowIndex);
        resetForm();
    }
}
// Check User validation
function validate() {
    isValid = true;
    // First Name validation
    if (document.getElementById("fuserName").value == "")
     {
        isValid = false;
        document.getElementById("fuserNamevalidationError").classList.remove("hide");
    } 
    else {
        isValid = true;
        if (!document.getElementById("fuserNamevalidationError").classList.contains("hide"))
        {
            document.getElementById("fuserNamevalidationError").classList.add("hide");
        }
    }
    // Last Name validation
    if (document.getElementById("luserName").value == "") 
    {
        isValid = false;
        document.getElementById("luserNameNovalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("luserNamevalidationError").classList.contains("hide"))
        {
            document.getElementById("luserNamevalidationError").classList.add("hide");
        }
    }
    // Department validation
    if (document.getElementById("Department").value == "") {
        isValid = false;
        document.getElementById("DepartmentvalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("DepartmentvalidationError").classList.contains("hide"))
        {
            document.getElementById("DepartmentvalidationError").classList.add("hide");
        }
    }
    // TUser name validation
    if (document.getElementById("userName").value == "") {
        isValid = false;
        document.getElementById("userNamevalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("userNamevalidationError").classList.contains("hide"))
        {
            document.getElementById("userNamevalidationError").classList.add("hide");
        }
    }
    //Password validation
    if (document.getElementById("password").value == "") {
        isValid = false;
        document.getElementById("passwordvalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("passwordvalidationError").classList.contains("hide"))
        {
            document.getElementById("passwordvalidationError").classList.add("hide");
        }
    }
    // confirm password validation
    if (document.getElementById("cpassword").value == "") {
        isValid = false;
        document.getElementById("cpasswordvalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("cpasswordvalidationError").classList.contains("hide"))
        {
            document.getElementById("cpasswordvalidationError").classList.add("hide");
        }
    }
    // Email validation
    if (document.getElementById("email").value == "") {
        isValid = false;
        document.getElementById("emailvalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("emailvalidationError").classList.contains("hide"))
        {
            document.getElementById("emailvalidationError").classList.add("hide");
        }
    }
    //Contact number validation
    if (document.getElementById("contactNo").value == "") {
        isValid = false;
        document.getElementById("contactNovalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("contactNovalidationError").classList.contains("hide"))
        {
            document.getElementById("contactNovalidationError").classList.add("hide");
        }
    }

    return isValid;
}