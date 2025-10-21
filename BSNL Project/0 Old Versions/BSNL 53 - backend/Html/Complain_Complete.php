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
    <title>Complete Faults</title>
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
                    <a href="/php/home2.php" class="sidebar-link">
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
                    Complete Faults
                    <hr>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Search Number / Complain Id"
                            aria-label="Recipient's username" aria-describedby="button-addon2" id="searchInput2">
                        <button class="btn btn-outline-secondary" type="button" id="searchBtn2">Search</button>
                    </div>
                    <table class="table caption-top">
                        <caption>Complete Orders</caption>
                        <thead>
                            <tr>
                                <th scope="col">Complain_ID</th>
                                <th scope="col">Exchange</th>
                                <th scope="col">Circuit id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Address</th>
                                <th scope="col">Contact</th>
                                <th scope="col">Booking Date Time</th>
                                <th scope="col">Complete Date Time</th>
                                <th scope="col">Duration</th>
                                <th scope="col">Remark</th>
                                <!-- <th scope="col">Close</th> -->
                            </tr>
                        </thead>
                        <tbody id="faultOrdersBody">
<!--                             
                            <tr>
                                <td>1</td>
                                <td>79-2213251</td>
                                <td>hg  hgh uhguyg uyghgh gu</td>
                                <td>123456789</td>
                                <td>30-9-24</td>
                                <td>2</td>
                                <td><button type="button" class="btn btn-outline-danger assignBtn" >Remark</button></td>
                                <td><button type="button" class="btn btn-outline-secondary closeBtn">Completed</button></td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </td>
                                <td colspan="5">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="inputGroup-sizing-default">Remark</span>
                                        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                                    </div>
                                </td>
                                <td><button type="button" class="btn btn-outline-secondary">Cancle</button></td>
                            </tr> -->
                    </table>


                    <!-- <nav aria-label="Page navigation example">
                        <ul class="pagination justify-content-end">
                            <li class="page-item disabled">
                                <a class="page-link">Previous</a>
                            </li>
                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item">
                                <a class="page-link" href="#">Next</a>
                            </li>
                        </ul>
                    </nav> -->
                    <nav aria-label="Page navigation example">
                        <ul class="pagination justify-content-end" id="pagination">
                            <!-- Pagination buttons will be dynamically inserted here -->
                        </ul>
                    </nav>
                </h1>
            </div>
            <h1 id = "NoComplainMessage">No complain</h1>
        </div>
    </div>
</body>

<!-- <script src="../Js/dashbord.js"></script> -->
<script> 
</script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
crossorigin="anonymous"></script>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="../Js/Complain_Completed.js"></script>
<script src="../Js/complete_complain_search.js"></script>
<!-- <script src="../Js/dashbord.js"></script> -->
<script>document.querySelector('.toggle-btn').addEventListener('click', function () {
        document.getElementById('sidebar').classList.toggle('expand');
    });
</script>
<script>
    // Prevent the user from using the back button after logout
    if (window.history.replaceState) {
        window.history.replaceState(null, null, window.location.href);
    }
</script>
<script>
        document.querySelectorAll('.sidebar-link').forEach(link => {
          if (link.href === window.location.href) {
            link.classList.add('active');
          }
        });
        </script>
</html>