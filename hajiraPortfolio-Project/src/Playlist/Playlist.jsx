import styles from "./Playlist.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { round } from "math"
import { useEffect, useState, useRef } from "react";

const reviews = [
  {
    name: "Ananya R.",
    rating: 5,
    text: "“Honestly such a good mix. I keep playing it in the car and haven’t skipped much.”"
  },
  {
    name: "Zoya M.",
    rating: 5,
    text: "“The live updates are the best part. It actually feels fresh every week.”"
  },
  {
    name: "Mariam Al N.",
    rating: 5,
    text: "“Perfect for long drives. The vibe is very clean and easy to listen to.”"
  },
  {
    name: "Arjun K.",
    rating: 5,
    text: "“Bought it randomly and it’s actually worth it. Super easy playlist to keep on repeat.”"
  },
  {
    name: "Daria S.",
    rating: 5,
    text: "“Love the mix. It has that chill but not boring feel.”"
  },
  {
    name: "Omar H.",
    rating: 5,
    text: "“Good value for 10 AED. I use it almost every day while working.”"
  }
];

function PlaylistSection() {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [showEmailAlert, setShowEmailAlert] = useState(false);
  const [code, setCode] = useState("AED");
  const [price, setPrice] = useState(10);
  const [anchorPrice, setAnchorPrice] = useState(19);
  const [symbol, setSymbol] = useState("AED");
  const [hasTrackedEmailInteraction, setHasTrackedEmailInteraction] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);

  const emailInputRef = useRef(null);

  const basePrice = 10;
  const baseAnchorPrice = 19;
  let baseRate = 1;

  const currency = [
    { code: "AED", symbol: "AED", rate: 1 },
    { code: "USD", symbol: "$", rate: 0.272294 },
    { code: "EUR", symbol: "€", rate: 0.231967 },
    { code: "GBP", symbol: "£", rate: 0.202600 },
    { code: "SAR", symbol: "SAR", rate: 1.020980 },
    { code: "QAR", symbol: "QAR", rate: 0.992250 },
    { code: "BHD", symbol: "BHD", rate: 0.102649 },
    { code: "KWD", symbol: "KWD", rate: 0.083217 },
    { code: "OMR", symbol: "OMR", rate: 0.104819 },
    { code: "INR", symbol: "₹", rate: 24.9477 }
  ];

  const handleRateChange = () => {
    for (let c in currency) {
      if (currency[c].code === code) {
        baseRate = currency[c].rate;
        setPrice(basePrice * currency[c].rate);
        setAnchorPrice(baseAnchorPrice * currency[c].rate);
        setSymbol(currency[c].symbol);
      }
    }
  };

  useEffect(() => {
    handleRateChange();
  }, [code]);

  useEffect(() => {
    // Tracking event: Page view
    console.log("Tracking event: Page view: checkout page (gtag)");
    window.gtag?.('event', 'checkout_page_viewed', {
      page_name: 'spotify_playlist_checkout',
      product_name: 'Hajira Spotify Playlist',
      currency: 'AED',
      value: 10
    });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextReview = () => {
    setActiveReviewIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setActiveReviewIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    if (!isMobile) return;
    const interval = setInterval(() => {
      nextReview();
    }, 4500);
    return () => clearInterval(interval);
  }, [isMobile]);

  const handleEmailFocus = () => {
    if (!hasTrackedEmailInteraction) {
      setHasTrackedEmailInteraction(true);
      console.log("Tracking event: Email input focus (gtag)");
      window.gtag?.('event', 'checkout_email_started', {
        page_name: 'spotify_playlist_checkout',
        product_name: 'Hajira Spotify Playlist'
      });
    }
  };

  const handleEmail = (emailVal) => {
    setEmail(emailVal);
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    setIsEmailValid(emailRegex.test(emailVal));

    if (!hasTrackedEmailInteraction && emailVal.length > 0) {
      setHasTrackedEmailInteraction(true);
      console.log("Tracking event: Email input interaction (gtag)");
      window.gtag?.('event', 'checkout_email_started', {
        page_name: 'spotify_playlist_checkout',
        product_name: 'Hajira Spotify Playlist'
      });
    }
  };

  const handleBuy = async () => {
    console.log("Tracking event: Buy button click (gtag)");
    window.gtag?.('event', 'buy_button_clicked', {
      page_name: 'spotify_playlist_checkout',
      product_name: 'Hajira Spotify Playlist',
      currency: code,
      value: round(price)
    });

    if (!email || !isEmailValid) {
      setShowEmailAlert(true);
      return;
    }

    console.log("Tracking event: Begin checkout (gtag)");
    window.gtag?.('event', 'begin_checkout', {
      currency: code,
      value: round(price),
      items: [
        {
          item_id: 'hajira_spotify_playlist',
          item_name: 'Hajira Spotify Playlist',
          price: round(price),
          quantity: 1
        }
      ]
    });

    // Save currency & price locally so the purchase confirmation screen knows what the transaction currency/value was
    try {
      localStorage.setItem("selected_currency", code);
      localStorage.setItem("selected_price", round(price).toString());
    } catch (e) {
      console.warn("Could not save price info to localStorage", e);
    }

    try {
      let roundedPrice = round(price);

      const response = await fetch("https://hajirabackend-648711352735.me-west1.run.app/api/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: roundedPrice,
          email: email,
          currency: code,
          successUrl: "https://www.hajirakhan.com/?payment=success",
          cancelUrl: "https://www.hajirakhan.com/?payment=cancel",
        }),
      });

      const data = await response.json();
      window.location.href = data.redirect_url;
      console.log("redirect url:", data.redirect_url);

    } catch (error) {
      console.error("Error triggering payment:", error);
    }
  };

  const handleFinalBuyClick = () => {
    console.log("Tracking event: Final buy button click (gtag)");
    window.gtag?.('event', 'final_buy_button_clicked', {
      page_name: 'spotify_playlist_checkout'
    });

    if (emailInputRef.current) {
      emailInputRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      emailInputRef.current.focus();
    }
  };



  return (
    <div className={styles.playlistSection}>
      <AnimatePresence>
        {showEmailAlert && (
          <motion.div
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowEmailAlert(false)}
          >
            <motion.div
              className={styles.modalContent}
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={styles.modalHeader}>
                <h3>Email Required</h3>
              </div>
              <div className={styles.modalBody}>
                <p>
                  You must enter the email address to where you want the playlist to be received. Please ensure it is correct.
                </p>
              </div>
              <div className={styles.modalFooter}>
                <button className={styles.modalButton} onClick={() => setShowEmailAlert(false)}>
                  GOT IT
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div id="checkout-hero-section" className={styles.playlistContainer}>
        <motion.div
          className={styles.imageWrapper}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3, once: true }}
          transition={{ duration: 0.4 }}
        >
          <div className={styles.imageCard}>
            <img
              src="Images/Playlist/Playlist cover.png"
              alt="Curated Spotify Playlist cover"
            />
          </div>
        </motion.div>

        <motion.div
          className={styles.infoWrapper}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3, once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <div className={styles.heading}>
            <span className={styles.specialTag}>200K FOLLOWERS SPECIAL</span>
            <h2>SPOTIFY PLAYLIST</h2>
            <h1>The Playlist Everyone Keeps Asking For</h1>
          </div>

          <div className={styles.subtitleBlock}>
            <p className={styles.subtitle}>1,000+ songs + live updates by Hajira.</p>
            <p className={styles.socialProof}>🤍 1,000+ happy listeners and counting!</p>
          </div>

          <div className={styles.priceRowRedesign}>
            <div className={styles.prices}>
              <div className={styles.priceWasRow}>
                <span className={styles.wasPrice}>Was {round(anchorPrice)} {symbol}</span>
                <span className={styles.dealTag}>LIMITED TIME DEAL</span>
              </div>
              <span className={styles.nowPrice}>Now {round(price)} {symbol}</span>
            </div>

            <div className={styles.currencyWrapper}>
              <span className={styles.currencyLabel}>Currency</span>
              <select
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className={styles.currencySelect}
              >
                {currency.map((curr, index) => (
                  <option key={index} value={curr.code}>
                    {curr.code}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className={styles.checkoutForm}>
            <div className={styles.inputContainer}>
              <input
                ref={emailInputRef}
                id="checkout-email-input"
                type="email"
                placeholder="Enter your email to get instant access"
                value={email}
                onChange={(e) => handleEmail(e.target.value)}
                onFocus={handleEmailFocus}
                className={styles.emailInput}
              />
            </div>
            <button
              id="playlist-buy-button"
              className={styles.buyButton}
              onClick={handleBuy}
            >
              Get The Playlist — {round(price)} {symbol}
            </button>
          </div>
          <p className={styles.emailInstruction}>Check email for playlist after payment (if not there, check spam)</p>
        </motion.div>
      </div>

      <div className={styles.valueTextContainer}>
        <motion.div
          className={styles.valueTextContent}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3, once: true }}
          transition={{ duration: 0.4 }}
        >
          <p>
            Get instant access to a curated Spotify playlist made for car rides, work days, late nights, gym sessions, and everything in between.
          </p>
        </motion.div>
      </div>

      <div id="reviews-section" className={styles.reviewsSection}>
        <motion.div
          className={styles.reviewsHeader}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3, once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2>See what people think of the playlist</h2>
        </motion.div>

        {!isMobile ? (
          <div className={styles.reviewsGrid}>
            {reviews.map((rev, index) => (
              <motion.div
                key={index}
                className={styles.reviewCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.2, once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div className={styles.stars}>
                  {[...Array(rev.rating)].map((_, i) => (
                    <i key={i} className="ri-star-fill"></i>
                  ))}
                </div>
                <p className={styles.reviewText}>{rev.text}</p>
                <span className={styles.reviewerName}>{rev.name}</span>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className={styles.mobileReviewsSlider}>
            <div className={styles.sliderTrack}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeReviewIndex}
                  className={styles.mobileReviewCard}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className={styles.stars}>
                    {[...Array(reviews[activeReviewIndex].rating)].map((_, i) => (
                      <i key={i} className="ri-star-fill"></i>
                    ))}
                  </div>
                  <p className={styles.reviewText}>{reviews[activeReviewIndex].text}</p>
                  <span className={styles.reviewerName}>{reviews[activeReviewIndex].name}</span>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className={styles.sliderControls}>
              <button className={styles.sliderArrow} onClick={prevReview} aria-label="Previous Review">
                <i className="ri-arrow-left-s-line"></i>
              </button>

              <div className={styles.sliderDots}>
                {reviews.map((_, idx) => (
                  <span
                    key={idx}
                    className={`${styles.dot} ${idx === activeReviewIndex ? styles.activeDot : ""}`}
                    onClick={() => setActiveReviewIndex(idx)}
                  ></span>
                ))}
              </div>

              <button className={styles.sliderArrow} onClick={nextReview} aria-label="Next Review">
                <i className="ri-arrow-right-s-line"></i>
              </button>
            </div>
          </div>
        )}
      </div>

      <div className={styles.finalCtaSection}>
        <motion.div
          className={styles.finalCtaContent}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3, once: true }}
          transition={{ duration: 0.4 }}
        >
          <h3>Ready to elevate your vibe?</h3>
          <button
            id="final-buy-button"
            className={styles.finalBuyButton}
            onClick={handleFinalBuyClick}
          >
            Get The Playlist — {round(price)} {symbol}
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default PlaylistSection;
