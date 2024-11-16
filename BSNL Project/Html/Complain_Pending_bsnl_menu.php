<?php
session_start();

// Ensure the user is logged in
if (!isset($_SESSION['userid'])) {
    header("Location: login.html");
    exit();
}

// Prevent page caching after login
header("Cache-Control: no-cache, no-store, must-revalidate"); // HTTP 1.1
header("Pragma: no-cache"); // HTTP 1.0
header("Expires: 0"); // Proxies
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pending Faults</title>
    <link href="https://cdn.lineicons.com/4.0/lineicons.css" rel="stylesheet" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <link rel="stylesheet" href="../Css/dashbord.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
    integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />

</head>

<body>
    <div class="wrapper">
        <aside id="sidebar" class="expand">
            <div class="d-flex">
                <button class="toggle-btn" type="button">
                    <i class="lni lni-grid-alt"></i>
                </button>
                <div class="sidebar-logo">
                    <a href="../index.html">Shivam Telecom</a>
                </div>
            </div>
            <ul class="sidebar-nav">
                <li class="sidebar-item">
                    <a href="/Html/home.php" class="sidebar-link">
                        <i class="lni lni-user"></i>
                        <span>Profile</span>
                    </a>
                </li>
                <li class="sidebar-item">
                    <a href="/Html/Circuit_Data.php" class="sidebar-link">
                        <i class="lni lni-agenda"></i>
                        <span>Data</span>
                    </a>
                </li>
                <li class="sidebar-item">
                    <a href="/Html/complain_booking_new.php" class="sidebar-link">
                        <i class="fa-solid fa-book"></i>
                        <span>Complain Book</span>
                    </a>
                </li>
                <li class="sidebar-item">
                    <a href="complain_track_new.php" class="sidebar-link">
                        <i class="fa-solid fa-shuffle"></i>
                        <span>Complain Track</span>
                    </a>
                </li>
                <li class="sidebar-item">
                    <a href="#" class="sidebar-link collapsed has-dropdown" data-bs-toggle="collapse"
                        data-bs-target="#auth" aria-expanded="false" aria-controls="auth">
                        <i class="lni lni-protection"></i>
                        <span>Complain</span>
                    </a>
                    <ul id="auth" class="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                      <li class="sidebar-item">
                        <a href="/Html/Complain_Pending_bsnl_menu.php" class="sidebar-link">Bsnl Pending</a>
                    </li> 
                      <li class="sidebar-item">
                            <a href="/Html/Complain_Pending.php" class="sidebar-link">Pending</a>
                        </li>
                        <li class="sidebar-item">
                            <a href="/Html/Complain_Complete.php" class="sidebar-link">Complete</a>
                        </li>
                    </ul>
                </li>
                <li class="sidebar-item">
                    <a href="#" class="sidebar-link">
                        <i class="lni lni-popup"></i>
                        <span>Notification</span>
                    </a>
                </li>
                <li class="sidebar-item">
                    <a href="#" class="sidebar-link">
                        <i class="lni lni-cog"></i>
                        <span>Setting</span>
                    </a>
                </li>
            </ul>
            <div class="sidebar-footer" id="logout-btn">
              <a href="../Php/logout.php" class="sidebar-link" id="logout-button">
                  <i class="lni lni-exit"></i>
                  <span >Logout</span>
              </a>
          </div>
          
        </aside>
        <!-- ------------------------------------------------left menu-------------------------------------- -->
        <div class="main p-3">
            <div class="text-center">
                <h1>
                    Bsnl Pending Faults
                    <hr>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Search Number / Complain Id"
                            aria-label="Recipient's username" aria-describedby="button-addon2" id="searchInput1">
                        <button class="btn btn-outline-secondary" type="button" id="searchBtn1" >Search</button>
                    </div>
                    <table class="table caption-top">
                        <caption>Circuit Faults</caption>
                        <thead>
                            <tr>
                                <th scope="col">Complain_ID</th>
                                <th scope="col">Exchange</th>
                                <th scope="col">Circuit id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Address</th>
                                <th scope="col">Contact</th>
                                <th scope="col">Date</th>
                                <th scope="col">Duration</th>
                                <th scope="col">Reassign</th>
                                <th scope="col">Close</th>
                            </tr>
                        </thead>
                        <tbody id="faultOrdersBody2">
                        <tr>
                            <td>10</td>
                            <td>AHDVST</td>
                            <td>15261352615</td>
                            <td>CITY</td>
                            <td>15 NUMBER</td>
                            <td>000000000</td>
                            <td>08-11-2024</td>
                            <td>5</td>
                            <td><button type="button" class="btn btn-outline-danger assignBtn" >Re-Assign</button></td>
                            <td><button type="button" class="btn btn-outline-danger closebtn" >Close</button></td>
                        </tr>

                            <tr id="remark_reassign" style="display: none;">
                                <td colspan="1">
                                    <select class="form-select" aria-label="Default select example" id="" disabled>
                                        <option >ROOC</option>
                                    </select>
                                </td>
                                <td colspan="3">
                                    <div class="input-group mb-3" >
                                        <span class="input-group-text" id="inputGroup-sizing-default" >F Remark</span>
                                        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"  id="" disabled>
                                    </div>
                                </td>
                                <td colspan="2">
                                    <select class="form-select" aria-label="Default select example" id="ResolutionCode_${order.Complain_ID}">
                                        <option selected>Choose Issue</option>
                                        <option value="200">r a f</option>
                                       
                                    </select>
                                </td>
                                <td colspan="3">
                                    <div class="input-group mb-3" >
                                        <span class="input-group-text" id="inputGroup-sizing-default" >Bsnl Remark</span>
                                        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"  id="">
                                    </div>
                                </td>
                                <td><button type="button" class="btn btn-outline-secondary" onClick="" id="">Submit</button></td>
                            </tr>

                            <tr id="close_complain" style="display: none;">
                                    <td colspan="1">
                                        <select class="form-select" aria-label="Default select example" id="" disabled>
                                            <option >ROOC</option>
                                        </select>
                                    </td>
                                    <td colspan="3">
                                        <div class="input-group mb-3" >
                                        <span class="input-group-text" id="inputGroup-sizing-default" >F Remark</span>
                                        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"  id="" placeholder="asdas" disabled>
                                    </div>
                                </td>

                                <td colspan="5">
                                    <div class="input-group mb-3" >
                                        <span class="input-group-text" id="inputGroup-sizing-default" >Bsnl Remark</span>
                                        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"  id="">
                                    </div>
                                </td>
                                <td><button type="button" class="btn btn-outline-secondary" onClick="" id="">Submit</button></td>
                            </tr> 
                        </tbody>
                    </table>


                    <nav aria-label="Page navigation example">
                        <ul class="pagination justify-content-end" id="pagination">
                            <!-- Pagination buttons will be dynamically inserted here -->
                        </ul>
                    </nav>
                </h1>
            </div>
            <h1 id="NoComplainMessage">No complain</h1>
        </div>
    </div>
