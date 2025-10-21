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
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Home</title>
    <link href="https://cdn.lineicons.com/4.0/lineicons.css" rel="stylesheet" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous" />
    <link rel="stylesheet" href="../Css/dashbord.css" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
        integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="../Css/home.css">
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
                <h2 class="text-center mb-3">Register a Complaint</h2>
                <hr>
                <form id="sheetdb-form">

                    <div class="mb-3 text-center mt-5">
                        <div class="input-btn d-flex justify-content-center col-6 mx-auto">
                            <input type="text" class="form-control" id="circuit_id" name="circuit_id"
                                placeholder="Service Id" required>
                            <button type="button" id="SearchButton" class="btn btn-outline-secondary ms-2"><i
                                    class="fa fa-search"></i></button>
                        </div>
                    </div>

                    <small class="text-muted">Eg. 040-89876567/02717-69587 (Landline)</small>

                    <div class="mt-3 mb-3 input-btn d-flex justify-content-center col-6 mx-auto">
                        <textarea class="form-control" id="Address" placeholder="Address" name="Address" rows="3"
                            required disabled></textarea>
                    </div>

                    <div class="mb-3 input-btn d-flex justify-content-center col-6 mx-auto">
                        <input type="text" class="form-control" id="Number" placeholder="Number" name="Number" required
                            disabled>
                    </div>


                    <div class="modify_details mb-3 col-6 mx-auto">
                        <label>Modify your Contact number & Address</label>
                        <input type="checkbox" id="SameAddress" checked>
                    </div>

                    <div id="sameDetailsDiv">
                        <div class="mb-3 input-btn d-flex justify-content-center col-6 mx-auto" id="addressField">
                            <textarea class="form-control" placeholder="Current Address" name="CurrentAddress" rows="3"
                                id="CurrentAddress"></textarea>
                        </div>

                        <div class="mb-3 input-btn d-flex justify-content-center col-6 mx-auto" id="numberField">
                            <input type="text" class="form-control" placeholder="New Number" name="CurrentNumber"
                                id="CurrentNumber">
                        </div>
                    </div>

                    <h4 id="AlreadyBooked" class="text-danger">Complain Already Booked</h4>

                    <div id="SubmissionController">
                        <div class="d-flex justify-content-around input-btn d-flex justify-content-center col-6 mx-auto">
                            <button type="submit" class="btn btn-outline-primary" id="SubmitButton">Submit</button>
                            <button type="reset" class="btn btn-outline-dark" id="CancelButton">Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
</body>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
    crossorigin="anonymous"></script>
<script src="../Js/Complain_Booking.js"></script>

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>



<script>document.querySelector('.toggle-btn').addEventListener('click', function () {
        document.getElementById('sidebar').classList.toggle('expand');
    }); </script>
    <script>
        // Prevent the user from using the back button after logout
        if (window.history.replaceState) {
            window.history.replaceState(null, null, window.location.href);
        }
    </script>
    <script src="../Js/bsnl_menu_pending_fault.js"></script>

</html>