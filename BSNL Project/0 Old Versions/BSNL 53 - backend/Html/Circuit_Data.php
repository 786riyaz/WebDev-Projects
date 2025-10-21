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

// Set the user role
$role = isset($_SESSION['Role']) ? $_SESSION['Role'] : ''; // Default role
?>
<script>
  const userRole = "<?php echo $role; ?>"; // Embed user role into JavaScript
</script>



<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Total Orders</title>
  <link href="https://cdn.lineicons.com/4.0/lineicons.css" rel="stylesheet" />
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
    integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />

  <link rel="stylesheet" href="../Css/dataadd.css">


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
          <a href="#" class="sidebar-link">
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
          <a href="/Html/complain_track_new.php" class="sidebar-link">
            <i class="fa-solid fa-shuffle"></i>
            <span>Complain Track</span>
          </a>
        </li>
        <li class="sidebar-item">
          <a href="#" class="sidebar-link collapsed has-dropdown" data-bs-toggle="collapse" data-bs-target="#auth"
            aria-expanded="false" aria-controls="auth">
            <i class="lni lni-protection"></i>
            <span>Complain</span>
          </a>
          <ul id="auth" class="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
            <li class="sidebar-item">
              <a href="/Html/Complain_Pending_bsnl_menu.php" class="sidebar-link">Bsnl Pending</a>
            </li>
            <?php
            // Check user role and include corresponding HTML file
            if (isset($_SESSION['Role'])) {
              // Check if the user is not 'admin' or 'manager'
              if ($_SESSION['Role'] == 'admin' || $_SESSION['Role'] == 'manager') {
                // Show the 'Pending' option only for admin or manager
                echo '
              <li class="sidebar-item">
                <a href="/Html/Complain_Pending.php" class="sidebar-link">Pending</a>
              </li>
              <li class="sidebar-item">
                <a href="/Html/Complain_Complete.php" class="sidebar-link">Complete</a>
              </li>';
              }
            } else {
              // Display an access denied message if the user is not logged in
              echo "Access denied. Please log in.";
            }
            ?>


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
        <a href="/Php/logout.php" class="sidebar-link" id="logout-button">
          <i class="lni lni-exit"></i>
          <span>Logout</span>
        </a>
      </div>

    </aside>
    <!-- ------------------------------------------------left menu-------------------------------------- -->
    <div class="main p-3">
      <div class="text-center">
        <h1>
          Total Orders</h1>
        <!-- <hr> -->
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Search Number / Complain Id"
            aria-label="Recipient's username" aria-describedby="button-addon2" id="searchInput">
          <button class="btn btn-outline-secondary" type="button" id="searchBtn">Search</button>
        </div>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <?php
          // Check user role and include corresponding HTML file
          if (isset($_SESSION['Role'])) {
            // Check if the user is not 'admin' or 'manager'
            if ($_SESSION['Role'] == 'admin' || $_SESSION['Role'] == 'manager') {
              // Show the 'Pending' option only for admin or manager
              echo '<button class="btn btn-outline-success me-md-2" type="button" id="addbutton">Add</button>
          <button class="btn btn-outline-dark" type="button">Excel</button>';
            }
          } else {
            // Display an access denied message if the user is not logged in
            echo "Access denied. Please log in.";
          }
          ?>

        </div>
        <hr>

        <!-- <form class="row g-4" id="add-button" action="../Php/addnewcircuit.php" method="post"> -->
        <!-- <form class="row g-4" id="add-button" > -->
        <div class="row g-4" id="add-button">
          <div class="col-md-4">
            <input type="text" class="form-control" id="Exchange" placeholder="Exchange" name="Exchange">
          </div>
          <div class="col-md-4">
            <input type="number" class="form-control" id="Circuit_id" placeholder="Circuit Id" name="Circuit_id">
          </div>
          <div class="col-md-4">
            <input type="text" class="form-control" id="Name" placeholder="Name" name="Name">
          </div>
          <div class="col-12">
            <input type="text" class="form-control" id="Address_A" placeholder="Address A" name="Address_A">
          </div>
          <div class="col-12">
            <input type="text" class="form-control" id="Address_B" placeholder="Address B" name="Address_B">
          </div>
          <div class="col-md-4">
            <input type="number" class="form-control" id="Contect" placeholder="Contact" name="Contect">
          </div>
          <div class="col-md-4">
            <input type="text" class="form-control" id="Connectivity" placeholder="Connectivity" name="Connectivity">
          </div>
          <div class="col-md-4">
            <input type="text" class="form-control" id="Cable_Lenght" placeholder="Cable length" name="Cable_Lenght">
          </div>
          <div class="col-2">
            <!-- <input class="file-input" type="file" id="image" name="image"> -->
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-primary" id="NewSubmitButton">Submit</button>
            <button type="button" class="btn btn-dark" id="addDetailshide">Close</button>
            <!-- Changed from submit to button -->
          </div>
          <hr>
          <!-- </form> -->
        </div>



        <table class="table" id="circuitTable">
          <thead class="">
            <tr>
              <th scope="col">Sr</th>
              <th scope="col">Exchange</th>
              <th scope="col">Circuit ID</th>
              <th scope="col">Name</th>
              <th scope="col">Address A</th>
              <th scope="col">Address B</th>
              <th scope="col">Contact</th>
              <th scope="col">Connectivity</th>
              <th scope="col">Cable Lenght</th>
              <th scope="col">Work Order Date</th>
              <?php
              // Check user role and include corresponding HTML file
              if (isset($_SESSION['Role'])) {
                // Check if the user is not 'admin' or 'manager'
                if ($_SESSION['Role'] == 'admin' || $_SESSION['Role'] == 'manager') {
                  // Show the 'Pending' option only for admin or manager
                  echo '
                            <th scope="col">Edit</th>
                            <th scope="col">Remove</th>';
                }
              } else {
                // Display an access denied message if the user is not logged in
                echo "Access denied. Please log in.";
              }
              ?>

            </tr>
          </thead>
          <tbody class="table-group-divider" id="circuitdata">


          </tbody>
        </table>
        <nav aria-label="Page navigation example" id="pagination-controls">


        </nav>





      </div>
    </div>
</body>
<script>document.querySelector('.toggle-btn').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('expand');
  });
</script>
<script>
  var addbtn = document.getElementById('addbutton');
  var addDetails = document.getElementById('add-button');
  addDetails.style.display = 'none';
  var detailshide = document.getElementById('addDetailshide');
  addbutton.onclick = function () {
    addDetails.style.display = '';
  }
  addDetailshide.onclick = function () {
    addDetails.style.display = 'none';
  }
</script>


<!-- <script src="../Js/Test.js"></script> -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="../Js/Circuit_Data.js"></script>
<script src="../Js/all_data_search.js"></script>

<script>
  document.querySelectorAll('.sidebar-link').forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add('active');
    }
  });
</script>

</html>