function contactFunction() {
    alert("Thank you for contacting us! I look forward to talking with you soon!")
  }



  // Set a variable for our button element.
const scrollToTopButton = document.getElementById('js-top');

const scrollFunc = () => {
  // Get the current scroll value
  let y = window.scrollY;
   
  // If the scroll value is greater than the window height, let's add a class to the scroll-to-top button to show it!
  if (y > 0) {
    scrollToTopButton.className = "top-link show";
  } else {
    scrollToTopButton.className = "top-link hide";
  }
};

window.addEventListener("scroll", scrollFunc);

const scrollToTop = () => {
  // Let's set a variable for the number of pixels we are from the top of the document.
  const c = document.documentElement.scrollTop || document.body.scrollTop;
   
  // If that number is greater than 0, we'll scroll back to 0, or the top of the document.
  // We'll also animate that scroll with requestAnimationFrame:
  // https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    // ScrollTo takes an x and a y coordinate.
    // Increase the '10' value to get a smoother/slower scroll!
    window.scrollTo(0, c - c / 10);
  }
};

// When the button is clicked, run our ScrolltoTop function above!
scrollToTopButton.onclick = function(e) {
  e.preventDefault();
  scrollToTop();
}


//
$(document).on("click", ".articleBtn", function(){
  let currentIndex = $(this).attr("id")
  $(".blog-post").append(articles[currentIndex].content)
})

articles.each(function(i, article){
  let articleBtn = $("<button>")
  articleBtn.text(article.name)
  $(".blog.sidebar").append(articleBtn)

  $(".blog.sidebar").append(
    `<button id=${i}>${article.name}</button>`
    )

})