</body>


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
    crossorigin="anonymous"></script>
<script>document.querySelector('.toggle-btn').addEventListener('click', function () {
        document.getElementById('sidebar').classList.toggle('expand');
    });
</script>
<script>
   let remark_reassign = document.getElementById('remark_reassign');
document.querySelectorAll('.assignBtn').forEach(function(button,index) {
    button.addEventListener('click', function() {
        // const remark_reassign = document.getElementById('remark_reassign')[index];
        if(remark_reassign.style.display = 'none'||remark_reassign.style.display === ''){
            remark_reassign.style.display = 'table-row';
            close_complain.style.display = 'none';
        }else{
            remark_reassign.style.display = 'none';
        }
    });
});

let close_complain = document.getElementById('close_complain');
document.querySelectorAll('.closebtn').forEach(function(button,index) {
    button.addEventListener('click', function() {
        // const remark_reassign = document.getElementById('remark_reassign')[index];
        if(close_complain.style.display = 'none'||close_complain.style.display === ''){
            close_complain.style.display = 'table-row';
            remark_reassign.style.display = 'none';
        }else{
            close_complain.style.display = 'none';
        }
    });
});
</script>

<script>
        document.querySelectorAll('.sidebar-link').forEach(link => {
          if (link.href === window.location.href) {
            link.classList.add('active');
          }
        });
        </script>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="../Js/bsnl_menu_pending_fault.js"></script>
</html>