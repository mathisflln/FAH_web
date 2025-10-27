<!-- footer -->
 <!-- Footer avec bannière CTA -->
<footer class="footer">
    <!-- Bannière Call-to-Action -->
    <section class="cta-banner">
        <div class="cta-overlay"></div>
        <div class="cta-content">
            <h2 class="cta-title">Devenez acteur de la lutte contre<br>le harcèlement</h2>
            <p class="cta-subtitle">Contribuez à financer nos actions de prévention et de<br>soutien dans la cité scolaire et partout ailleurs !</p>
            <a href="don.php" class="btn btn-cta">
                <span class="btn-text">Nous faire un don</span>
            </a>
        </div>
    </section>

    <!-- Footer principal -->
    <div class="footer-main">
        <div class="footer-container">
            <!-- Colonne 1 : Logo et description -->
            <div class="footer-col footer-brand">
                <img src="assets/logos/fah_1.png" alt="FAH Marie-Curie" class="footer-logo">
                <p class="footer-description">
                    Association loi 1901, à but non lucratif luttant contre le harcèlement.
                </p>
                <a class="footer-mail" href="mailto:...">fahmariecurie.pro@gmail.com</a>
            </div>

            <!-- Colonne 2 : Compagnie -->
            <div class="footer-col">
                <h3 class="footer-title">Compagnie</h3>
                <ul class="footer-links">
                    <li><a href="about.php">Qui sommes-nous ?</a></li>
                    <li><a href="actions.php">Actions et projets</a></li>
                    <li><a href="equipe.php">Notre équipe</a></li>
                    <li><a href="partenaires.php">Partenaires</a></li>
                    <li><a href="presse.php">Espace presse</a></li>
                </ul>
            </div>

            <!-- Colonne 3 : Liens utiles -->
            <div class="footer-col">
                <h3 class="footer-title">Liens utiles</h3>
                <ul class="footer-links">
                    <li><a href="victime.php">Je suis victime</a></li>
                    <li><a href="temoin.php">Je suis témoin</a></li>
                    <li><a href="ressources.php">Ressources et numéros</a></li>
                    <li><a href="don.php">Faire un don</a></li>
                    <li><a href="contact.php">Contact</a></li>
                </ul>
            </div>

            <!-- Colonne 4 : Newsletter -->
            <div class="footer-col footer-newsletter">
                <h3 class="footer-title">Newsletter</h3>
                <p class="newsletter-description">
                    Obtenir les dernières infos, projets, actualités et bien plus encore !
                </p>
                <form class="newsletter-form" id="newsletterForm">
                    <input 
                        type="email" 
                        placeholder="Adresse mail" 
                        class="newsletter-input"
                        required
                    >
                    <button type="submit" class="newsletter-submit">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    </div>

    <!-- Footer bottom -->
    <div class="footer-bottom">
        <div class="footer-container">
            <p class="footer-copyright">
                © <?php echo date('Y'); ?> FAH Marie-Curie. Tous droits réservés.
            </p>
            <div class="footer-legal">
                <a href="mentions-legales.php">Mentions légales</a>
                <a href="politique-confidentialite.php">Politique de confidentialité</a>
                <a href="cgv.php">CGV</a>
            </div>
        </div>
    </div>
    <div class="footer-gradient-section">
        <img src="assets/logos/fade_footer.png" alt="FAH Marie-Curie" class="footer-gradient-image">
    </div>
</footer>