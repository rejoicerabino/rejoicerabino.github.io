<?php
$page = "books";
if (isset($_GET['page'])) {
    $page = $_GET['page'];
    switch ($page) {
        case "books":
        case "profile":
        case "notifications":
            break;
        default:
            header("Location: ?page=books");
            exit;
    }
} else {
    header("Location: ?page=books");
    exit;
}
?>

<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>RM Rare Books</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7" crossorigin="anonymous">
    <link
        href="https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Special+Gothic&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
    <link rel="icon" href="../A02/img/rmlogo.png" type="image/x-icon">
    <style>
        body {
            background-color: #F1EFEC;
            margin: 0;
            padding: 0;
            overflow-x: hidden;
        }

        .navbar {
            background-color: #181C14;
            height: 100px;
        }

        .navbar h4 {
            font-family: 'Crimson Text', serif;
            font-weight: bold;
            color: #ECDFCC;
            margin: 0;
        }

        .navbar .form-control {
            font-family: 'Crimson Text', serif;
            background-color: #ECDFCC;
            color: #181C14;
            border: none;
        }

        .navbar .form-control::placeholder {
            color: #181C14;
        }

        .navbar .form-control:focus {
            outline: none !important;
            border: 2px solid #697565;
        }

        .navbar .btn {
            background-color: #697565;
            color: #ECDFCC;
            border: none;
            transition: background-color 0.3s ease;
        }

        .navbar .btn:hover {
            background-color: #565C51;
            color: #ECDFCC;
        }

        .layout {
            display: flex;
            height: calc(100vh - 100px);
            overflow: hidden;
        }

        .sidebar {
            background-color: #3C3D37;
            color: #ECDFCC;
            overflow-y: auto;
            padding: 1rem;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            transition: width 0.3s ease;
        }

        .profilepic {
            width: 50px;
            height: 50px;
            border-radius: 100px;
            background-color: grey;
            margin-bottom: 1rem;
        }

        .profilename {
            font-family: 'Crimson Text', serif;
            color: #ECDFCC;
            margin: 0;
        }

        .sidebar .nav-link {
            color: #ECDFCC;
            display: flex;
            align-items: center;
            padding: 0.75rem 0;
            transition: all 0.3s ease;
        }

        .sidebar .nav-link i {
            color: #ECDFCC;
            margin-right: 0.5rem;
            font-size: 1.25rem;
        }

        .sidebar .nav-link span {
            font-family: 'Crimson Text', serif;
        }

        .main-content {
            flex: 1;
            overflow-y: auto;
            padding: 2rem;
            background-color: #F1EFEC;
        }

        .content {
            background-color: white;
            border-radius: 10px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            min-height: 200px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
        }

        @media (max-width: 991.98px) {
            .sidebar {
                width: 80px !important;
                align-items: center;
                padding: 1rem 0.5rem;
            }

            .sidebar .profilename,
            .sidebar .nav-link span {
                display: none;
            }

            .sidebar .nav-link {
                justify-content: center;
            }

            .sidebar .nav-link i {
                margin-right: 0;
            }
        }

        .sidebar .nav-link,
        .sidebar .profilename {
            transition: background-color 0.3s ease, color 0.3s ease;
        }

        .sidebar .nav-link:active,
        .sidebar .profilename:active {
            background-color: #333;
            color: #fff;
        }

        .sidebar .nav-link:hover,
        .sidebar .profilename:hover {
            background-color: #565C51;
            color: #fff;
        }


        @media (min-width: 992px) {
            .sidebar {
                width: 220px;
            }
        }
    </style>
</head>

<body>

    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <a class="navbar-brand" href="?page=books">
                <img src="../A02/img/rmlogo.png" alt="RM Logo" style="max-height: 80px; width: auto;" />
            </a>
            <h4>Rare Books</h4>
            <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <form class="d-flex ms-auto" role="search">
                    <input class="form-control me-2 rounded-pill" type="search" placeholder="Search for rare books"
                        aria-label="Search" />
                    <button class="btn rounded-pill" type="submit">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                </form>
            </div>
        </div>
    </nav>
    <div class="layout">
        <!-- sidebar -->
        <div class="sidebar">
            <a href="?page=profile" class="text-decoration-none text-white text-center">
                <img src="../A02/img/dp.jpg" alt="Profile Picture" class="profilepic" />
                <p class="profilename">Reji Montes</p>
            </a>
            <ul class="nav flex-column w-100">
                <li class="nav-item">
                    <a class="nav-link" href="?page=notifications" title="Notifications">
                        <i class="fa fa-bell"></i>
                        <span>Notifications</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="?page=books" title="Books">
                        <i class="fa fa-book"></i>
                        <span>Books</span>
                    </a>
                </li>
            </ul>
        </div>
        <!-- main Content -->
        <div class="main-content">
        <div class="content mb-2 p-3" style="<?php if ($page == 'books' || $page == 'view') echo 'background-color: #F1EFEC; box-shadow: none;'; ?>">
                <?php include("shared/" . $page . ".php"); ?>
            </div>
        </div>
    </div>
    <footer
        style="background-color: #F1EFEC; border-top: 1px solid #F1EFEC; padding: 16px 0; font-family: Georgia, serif; font-size: 14px; text-align: center;">
        <p style="margin: 0 0 8px 0;">© RM Rare Books. All rights reserved.</p>
        <p style="margin: 0;">
            <a href="?page=terms" style="text-decoration: none; color: #000; margin: 0 8px;">Terms of Service</a> |
            <a href="?page=privacy" style="text-decoration: none; color: #000; margin: 0 8px;">Privacy Policy</a> |
            <a href="?page=about" style="text-decoration: none; color: #000; margin: 0 8px;">About</a> |
            <a href="?page=contact" style="text-decoration: none; color: #000; margin: 0 8px;">Contact</a>
        </p>
    </footer>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-k6d4wzSIapyDyv1kpU366/PK5hCdSbCRGRCMv+eplOQJWyd1fbcAu9OCUj5zNLiq"
        crossorigin="anonymous"></script>
</body>

</html>