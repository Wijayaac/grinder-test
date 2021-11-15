<?php
$data = file_get_contents("./app/constants/menu.json");

if (!$data === false) {
    $menus = json_decode($data, true);
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Grinder Coffee Shop</title>
    <link rel="stylesheet" href="./public/dist/css/style.css">
    <link rel="stylesheet" href="./public/dist/css/sal.css">
</head>

<body>
    <!-- Begin Header Section -->
    <?php include('./_header.php') ?>
    <!-- End Header Section -->
    <!-- Begin Hero Section -->
    <section class="hero">
        <div class="hero__image">
            <h1 class="hero__text">Life begins after Coffee</h1>
            <a href="#menuSection" class="button hero__link" data-sal="fade" data-sal-delay="300" data-sal-duration="500" data-sal-easing="ease">View Menu</a>
        </div>
    </section>
    <!-- End Hero Section -->
    <!-- Begin Menu Section -->
    <section class="menu" id="menuSection" data-sal="slide-up" data-sal-delay="200" data-sal-duration="500" data-sal-easing="ease">
        <div data-sal="slide-up" data-sal-delay="200" data-sal-duration="500" data-sal-easing="ease">
            <h2 class="menu__title">What would you like to have?</h2>
            <p class="menu__text">
                Coffee plunger pot sweet barista, grounds acerbic coffee instant crema cream in half and half. Spoon lungo
                variety, as, siphon, ristretto, iced brewed and acerbic affogato grinder.
            </p>
        </div>
        <div class="menu__wrapper">
            <?php foreach ($menus as $item) : ?>
                <a href="#" class="menu__item" data-sal="slide-left" data-sal-delay="<?= $item['id'] * 200 ?>" data-sal-duration="600" data-sal-easing="ease">
                    <div class="menu__image" style="background-image: url('<?= $item['source'] ?> ');">
                    </div>
                    <p class="menu__caption"><?= $item['caption'] ?></p>
                </a>
            <?php endforeach ?>
        </div>
    </section>
    <!-- End Menu Section -->
    <!-- Begin Contact Section -->
    <section class="contact">
        <h2 class="contact__title">Extraction instant that variety
            white robusta strong</h2>
        <p class="contact__text">Coffee plunger pot sweet barista, grounds acerbic coffee instant crema cream in half and half. Spoon lungo
            variety, as, siphon, ristretto, iced brewed and acerbic affogato grinder. Mazagran café au lait wings spoon,
            percolator milk latte dark strong. Whipped, ﬁlter latte, ﬁlter aromatic grounds doppio caramelization half and half.</p>
        <a href="#" class="button contact__button" data-sal="fade" data-sal-duration="500" data-sal-delay="300" data-sal-easing="ease">contact us</a>
    </section>
    <!-- End Contact Section -->
    <!-- Begin benefit section -->
    <section class="benefit">
        <h2 class="benefit__title">Health Benefits of Coffee</h2>
        <ul class="benefit__lists">
            <li class="benefit__item">
                <img class="benefit__image" src="./public/icons/battery-full.svg" alt="">
                <p class="benefit__text">
                    boost energy level
                </p>
            </li>
            <li class="benefit__item">
                <img class="benefit__image" src="./public/icons/sun.svg" alt="">
                <p class="benefit__text">
                    reduce depresion
                </p>
            </li>
            <li class="benefit__item">
                <img class="benefit__image" src="./public/icons/weight.svg" alt="">
                <p class="benefit__text">
                    aid in weight loss
                </p>
            </li>
        </ul>
    </section>
    <!-- End benefit section -->
    <!-- Begin Blog section -->
    <section class="blog" data-sal="slide-up" data-sal-delay="300" data-sal-duration="600" data-sal-easing="ease" id="blogSection">
        <div class="blog__image" style="background-image: url('./public/images/blog-1.jpg');"></div>
        <div class="blog__body">
            <p class="blog__tag">blog</p>
            <h3 class="blog__title">Qui espresso, grounds
                to go</h3>
            <p class="blog__detail">December 12, 2019 | Espresso</p>
            <p class="blog__text">Skinny caffeine aged variety ﬁlter saucer redeye, sugar
                sit steamed eu extraction organic. Beans, crema half
                and half fair trade carajillo in a variety dripper doppio
                pumpkin spice cup lungo, doppio, est trifecta breve and,
                rich, extraction robusta a eu instant. Body sugar
                steamed, aftertaste, decaffeinated coffee fair trade sit,
                white shop fair trade galão, dark crema breve
                frappuccino iced strong siphon trifecta in a at viennese.</p>
            <a href="#" class="blog__button">read more </a>
        </div>
    </section>
    <!-- End Blog section -->
    <!-- Begin Footer -->
    <?php include('./_footer.php'); ?>
    <!-- End Footer -->
    <script src="./public/dist/js/sal.js"></script>
    <script src="./public/dist/js/app.js"></script>
</body>

</html>