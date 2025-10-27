<!DOCTYPE html>
<html lang="fr">
<head>
    <title>FAH Marie-Curie</title>
    <link rel="icon" href="assets/logos/flavicon.png" type="image/x.icon">
    <!-- ... head ... -->
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/navbar.css">
    <link rel="stylesheet" href="css/footer.css">
</head>
<body>
    <div data-scroll-container>
        
        <?php include 'includes/navbar.php'; ?>

        <!-- Contenu de la page -->
        <div class="content" data-scroll-section>
            <h1>Contenu de la page</h1>
        </div>

        <?php include 'includes/footer.php'; ?>

    </div>

    <script src="https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1.4/dist/locomotive-scroll.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script src="js/main.js"></script>
    <script src="js/navbar.js"></script>
    <script src="js/footer.js"></script>
</body>
</html>