var articles = [
  {
    name: "Electrical Factors",
         
                 
    content: ` <h2 class="blog-post-title" id="topSection">Electrical Factors affecting system impedance -And their consequences on system Q </h2>
            
    <p class="blog-post-meta">2006 by <a href="#">Curt Campbell</a></p>

      <p>When it comes to designing woofer enclosures, the necessity to increase the volume of enclosures
        due to the intrusions of drivers, vents, and bracing are well known, and generally compensated for. A
        less considered concern may be the effects of additional electrical impedance to the system. This
        increased impedance is due to several factors, including the source and cable impedance, impedance
        of the crossover, and thermal effects, and is the focus of this article.</p>

      <hr>

      <p>The Math: Any change in series impedance affects the Qes of the driver, and consequently Qts, which
        of course is one of the factors used to calculate the optimum enclosure size. The Qes + additional
        impedance, Qes' is calculated using the formula:

        Qes' = [(Rg + Re) / Re] * Qes</p>

      <h2>Where:</h2>
      <p>Re is the DC resistance of the driver
        Rg is the additional impedance
        Qes is the Electrical Q of the driver

        Qts' the new total Q of the driver can then be found by:

        Qts' = (Qes' * Qms) / (Qes' + Qms)</p>
      <p>Where Qms is the Mechanical Q of the driver. For the purposes of this article, the additional
        impedance will be expressed as scalar quantities rather than their complex impedance.</p>
      <p><strong>The output impedance of the source amplifier</strong> is the first factor affecting Qe. For a
        tube amplifier,
        this can be as much as several ohms. Solid state amps on the other hand will are typically a small
        fraction of an ohm. A source impedance of 0.1 ohms will be assumed for the purposes of this
        discussion, and was included in all of the following plots.</p>
      <p><strong>Speaker cable and interconnect impedance</strong> can also be of some minor concern. The
        resistance
        of the cable itself may range from 0.016 to 0.1 ohm typically for a 10 foot length of 12 to 20 gauge
        wire respectively. While this is pretty insignificant, the connections at the terminations, speaker,
        crossover and driver will all add some small resistance. For this exercise, 0.1 ohm will be assumed as
        a nominal value.</p>
      <p><strong>Passive crossover insertion losses:</strong>The DCR of the inductors can significantly increase
        the
        series impedance. This of course will vary depending on the gauge, length of wire in the inductor, and
        core material. I'll suggest 0.4 ohms as an average value for a woofer in a 3 way system.</p>

      <p><strong>The increase in voice coil resistance with temperature. </strong> I have to thank Keith Howard
        for his
        article in the November 2006 issue of Stereophile as the stimulus to write this treatise. While he tested
        only one speaker, I suspect his results are reasonably representative of a well-designed driver. I
        found several things interesting in his study. One is that the bulk of the increase in voice coil
        temperature occurred rather quickly, within 30 seconds or so. Another was the tweeter was relatively
        immune to thermal effects. Most significant was with the woofer tested, the voice coil only increased 36
        degrees, which resulted in an 8% increase in Re. The author dismissed this small increase in Re as
        insignificant, but I suggest that if it is not considered, along with the other factors I've noted
        previously,
        it can make a discernible difference in the optimum calculated enclosure volume.</p>


      <h3>Sealed enclosures:</h3>
      <p>In the plot below, I've modeled the RS225-8 driver. The yellow curve is the modeled response of the
        driver assuming only 0.1 ohm Rg for the source amp. The Qa was set at 15, indicating a reasonably
        heavy stuffing, and the enclosure was adjusted to result in a modeled Qtc of 0.707, or 28.8 liters. Now I
        increased Rg to add the cable resistance, the DCR of the inductor, and the voice coil heating effects.
        For the purposes of this example, I assumed 0.4 ohm, which is about a 6% increase in Re, rather than
        the 8% of the Stereophile article. Taking all the factors in account, this adds another 0.9 ohms to the
        series resistance. The result is the cyan curve. Now the modeled Qtc has increased to 0.767, and
        resulted in roughly a 0.5 dB loss above 75 Hz. To retain a .707 Qtc under these conditions the box
        enclosure would need to be increased to 37.8 liters, or over 30% larger. -But with the extra volume
        comes a 5 Hz extension in f3. This is shown in the red curve.</p>
          <img src="images/articleimages/ImpedanceBoxSealed.gif">

      <h3>Vented Enclosures:</h3>

      <p>Adding the additional impedance to the RS225 in a vented design result in more significant changes.
        Once again the red curve is the modeled response with 0.1 ohm Rg. The cyan curve is with the total
        series resistance increased to 1 ohm. Note that the ripple is now nearly 1 dB and 0.5 dB less sensitive
        than with the ideal model. The red curve is the result of increasing the box volume from 63 liters to 85
        liters, a 35% increase, and reducing the tuning frequency from 28.7 Hz to 25.7 Hz. Happily, this also
        results in about a 4 Hz extension in f3.</p>
          <img src="images/articleimages/ImpedanceBoxVented.gif">
      <p><strong>Other observations:</strong>The change in voice coil impedance will also negatively impact the expected
        response of the LP and zobel circuits, increasing the crossover frequency, reducing the effectiveness
        of the zobel, and may result in audible peaking around the crossover frequency.
        
        The tweeter, in most home applications, will be relatively unaffected by thermal issues, due both to the
        relatively low power applied in its passband, and the use of ferrofluid, aluminum formers, etc.. However,
        should increased voice coil impedance occur, it will lower the crossover frequency of the HP, and
        increase the peak in the summed response at the crossover frequency. The tweeter may also end up
        sounding bright at higher SPL, due to the loss of sensitivity of the mid and woofer. This may partially
        explain why some prefer the tweeters slightly rolled off from flat.
        
        Amplifiers with relatively high impedance outputs of more than an ohm are going to exacerbate all the
        negative issues mentioned above. In addition, drivers other than woofers may be affected by the
        reduction in damping.
        
        The addition of series resistance will result in a lower f3, which in some cases will offset the required
        increase in enclosure size.</p>

      <p><strong>Changes in f3 and f10:</strong>The two plots below show the same plots as before, but nominalized to
        compensate for the differences in output due to the impedance change. These delineate the possible
        improvement in low end extension due to the change in Qts. -If the increase in impedance is taken into
        account. About a 5 Hz extension in both f3 and f10 for the sealed design The vented enclosure models
        with a 4 Hz extension in f3, and a 3 Hz extension in f10. Note that the output at 20 Hz is nearly 4 dB
        higher than if the increased impedance was not taken into account.</p>
        <img src="images/articleimages/ImpedanceBoxSealedRelative.gif">
        <img src="images/articleimages/ImpedanceBoxVentedRelative.gif">
        <p><strong>Conclusion:</strong> The factors resulting in additional series resistance can cause a significant change in the
          box Q, and an equally significant difference in the size of the enclosure to obtain the intended box Q.
          This, at least in home speakers, will only be an issue when the driver passband includes the
          compliance controlled region, or output is expected at and below fc. In most applications, this will be
          limited to woofers, although the loss of sensitivity may be felt by the midrange to some extent as well.
          The 8% increase measured in the Stereophile article, was based on the measurement of one high end
          speaker, and may represent exceptional driver thermal properties, not necessarily those of the
          average driver. Certainly I've seen other articles suggest much higher increases in temperature, but
          I've not seen actual data to back up these claims. In any case, it is clear that some compensation for
          the thermal effects should be made in the design process to obtain optimum system performance.</p> 
    </div><!-- /.blog-post -->`
  }
]
// sidebar content on speaker page 

$(".sidebar-dropdown > a").click(function() {
  $(".sidebar-submenu").slideUp(200);
  if (
    $(this)
      .parent()
      .hasClass("active")
  ) {
    $(".sidebar-dropdown").removeClass("active");
    $(this)
      .parent()
      .removeClass("active");
  } else {
    $(".sidebar-dropdown").removeClass("active");
    $(this)
      .next(".sidebar-submenu")
      .slideDown(200);
    $(this)
      .parent()
      .addClass("active");
  }
});

$("#close-sidebar").click(function() {
  $(".page-wrapper").removeClass("toggled");
});
$("#show-sidebar").click(function() {
  $(".page-wrapper").addClass("toggled");
});

