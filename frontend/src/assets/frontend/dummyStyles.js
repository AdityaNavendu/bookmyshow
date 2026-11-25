// src/assets/dummyStyles.js
export const bannerStyles = {
  // Container styles
  container: "css-relative-d89972f css-overflow-hidden-2cd02d1 css-h-640px-7dc6abb css-sm-h-760px-968f1d6 css-md-h-screen-4422065",
  videoContainer: "css-absolute-da4dbfb css-inset-0-7b7df04 css-z-0-942abb7",
  video: "css-absolute-da4dbfb css-inset-0-7b7df04 css-w-full-6da6a3c css-h-full-668b21a css-object-cover-7d85d0c",
  overlay: "css-absolute-da4dbfb css-inset-0-7b7df04 css-bg-gradient-to-b-24a9e3a css-from-black-30-3dd2112 css-via-black-20-24f8251 css-to-black-60-8070f6c css-md-bg-transparent-19e147b",
  
  // Content styles
  content: "css-relative-d89972f css-z-10-236812d css-flex-60fbb77 css-items-center-3960ffc css-justify-start-4b5cc19 css-h-full-668b21a css-px-4-f0faeb2 css-sm-px-6-7a9aabf css-lg-px-8-6aeb2e9 css-max-w-7xl-726bb2c css-mx-auto-0e12dc7",
  contentInner: "css-max-w-2xl-2cc8041 css-mt-10-48c4acb css-md-mt-0-03bf80e",
  
  // Text styles
  title: "css-text-4xl-a95699d css-sm-text-5xl-7324713 css-md-text-7xl-70fd244 css-font-bold-69450ef css-text-white-72a4c7c css-mb-4-da01985 css-leading-tight-e9fadaf",
  description: "css-text-sm-fc7473c css-sm-text-base-9bcf466 css-md-text-lg-e498c70 css-text-gray-200-8aca214 css-mb-6-b6777c6 css-max-w-lg-6199866",
  
  // Rating and genre styles
  ratingGenreContainer: "css-flex-60fbb77 css-flex-wrap-1eb5c6d css-items-center-3960ffc css-gap-4-0c3bc98 css-font-pacifico-a153062 css-mb-6-b6777c6",
  ratingContainer: "css-flex-60fbb77 css-items-center-3960ffc css-mr-2-d2347e8",
  starsContainer: "css-flex-60fbb77",
  star: "css-h-4-11e59c6 css-w-4-dc7972e css-sm-h-5-42eb11f css-sm-w-5-41037cb css-text-yellow-400-ce4daf6",
  ratingText: "css-ml-2-c68af99 css-text-white-72a4c7c css-text-sm-fc7473c css-sm-text-base-9bcf466",
  genreText: "css-text-gray-300-5ed47f3 css-text-xs-359090c css-sm-text-sm-e2327d1",
  
  // Button styles
  buttonsContainer: "css-flex-60fbb77 css-flex-wrap-1eb5c6d css-gap-3-1004c0c css-font-pacifico-a153062",
  bookButton: "css-bg-red-600-48b76a4 css-cursor-pointer-3451683 css-hover-bg-red-700-4e508c8 css-px-4-f0faeb2 css-sm-px-6-7a9aabf css-py-2-5-e7ee55a css-sm-py-3-aa2253d css-rounded-full-ac204c1 css-flex-60fbb77 css-items-center-3960ffc css-transition-all-0fe7d7d css-duration-300-7890552 css-transform-dd8ce13 css-hover-translate-y-1-c042d25 css-shadow-lg-06bbb43 css-hover-shadow-xl-9a8eaab css-text-sm-fc7473c css-sm-text-base-9bcf466",
  infoButton: "css-bg-white-20-2cf6fd4 css-hover-bg-white-30-307a569 css-text-white-72a4c7c css-backdrop-blur-sm-1ca6dd1 css-px-4-f0faeb2 css-sm-px-6-7a9aabf css-py-2-5-e7ee55a css-sm-py-3-aa2253d css-rounded-full-ac204c1 css-flex-60fbb77 css-items-center-3960ffc css-transition-all-0fe7d7d css-duration-300-7890552 css-border-ca6bcd4 css-border-white-30-0f9b8dc css-text-sm-fc7473c css-sm-text-base-9bcf466",
  
  // Icon styles
  icon: "css-h-4-11e59c6 css-w-4-dc7972e css-sm-h-5-42eb11f css-sm-w-5-41037cb css-mr-2-d2347e8",
  
  // Custom CSS
  customCSS: "\n    @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');\n\n    video { display: block; }\n\n    @media (max-width: 420px) {\n      .css-max-w-2xl-2cc8041 { max-width: 92%; }\n      h1 { font-size: 1.6rem; }\n      p { font-size: 0.9rem; }\n    }\n  "
};

export const navbarStyles = {
  // Main nav container
  nav: {
    base: "css-fixed-7bc5559 css-left-4-b2e7cc5 css-right-4-5a438c3 css-top-6-e9d6ffe css-z-50-181b286 css-transition-all-0fe7d7d css-duration-300-7890552",
    scrolled: "css-py-3-1b2d54a css-bg-black-85-742eeab css-backdrop-blur-sm-1ca6dd1 css-shadow-xl-a739868 css-rounded-3xl-ea189a0",
    notScrolled: "css-py-4-cb11fec css-bg-black-0595c69 css-backdrop-blur-sm-1ca6dd1 css-rounded-full-ac204c1"
  },

  // Layout
  container: "css-max-w-7xl-726bb2c css-mx-auto-0e12dc7 css-px-4-f0faeb2 css-md-px-1-521ada0 css-lg-px-1-1f16b01 css-xl-px-8-ba5705c css-flex-60fbb77 css-items-center-3960ffc css-justify-between-8ef2268",
  
  // Logo section
  logoContainer: "css-flex-60fbb77 css-items-center-3960ffc css-gap-3-1004c0c css-z-20-145745b css-flex-shrink-0-2074a75",
  logoIconContainer: "css-bg-black-0595c69 css-p-3-eb6e8b8 css-md-p-3-9e53223 css-xl-p-3-bb69e3c css-lg-p-3-2953541 css-rounded-full-ac204c1 css-border-ca6bcd4 css-border-red-600-04d37b2",
  logoIcon: "css-h-4-11e59c6 css-w-4-dc7972e css-md-h-2-a2776b7 css-md-w-2-0b50bc7 css-lg-h-4-33cfc82 css-lg-w-4-3ee77cd css-xl-w-4-36b695a css-xl-h-4-ba794fe css-text-red-500-e3f51cc",
  logoText: "css-text-lg-42536e6 css-md-text-sm-a084a8a css-xl-text-lg-6b927bd css-font-extrabold-0ce2a7f css-bg-clip-text-6c3c24f css-text-transparent-f8c8e86 css-bg-gradient-to-r-6ae7db2 css-from-red-400-0197a4d css-to-red-200-21eda54 css-font-pacifico-a153062",

  // Desktop navigation
  desktopNav: "css-hidden-99d72c7 css-lg-flex-3eb153d css-absolute-da4dbfb css-left-1-2-e632769 css-transform-dd8ce13 css-translate-x-1-2-efaa070 css-z-10-236812d css-items-center-3960ffc css-bg-black-70-e248bd1 css-backdrop-blur-md-782be2a css-rounded-full-ac204c1 css-px-3-0e17f2b css-py-2-03b4dd7 css-gap-2-77a2a20 css-shadow-inner-eca5782",
  desktopNavItems: "css-flex-60fbb77 css-gap-2-77a2a20 css-items-center-3960ffc",
  desktopNavItem: "css-relative-d89972f css-group-64292b1",
  desktopNavLink: {
    base: "nav-pill-btn css-flex-60fbb77 css-items-center-3960ffc css-gap-3-1004c0c css-px-5-d139dd0 css-py-3-1b2d54a css-rounded-full-ac204c1 css-text-sm-fc7473c css-font-medium-2689f39 css-transition-all-0fe7d7d",
    active: "active css-text-white-72a4c7c",
    inactive: "css-text-gray-300-5ed47f3"
  },
  desktopNavIcon: "css-h-5-cd0d9c5 css-w-5-7247048",

  // Right section
  rightSection: "css-flex-60fbb77 css-items-center-3960ffc css-gap-4-0c3bc98 css-z-20-145745b",

  // Tablet navigation
  tabletNav: "css-hidden-99d72c7 css-md-flex-7651aeb css-lg-hidden-a327049 css-items-center-3960ffc css-gap-2-77a2a20",
  tabletNavLink: {
    base: "nav-pill-btn css-flex-60fbb77 css-items-center-3960ffc css-gap-2-77a2a20 css-px-4-f0faeb2 css-py-2-03b4dd7 css-rounded-full-ac204c1 css-text-sm-fc7473c css-font-medium-2689f39 css-transition-all-0fe7d7d",
    active: "active css-bg-red-900-30-cefbb63 css-text-white-72a4c7c css-shadow-lg-06bbb43",
    inactive: "css-text-gray-300-5ed47f3 css-hover-bg-red-900-30-3b927e2"
  },
  tabletNavIcon: "css-h-4-11e59c6 css-w-4-dc7972e",
  tabletNavText: "css-text-xs-359090c css-font-semibold-e83a704",

  // Auth section
  authSection: "css-flex-60fbb77 css-items-center-3960ffc css-gap-2-77a2a20",
  desktopAuth: "css-hidden-99d72c7 css-md-block-9d60be3",
  logoutButton: "css-flex-60fbb77 css-items-center-3960ffc css-gap-2-77a2a20 css-md-px-1-5-fcb9969 css-px-4-f0faeb2 css-lg-px-4-e16d6f1 css-xl-px-4-2d02534 css-py-2-03b4dd7 css-rounded-full-ac204c1 css-bg-gradient-to-r-6ae7db2 css-from-gray-700-f524fa0 css-to-gray-800-e1a0ed9 css-text-white-72a4c7c css-text-sm-fc7473c css-font-semibold-e83a704 css-border-ca6bcd4 css-border-red-600-20-914ed92",
  loginButton: "css-flex-60fbb77 css-items-center-3960ffc css-gap-2-77a2a20 css-px-4-f0faeb2 css-py-2-03b4dd7 css-md-px-1-5-fcb9969 css-lg-px-4-e16d6f1 css-xl-px-4-2d02534 css-rounded-full-ac204c1 css-bg-gradient-to-r-6ae7db2 css-from-red-300-f87358e css-to-red-700-d6d75ea css-text-white-72a4c7c css-text-sm-fc7473c css-font-semibold-e83a704 css-border-ca6bcd4 css-border-red-600-20-914ed92",
  authIcon: "css-h-4-11e59c6 css-w-4-dc7972e",

  // Mobile menu
  mobileMenuToggle: "css-md-hidden-e477a6a",
  mobileMenuButton: "css-p-2-7660b45 css-rounded-full-ac204c1 css-bg-black-60-db1c7bc css-text-gray-200-8aca214 css-hover-text-red-400-2c231af",
  mobileMenuIcon: "css-h-6-f6fe902 css-w-6-7ec10f8",
  mobileMenuPanel: "css-md-hidden-e477a6a css-absolute-da4dbfb css-left-4-b2e7cc5 css-right-4-5a438c3 css-top-full-5e8a03e css-mt-6-31f2553 css-bg-black-0595c69 css-backdrop-blur-md-782be2a css-rounded-2xl-68f2db6 css-p-4-8e63407 css-shadow-xl-a739868",
  mobileMenuItems: "css-flex-60fbb77 css-flex-col-8dddea0 css-gap-2-77a2a20",
  mobileNavLink: {
    base: "css-flex-60fbb77 css-items-center-3960ffc css-gap-3-1004c0c css-px-4-f0faeb2 css-py-3-1b2d54a css-rounded-xl-a217b4e",
    active: "css-bg-gradient-to-r-6ae7db2 css-from-red-600-5147d9e css-to-red-500-f012943 css-text-white-72a4c7c",
    inactive: "css-text-gray-300-5ed47f3 css-hover-bg-red-900-30-3b927e2"
  },
  mobileNavIcon: "css-h-5-cd0d9c5 css-w-5-7247048",
  mobileNavText: "css-font-medium-2689f39",

  // Mobile auth
  mobileAuthSection: "css-pt-2-f46b61a css-border-t-b950dda css-border-gray-800-ce37b1c css-mt-1-b6b02c0",
  mobileLogoutButton: "css-w-full-6da6a3c css-mt-3-eccd13e css-px-4-f0faeb2 css-py-3-1b2d54a css-rounded-xl-a217b4e css-bg-gradient-to-r-6ae7db2 css-from-gray-700-f524fa0 css-to-gray-800-e1a0ed9 css-text-white-72a4c7c css-flex-60fbb77 css-items-center-3960ffc css-justify-center-86843cf css-gap-2-77a2a20",
  mobileLoginButton: "css-w-full-6da6a3c css-mt-3-eccd13e css-px-4-f0faeb2 css-py-3-1b2d54a css-rounded-xl-a217b4e css-bg-gradient-to-r-6ae7db2 css-from-red-600-5147d9e css-to-red-500-f012943 css-text-white-72a4c7c css-flex-60fbb77 css-items-center-3960ffc css-justify-center-86843cf css-gap-2-77a2a20",
  mobileAuthIcon: "css-h-5-cd0d9c5 css-w-5-7247048"
};

// CSS styles for the style jsx block
export const navbarCSS = "\n  .pill-border {\n    position: absolute;\n    inset: -2px;\n    border-radius: 9999px;\n    pointer-events: none;\n    background: linear-gradient(90deg, rgba(255,59,59,0.14), rgba(255,87,87,0.06));\n    transform: scaleX(0);\n    transform-origin: left center;\n    transition: transform 0.28s ease;\n  }\n\n  .css-group-64292b1:hover .pill-border,\n  .nav-pill-btn.active + .pill-border,\n  .nav-pill-btn.active ~ .pill-border {\n    transform: scaleX(1);\n  }\n\n  .pill-underline {\n    height: 2px;\n    width: 40%;\n    border-radius: 999px;\n    margin-top: 4px;\n    background: linear-gradient(90deg, #ff6b6b, #ff3b3b);\n    transform: scaleX(0);\n    transform-origin: left center;\n    transition: transform 0.28s ease;\n  }\n\n  .nav-pill-btn:hover .pill-underline,\n  .nav-pill-btn.active .pill-underline {\n    transform: scaleX(1);\n  }\n\n  @media (max-width: 767px) {\n    nav {\n      left: 8px;\n      right: 8px;\n      top: 8px;\n    }\n  }\n\n  @media (min-width: 768px) and (max-width: 1023px) {\n    nav {\n      left: 12px;\n      right: 12px;\n      top: 12px;\n      border-radius: 20px !important;\n      padding: 8px 0 !important;\n    }\n  }\n\n  @media (min-width: 1024px) {\n    .nav-pill-btn:hover {\n      transform: translateY(-2px);\n    }\n\n    .nav-pill-btn.active {\n      transform: translateY(-2px);\n    }\n  }\n";


// Add these to your existing assets/dummyStyles.js

export const bookingsPageStyles = {
  // Layout and container styles
  pageContainer: "css-min-h-screen-793346c css-bg-black-0595c69 css-p-6-0478c89 css-sm-p-8-e91f4cd css-text-gray-100-883b06f",
  mainContainer: "css-max-w-7xl-726bb2c css-pt-30-12290b3 css-mx-auto-0e12dc7",
  
  // Header
  header: "css-mb-6-b6777c6 css-flex-60fbb77 css-items-center-3960ffc css-justify-between-8ef2268",
  title: "css-text-3xl-751fb0d css-md-text-4xl-c3c8444 css-font-extrabold-0ce2a7f css-text-red-500-e3f51cc",
  subtitle: "css-text-sm-fc7473c css-text-gray-400-a572cdd",
  
  // Loading and error states
  loading: "css-py-12-61357c0 css-text-center-ca6bf63 css-text-gray-400-a572cdd",
  error: "css-py-3-1b2d54a css-text-center-ca6bf63 css-text-red-300-1529a70",
  noBookings: "css-col-span-full-2c955d1 css-text-center-ca6bf63 css-text-gray-400-a572cdd css-py-8-a1f611f css-border-ca6bcd4 css-border-red-800-eddb455 css-rounded-lg-5f22e64",
  
  // Grid layout
  grid: "css-grid-f3c543a css-grid-cols-1-d7c8339 css-md-grid-cols-2-e4d6f34 css-lg-grid-cols-3-19d9b25 css-gap-6-0d304f9",
  
  // Booking card
  bookingCard: "css-bg-gradient-to-b-24a9e3a css-from-gray-900-03fb0dd css-to-black-29b6945 css-rounded-2xl-68f2db6 css-p-4-8e63407 css-border-ca6bcd4 css-border-red-800-eddb455 css-shadow-xl-a739868",
  cardContent: "css-flex-60fbb77 css-flex-col-8dddea0 css-lg-flex-row-2adea12 css-items-start-60541e1 css-gap-4-0c3bc98",
  posterContainer: "css-w-full-6da6a3c css-lg-w-24-d445da4 css-h-44-54dd2cf css-lg-h-36-5798e7f css-flex-shrink-0-2074a75 css-overflow-hidden-2cd02d1 css-rounded-md-421ac2b css-border-ca6bcd4 css-border-red-700-20ca4a2",
  poster: "css-w-full-6da6a3c css-h-full-668b21a css-object-cover-7d85d0c",
  cardInfo: "css-flex-1-36e579c css-w-full-6da6a3c",
  cardHeader: "css-flex-60fbb77 css-items-start-60541e1 css-justify-between-8ef2268 css-gap-3-1004c0c",
  movieTitle: "css-text-lg-42536e6 css-font-bold-69450ef css-text-red-400-a595d86 css-flex-60fbb77 css-items-center-3960ffc css-gap-2-77a2a20",
  movieIcon: "css-w-5-7247048 css-h-5-cd0d9c5",
  bookingId: "css-text-xs-359090c css-text-gray-400-a572cdd css-mt-1-b6b02c0",
  bookingIdText: "css-font-mono-0e65706 css-text-xs-359090c css-text-gray-200-8aca214",
  category: "css-text-xs-359090c css-text-gray-400-a572cdd css-text-right-308fc06",
  
  // Movie details
  details: "css-mt-3-eccd13e css-text-sm-fc7473c css-text-gray-300-5ed47f3 css-flex-60fbb77 css-flex-col-8dddea0 css-sm-flex-row-020ba68 css-sm-items-center-9f76a62 css-sm-gap-4-cdaa0b7",
  timeContainer: "css-flex-60fbb77 css-items-center-3960ffc css-gap-2-77a2a20",
  timeIcon: "css-w-4-dc7972e css-h-4-11e59c6 css-text-red-300-1529a70",
  locationContainer: "css-flex-60fbb77 css-items-center-3960ffc css-gap-2-77a2a20 css-mt-2-50d0d21 css-sm-mt-0-dfe9bd9",
  locationIcon: "css-w-4-dc7972e css-h-4-11e59c6 css-text-red-300-1529a70",
  locationText: "css-text-sm-fc7473c",
  durationLabel: "css-mt-3-eccd13e css-text-xs-359090c css-text-gray-400-a572cdd",
  duration: "css-mt-1-b6b02c0 css-text-sm-fc7473c css-text-gray-200-8aca214",
  
  // Summary section
  summary: "css-mt-4-0ab8667 css-flex-60fbb77 css-items-center-3960ffc css-justify-between-8ef2268 css-gap-4-0c3bc98",
  seatsLabel: "css-text-sm-fc7473c css-text-gray-400-a572cdd",
  total: "css-text-sm-fc7473c css-text-gray-300-5ed47f3 css-font-semibold-e83a704",
  
  // Expanded details
  expandedDetails: "css-mt-4-0ab8667 css-border-t-b950dda css-border-red-900-40-aa8a534 css-pt-3-ce335a8 css-text-sm-fc7473c css-text-gray-300-5ed47f3 css-space-y-3-6ed543e css-transition-all-0fe7d7d css-duration-200-625a4c3 css-ease-in-out-81a3641",
  expandedOpen: "css-max-h-1200px-7428436 css-opacity-100-3972e98",
  expandedClosed: "css-max-h-0-2e5db36 css-opacity-0-7065497 css-overflow-hidden-2cd02d1",
  seatsSection: "",
  seatsLabelExpanded: "css-text-sm-fc7473c css-text-gray-400-a572cdd",
  seatsContainer: "css-mt-2-50d0d21 css-flex-60fbb77 css-flex-wrap-1eb5c6d css-gap-2-77a2a20",
  seatItem: "css-px-3-0e17f2b css-py-1-660d2ef css-rounded-md-421ac2b css-bg-black-40-fd9dca3 css-border-ca6bcd4 css-border-red-800-eddb455 css-flex-60fbb77 css-items-center-3960ffc css-gap-2-77a2a20 css-text-sm-fc7473c",
  seatId: "css-font-semibold-e83a704",
  seatType: "css-text-xs-359090c css-px-2-d5eab21 css-py-0-5-465609a css-rounded-07389a7",
  seatTypeRecliner: "css-bg-red-700-f359d3c css-text-white-72a4c7c",
  seatTypeStandard: "css-bg-gray-800-8a4adec css-text-gray-200-8aca214",
  
  // Pricing breakdown
  pricing: "css-space-y-2-6f7e013",
  subtotal: "css-flex-60fbb77 css-items-center-3960ffc css-justify-between-8ef2268 css-text-gray-300-5ed47f3",
  finalTotal: "css-flex-60fbb77 css-items-center-3960ffc css-justify-between-8ef2268 css-font-semibold-e83a704 css-text-gray-100-883b06f css-text-lg-42536e6",
  
  // QR section
  qrSection: "css-flex-60fbb77 css-items-center-3960ffc css-gap-4-0c3bc98",
  qrLabel: "css-flex-60fbb77 css-items-center-3960ffc css-gap-2-77a2a20 css-text-sm-fc7473c css-text-gray-400-a572cdd",
  qrIcon: "css-w-4-dc7972e css-h-4-11e59c6",
  qrImage: "css-w-28-b67ee2e css-h-28-e836f6e css-object-contain-b1104f4 css-rounded-md-421ac2b css-bg-white-5e10cdb css-p-1-eb6a3ce css-cursor-pointer-3451683",
  qrUnavailable: "css-w-28-b67ee2e css-h-28-e836f6e css-bg-gray-800-8a4adec css-rounded-md-421ac2b css-flex-60fbb77 css-items-center-3960ffc css-justify-center-86843cf css-text-xs-359090c css-text-gray-500-5a630e0",
  
  // Toggle button
  toggleButton: "css-mt-4-0ab8667 css-flex-60fbb77 css-items-center-3960ffc css-gap-3-1004c0c",
  detailsButton: "css-inline-flex-52083e7 css-items-center-3960ffc css-gap-2-77a2a20 css-px-3-0e17f2b css-py-2-03b4dd7 css-rounded-lg-5f22e64 css-border-ca6bcd4 css-border-red-700-20ca4a2 css-bg-black-30-b0d7388 css-hover-bg-black-40-0bd01c5 css-transition-56bf8ae",
  chevron: "css-w-4-dc7972e css-h-4-11e59c6 css-transform-dd8ce13 css-transition-transform-eadef23 css-duration-200-625a4c3",
  chevronOpen: "css-rotate-180-3350916",
  chevronClosed: "css-rotate-0-5ccb6fd",
  
  // Modal
  modalOverlay: "css-fixed-7bc5559 css-inset-0-7b7df04 css-z-50-181b286 css-flex-60fbb77 css-items-center-3960ffc css-justify-center-86843cf css-p-4-8e63407",
  modalBackdrop: "css-absolute-da4dbfb css-inset-0-7b7df04 css-bg-black-70-e248bd1",
  modalContent: "css-relative-d89972f css-max-w-md-9794ab4 css-w-full-6da6a3c css-bg-gray-900-808c4e1 css-rounded-2xl-68f2db6 css-p-6-0478c89 css-border-ca6bcd4 css-border-red-800-eddb455 css-shadow-2xl-14e4660 css-text-gray-100-883b06f",
  modalHeader: "css-flex-60fbb77 css-items-start-60541e1 css-justify-between-8ef2268 css-gap-4-0c3bc98",
  modalTitle: "css-text-xl-d5c9b00 css-font-bold-69450ef css-text-red-400-a595d86",
  modalBookingId: "css-text-sm-fc7473c css-text-gray-300-5ed47f3",
  modalIdText: "css-font-mono-0e65706 css-text-sm-fc7473c",
  modalDetails: "css-mt-2-50d0d21 css-text-sm-fc7473c css-text-gray-300-5ed47f3",
  modalCloseButton: "css-inline-flex-52083e7 css-items-center-3960ffc css-justify-center-86843cf css-w-8-2bbcfc3 css-h-8-ed8a5df css-rounded-full-ac204c1 css-bg-black-40-fd9dca3 css-hover-bg-black-30-0fa1c00 css-border-ca6bcd4 css-border-gray-700-4d76ccb",
  modalCloseIcon: "css-w-4-dc7972e css-h-4-11e59c6"
};

// Helper functions for formatting
export const formatTime = (d) =>
  d
    ? new Date(d).toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
      })
    : "Time unavailable";

export const formatDuration = (mins) => {
  const h = Math.floor((mins || 0) / 60);
  const m = (mins || 0) % 60;
  return `${h}h ${m}m`;
};

// Add to src/assets/dummyStyles.js
export const contactStyles = {
  // Page container styles
  pageContainer: "css-min-h-screen-793346c css-pt-15-208a458 css-bg-black-0595c69 css-text-white-72a4c7c css-py-8-a1f611f css-px-4-f0faeb2 css-sm-px-6-7a9aabf css-lg-px-8-6aeb2e9 css-relative-d89972f css-overflow-hidden-2cd02d1",
  
  // Background elements
  bgGradient: "css-absolute-da4dbfb css-top-0-2167406 css-left-0-c78facc css-w-full-6da6a3c css-h-48-3c8ea32 css-bg-gradient-to-b-24a9e3a css-from-red-900-20-33a2175 css-to-transparent-0fe2b3d",
  bgBlob1: "css-absolute-da4dbfb css-top-40-c0c7230 css-right-10-741e864 css-w-32-516b03d css-h-32-b5f3ff7 css-bg-red-500-10-b5ae5b8 css-rounded-full-ac204c1 css-filter-4bb4ca7 css-blur-xl-1acba1d",
  bgBlob2: "css-absolute-da4dbfb css-bottom-20-2f8fe33 css-left-8-831031b css-w-24-69da7e4 css-h-24-9678c61 css-bg-red-700-10-15eb09c css-rounded-full-ac204c1 css-filter-4bb4ca7 css-blur-xl-1acba1d",
  
  // Film strip effects
  filmStripTop: "css-absolute-da4dbfb css-top-0-2167406 css-left-0-c78facc css-w-full-6da6a3c css-h-4-11e59c6 css-flex-60fbb77 css-gap-8-1500488",
  filmStripBottom: "css-absolute-da4dbfb css-bottom-0-189f036 css-left-0-c78facc css-w-full-6da6a3c css-h-4-11e59c6 css-flex-60fbb77 css-gap-8-1500488",
  filmStripSegment: "css-w-8-2bbcfc3 css-h-4-11e59c6 css-bg-gray-800-8a4adec",
  
  // Content container
  contentContainer: "css-max-w-6xl-1d4402d css-pt-20-510acdc css-mx-auto-0e12dc7 css-relative-d89972f css-z-10-236812d",
  
  // Header styles
  headerContainer: "css-text-center-ca6bf63 css-font-pacifico-a153062 css-mb-12-2cad2f1",
  headerTitle: "css-text-4xl-a95699d css-md-text-6xl-9ee519f css-font-bold-69450ef",
  headerTitleRed: "css-text-red-400-a595d86",
  headerTitleWhite: "css-text-white-72a4c7c",
  headerSubtitle: "css-text-xl-d5c9b00 css-text-gray-300-5ed47f3 css-max-w-3xl-fa3f711 css-mx-auto-0e12dc7 css-mt-4-0ab8667",
  
  // Grid layout
  gridContainer: "css-grid-f3c543a css-grid-cols-1-d7c8339 css-lg-grid-cols-2-2f27a80 css-gap-8-1500488",
  
  // Card styles
  cardRelative: "css-relative-d89972f",
  cardGradient: "css-absolute-da4dbfb css-inset-2-be653c4 css-bg-gradient-to-r-6ae7db2 css-from-red-600-5147d9e css-to-red-800-83c3652 css-rounded-2xl-68f2db6 css-blur-md-ef09d1b css-opacity-50-0b8c506",
  cardContainer: "css-relative-d89972f css-bg-gray-800-8a4adec css-rounded-2xl-68f2db6 css-p-6-0478c89 css-shadow-2xl-14e4660 css-border-ca6bcd4 css-border-red-500-30-bc4ee43",
  cardBadge: "css-absolute-da4dbfb css-top-3-4d654e3 css-left-6-b80d184 css-bg-red-600-48b76a4 css-text-white-72a4c7c css-px-4-f0faeb2 css-py-1-660d2ef css-rounded-full-ac204c1 css-text-sm-fc7473c css-font-bold-69450ef css-flex-60fbb77 css-items-center-3960ffc",
  cardIcon: "css-h-4-11e59c6 css-w-4-dc7972e css-mr-1-6181624",
  
  // Form styles
  formTitle: "css-text-2xl-3febee0 css-font-bold-69450ef css-mb-6-b6777c6 css-font-pacifico-a153062 css-text-red-400-a595d86 css-flex-60fbb77 css-items-center-3960ffc css-pt-2-f46b61a",
  formTitleIcon: "css-mr-3-adf5462",
  form: "css-space-y-5-b43b4c0",
  formGrid: "css-grid-f3c543a css-grid-cols-1-d7c8339 css-md-grid-cols-2-e4d6f34 css-gap-5-b39e60c",
  
  // Input styles
  inputGroup: "css-block-0214b4b css-text-sm-fc7473c css-font-medium-2689f39 css-text-gray-300-5ed47f3 css-mb-2-a77ed4d",
  input: "css-w-full-6da6a3c css-px-4-f0faeb2 css-py-2-5-e7ee55a css-bg-gray-700-dbc6e26 css-border-ca6bcd4 css-border-gray-600-3f5600c css-rounded-lg-5f22e64 css-focus-ring-2-608dd26 css-focus-ring-red-500-f2ae4b4 css-focus-border-transparent-eca10d3 css-transition-all-0fe7d7d css-duration-300-7890552",
  textarea: "css-w-full-6da6a3c css-px-4-f0faeb2 css-py-2-5-e7ee55a css-bg-gray-700-dbc6e26 css-border-ca6bcd4 css-border-gray-600-3f5600c css-rounded-lg-5f22e64 css-focus-ring-2-608dd26 css-focus-ring-red-500-f2ae4b4 css-focus-border-transparent-eca10d3 css-transition-all-0fe7d7d css-duration-300-7890552",
  select: "css-w-full-6da6a3c css-px-4-f0faeb2 css-py-2-5-e7ee55a css-bg-gray-700-dbc6e26 css-border-ca6bcd4 css-border-gray-600-3f5600c css-rounded-lg-5f22e64 css-focus-ring-2-608dd26 css-focus-ring-red-500-f2ae4b4 css-focus-border-transparent-eca10d3 css-transition-all-0fe7d7d css-duration-300-7890552",
  
  // Button styles
  submitButton: "css-w-full-6da6a3c css-bg-gradient-to-r-6ae7db2 css-from-red-600-5147d9e css-to-red-800-83c3652 css-text-white-72a4c7c css-py-3-1b2d54a css-px-6-f92d023 css-rounded-full-ac204c1 css-font-bold-69450ef css-flex-60fbb77 css-items-center-3960ffc css-justify-center-86843cf css-transition-all-0fe7d7d css-duration-300-7890552 css-transform-dd8ce13 css-hover-scale-1-02-b807bd8 css-hover-shadow-xl-9a8eaab css-cursor-pointer-3451683 css-hover-to-red-900-2998bc4 css-group-64292b1",
  buttonIcon: "css-ml-2-c68af99 css-h-5-cd0d9c5 css-w-5-7247048 css-group-hover-translate-x-1-6a4a227 css-transition-transform-eadef23",
  
  // Contact info styles
  contactInfo: "css-space-y-5-b43b4c0",
  contactItem: "css-flex-60fbb77 css-items-start-60541e1 css-group-64292b1",
  contactIconContainer: "css-bg-red-600-48b76a4 css-p-2-7660b45 css-rounded-full-ac204c1 css-mr-4-37ddc93 css-transition-transform-eadef23",
  contactIcon: "css-h-5-cd0d9c5 css-w-5-7247048",
  contactText: "css-text-lg-42536e6 css-font-semibold-e83a704 css-mb-1-6528170",
  contactDetail: "css-text-gray-300-5ed47f3",
  contactSubDetail: "css-text-sm-fc7473c css-text-red-400-a595d86 css-mt-1-b6b02c0",
  
  // Emergency card styles
  emergencyCardGradient: "css-absolute-da4dbfb css-inset-2-be653c4 css-bg-gradient-to-r-6ae7db2 css-from-amber-600-f30e3b2 css-to-amber-800-5c617d1 css-rounded-2xl-68f2db6 css-blur-lg-c60fd33 css-opacity-50-0b8c506",
  emergencyCard: "css-relative-d89972f css-bg-gray-800-8a4adec css-rounded-2xl-68f2db6 css-p-5-c07e54f css-shadow-2xl-14e4660 css-border-ca6bcd4 css-border-amber-500-30-2bce93a",
  emergencyTitle: "css-text-lg-42536e6 css-font-bold-69450ef css-mb-3-1bb8832 css-text-amber-400-29a9a15 css-flex-60fbb77 css-items-center-3960ffc",
  emergencyIcon: "css-h-5-cd0d9c5 css-w-5-7247048 css-mr-2-d2347e8",
  emergencyText: "css-text-gray-300-5ed47f3 css-text-sm-fc7473c css-mb-3-1bb8832",
  emergencyHotline: "css-bg-amber-600-87e4d50 css-text-white-72a4c7c css-text-sm-fc7473c css-font-bold-69450ef css-px-3-0e17f2b css-py-1-660d2ef css-rounded-full-ac204c1",
  emergencyNote: "css-ml-3-fd9bb0d css-text-xs-359090c css-text-amber-400-29a9a15"
};


// ... previous navbar styles ...

export const moviesPageStyles = {
  // Layout
  container: "css-min-h-screen-793346c css-pt-20-510acdc css-bg-gradient-to-b-24a9e3a css-from-gray-900-03fb0dd css-to-black-29b6945 css-text-white-72a4c7c",
  
  // Categories section
  categoriesSection: "css-pt-12-b4f77d7 css-px-4-f0faeb2",
  categoriesContainer: "css-container-255a762 css-mx-auto-0e12dc7",
  categoriesFlex: "css-flex-60fbb77 css-flex-wrap-1eb5c6d css-gap-4-0c3bc98 css-justify-center-86843cf",
  categoryButton: {
    base: "css-px-6-f92d023 css-py-3-1b2d54a css-rounded-full-ac204c1 css-cursor-pointer-3451683 css-transition-all-0fe7d7d css-duration-300-7890552",
    active: "css-bg-red-600-48b76a4 css-text-white-72a4c7c css-shadow-lg-06bbb43 css-shadow-red-600-30-254300d",
    inactive: "css-bg-gray-800-8a4adec css-text-gray-300-5ed47f3 css-hover-bg-gray-700-dde8e82"
  },

  // Movies grid section
  moviesSection: "css-py-8-a1f611f css-px-4-f0faeb2 css-pb-20-8d7541c",
  moviesContainer: "css-container-255a762 css-mx-auto-0e12dc7",
  moviesGrid: "css-grid-f3c543a css-grid-cols-2-8e75e3d css-sm-grid-cols-3-ab1b20c css-md-grid-cols-4-d59f314 css-lg-grid-cols-5-76125f2 css-xl-grid-cols-6-adbc14a css-gap-6-0d304f9",
  
  // Movie card
  movieCard: "css-group-64292b1 css-relative-d89972f css-cursor-pointer-3451683",
  movieImageContainer: "css-overflow-hidden-2cd02d1 css-rounded-lg-5f22e64 css-aspect-2-3-e476fc1",
  movieImage: "css-w-full-6da6a3c css-h-full-668b21a css-object-cover-7d85d0c css-transition-transform-eadef23 css-duration-500-8443221",
  movieInfo: "css-mt-3-eccd13e css-font-pacifico-a153062",
  movieTitle: "css-font-medium-2689f39 css-text-center-ca6bf63 css-truncate-f283ea9",
  movieCategory: "css-flex-60fbb77 css-justify-center-86843cf css-mt-1-b6b02c0",
  movieCategoryText: "css-text-xs-359090c css-text-gray-400-a572cdd css-capitalize-d01a341",

  // Empty state
  emptyState: "css-col-span-full-2c955d1 css-text-center-ca6bf63 css-text-gray-400-a572cdd css-py-12-61357c0",

  // Show more button
  showMoreContainer: "css-mt-8-4e5d2af css-flex-60fbb77 css-justify-center-86843cf",
  showMoreButton: "css-px-6-f92d023 css-py-3-1b2d54a css-cursor-pointer-3451683 css-rounded-full-ac204c1 css-text-white-72a4c7c css-border-ca6bcd4 css-border-white-10-fa00a2f css-bg-gradient-to-b-24a9e3a css-from-red-500-01b9ce3 css-to-red-700-d6d75ea css-transition-56bf8ae"
};

// Add to src/assets/dummyStyles.js
export const footerStyles = {
  // Main container
  footer: "css-relative-d89972f css-bg-black-0595c69 css-text-white-72a4c7c css-overflow-hidden-2cd02d1 css-border-t-b950dda css-border-red-800-eddb455",
  
  // Animated border
  animatedBorder: "css-absolute-da4dbfb css-top-0-2167406 css-left-0-c78facc css-w-full-6da6a3c css-h-1-3a1268a css-bg-gradient-to-r-6ae7db2 css-from-transparent-bbb26aa css-via-red-600-c59aaaf css-to-transparent-0fe2b3d css-animate-pulse-d59b979",
  
  // Background elements
  bgContainer: "css-absolute-da4dbfb css-inset-0-7b7df04 css-opacity-5-caee154 css-pointer-events-none-a432653",
  bgGlow1: "css-absolute-da4dbfb css-top-12-64a6d4e css-left-12-2b3a1f2 css-w-40-84789e8 css-h-40-aadad68 css-sm-w-56-b5e4b22 css-sm-h-56-7c2f713 css-md-w-72-8be8f98 css-md-h-72-9e5f6b5 css-bg-red-600-48b76a4 css-rounded-full-ac204c1 css-filter-4bb4ca7 css-blur-3xl-4b5e775 css-animate-pulse-d59b979",
  bgGlow2: "css-absolute-da4dbfb css-right-16-03377ba css-bottom-16-958bb0a css-w-56-d16aae8 css-h-56-4ead271 css-sm-w-72-8f38f9a css-sm-h-72-515b649 css-md-w-96-c1d280b css-md-h-96-58babb9 css-bg-red-800-99f6f71 css-rounded-full-ac204c1 css-filter-4bb4ca7 css-blur-3xl-4b5e775",
  
  // Floating icons
  floatingIconsContainer: "css-absolute-da4dbfb css-inset-0-7b7df04 css-opacity-10-ad3ba0a css-pointer-events-none-a432653 css-hidden-99d72c7 css-md-block-9d60be3",
  floatingIcon: "css-absolute-da4dbfb css-text-red-600-421d458",
  
  // Main content
  mainContainer: "css-relative-d89972f css-z-10-236812d css-max-w-7xl-726bb2c css-mx-auto-0e12dc7 css-px-4-f0faeb2 css-sm-px-6-7a9aabf css-md-px-8-daf5d3c css-py-12-61357c0 css-sm-py-14-f4b77ed css-md-py-16-b6cf40c",
  gridContainer: "css-grid-f3c543a css-grid-cols-1-d7c8339 css-sm-grid-cols-2-e00ad81 css-md-grid-cols-2-e4d6f34 css-xl-grid-cols-4-a1de1ea css-gap-8-1500488 css-sm-gap-10-2c85067 css-mb-12-2cad2f1 css-md-mb-16-75e8a4b",
  
  // Brand section
  brandContainer: "css-lg-col-span-1-e2a179c",
  brandLogoContainer: "css-flex-60fbb77 css-items-center-3960ffc css-mb-4-da01985 css-sm-mb-6-e535848",
  logoGlow: "css-absolute-da4dbfb css-inset-1-8da4e50 css-sm-inset-2-35524ac css-bg-red-600-48b76a4 css-rounded-full-ac204c1 css-blur-a9b74ac css-opacity-75-f854738 css-animate-pulse-d59b979",
  logoContainer: "css-relative-d89972f css-bg-black-0595c69 css-p-2-7660b45 css-sm-p-3-8a6e5af css-rounded-full-ac204c1 css-border-ca6bcd4 css-border-red-600-04d37b2",
  logoIcon: "css-h-7-d0a52b3 css-w-7-cbbf90f css-sm-h-8-4a01f3e css-sm-w-8-eace75c css-text-red-500-e3f51cc",
  brandTitle: "css-ml-3-fd9bb0d css-sm-ml-4-e69f819 css-text-2xl-3febee0 css-sm-text-3xl-b6496eb css-font-bold-69450ef css-text-red-600-421d458",
  brandTitleWhite: "css-text-white-72a4c7c",
  brandDescription: "css-text-gray-400-a572cdd css-mb-6-b6777c6 css-sm-mb-8-ed23faa css-font-light-f0251ca css-text-sm-fc7473c css-sm-text-base-9bcf466 css-leading-relaxed-6b189c6",
  socialContainer: "css-flex-60fbb77 css-space-x-3-eca0b93 css-sm-space-x-5-844fd9e",
  socialLink: "css-text-gray-400-a572cdd css-p-2-7660b45 css-sm-p-3-8a6e5af css-rounded-full-ac204c1 css-transform-dd8ce13 css-transition-all-0fe7d7d css-duration-300-7890552 css-hover-scale-110-7abf679 css-hover-text-red-500-a39a0e6 css-border-ca6bcd4 css-border-gray-800-ce37b1c css-hover-border-red-600-48922f1",
  socialIcon: "css-h-4-11e59c6 css-w-4-dc7972e css-sm-h-5-42eb11f css-sm-w-5-41037cb",
  
  // Section headers
  sectionHeader: "css-text-lg-42536e6 css-sm-text-xl-998e0b2 css-font-bold-69450ef css-mb-6-b6777c6 css-sm-mb-8-ed23faa css-flex-60fbb77 css-items-center-3960ffc css-text-red-600-421d458",
  sectionDot: "css-w-2-5-650758f css-h-2-5-9b3d072 css-bg-red-600-48b76a4 css-rounded-full-ac204c1 css-mr-3-adf5462 css-animate-pulse-d59b979",
  
  // Links
  linksList: "css-space-y-3-6ed543e css-sm-space-y-4-9e77d13",
  linkItem: "css-text-gray-400-a572cdd css-hover-text-red-500-a39a0e6 css-transition-all-0fe7d7d css-duration-300-7890552 css-flex-60fbb77 css-items-center-3960ffc css-group-64292b1 css-transform-dd8ce13 css-hover-translate-x-2-96f28d6 css-text-sm-fc7473c css-sm-text-base-9bcf466",
  linkDot: "css-w-2-940924b css-h-2-2f2a842 css-bg-red-600-48b76a4 css-rounded-full-ac204c1 css-mr-3-adf5462 css-opacity-0-7065497 css-group-hover-opacity-100-181f3d6 css-transition-opacity-67d6184 css-duration-300-7890552 css-inline-block-bb0c4bf",
  
  // Contact info
  contactList: "css-space-y-4-3e7ce58 css-sm-space-y-5-5baa462 css-text-sm-fc7473c css-sm-text-base-9bcf466",
  contactItem: "css-flex-60fbb77 css-items-start-60541e1",
  contactIconContainer: "css-bg-black-0595c69 css-p-2-7660b45 css-rounded-lg-5f22e64 css-mr-3-adf5462 css-border-ca6bcd4 css-border-red-600-04d37b2",
  contactIcon: "css-h-4-11e59c6 css-w-4-dc7972e css-sm-h-5-42eb11f css-sm-w-5-41037cb css-text-red-500-e3f51cc",
  contactText: "css-text-gray-400-a572cdd",
  
  // Divider
  divider: "css-relative-d89972f css-h-px-aea6160 css-bg-gradient-to-r-6ae7db2 css-from-transparent-bbb26aa css-via-red-600-c59aaaf css-to-transparent-0fe2b3d css-mb-8-a8b152c css-sm-mb-10-993b4ad",
  dividerIconContainer: "css-absolute-da4dbfb css-left-1-2-e632769 css-transform-dd8ce13 css-translate-x-1-2-efaa070 css-translate-y-1-2-36b381b css-bg-black-0595c69 css-p-1-5-cd009d7 css-sm-p-2-bb528c6 css-rounded-full-ac204c1 css-border-ca6bcd4 css-border-red-600-04d37b2",
  dividerIcon: "css-h-5-cd0d9c5 css-w-5-7247048 css-sm-h-6-4e67256 css-sm-w-6-21983d8 css-text-red-500-e3f51cc",
  
  // Bottom bar
  bottomBar: "css-flex-60fbb77 css-flex-col-8dddea0 css-sm-flex-row-020ba68 css-justify-between-8ef2268 css-items-center-3960ffc css-gap-3-1004c0c css-sm-gap-0-1e4bc76",
  designedBy: "css-text-sm-fc7473c css-flex-60fbb77 css-items-center-3960ffc",
  designedByText: "css-text-gray-500-5a630e0 css-mr-2-d2347e8 css-text-xs-359090c css-sm-text-sm-e2327d1",
  designedByLink: "css-text-gray-500-5a630e0 css-font-medium-2689f39 css-hover-text-blue-500-2044366 css-transition-colors-ceb69a6 css-duration-300-7890552 css-text-xs-359090c css-sm-text-sm-e2327d1",
  policyLinks: "css-flex-60fbb77 css-space-x-4-61ffd58 css-sm-space-x-6-cfaa308 css-text-xs-359090c css-sm-text-sm-e2327d1",
  policyLink: "css-text-gray-500-5a630e0 css-hover-text-red-500-a39a0e6 css-transition-colors-ceb69a6 css-duration-300-7890552",
  
  // Scroll to top button
  scrollTopButton: "css-fixed-7bc5559 css-bottom-4-c1b9bd6 css-sm-bottom-6-6dfb687 css-right-4-5a438c3 css-sm-right-6-4690eb7 css-cursor-pointer-3451683 css-bg-red-700-f359d3c css-hover-bg-red-600-42c2b2c css-text-white-72a4c7c css-p-3-eb6e8b8 css-sm-p-4-1884518 css-rounded-full-ac204c1 css-shadow-lg-06bbb43 css-transition-all-0fe7d7d css-duration-300-7890552 css-transform-dd8ce13 css-hover-translate-y-1-c042d25 css-z-20-145745b css-group-64292b1 css-border-ca6bcd4 css-border-red-500-5fb36b4",
  scrollTopIcon: "css-h-5-cd0d9c5 css-w-5-7247048 css-sm-h-6-4e67256 css-sm-w-6-21983d8",
  
  // Custom CSS
  customCSS: "\n    @keyframes float {\n      0% {\n        transform: translateY(0) rotate(0deg);\n      }\n      50% {\n        transform: translateY(-18px) rotate(8deg);\n      }\n      100% {\n        transform: translateY(0) rotate(0deg);\n      }\n    }\n    .animate-float {\n      will-change: transform;\n    }\n  "
};

// ... previous navbar and moviesPage styles ...

export const moviesStyles = {
  // Main container
  container: "css-px-4-f0faeb2 css-py-8-a1f611f css-sm-py-12-a4664c8 css-max-w-6xl-1d4402d css-mx-auto-0e12dc7",
  
  // Title
  title: "css-text-3xl-751fb0d css-sm-text-4xl-a8e2faf css-md-text-5xl-2183f54 css-text-center-ca6bf63 css-mb-8-a8b152c",
  
  // Grid layout
  grid: "css-grid-f3c543a css-grid-cols-2-8e75e3d css-sm-grid-cols-4-898c0bc css-md-grid-cols-4-d59f314 css-lg-grid-cols-6-76f32b5 css-xl-grid-cols-6-adbc14a css-gap-6-0d304f9",
  
  // Movie article
  movieArticle: "css-flex-60fbb77 css-flex-col-8dddea0 css-items-center-3960ffc css-group-64292b1",
  
  // Movie link
  movieLink: "css-w-full-6da6a3c css-block-0214b4b css-rounded-2xl-68f2db6 css-overflow-hidden-2cd02d1 css-transform-dd8ce13 css-transition-transform-eadef23 css-duration-300-7890552",
  
  // Movie image
  movieImage: "css-w-full-6da6a3c css-rounded-2xl-68f2db6 css-object-cover-7d85d0c css-h-70-4207906 css-sm-h-56-7c2f713 css-md-h-64-e3d87da css-lg-h-56-ed55d38 css-xl-h-70-0d773c6",
  
  // Movie info container
  movieInfo: "css-mt-3-eccd13e css-text-center-ca6bf63 css-w-full-6da6a3c css-px-1-d8e0e38",
  
  // Title container
  titleContainer: "css-flex-60fbb77 css-items-center-3960ffc css-justify-center-86843cf css-gap-2-77a2a20",
  
  // Tickets icon
  ticketsIcon: "css-h-4-11e59c6 css-w-4-dc7972e css-text-red-600-421d458",
  
  // Movie title
  movieTitle: "css-text-base-4ee7349 css-sm-text-lg-12f38ca css-font-medium-2689f39 css-truncate-f283ea9",
  
  // Category container
  categoryContainer: "css-mt-1-b6b02c0 css-font-pacifico-a153062",
  
  // Category text
  categoryText: "css-text-xs-359090c css-sm-text-sm-e2327d1 css-text-gray-400-a572cdd css-capitalize-d01a341"
};


// Add to src/assets/dummyStyles.js
export const loginStyles = {
  // Page container
  pageContainer: "css-min-h-screen-793346c css-flex-60fbb77 css-items-center-3960ffc css-justify-center-86843cf css-bg-gradient-to-br-39b2e00 css-from-gray-950-185a5df css-to-black-29b6945 css-p-4-8e63407 css-relative-d89972f css-overflow-hidden-2cd02d1",
  
  // Back button
  backButtonContainer: "css-mb-4-da01985 css-sm-mb-6-e535848 css-xl-mb-2-adc89ab css-md-mb-0-e22b41d",
  backButton: "css-inline-flex-52083e7 css-xl-ml-100-78965f5 css-md-ml-30-3c1df64 css-items-center-3960ffc css-text-red-400-a595d86 css-hover-text-red-300-2678a28 css-transition-all-0fe7d7d css-duration-300-7890552 css-group-64292b1 css-focus-outline-none-55d048e css-focus-visible-ring-2-793c80e css-focus-visible-ring-red-500-9f03ee6 css-focus-visible-ring-offset-2-0c4687c",
  backButtonIcon: "css-mr-2-d2347e8 css-transform-dd8ce13 css-group-hover-translate-x-1-ce571d1 css-transition-transform-eadef23",
  backButtonText: "css-font-medium-2689f39 css-text-sm-fc7473c css-sm-text-base-9bcf466",
  
  // Card styles
  cardContainer: "css-relative-d89972f css-md-mt-10-a202c9e css-bg-gray-900-90-2978f75 css-backdrop-blur-md-782be2a css-rounded-2xl-68f2db6 css-shadow-2xl-14e4660 css-overflow-hidden-2cd02d1 css-border-ca6bcd4 css-border-gray-700-4d76ccb animate-border",
  cardHeader: "css-relative-d89972f css-h-2-2f2a842 css-bg-gradient-to-r-6ae7db2 css-from-red-700-0fe657b css-via-red-600-c59aaaf css-to-red-700-d6d75ea",
  cardContent: "css-px-6-f92d023 css-sm-px-8-8fb6f42 css-py-8-a1f611f css-sm-py-10-e31bbd9",
  
  // Header section
  headerContainer: "css-text-center-ca6bf63 css-mb-6-b6777c6 css-sm-mb-8-ed23faa",
  headerIconContainer: "css-flex-60fbb77 css-justify-center-86843cf css-items-center-3960ffc css-mb-3-1bb8832 css-sm-mb-4-a2ceaee",
  headerIcon: "css-text-red-500-e3f51cc css-mr-2-d2347e8",
  headerTitle: "css-text-3xl-751fb0d css-sm-text-4xl-a8e2faf css-font-bold-69450ef css-text-white-72a4c7c font-cinema css-leading-tight-e9fadaf",
  headerSubtitle: "css-text-red-200-a7ec8c4 css-mt-1-b6b02c0 css-sm-mt-2-d53f243 css-font-medium-2689f39 css-text-sm-fc7473c css-sm-text-base-9bcf466",
  
  // Form styles
  formContainer: "css-space-y-4-3e7ce58 css-sm-space-y-6-460c02b",
  inputGroup: "css-mb-4-da01985 css-sm-mb-6-e535848",
  label: "css-block-0214b4b css-text-red-100-182057e css-text-sm-fc7473c css-font-bold-69450ef css-mb-2-a77ed4d font-cinema",
  inputContainer: "css-relative-d89972f",
  input: "css-w-full-6da6a3c css-px-3-0e17f2b css-sm-px-4-bb7f9a3 css-py-2-5-e7ee55a css-sm-py-3-aa2253d css-bg-gray-800-60-3e5f415 css-text-white-72a4c7c css-rounded-lg-5f22e64 css-focus-ring-2-608dd26 css-focus-ring-red-500-f2ae4b4 css-focus-outline-none-55d048e css-transition-all-0fe7d7d css-duration-200-625a4c3 css-border-ca6bcd4 css-border-gray-700-4d76ccb css-placeholder-gray-500-0b99a26",
  inputWithIcon: "css-w-full-6da6a3c css-px-3-0e17f2b css-sm-px-4-bb7f9a3 css-py-2-5-e7ee55a css-sm-py-3-aa2253d css-bg-gray-800-60-3e5f415 css-text-white-72a4c7c css-rounded-lg-5f22e64 css-focus-ring-2-608dd26 css-focus-ring-red-500-f2ae4b4 css-focus-outline-none-55d048e css-transition-all-0fe7d7d css-duration-200-625a4c3 css-border-ca6bcd4 css-border-gray-700-4d76ccb css-pr-10-b700316",
  inputIcon: "css-absolute-da4dbfb css-right-3-c100b64 css-top-2-5-7a470f4 css-sm-top-3-0179596",
  passwordToggle: "css-absolute-da4dbfb css-inset-y-0-5f89f14 css-right-0-d8cdcad css-px-2-d5eab21 css-sm-px-3-c20c443 css-flex-60fbb77 css-items-center-3960ffc css-focus-outline-none-55d048e",
  passwordToggleIcon: "css-text-red-300-1529a70",
  
  // Submit button
  submitButton: "css-w-full-6da6a3c css-bg-gradient-to-r-6ae7db2 css-from-red-700-0fe657b css-to-red-800-83c3652 css-text-white-72a4c7c css-font-bold-69450ef css-py-2-5-e7ee55a css-sm-py-3-aa2253d css-px-4-f0faeb2 css-rounded-full-ac204c1 css-hover-opacity-90-961c6c3 css-transition-all-0fe7d7d css-cursor-pointer-3451683 css-duration-300-7890552 css-transform-dd8ce13 css-focus-outline-none-55d048e css-focus-ring-2-608dd26 css-focus-ring-red-500-f2ae4b4 css-shadow-lg-06bbb43 css-shadow-red-900-30-7a10aa0",
  submitButtonDisabled: "css-opacity-80-714816e css-cursor-not-allowed-29b733e",
  loadingSpinner: "css-animate-spin-afbdd13 css-rounded-full-ac204c1 css-h-4-11e59c6 css-w-4-dc7972e css-border-b-2-65ac0c4 css-border-white-2fe5963 css-mr-2-d2347e8",
  buttonContent: "css-flex-60fbb77 css-items-center-3960ffc css-justify-center-86843cf",
  buttonIcon: "css-mr-2-d2347e8",
  buttonText: "font-cinema css-text-sm-fc7473c css-sm-text-base-9bcf466",
  
  // Footer link
  footerContainer: "css-text-center-ca6bf63 css-mt-6-31f2553 css-sm-mt-8-dd054e5",
  footerText: "css-text-gray-400-a572cdd css-text-sm-fc7473c css-sm-text-base-9bcf466",
  footerLink: "css-text-red-400-a595d86 css-hover-text-red-300-2678a28 css-font-medium-2689f39 css-transition-56bf8ae css-duration-200-625a4c3 css-underline-c82b67c css-hover-no-underline-0771bea",
  
  // Custom CSS
  customCSS: "\n    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');\n\n    @keyframes borderAnimation {\n      0% {\n        box-shadow: 0 0 0 1px #dc2626, 0 0 20px 2px rgba(220, 38, 38, 0.3);\n      }\n      50% {\n        box-shadow: 0 0 0 2px #dc2626, 0 0 30px 4px rgba(220, 38, 38, 0.5);\n      }\n      100% {\n        box-shadow: 0 0 0 1px #dc2626, 0 0 20px 2px rgba(220, 38, 38, 0.3);\n      }\n    }\n\n    .animate-border {\n      animation: borderAnimation 3s infinite ease-in-out;\n    }\n\n    .font-cinema {\n      font-family: 'Bebas Neue', cursive;\n      letter-spacing: 1px;\n    }\n\n    /* small tweak so the top/bottom film strip circles don't overcrowd on very small screens */\n    @media (max-width: 420px) {\n      .css-absolute-da4dbfb.css-top-0-2167406 > div, .css-absolute-da4dbfb.css-bottom-0-189f036 > div {\n        width: 3rem;\n        height: 3rem;\n      }\n    }\n  "
};


// ... previous styles ...

export const newsStyles = {
  // Main container
  container: "css-min-h-screen-793346c css-bg-gradient-to-b-24a9e3a css-from-gray-50-edc95d2 css-via-white-f643528 css-to-gray-100-60f9ff9 css-text-gray-900-ba48f74",
  
  // Header section
  header: "css-container-255a762 css-mx-auto-0e12dc7 css-px-4-f0faeb2 css-sm-px-6-7a9aabf css-lg-px-8-6aeb2e9 css-pt-8-ba31a7f css-sm-pt-12-fe4865d css-pb-6-fe985ca",
  headerFlex: "css-flex-60fbb77 css-flex-col-8dddea0 css-sm-flex-row-020ba68 css-items-start-60541e1 css-sm-items-center-9f76a62 css-justify-between-8ef2268 css-gap-4-0c3bc98",
  logoContainer: "css-flex-60fbb77 css-items-center-3960ffc css-gap-4-0c3bc98",
  logoText: "css-text-3xl-751fb0d css-sm-text-4xl-a8e2faf css-md-text-5xl-2183f54 css-text-red-600-421d458 css-tracking-wider-09ace3a",
  logoSubtitle: "css-text-xs-359090c css-sm-text-sm-e2327d1 css-text-gray-600-f29b0b8 css-font-medium-2689f39",
  
  // Header buttons
  headerButtons: "css-flex-60fbb77 css-items-center-3960ffc css-gap-3-1004c0c css-w-full-6da6a3c css-sm-w-auto-48c41ba",
  latestNewsButton: "css-ml-auto-fb56d9c css-inline-flex-52083e7 css-cursor-pointer-3451683 css-bg-gradient-to-r-6ae7db2 css-from-red-400-0197a4d css-to-red-500-f012943 css-items-center-3960ffc css-gap-2-77a2a20 css-text-white-72a4c7c css-px-3-0e17f2b css-sm-px-4-bb7f9a3 css-py-2-03b4dd7 css-rounded-full-ac204c1 css-hover-shadow-lg-9c02094 css-transition-56bf8ae",
  buttonIcon: "css-size-16-951600c",
  buttonText: "css-text-xs-359090c css-sm-text-sm-e2327d1",
  
  // Hero stripe
  heroStripe: "css-mt-5-fb77735 css-sm-mt-6-98df966 css-flex-60fbb77 css-items-center-3960ffc css-gap-3-1004c0c css-overflow-hidden-2cd02d1 css-rounded-full-ac204c1 css-bg-gradient-to-r-6ae7db2 css-from-red-50-912b9fe css-via-white-f643528 css-to-red-50-8005edf css-p-1-eb6a3ce",
  featuredBadge: "css-text-xs-359090c css-text-red-600-421d458 css-font-semibold-e83a704 css-px-3-0e17f2b css-sm-px-4-bb7f9a3",
  stripeText: "css-flex-1-36e579c css-text-xs-359090c css-sm-text-sm-e2327d1 css-text-gray-600-f29b0b8 css-line-clamp-1-f50e201",
  stripeIcon: "css-px-3-0e17f2b css-sm-px-4-bb7f9a3",
  
  // Main content
  main: "css-container-255a762 css-mx-auto-0e12dc7 css-px-4-f0faeb2 css-sm-px-6-7a9aabf css-lg-px-8-6aeb2e9 css-pb-12-e425653",
  grid: "css-grid-f3c543a css-grid-cols-1-d7c8339 css-md-grid-cols-2-e4d6f34 css-lg-grid-cols-3-19d9b25 css-gap-8-1500488",
  
  // Hero card
  heroCard: "css-relative-d89972f css-rounded-3xl-ea189a0 css-overflow-hidden-2cd02d1 css-bg-white-5e10cdb css-shadow-xl-a739868 css-transform-dd8ce13 css-transition-56bf8ae css-hover-shadow-2xl-579ba87 css-lg-col-span-2-422d100",
  heroImageContainer: "css-relative-d89972f",
  heroImage: "css-h-85-80f782b css-sm-h-64-4619835 css-md-h-105-1ec1ac6 css-lg-h-96-380493e css-xl-h-80-0b6770b css-w-full-6da6a3c css-relative-d89972f",
  heroImg: "css-w-full-6da6a3c css-h-full-668b21a css-object-cover-7d85d0c",
  heroOverlay: "css-absolute-da4dbfb css-inset-0-7b7df04 css-bg-gradient-to-t-79257b8 css-from-black-75-b265a46 css-to-transparent-0fe2b3d css-opacity-0-7065497 animate-fadeIn",
  heroContent: "css-absolute-da4dbfb css-left-5-b37fcb6 css-sm-left-8-b61af1e css-bottom-5-6c32e81 css-sm-bottom-8-e65aeea css-right-5-d8b5837 css-sm-right-8-973193b",
  heroCategory: "css-inline-block-bb0c4bf css-bg-red-600-48b76a4 css-text-white-72a4c7c css-text-xs-359090c css-px-3-0e17f2b css-py-1-660d2ef css-rounded-full-ac204c1 css-font-semibold-e83a704",
  heroTitle: "css-mt-3-eccd13e css-sm-mt-4-71b095e css-text-xl-d5c9b00 css-sm-text-2xl-29bf405 css-md-text-3xl-c58992c css-lg-text-4xl-0c5d336 css-font-bold-69450ef css-leading-tight-e9fadaf css-text-white-72a4c7c",
  heroExcerpt: "css-mt-2-50d0d21 css-text-xs-359090c css-sm-text-sm-e2327d1 css-md-text-base-cd83ad2 css-text-gray-300-5ed47f3 css-max-w-full-c0980a6 css-sm-max-w-3xl-a02aa8a",
  heroMeta: "css-mt-4-0ab8667 css-sm-mt-6-98df966 css-flex-60fbb77 css-flex-wrap-1eb5c6d css-items-center-3960ffc css-gap-3-1004c0c css-text-gray-200-8aca214",
  metaItem: "css-flex-60fbb77 css-items-center-3960ffc css-gap-2-77a2a20 css-text-sm-fc7473c",
  metaIcon: "css-size-16-951600c",
  metaText: "css-text-xs-359090c css-sm-text-sm-e2327d1",
  
  // Hero card strip
  heroStrip: "css-p-4-8e63407 css-sm-p-6-59c7996",
  stripGrid: "css-grid-f3c543a css-grid-cols-1-d7c8339 css-sm-grid-cols-2-e00ad81 css-md-grid-cols-1-68f54e2 css-lg-grid-cols-3-19d9b25 css-xl-grid-cols-3-b86f7f9 css-gap-4-0c3bc98",
  
  // Article card
  articleCard: "css-group-64292b1 css-relative-d89972f css-overflow-hidden-2cd02d1 css-rounded-2xl-68f2db6 css-bg-white-5e10cdb css-border-ca6bcd4 css-border-gray-100-fc1b374 css-p-0-8a539c7 css-shadow-md-febc34e css-transform-dd8ce13 css-transition-56bf8ae css-hover-translate-y-2-02dec5d css-hover-shadow-xl-9a8eaab css-flex-60fbb77 css-flex-col-8dddea0 css-h-full-668b21a",
  articleImage: "css-relative-d89972f css-h-40-aadad68 css-sm-h-36-b63ac93 css-md-h-32-15e9479 css-w-full-6da6a3c",
  articleImg: "css-w-full-6da6a3c css-h-full-668b21a css-object-cover-7d85d0c css-transition-transform-eadef23 css-duration-500-8443221",
  articleCategory: "css-absolute-da4dbfb css-left-3-22e59b7 css-bottom-3-49af11e css-bg-red-600-48b76a4 css-text-white-72a4c7c css-px-2-d5eab21 css-py-1-660d2ef css-rounded-md-421ac2b css-text-xs-359090c css-font-semibold-e83a704",
  articleContent: "css-p-3-eb6e8b8 css-sm-p-4-1884518 css-flex-1-36e579c css-flex-60fbb77 css-flex-col-8dddea0",
  articleTitle: "css-text-base-4ee7349 css-sm-text-lg-12f38ca css-font-semibold-e83a704",
  articleExcerpt: "css-mt-2-50d0d21 css-text-xs-359090c css-sm-text-sm-e2327d1 css-text-gray-600-f29b0b8 css-line-clamp-4-e2070c8",
  articleSpacer: "css-mt-auto-9953408 css-pt-2-f46b61a",
  
  // Sidebar
  sidebar: "css-space-y-6-b3542e0",
  sidebarCard: "css-relative-d89972f css-rounded-2xl-68f2db6 css-overflow-hidden-2cd02d1 css-bg-white-5e10cdb css-shadow-lg-06bbb43 css-transform-dd8ce13 css-transition-56bf8ae css-hover-shadow-2xl-579ba87",
  sidebarCardInner: "css-flex-60fbb77 css-items-stretch-a13d486",
  sidebarImage: "css-w-28-b67ee2e css-sm-w-32-595367d css-h-28-e836f6e css-sm-h-32-b3dac96 css-overflow-hidden-2cd02d1 css-flex-shrink-0-2074a75 css-rounded-l-2xl-d37c595",
  sidebarImg: "css-w-full-6da6a3c css-h-full-668b21a css-object-cover-7d85d0c",
  sidebarContent: "css-p-3-eb6e8b8 css-sm-p-4-1884518 css-flex-1-36e579c",
  sidebarCategory: "css-text-xs-359090c css-bg-red-50-34df53a css-text-red-600-421d458 css-px-2-d5eab21 css-py-1-660d2ef css-rounded-md-421ac2b css-font-semibold-e83a704",
  sidebarTitle: "css-mt-2-50d0d21 css-font-semibold-e83a704 css-text-gray-900-ba48f74 css-text-sm-fc7473c css-sm-text-base-9bcf466",
  sidebarExcerpt: "css-mt-1-b6b02c0 css-text-xs-359090c css-sm-text-sm-e2327d1 css-text-gray-600-f29b0b8 css-line-clamp-4-e2070c8",
  
  // Subscribe card
  subscribeCard: "css-rounded-2xl-68f2db6 css-p-4-8e63407 css-sm-p-6-59c7996 css-bg-gradient-to-b-24a9e3a css-from-white-5e223df css-to-red-50-8005edf css-border-ca6bcd4 css-border-red-100-92ff918 css-shadow-md-febc34e",
  subscribeTitle: "css-text-base-4ee7349 css-sm-text-lg-12f38ca css-font-semibold-e83a704",
  subscribeText: "css-mt-2-50d0d21 css-text-xs-359090c css-sm-text-sm-e2327d1 css-text-gray-600-f29b0b8",
  subscribeForm: "css-mt-3-eccd13e css-sm-mt-4-71b095e css-flex-60fbb77 css-gap-2-77a2a20",
  subscribeInput: "css-flex-1-36e579c css-px-3-0e17f2b css-sm-px-4-bb7f9a3 css-py-2-03b4dd7 css-rounded-xl-a217b4e css-border-ca6bcd4 css-border-gray-200-5341580 css-outline-none-df37b1f css-text-sm-fc7473c",
  subscribeButton: "css-inline-flex-52083e7 css-cursor-pointer-3451683 css-items-center-3960ffc css-gap-2-77a2a20 css-bg-red-600-48b76a4 css-text-white-72a4c7c css-px-2-d5eab21 css-sm-px-4-bb7f9a3 css-py-2-03b4dd7 css-rounded-xl-a217b4e css-shadow-ed9d3d8 css-hover-bg-red-700-4e508c8 css-transition-56bf8ae css-text-sm-fc7473c"
};

// CSS styles for the News component
export const newsCSS = "\n  .css-line-clamp-1-f50e201 {\n    display: -webkit-box;\n    -webkit-line-clamp: 1;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n  }\n  .css-line-clamp-4-e2070c8 {\n    display: -webkit-box;\n    -webkit-line-clamp: 4;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n  }\n\n  @keyframes floatUp {\n    0% { transform: translateY(0); opacity: 0.9; }\n    50% { transform: translateY(-6px); opacity: 1; }\n    100% { transform: translateY(0); opacity: 0.95; }\n  }\n\n  .animate-fadeIn {\n    animation: floatUp 6s ease-in-out infinite;\n  }\n\n  .no-scrollbar::-webkit-scrollbar { display: none; }\n  .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }\n\n  @media (max-width: 640px) {\n    header { padding-top: 1.25rem; }\n    .css-line-clamp-4-e2070c8 { -webkit-line-clamp: 3; }\n  }\n\n  @media (min-width: 641px) and (max-width: 1023px) {\n    .css-line-clamp-4-e2070c8 { -webkit-line-clamp: 4; }\n  }\n";


// Add to src/assets/dummyStyles.js
export const releasesStyles = {
  // Page container
  pageContainer: "css-min-h-screen-793346c css-pt-25-22e7835 css-bg-gradient-to-br-39b2e00 css-from-gray-900-03fb0dd css-to-black-29b6945 css-text-white-72a4c7c css-p-6-0478c89",
  
  // Header section
  headerContainer: "css-text-center-ca6bf63 css-mb-12-2cad2f1 css-mt-6-31f2553",
  headerTitle: "css-font-bold-69450ef css-text-5xl-5384f08 css-md-text-6xl-9ee519f css-bg-clip-text-6c3c24f css-text-transparent-f8c8e86 css-bg-gradient-to-r-6ae7db2 css-from-red-400-0197a4d css-via-red-600-c59aaaf css-to-pink-500-f27092b css-font-pacifico-a153062",
  headerSubtitle: "css-mt-4-0ab8667 css-text-xl-d5c9b00 css-text-gray-300-5ed47f3",
  
  // Movie grid
  movieGrid: "css-grid-f3c543a css-grid-cols-2-8e75e3d css-md-grid-cols-4-d59f314 css-lg-grid-cols-5-76125f2 css-xl-grid-cols-5-a4ecef1 css-gap-6-0d304f9 css-max-w-6xl-1d4402d css-mx-auto-0e12dc7",
  
  // Movie card
  movieCard: "css-group-64292b1 css-relative-d89972f css-transition-all-0fe7d7d css-duration-500-8443221 css-hover-z-10-d5254d2",
  imageContainer: "css-relative-d89972f css-overflow-hidden-2cd02d1 css-rounded-lg-5f22e64",
  movieImage: "css-w-full-6da6a3c css-h-72-ff4a677 css-object-cover-7d85d0c css-transition-transform-eadef23 css-duration-700-e7b34e7",
  
  // Movie info
  movieInfo: "css-mt-3-eccd13e css-font-pacifico-a153062 css-text-center-ca6bf63",
  movieTitle: "css-font-semibold-e83a704 css-text-lg-42536e6 css-truncate-f283ea9",
  movieCategory: "css-text-sm-fc7473c css-text-gray-400-a572cdd css-mt-1-b6b02c0"
};

// Add to src/assets/dummyStyles.js
export const seatSelectorStyles = {
  // Page container
  pageContainer: "css-min-h-screen-793346c css-bg-gradient-to-b-24a9e3a css-from-black-3d1591f css-to-gray-900-0123d10 css-text-white-72a4c7c css-py-8-a1f611f css-px-4-f0faeb2",
  
  // Main container
  mainContainer: "css-max-w-6xl-1d4402d css-mx-auto-0e12dc7",
  
  // Header
  headerContainer: "css-flex-60fbb77 css-items-center-3960ffc css-mb-8-a8b152c css-gap-4-0c3bc98",
  backButton: "css-inline-flex-52083e7 css-items-center-3960ffc css-gap-2-77a2a20 css-text-red-300-1529a70 css-hover-text-white-b5a12a1 css-transition-all-0fe7d7d css-px-4-f0faeb2 css-py-3-1b2d54a css-rounded-xl-a217b4e css-hover-bg-red-900-20-c8b1fb7",
  backButtonIcon: "css-size-6-9af3b4b",
  titleContainer: "css-flex-1-36e579c css-text-center-ca6bf63",
  movieTitle: "css-text-4xl-a95699d css-md-text-6xl-9ee519f css-py-1-660d2ef css-font-bold-69450ef css-tracking-wider-09ace3a css-mb-2-a77ed4d css-bg-gradient-to-r-6ae7db2 css-from-white-5e223df css-to-gray-300-0cefe26 css-bg-clip-text-6c3c24f css-text-transparent-f8c8e86",
  showtimeText: "css-text-sm-fc7473c css-text-gray-500-5a630e0 css-mt-1-b6b02c0 css-flex-60fbb77 css-items-center-3960ffc css-justify-center-86843cf css-gap-2-77a2a20",
  
  // Screen
  screenContainer: "css-mb-8-a8b152c",
  screen: "css-mx-auto-0e12dc7 css-bg-gradient-to-b-24a9e3a css-from-gray-800-290cfbc css-to-gray-900-0123d10 css-rounded-t-2xl-1e3a8aa css-shadow-2xl-14e4660 css-text-center-ca6bf63 css-p-6-0478c89 css-relative-d89972f",
  screenText: "css-text-lg-42536e6 css-font-semibold-e83a704 css-text-gray-300-5ed47f3 css-tracking-widest-08cc9b1",
  screenSubtext: "css-text-xs-359090c css-text-gray-200-8aca214 css-mt-2-50d0d21",
  
  
  
  // Main content
  mainContent: "css-bg-gradient-to-br-39b2e00 css-from-black-80-029b4f6 css-to-gray-900-0123d10 css-rounded-3xl-ea189a0 css-p-8-845f533 css-border-ca6bcd4 css-border-red-700-10-1ace54d css-shadow-2xl-14e4660",
  sectionHeader: "css-flex-60fbb77 css-justify-center-86843cf css-mb-6-b6777c6",
  sectionTitleContainer: "css-text-center-ca6bf63",
  sectionTitle: "css-text-2xl-3febee0 css-bg-gradient-to-r-6ae7db2 css-from-white-5e223df css-to-gray-300-0cefe26 css-bg-clip-text-6c3c24f css-text-transparent-f8c8e86 css-font-bold-69450ef css-mb-2-a77ed4d css-flex-60fbb77 css-items-center-3960ffc css-justify-center-86843cf css-gap-2-77a2a20",
  titleDivider: "css-w-20-ed831a4 css-h-1-3a1268a css-bg-gradient-to-r-6ae7db2 css-from-red-500-01b9ce3 css-to-transparent-0fe2b3d css-mx-auto-0e12dc7",
  
  // Seat grid
  seatGridContainer: "css-flex-60fbb77 css-flex-col-8dddea0 css-items-center-3960ffc css-gap-6-0d304f9",
  rowContainer: "css-w-full-6da6a3c css-max-w-4xl-cf3893e css-flex-60fbb77 css-flex-col-8dddea0 css-items-center-3960ffc",
  rowHeader: "css-w-full-6da6a3c css-flex-60fbb77 css-items-center-3960ffc css-justify-center-86843cf css-mb-3-1bb8832",
  rowLabel: "css-w-12-e7e3710 css-mx-2-9e10c04 css-text-lg-42536e6 css-font-bold-69450ef css-text-red-400-a595d86 css-text-center-ca6bf63",
  rowType: "css-w-20-ed831a4 css-px-5-d139dd0 css-text-sm-fc7473c css-font-semibold-e83a704 css-text-gray-400-a572cdd css-capitalize-d01a341 css-text-center-ca6bf63",
  
  // Seat buttons
  seatGrid: "seat-grid",
  seatButton: "seat-btn css-flex-60fbb77 css-items-center-3960ffc css-justify-center-86843cf css-text-sm-fc7473c css-font-semibold-e83a704 css-cursor-pointer-3451683 css-transition-transform-eadef23 css-duration-200-625a4c3 css-transform-dd8ce13 css-hover-scale-105-d698399",
  seatButtonBooked: "css-opacity-40-2a2db46 css-cursor-not-allowed-29b733e css-bg-gray-800-8a4adec css-text-gray-500-5a630e0",
  seatButtonSelectedStandard: "css-bg-gradient-to-br-39b2e00 css-from-red-500-01b9ce3 css-to-red-700-d6d75ea css-text-white-72a4c7c css-shadow-2xl-14e4660",
  seatButtonSelectedRecliner: "css-bg-gradient-to-br-39b2e00 css-from-green-500-0802302 css-to-green-700-e6ff38c css-text-white-72a4c7c css-shadow-2xl-14e4660",
  seatButtonAvailableStandard: "css-bg-gray-800-8a4adec css-text-gray-200-8aca214",
  seatButtonAvailableRecliner: "css-bg-green-900-621618b css-text-green-200-e8ee263",
  seatContent: "css-flex-60fbb77 css-flex-col-8dddea0 css-items-center-3960ffc css-justify-center-86843cf",
  seatIcon: "seat-icon",
  seatNumber: "css-text-xs-359090c css-mt-0-5-15e1b1f css-font-bold-69450ef seat-num",
  
  // Booking summary
  summaryGrid: "css-mt-8-4e5d2af css-grid-f3c543a css-grid-cols-1-d7c8339 css-lg-grid-cols-3-19d9b25 css-gap-6-0d304f9 css-items-start-60541e1",
  summaryContainer: "css-lg-col-span-2-422d100 css-bg-black-30-b0d7388 css-p-6-0478c89 css-rounded-2xl-68f2db6",
  summaryTitle: "css-text-lg-42536e6 css-font-bold-69450ef css-mb-4-da01985 css-flex-60fbb77 css-items-center-3960ffc css-gap-2-77a2a20",
  summaryItem: "css-flex-60fbb77 css-justify-between-8ef2268 css-items-center-3960ffc css-p-3-eb6e8b8 css-bg-black-40-fd9dca3 css-rounded-xl-a217b4e",
  summaryLabel: "css-text-gray-300-5ed47f3",
  summaryValue: "css-font-bold-69450ef css-text-red-300-1529a70 css-text-lg-42536e6",
  
  // Selected seats
  selectedSeatsContainer: "css-p-3-eb6e8b8 css-bg-black-30-b0d7388 css-cursor-pointer-3451683 css-rounded-xl-a217b4e",
  selectedSeatsLabel: "css-text-sm-fc7473c css-text-gray-400-a572cdd css-mb-2-a77ed4d",
  selectedSeatsList: "css-flex-60fbb77 css-flex-wrap-1eb5c6d css-gap-2-77a2a20",
  selectedSeatBadge: "css-px-3-0e17f2b css-py-1-660d2ef css-rounded-full-ac204c1 css-text-sm-fc7473c css-bg-red-500-20-e6834e3 css-text-red-300-1529a70",
  
  // Total amount
  totalContainer: "css-p-3-eb6e8b8 css-bg-gradient-to-r-6ae7db2 css-from-red-900-20-33a2175 css-to-transparent-0fe2b3d css-rounded-xl-a217b4e",
  totalLabel: "css-text-gray-300-5ed47f3 css-font-semibold-e83a704",
  totalValue: "css-font-bold-69450ef css-text-red-400-a595d86 css-text-2xl-3febee0",
  
  // Empty state
  emptyState: "css-text-center-ca6bf63 css-py-6-940911b css-text-gray-500-5a630e0",
  emptyStateTitle: "css-text-lg-42536e6 css-mb-1-6528170",
  emptyStateSubtitle: "css-text-sm-fc7473c",
  
  // Action buttons
  actionButtons: "css-flex-60fbb77 css-gap-3-1004c0c css-mt-4-0ab8667",
  clearButton: "css-flex-1-36e579c css-px-4-f0faeb2 css-py-3-1b2d54a css-rounded-full-ac204c1 css-cursor-pointer-3451683 css-bg-gray-800-8a4adec css-text-gray-300-5ed47f3 css-hover-bg-gray-700-dde8e82 css-transition-all-0fe7d7d css-disabled-opacity-50-b29d8ad css-disabled-cursor-not-allowed-5f533b3",
  confirmButton: "css-flex-1-36e579c css-px-4-f0faeb2 css-py-3-1b2d54a css-rounded-full-ac204c1 css-bg-gradient-to-r-6ae7db2 css-from-red-600-5147d9e css-to-red-700-d6d75ea css-text-white-72a4c7c css-font-bold-69450ef css-hover-from-red-700-ad3a3b6 css-hover-to-red-800-8833074 css-transition-all-0fe7d7d css-transform-dd8ce13 css-cursor-pointer-3451683 css-disabled-opacity-50-b29d8ad css-disabled-cursor-not-allowed-5f533b3",
  
  // Pricing info
  pricingContainer: "css-bg-black-30-b0d7388 css-p-6-0478c89 css-rounded-2xl-68f2db6",
  pricingTitle: "css-text-lg-42536e6 css-font-bold-69450ef css-mb-4-da01985 css-flex-60fbb77 css-items-center-3960ffc css-gap-2-77a2a20",
  pricingItem: "css-p-3-eb6e8b8 css-rounded-xl-a217b4e css-bg-black-40-fd9dca3",
  pricingRow: "css-flex-60fbb77 css-justify-between-8ef2268",
  pricingLabel: "css-text-sm-fc7473c css-text-gray-300-5ed47f3",
  pricingValueStandard: "css-font-bold-69450ef css-text-red-400-a595d86",
  pricingValueRecliner: "css-font-bold-69450ef css-text-green-400-d21e44f",
  pricingNote: "css-text-xs-359090c css-text-gray-500-5a630e0",
  
  // Custom CSS
  customCSS: "\n    /* Seat grid base (desktop identical to original): 8 columns, min size ~3.2rem, max 5rem */\n    .seat-grid { display: grid; gap: 0.75rem; grid-template-columns: repeat(8, minmax(3.2rem, 5rem)); align-items: center; justify-items: stretch; }\n\n    /* Preserve original button height/rounding on desktop */\n    .seat-btn { width: 100%; height: 3.5rem; border-radius: 0.75rem; }\n\n    /* Tablet / small laptop: slightly smaller seats */\n    @media (max-width: 1024px) {\n      .seat-grid { grid-template-columns: repeat(8, minmax(2.6rem, 4rem)); gap: .6rem; }\n      .seat-btn { height: 3rem; }\n    }\n\n    /* Large phones: make seats tighter but still touchable */\n    @media (max-width: 768px) {\n      .seat-grid { grid-template-columns: repeat(8, minmax(1.6rem, 1fr)); gap: .5rem; }\n      .seat-btn { height: 2.6rem; padding: 0 .25rem; font-size: .74rem; border-radius: .6rem; }\n      .seat-icon { transform: scale(.95); }\n      .seat-num { font-size: .68rem; line-height: 1; }\n    }\n\n    /* Small phones: squeeze seats to ensure full row visible — keep icons small */\n    @media (max-width: 480px) {\n      .seat-grid { grid-template-columns: repeat(8, minmax(1.2rem, 1fr)); gap: .32rem; }\n      .seat-btn { height: 2.1rem; padding: 0 .15rem; font-size: .6rem; border-radius: .45rem; }\n      .seat-icon { transform: scale(.85); }\n      .seat-num { font-size: .56rem; }\n    }\n\n    /* Extra small/special cases: final fallback */\n    @media (max-width: 380px) {\n      .seat-grid { grid-template-columns: repeat(8, minmax(1rem, 1fr)); gap: .28rem; }\n      .seat-btn { height: 1.9rem; font-size: .52rem; }\n    }\n\n    /* Make sure seat content is centered even when small */\n    .seat-btn > div { display:flex; align-items:center; justify-content:center; gap: .2rem; flex-direction:column; padding:0; }\n  "
};

// ... previous styles ...

export const signUpStyles = {
  // Main container
  container: "css-min-h-screen-793346c css-flex-60fbb77 css-items-center-3960ffc css-justify-center-86843cf css-bg-gradient-to-br-39b2e00 css-from-gray-950-185a5df css-via-black-964c4b8 css-to-gray-900-0123d10 css-p-4-8e63407 css-relative-d89972f css-overflow-hidden-2cd02d1",
  
  // Background elements
  particlesContainer: "css-absolute-da4dbfb css-inset-0-7b7df04 css-z-0-942abb7",
  particle: "css-absolute-da4dbfb css-w-2-940924b css-h-2-2f2a842 css-bg-red-500-7aa7904 css-rounded-full-ac204c1 css-opacity-20-179bbe8 animate-float",
  gradientOrbs: "css-absolute-da4dbfb css-inset-0-7b7df04 css-z-0-942abb7 css-opacity-10-ad3ba0a",
  orb1: "css-absolute-da4dbfb css-top-1-4-1a3539c css-left-1-4-03d49b1 css-w-64-6ca6252 css-h-64-14ce684 css-bg-red-600-48b76a4 css-rounded-full-ac204c1 css-filter-4bb4ca7 css-blur-3xl-4b5e775 css-animate-pulse-d59b979",
  orb2: "css-absolute-da4dbfb css-bottom-1-3-992941b css-right-1-4-0d45562 css-w-56-d16aae8 css-h-56-4ead271 css-bg-red-800-99f6f71 css-rounded-full-ac204c1 css-filter-4bb4ca7 css-blur-3xl-4b5e775 css-animate-pulse-d59b979 css-delay-1000-863fef3",
  
  // Main content
  mainContent: "css-relative-d89972f css-mt-10-48c4acb css-w-full-6da6a3c css-max-w-2xl-2cc8041 css-z-10-236812d",
  
  // Back button
  backButton: "css-absolute-da4dbfb css-top-10-be106ce css-left-1-1b704b0 css-xl-left-90-605c19c css-lg-left-40-34e4e41 css-cursor-pointer-3451683 css-flex-60fbb77 css-items-center-3960ffc css-text-red-400-a595d86 css-hover-text-red-300-2678a28 css-transition-all-0fe7d7d css-duration-300-7890552 css-group-64292b1 css-mb-4-da01985",
  backIcon: "css-group-hover-translate-x-1-ce571d1 css-transition-transform-eadef23",
  backText: "css-ml-2-c68af99 css-text-sm-fc7473c css-font-medium-2689f39 font-cinema",
  
  // Card
  card: "css-relative-d89972f css-bg-gray-900-80-b90fc63 css-backdrop-blur-lg-fdc1ce1 css-rounded-xl-a217b4e css-shadow-2xl-14e4660 css-overflow-hidden-2cd02d1 css-border-ca6bcd4 css-border-gray-700-4d76ccb animate-border",
  cardHeader: "css-relative-d89972f css-h-1-3a1268a css-bg-gradient-to-r-6ae7db2 css-from-red-600-5147d9e css-via-red-500-5a78a0b css-to-red-600-3bebc9a",
  cardContent: "css-px-8-7e3e9a7 css-py-8-a1f611f",
  
  // Header
  header: "css-text-center-ca6bf63 css-mb-8-a8b152c",
  headerFlex: "css-flex-60fbb77 css-justify-center-86843cf css-items-center-3960ffc css-mb-3-1bb8832",
  headerIcon: "css-text-red-400-a595d86 css-mr-2-d2347e8",
  headerTitle: "css-text-3xl-751fb0d css-font-bold-69450ef css-text-white-72a4c7c font-cinema",
  headerSubtitle: "css-text-red-200-a7ec8c4 css-text-sm-fc7473c css-mt-1-b6b02c0 css-font-medium-2689f39",
  
  // Form
  form: "css-space-y-6-b3542e0",
  formGrid: "css-grid-f3c543a css-grid-cols-1-d7c8339 css-md-grid-cols-2-e4d6f34 css-gap-6-0d304f9",
  
  // Form fields
  field: "css-block-0214b4b css-text-red-100-182057e css-text-sm-fc7473c css-font-bold-69450ef css-mb-2-a77ed4d font-cinema",
  inputContainer: "css-relative-d89972f",
  input: {
    base: "css-w-full-6da6a3c css-px-4-f0faeb2 css-py-3-1b2d54a css-bg-gray-800-50-8f3e5b6 css-text-white-72a4c7c css-rounded-lg-5f22e64 css-focus-ring-2-608dd26 css-focus-outline-none-55d048e css-transition-all-0fe7d7d css-duration-200-625a4c3 css-border-ca6bcd4 css-pl-12-fb758d8",
    error: "css-border-red-500-5fb36b4 css-focus-ring-red-500-f2ae4b4",
    normal: "css-border-gray-600-3f5600c css-focus-ring-red-400-59ca639"
  },
  inputWithIcon: "css-pl-12-fb758d8",
  inputWithToggle: "css-pl-12-fb758d8 css-pr-12-ab82c25",
  inputIcon: "css-absolute-da4dbfb css-left-4-b2e7cc5 css-top-3-5-da3d6db css-text-red-400-a595d86",
  errorText: "css-text-red-400-a595d86 css-text-xs-359090c css-mt-1-b6b02c0",
  
  // Password toggle
  passwordToggle: "css-absolute-da4dbfb css-right-4-5a438c3 css-top-3-5-da3d6db",
  toggleIcon: "css-text-red-300-1529a70",
  
  // Submit button
  submitContainer: "css-pt-4-173fa8f",
  submitButton: {
    base: "css-w-full-6da6a3c css-bg-gradient-to-r-6ae7db2 css-from-red-600-5147d9e css-to-red-700-d6d75ea css-text-white-72a4c7c css-font-bold-69450ef css-py-3-1b2d54a css-px-4-f0faeb2 css-rounded-full-ac204c1 css-hover-opacity-90-961c6c3 css-transition-all-0fe7d7d css-duration-300-7890552 css-transform-dd8ce13 css-cursor-pointer-3451683 css-focus-outline-none-55d048e css-focus-ring-2-608dd26 css-focus-ring-red-500-f2ae4b4 css-shadow-lg-06bbb43 css-shadow-red-900-30-7a10aa0 css-text-base-4ee7349",
    loading: "css-opacity-80-714816e css-cursor-not-allowed-29b733e"
  },
  loadingSpinner: "css-animate-spin-afbdd13 css-rounded-full-ac204c1 css-h-5-cd0d9c5 css-w-5-7247048 css-border-b-2-65ac0c4 css-border-white-2fe5963 css-mr-2-d2347e8",
  submitContent: "css-flex-60fbb77 css-items-center-3960ffc css-justify-center-86843cf",
  submitIcon: "css-mr-2-d2347e8",
  
  // Login link
  loginContainer: "css-mt-6-31f2553 css-text-center-ca6bf63",
  loginText: "css-text-gray-400-a572cdd css-text-sm-fc7473c",
  loginLink: "css-text-red-400-a595d86 css-hover-text-red-300-2678a28 css-font-medium-2689f39 css-transition-56bf8ae css-duration-200-625a4c3 css-underline-c82b67c css-hover-no-underline-0771bea"
};

// CSS styles for the SignUp component
export const signUpCSS = "\n  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');\n  \n  @keyframes borderAnimation {\n    0% {\n      box-shadow: 0 0 0 1px #dc2626, 0 0 15px 3px rgba(220, 38, 38, 0.3);\n    }\n    50% {\n      box-shadow: 0 0 0 2px #dc2626, 0 0 25px 5px rgba(220, 38, 38, 0.4);\n    }\n    100% {\n      box-shadow: 0 0 0 1px #dc2626, 0 0 15px 3px rgba(220, 38, 38, 0.3);\n    }\n  }\n\n  @keyframes float {\n    0%, 100% {\n      transform: translateY(0) rotate(0deg);\n      opacity: 0.2;\n    }\n    50% {\n      transform: translateY(-20px) rotate(180deg);\n      opacity: 0.1;\n    }\n  }\n  \n  .animate-border {\n    animation: borderAnimation 3s infinite ease-in-out;\n  }\n\n  .animate-float {\n    animation: float linear infinite;\n  }\n  \n  .font-cinema {\n    font-family: 'Bebas Neue', cursive;\n    letter-spacing: 1px;\n  }\n  \n  /* Custom date picker styling */\n  input[type=\"date\"]::-webkit-calendar-picker-indicator {\n    filter: invert(0.5) sepia(1) saturate(5) hue-rotate(320deg);\n    cursor: pointer;\n  }\n\n  /* Custom scrollbar */\n  ::-webkit-scrollbar {\n    width: 6px;\n  }\n\n  ::-webkit-scrollbar-track {\n    background: #1f2937;\n  }\n\n  ::-webkit-scrollbar-thumb {\n    background: #dc2626;\n    border-radius: 3px;\n  }\n\n  /* Responsive adjustments */\n  @media (max-width: 768px) {\n    .css-grid-cols-2-8e75e3d {\n      grid-template-columns: 1fr;\n    }\n  }\n";


// ... previous styles ...

export const trailersStyles = {
  // Main container
  container: "css-min-h-screen-793346c css-bg-gradient-to-b-24a9e3a css-from-gray-100-4bcbfe0 css-to-gray-300-0cefe26 css-text-gray-900-ba48f74",
  main: "css-relative-d89972f css-z-10-236812d css-pt-20-510acdc css-pb-12-e425653 css-container-255a762 css-mx-auto-0e12dc7 css-px-4-f0faeb2 css-sm-px-6-7a9aabf css-lg-px-8-6aeb2e9",
  
  // Layout
  layout: "css-flex-60fbb77 css-flex-col-8dddea0 css-lg-flex-row-2adea12 css-md-flex-row-4102ddd css-gap-8-1500488",
  
  // Left side - Trailers List
  leftSide: "css-w-full-6da6a3c css-md-w-1-2-83c32b6 css-lg-w-2-5-f2abdbb",
  leftCard: "css-bg-white-5e10cdb css-font-pacifico-a153062 css-rounded-xl-a217b4e css-shadow-lg-06bbb43 css-p-5-c07e54f css-md-p-6-97effa3",
  leftTitle: "css-text-2xl-3febee0 css-font-semibold-e83a704 css-mb-4-da01985 css-flex-60fbb77 css-items-center-3960ffc css-gap-2-77a2a20",
  titleIcon: "css-text-red-600-421d458",
  
  // Carousel controls
  carouselControls: "css-flex-60fbb77 css-items-center-3960ffc css-justify-between-8ef2268 css-mb-3-1bb8832",
  controlButtons: "css-flex-60fbb77 css-items-center-3960ffc css-gap-2-77a2a20",
  controlButton: "css-p-2-7660b45 css-rounded-full-ac204c1 css-bg-gray-100-d260f3e css-hover-bg-red-100-d407ca1 css-text-red-600-421d458 css-transition-colors-ceb69a6",
  trailerCount: "css-text-sm-fc7473c css-text-gray-500-5a630e0",
  
  // Carousel
  carousel: "css-flex-60fbb77 css-overflow-x-auto-1384f66 scrollbar-hide css-space-x-3-eca0b93 css-pb-3-7fcf912 css-mx-1-7661032",
  carouselItem: {
    base: "css-flex-none-81e4430 css-rounded-lg-5f22e64 css-overflow-hidden-2cd02d1 css-relative-d89972f css-cursor-pointer-3451683 css-transition-all-0fe7d7d css-transform-dd8ce13",
    active: "css-ring-2-16b1efa css-ring-red-600-caa1126 css-shadow-md-febc34e css-scale-100-f2d074e",
    inactive: "css-hover-scale-1-02-b807bd8 css-hover-ring-1-43a83a5 css-hover-ring-red-400-4baa2f8"
  },
  carouselImage: "css-w-full-6da6a3c css-h-full-668b21a css-object-cover-7d85d0c",
  carouselOverlay: "css-absolute-da4dbfb css-inset-0-7b7df04 css-bg-gradient-to-t-79257b8 css-from-black-80-029b4f6 css-to-transparent-0fe2b3d css-flex-60fbb77 css-flex-col-8dddea0 css-justify-end-77c08e0 css-p-2-7660b45",
  carouselTitle: "css-font-semibold-e83a704 css-text-white-72a4c7c css-text-sm-fc7473c css-line-clamp-1-f50e201",
  carouselGenre: "css-text-xs-359090c css-text-gray-300-5ed47f3",
  
  // Now Trending section
  trendingSection: "css-mt-6-31f2553 css-space-y-3-6ed543e",
  trendingTitle: "css-font-bold-69450ef css-text-lg-42536e6",
  trendingItem: "css-flex-60fbb77 css-items-center-3960ffc css-space-x-3-eca0b93 css-p-2-7660b45 css-rounded-lg-5f22e64 css-hover-bg-red-50-10bdf9b css-cursor-pointer-3451683 css-transition-colors-ceb69a6",
  trendingImage: "css-w-14-7e74e5f css-h-14-73a1340 css-rounded-md-421ac2b css-overflow-hidden-2cd02d1 css-flex-shrink-0-2074a75",
  trendingImageSrc: "css-w-full-6da6a3c css-h-full-668b21a css-object-cover-7d85d0c",
  trendingContent: "",
  trendingItemTitle: "css-font-medium-2689f39 css-text-sm-fc7473c",
  trendingItemGenre: "css-text-xs-359090c css-text-gray-500-5a630e0",
  
  // Right side - Featured Trailer
  rightSide: "css-w-full-6da6a3c css-md-w-1-2-83c32b6 css-lg-w-3-5-1487bea",
  rightCard: "css-bg-white-5e10cdb css-rounded-xl-a217b4e css-shadow-lg-06bbb43 css-overflow-hidden-2cd02d1",
  
  // Video Player
  videoContainer: "css-relative-d89972f",
  videoWrapper: "css-relative-d89972f css-aspect-video-826c947",
  videoIframe: "css-w-full-6da6a3c css-h-full-668b21a",
  closeButton: "css-absolute-da4dbfb css-top-4-451eecb css-right-4-5a438c3 css-flex-60fbb77 css-space-x-2-6fd96dc",
  closeButtonInner: "css-p-2-7660b45 css-rounded-full-ac204c1 css-text-black-d2a412c css-bg-white-5e10cdb css-transition-colors-ceb69a6",
  
  // Thumbnail state
  thumbnailContainer: "css-relative-d89972f css-aspect-video-826c947 css-group-64292b1 css-bg-gray-900-808c4e1",
  thumbnailImage: "css-w-full-6da6a3c css-h-full-668b21a css-object-cover-7d85d0c",
  playButtonContainer: "css-absolute-da4dbfb css-inset-0-7b7df04 css-flex-60fbb77 css-items-center-3960ffc css-justify-center-86843cf",
  playButton: "css-bg-red-600-48b76a4 css-hover-bg-red-700-4e508c8 css-cursor-pointer-3451683 css-rounded-full-ac204c1 css-p-4-8e63407 css-md-p-5-c1713f1 css-transition-all-0fe7d7d css-transform-dd8ce13",
  playIcon: "css-size-32-24e262e css-fill-white-3420897",
  
  // Trailer Info
  trailerInfo: "css-p-5-c07e54f css-md-p-6-97effa3",
  infoHeader: "css-flex-60fbb77 css-flex-col-8dddea0 css-md-flex-row-4102ddd css-md-items-center-3e62563 css-justify-between-8ef2268 css-gap-3-1004c0c",
  trailerTitle: "css-text-2xl-3febee0 css-font-bold-69450ef font-dancing",
  trailerMeta: "css-flex-60fbb77 css-items-center-3960ffc css-space-x-4-61ffd58 css-text-sm-fc7473c css-text-gray-700-9987887",
  metaItem: "css-flex-60fbb77 css-items-center-3960ffc",
  metaIcon: "css-mr-1-6181624 css-text-red-600-421d458",
  
  // Genre tags
  genreContainer: "css-mt-4-0ab8667 css-flex-60fbb77 css-flex-wrap-1eb5c6d css-gap-2-77a2a20",
  genreTag: "css-px-3-0e17f2b css-py-1-660d2ef css-bg-red-100-37d6a9b css-text-red-700-f3376ad css-rounded-full-ac204c1 css-text-xs-359090c css-font-medium-2689f39",
  
  // Description
  description: "css-mt-4-0ab8667 css-text-gray-700-9987887",
  
  // Credits
  credits: "css-mt-6-31f2553 css-font-pacifico-a153062",
  creditsTitle: "css-text-2xl-3febee0 css-font-bold-69450ef css-mb-4-da01985",
  creditsGrid: "css-grid-f3c543a css-grid-cols-2-8e75e3d css-sm-grid-cols-3-ab1b20c css-md-grid-cols-4-d59f314 css-lg-grid-cols-6-76f32b5 css-gap-4-0c3bc98 css-items-start-60541e1",
  creditItem: "css-flex-60fbb77 css-flex-col-8dddea0 css-items-center-3960ffc css-text-center-ca6bf63",
  creditImage: "css-w-16-baceed3 css-h-16-acaee62 css-rounded-full-ac204c1 css-overflow-hidden-2cd02d1 css-shadow-sm-438b223",
  creditImageSrc: "css-w-full-6da6a3c css-h-full-668b21a css-object-cover-7d85d0c",
  creditName: "css-mt-2-50d0d21 css-text-lg-42536e6 css-font-medium-2689f39",
  creditRole: "css-text-sm-fc7473c css-text-gray-500-5a630e0 css-capitalize-d01a341"
};

// CSS styles for the Trailers component
export const trailersCSS = "\n  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');\n\n  .font-dancing {\n    font-family: 'Dancing Script', cursive;\n  }\n\n  /* Hide scrollbar cross-browser for your carousel */\n  .scrollbar-hide::-webkit-scrollbar {\n    display: none;\n  }\n  .scrollbar-hide {\n    -ms-overflow-style: none;\n    scrollbar-width: none;\n  }\n\n  /* small utility to clamp trailer title lines in thumbnails */\n  .css-line-clamp-1-f50e201 {\n    display: -webkit-box;\n    -webkit-line-clamp: 1;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n\n  /* gentle floating animation (kept from original) */\n  @keyframes float {\n    0% { transform: translateY(0) rotate(0deg); }\n    50% { transform: translateY(-10px) rotate(2deg); }\n    100% { transform: translateY(0) rotate(0deg); }\n  }\n  .animate-float { animation: float 8s ease-in-out infinite; }\n\n  /* small responsive tweaks */\n  @media (max-width: 640px) {\n    /* shrink thumbnail cards on very small devices */\n    [data-id] { width: 180px !important; min-width: 180px !important; height: 100px !important; }\n  }\n\n  @media (min-width: 641px) and (max-width: 1023px) {\n    /* ensure carousel items are not too wide on tablets */\n    [data-id] { width: 200px !important; min-width: 200px !important; height: 112px !important; }\n  }\n\n  /* keep lg+ desktop visual behaviors unchanged */\n  @media (min-width: 1024px) {\n    [data-id] { width: 220px !important; min-width: 220px !important; height: 124px !important; }\n  }\n";

// Add to src/assets/dummyStyles.js
export const seatSelectorHStyles = {
  // Page container
  pageContainer: "css-min-h-screen-793346c css-bg-gradient-to-b-24a9e3a css-from-black-3d1591f css-to-gray-900-0123d10 css-text-white-72a4c7c css-py-8-a1f611f css-px-4-f0faeb2",
  
  // Main container
  mainContainer: "css-max-w-6xl-1d4402d css-mx-auto-0e12dc7",
  
  // Header
  headerContainer: "css-flex-60fbb77 css-items-center-3960ffc css-mb-8-a8b152c css-gap-4-0c3bc98",
  backButton: "css-inline-flex-52083e7 css-items-center-3960ffc css-gap-2-77a2a20 css-text-red-300-1529a70 css-hover-text-white-b5a12a1 css-transition-all-0fe7d7d css-px-4-f0faeb2 css-py-3-1b2d54a css-rounded-xl-a217b4e css-hover-bg-red-900-20-c8b1fb7",
  titleContainer: "css-flex-1-36e579c css-text-center-ca6bf63",
  movieTitle: "css-text-4xl-a95699d css-md-text-6xl-9ee519f css-py-1-660d2ef css-font-bold-69450ef css-tracking-wider-09ace3a css-mb-2-a77ed4d css-bg-gradient-to-r-6ae7db2 css-from-white-5e223df css-to-gray-300-0cefe26 css-bg-clip-text-6c3c24f css-text-transparent-f8c8e86",
  showtimeText: "css-text-sm-fc7473c css-text-gray-500-5a630e0 css-mt-1-b6b02c0 css-flex-60fbb77 css-items-center-3960ffc css-justify-center-86843cf css-gap-2-77a2a20",
  
  // Screen
  screenContainer: "css-mb-8-a8b152c",
  screen: "css-mx-auto-0e12dc7 css-bg-gradient-to-b-24a9e3a css-from-gray-800-290cfbc css-to-gray-900-0123d10 css-rounded-t-2xl-1e3a8aa css-shadow-2xl-14e4660 css-text-center-ca6bf63 css-p-6-0478c89 css-relative-d89972f",
  screenText: "css-text-lg-42536e6 css-font-semibold-e83a704 css-text-gray-300-5ed47f3 css-tracking-widest-08cc9b1",
  screenSubtext: "css-text-xs-359090c css-text-gray-200-8aca214 css-mt-2-50d0d21",
  
  // Main content
  mainContent: "css-bg-gradient-to-br-39b2e00 css-from-black-80-029b4f6 css-to-gray-900-0123d10 css-rounded-3xl-ea189a0 css-p-8-845f533 css-border-ca6bcd4 css-border-red-700-10-1ace54d css-shadow-2xl-14e4660",
  sectionHeader: "css-flex-60fbb77 css-justify-center-86843cf css-mb-6-b6777c6",
  sectionTitleContainer: "css-text-center-ca6bf63",
  sectionTitle: "css-text-2xl-3febee0 css-bg-gradient-to-r-6ae7db2 css-from-white-5e223df css-to-gray-300-0cefe26 css-bg-clip-text-6c3c24f css-text-transparent-f8c8e86 css-font-bold-69450ef css-mb-2-a77ed4d css-flex-60fbb77 css-items-center-3960ffc css-justify-center-86843cf css-gap-2-77a2a20",
  titleDivider: "css-w-20-ed831a4 css-h-1-3a1268a css-bg-gradient-to-r-6ae7db2 css-from-red-500-01b9ce3 css-to-transparent-0fe2b3d css-mx-auto-0e12dc7",
  
  // Seat grid
  seatGridContainer: "css-flex-60fbb77 css-flex-col-8dddea0 css-items-center-3960ffc css-gap-6-0d304f9",
  rowContainer: "css-w-full-6da6a3c css-max-w-4xl-cf3893e css-flex-60fbb77 css-flex-col-8dddea0 css-items-center-3960ffc",
  rowHeader: "css-w-full-6da6a3c css-flex-60fbb77 css-items-center-3960ffc css-justify-center-86843cf css-mb-3-1bb8832",
  rowLabel: "css-w-12-e7e3710 css-mx-3-e65fa6c css-text-lg-42536e6 css-font-bold-69450ef css-text-red-400-a595d86 css-text-center-ca6bf63",
  rowType: "css-w-20-ed831a4 css-px-3-0e17f2b css-text-sm-fc7473c css-font-semibold-e83a704 css-text-gray-400-a572cdd css-capitalize-d01a341 css-text-center-ca6bf63",
  
  // Seat buttons
  seatGrid: "seat-grid",
  seatButton: "seat-btn css-flex-60fbb77 css-items-center-3960ffc css-justify-center-86843cf css-text-sm-fc7473c css-font-semibold-e83a704 css-cursor-pointer-3451683 css-transition-transform-eadef23 css-duration-200-625a4c3 css-transform-dd8ce13 css-hover-scale-105-d698399",
  seatButtonBooked: "css-opacity-40-2a2db46 css-cursor-not-allowed-29b733e css-bg-gray-800-8a4adec css-text-gray-500-5a630e0",
  seatButtonSelectedStandard: "css-bg-gradient-to-br-39b2e00 css-from-red-500-01b9ce3 css-to-red-700-d6d75ea css-text-white-72a4c7c css-shadow-2xl-14e4660",
  seatButtonSelectedRecliner: "css-bg-gradient-to-br-39b2e00 css-from-green-500-0802302 css-to-green-700-e6ff38c css-text-white-72a4c7c css-shadow-2xl-14e4660",
  seatButtonAvailableStandard: "css-bg-gray-800-8a4adec css-text-gray-200-8aca214",
  seatButtonAvailableRecliner: "css-bg-green-900-621618b css-text-green-200-e8ee263",
  seatContent: "css-flex-60fbb77 css-flex-col-8dddea0 css-items-center-3960ffc css-justify-center-86843cf",
  seatIcon: "seat-icon",
  seatNumber: "css-text-xs-359090c css-mt-0-5-15e1b1f css-font-bold-69450ef seat-num",
  
  // Booking summary
  summaryGrid: "css-mt-8-4e5d2af css-grid-f3c543a css-grid-cols-1-d7c8339 css-lg-grid-cols-3-19d9b25 css-gap-6-0d304f9 css-items-start-60541e1",
  summaryContainer: "css-lg-col-span-2-422d100 css-bg-black-30-b0d7388 css-p-6-0478c89 css-rounded-2xl-68f2db6",
  summaryTitle: "css-text-lg-42536e6 css-font-bold-69450ef css-mb-4-da01985 css-flex-60fbb77 css-items-center-3960ffc css-gap-2-77a2a20",
  summaryItem: "css-flex-60fbb77 css-justify-between-8ef2268 css-items-center-3960ffc css-p-3-eb6e8b8 css-bg-black-40-fd9dca3 css-rounded-xl-a217b4e",
  summaryLabel: "css-text-gray-300-5ed47f3",
  summaryValue: "css-font-bold-69450ef css-text-red-300-1529a70 css-text-lg-42536e6",
  
  // Selected seats
  selectedSeatsContainer: "css-p-3-eb6e8b8 css-bg-black-30-b0d7388 css-cursor-pointer-3451683 css-rounded-xl-a217b4e",
  selectedSeatsLabel: "css-text-sm-fc7473c css-text-gray-400-a572cdd css-mb-2-a77ed4d",
  selectedSeatsList: "css-flex-60fbb77 css-flex-wrap-1eb5c6d css-gap-2-77a2a20",
  selectedSeatBadge: "css-px-3-0e17f2b css-py-1-660d2ef css-rounded-full-ac204c1 css-text-sm-fc7473c css-bg-red-500-20-e6834e3 css-text-red-300-1529a70",
  
  // Total amount
  totalContainer: "css-p-3-eb6e8b8 css-bg-gradient-to-r-6ae7db2 css-from-red-900-20-33a2175 css-to-transparent-0fe2b3d css-rounded-xl-a217b4e",
  totalLabel: "css-text-gray-300-5ed47f3 css-font-semibold-e83a704",
  totalValue: "css-font-bold-69450ef css-text-red-400-a595d86 css-text-2xl-3febee0",
  
  // Empty state
  emptyState: "css-text-center-ca6bf63 css-py-6-940911b css-text-gray-500-5a630e0",
  emptyStateTitle: "css-text-lg-42536e6 css-mb-1-6528170",
  emptyStateSubtitle: "css-text-sm-fc7473c",
  
  // Action buttons
  actionButtons: "css-flex-60fbb77 css-gap-3-1004c0c css-mt-4-0ab8667",
  clearButton: "css-flex-1-36e579c css-px-4-f0faeb2 css-py-3-1b2d54a css-rounded-full-ac204c1 css-cursor-pointer-3451683 css-bg-gray-800-8a4adec css-text-gray-300-5ed47f3 css-hover-bg-gray-700-dde8e82 css-transition-all-0fe7d7d css-disabled-opacity-50-b29d8ad css-disabled-cursor-not-allowed-5f533b3",
  confirmButton: "css-flex-1-36e579c css-px-4-f0faeb2 css-py-3-1b2d54a css-rounded-full-ac204c1 css-cursor-pointer-3451683 css-bg-gradient-to-r-6ae7db2 css-from-red-600-5147d9e css-to-red-700-d6d75ea css-text-white-72a4c7c css-font-bold-69450ef css-hover-from-red-700-ad3a3b6 css-hover-to-red-800-8833074 css-transition-all-0fe7d7d css-transform-dd8ce13 css-disabled-opacity-50-b29d8ad css-disabled-cursor-not-allowed-5f533b3",
  
  // Pricing info
  pricingContainer: "css-bg-black-30-b0d7388 css-p-6-0478c89 css-rounded-2xl-68f2db6",
  pricingTitle: "css-text-lg-42536e6 css-font-bold-69450ef css-mb-4-da01985 css-flex-60fbb77 css-items-center-3960ffc css-gap-2-77a2a20",
  pricingItem: "css-p-3-eb6e8b8 css-rounded-xl-a217b4e css-bg-black-40-fd9dca3",
  pricingRow: "css-flex-60fbb77 css-justify-between-8ef2268",
  pricingLabel: "css-text-sm-fc7473c css-text-gray-300-5ed47f3",
  pricingValueStandard: "css-font-bold-69450ef css-text-red-400-a595d86",
  pricingValueRecliner: "css-font-bold-69450ef css-text-green-400-d21e44f",
  pricingNote: "css-text-xs-359090c css-text-gray-500-5a630e0",
  
  // Custom CSS
  customCSS: "\n    .seat-grid { display: grid; gap: 0.75rem; grid-template-columns: repeat(8, minmax(3.2rem, 5rem)); }\n    .seat-btn { width: 100%; height: 3.5rem; border-radius: .75rem; }\n\n    /* Large/tablet slightly smaller */\n    @media (max-width: 1024px) {\n      .seat-grid { grid-template-columns: repeat(8, minmax(2.6rem, 4rem)); }\n      .seat-btn { height: 3rem; }\n    }\n\n    /* Small phones: shrink seats so all 8 fit comfortably */\n    @media (max-width: 640px) {\n      .seat-grid { grid-template-columns: repeat(8, minmax(1.4rem, 1fr)); gap: .45rem; }\n      .seat-btn { height: 2.2rem; font-size: .625rem; border-radius: .5rem; padding: 0 .25rem; }\n      .seat-icon { transform: scale(0.85); }\n      .seat-num { font-size: .6rem; }\n    }\n\n    /* Extra small devices - fallback */\n    @media (max-width: 420px) {\n      .seat-grid { grid-template-columns: repeat(8, minmax(1.1rem, 1fr)); gap: .35rem; }\n      .seat-btn { height: 1.9rem; font-size: .55rem; }\n    }\n  "
};


// ... previous styles ...

export const movieDetailStyles = {
  // Main container
  container: "css-min-h-screen-793346c css-bg-gradient-to-b-24a9e3a css-from-black-3d1591f css-to-gray-900-0123d10 css-text-white-72a4c7c css-py-8-a1f611f css-px-4-f0faeb2",
  wrapper: "css-max-w-7xl-726bb2c css-mx-auto-0e12dc7",
  
  // Header
  header: "css-flex-60fbb77 css-items-center-3960ffc css-gap-4-0c3bc98 css-mb-8-a8b152c",
  backButton: "css-inline-flex-52083e7 css-items-center-3960ffc css-gap-2-77a2a20 css-text-red-300-1529a70 css-hover-text-white-b5a12a1 css-transition-colors-ceb69a6 css-px-3-0e17f2b css-py-2-03b4dd7 css-rounded-lg-5f22e64 css-hover-bg-red-900-20-c8b1fb7",
  backIcon: "css-size-18-b59bcb7",
  backText: "css-text-sm-fc7473c css-sm-text-base-9bcf466",
  
  // Movie title
  titleContainer: "css-text-center-ca6bf63 css-mb-8-a8b152c css-sm-mb-12-d7820a7",
  movieTitle: "css-text-3xl-751fb0d css-sm-text-5xl-7324713 css-md-text-5xl-2183f54 css-lg-text-7xl-24c011e css-py-1-660d2ef css-font-bold-69450ef css-tracking-wider-09ace3a css-mb-4-da01985 css-bg-gradient-to-r-6ae7db2 css-from-white-5e223df css-to-gray-300-0cefe26 css-bg-clip-text-6c3c24f css-text-transparent-f8c8e86",
  movieMeta: "css-flex-60fbb77 css-flex-col-8dddea0 css-sm-flex-row-020ba68 css-items-center-3960ffc css-justify-center-86843cf css-gap-4-0c3bc98 css-sm-gap-6-022e807 css-text-base-4ee7349 css-sm-text-lg-12f38ca css-text-gray-300-5ed47f3",
  metaItem: "css-flex-60fbb77 css-items-center-3960ffc css-gap-2-77a2a20",
  metaIcon: "css-h-4-11e59c6 css-w-4-dc7972e",
  ratingIcon: "css-text-yellow-400-ce4daf6",
  durationIcon: "css-text-red-400-a595d86",
  genreTag: "css-px-3-0e17f2b css-py-1-660d2ef css-bg-red-900-40-9749472 css-rounded-full-ac204c1 css-text-red-300-1529a70 css-text-sm-fc7473c css-border-ca6bcd4 css-border-red-700-30-fcdaa6a",
  
  // Main layout
  mainLayout: "css-grid-f3c543a css-grid-cols-1-d7c8339 css-md-grid-cols-2-e4d6f34 css-lg-grid-cols-3-19d9b25 css-gap-6-0d304f9 css-lg-gap-8-c3054b4 css-mb-8-a8b152c",
  
  // Left column - Poster
  leftColumn: "css-lg-col-span-1-e2a179c css-order-1-ea37b42 css-md-order-1-99c4a5a",
  posterCard: "css-bg-gradient-to-br-39b2e00 css-from-black-80-029b4f6 css-to-gray-900-0123d10 css-rounded-2xl-68f2db6 css-p-4-8e63407 css-sm-p-6-59c7996 css-border-ca6bcd4 css-border-red-700-20-a41e2f8 css-shadow-2xl-14e4660",
  posterImage: "css-relative-d89972f css-overflow-hidden-2cd02d1 css-rounded-xl-a217b4e css-mx-auto-0e12dc7 css-w-full-6da6a3c",
  posterImg: "css-w-full-6da6a3c css-h-full-668b21a css-object-cover-7d85d0c css-rounded-xl-a217b4e css-transition-transform-eadef23 css-duration-300-7890552",
  trailerButton: "css-w-full-6da6a3c css-mt-6-31f2553 css-flex-60fbb77 css-items-center-3960ffc css-justify-center-86843cf css-gap-3-1004c0c css-px-6-f92d023 css-py-3-1b2d54a css-rounded-full-ac204c1 css-bg-gradient-to-r-6ae7db2 css-from-red-600-5147d9e css-to-red-700-d6d75ea css-text-white-72a4c7c css-font-semibold-e83a704 css-text-base-4ee7349 css-sm-text-lg-12f38ca css-transition-all-0fe7d7d css-shadow-lg-06bbb43",
  trailerIcon: "css-size-18-b59bcb7",
  
  // Middle + Right columns
  rightColumns: "css-lg-col-span-2-422d100 css-order-2-ef72121 css-md-order-2-fcd5924",
  
  // Showtimes section
  showtimesCard: "css-bg-gradient-to-br-39b2e00 css-from-black-80-029b4f6 css-to-gray-900-0123d10 css-rounded-2xl-68f2db6 css-p-4-8e63407 css-sm-p-8-e91f4cd css-border-ca6bcd4 css-border-red-700-20-a41e2f8 css-shadow-2xl-14e4660 css-mb-6-b6777c6",
  showtimesTitle: "css-text-2xl-3febee0 css-sm-text-4xl-a8e2faf css-font-bold-69450ef css-mb-6-b6777c6 css-text-red-300-1529a70 css-text-center-ca6bf63 css-flex-60fbb77 css-items-center-3960ffc css-justify-center-86843cf css-gap-2-77a2a20",
  showtimesIcon: "css-h-6-f6fe902 css-w-6-7ec10f8",
  
  // Day selection
  daySelection: "css-flex-60fbb77 css-overflow-x-auto-1384f66 css-gap-2-77a2a20 css-mb-4-da01985 css-pb-2-f4cc511 css-sm-mb-8-ed23faa css-sm-pb-0-fc65f41 scrollbar-hide",
  dayButton: {
    base: "css-flex-shrink-0-2074a75 css-px-4-f0faeb2 css-sm-px-6-7a9aabf css-py-2-03b4dd7 css-sm-py-3-aa2253d css-rounded-xl-a217b4e css-font-semibold-e83a704 css-transition-all-0fe7d7d css-duration-300-7890552 css-text-sm-fc7473c css-sm-text-base-9bcf466",
    active: "css-bg-red-600-48b76a4 css-text-white-72a4c7c css-shadow-lg-06bbb43 css-transform-dd8ce13 css-scale-105-3f4c965",
    inactive: "css-bg-gray-800-60-3e5f415 css-text-gray-300-5ed47f3 css-hover-bg-gray-700-80-3661986"
  },
  dayName: "css-text-xs-359090c css-sm-text-sm-e2327d1",
  dayDate: "css-text-sm-fc7473c css-sm-text-base-9bcf466",
  
  // Showtimes grid
  showtimesGrid: "css-grid-f3c543a css-grid-cols-2-8e75e3d css-sm-grid-cols-3-ab1b20c css-md-grid-cols-4-d59f314 css-lg-grid-cols-6-76f32b5 css-gap-3-1004c0c css-sm-gap-4-cdaa0b7",
  timeButton: {
    base: "css-px-3-0e17f2b css-sm-px-4-bb7f9a3 css-py-2-03b4dd7 css-sm-py-3-aa2253d css-rounded-xl-a217b4e css-text-sm-fc7473c css-sm-text-lg-12f38ca css-font-semibold-e83a704 css-transition-all-0fe7d7d css-duration-300-7890552 css-border-ca6bcd4 css-flex-60fbb77 css-items-center-3960ffc css-justify-center-86843cf css-gap-2-77a2a20 css-text-center-ca6bf63",
    active: "css-bg-red-600-48b76a4 css-text-white-72a4c7c css-border-red-500-50-0b3c316 css-transform-dd8ce13 css-scale-105-3f4c965",
    inactive: "css-bg-gray-800-40-b06f9cc css-text-gray-200-8aca214 css-border-gray-700-50-a62121c css-hover-bg-red-600-42c2b2c css-hover-text-white-b5a12a1 css-hover-border-red-500-50-f952ff0"
  },
  soldOutBadge: "css-ml-2-c68af99 css-px-2-d5eab21 css-py-0-5-465609a css-rounded-full-ac204c1 css-text-xs-359090c css-bg-red-700-90-c534cc9 css-text-white-72a4c7c css-font-bold-69450ef",
  
  // Proceed button
  proceedButton: "css-mt-4-0ab8667 css-sm-mt-6-98df966 css-text-center-ca6bf63",
  bookButton: "css-px-6-f92d023 css-py-2-5-e7ee55a css-rounded-full-ac204c1 css-bg-gradient-to-r-6ae7db2 css-from-red-600-5147d9e css-to-red-700-d6d75ea css-text-white-72a4c7c css-font-bold-69450ef css-text-base-4ee7349 css-sm-text-lg-12f38ca css-shadow-2xl-14e4660 css-hover-from-red-700-ad3a3b6 css-hover-to-red-800-8833074 css-transition-transform-eadef23 css-transform-dd8ce13 css-hover-scale-105-d698399",
  
  // Cast section
  castCard: "css-bg-gradient-to-br-39b2e00 css-from-black-80-029b4f6 css-to-gray-900-0123d10 css-rounded-2xl-68f2db6 css-p-4-8e63407 css-sm-p-8-e91f4cd css-border-ca6bcd4 css-border-red-700-20-a41e2f8 css-shadow-2xl-14e4660",
  castTitle: "css-text-xl-d5c9b00 css-sm-text-3xl-b6496eb css-font-bold-69450ef css-mb-4-da01985 css-sm-mb-6-e535848 css-text-red-300-1529a70 css-text-center-ca6bf63 css-flex-60fbb77 css-items-center-3960ffc css-justify-center-86843cf css-gap-2-77a2a20",
  castIcon: "css-h-5-cd0d9c5 css-w-5-7247048",
  castGrid: "css-grid-f3c543a css-grid-cols-2-8e75e3d css-sm-grid-cols-3-ab1b20c css-md-grid-cols-3-9a638cf css-lg-grid-cols-4-4558bce css-gap-4-0c3bc98 css-sm-gap-6-022e807",
  castItem: "css-text-center-ca6bf63 css-group-64292b1",
  castImageContainer: "css-relative-d89972f css-mx-auto-0e12dc7 css-mb-3-1bb8832",
  castImage: "css-w-20-ed831a4 css-h-20-0a76988 css-rounded-full-ac204c1 css-object-cover-7d85d0c css-mx-auto-0e12dc7 css-border-2-65935df css-border-red-600-30-f8bbed7 css-group-hover-border-red-400-0e7c0f8 css-transition-colors-ceb69a6",
  castName: "css-font-semibold-e83a704 css-text-base-4ee7349 css-sm-text-lg-12f38ca",
  castRole: "css-text-xs-359090c css-sm-text-sm-e2327d1 css-text-gray-400-a572cdd",
  noCast: "css-text-gray-400-a572cdd css-col-span-full-2c955d1 css-text-center-ca6bf63 css-py-8-a1f611f",
  
  // Story section
  storyCard: "css-bg-gradient-to-br-39b2e00 css-from-black-80-029b4f6 css-to-gray-900-0123d10 css-rounded-2xl-68f2db6 css-p-4-8e63407 css-sm-p-8-e91f4cd css-border-ca6bcd4 css-border-red-700-20-a41e2f8 css-shadow-2xl-14e4660 css-mb-8-a8b152c",
  storyTitle: "css-text-2xl-3febee0 css-sm-text-4xl-a8e2faf css-font-bold-69450ef css-mb-4-da01985 css-sm-mb-6-e535848 css-text-red-300-1529a70 css-text-center-ca6bf63",
  storyText: "css-text-gray-300-5ed47f3 css-leading-relaxed-6b189c6 css-text-base-4ee7349 css-sm-text-lg-12f38ca css-text-center-ca6bf63 css-max-w-4xl-cf3893e css-mx-auto-0e12dc7",
  
  // Director & Producer section
  crewGrid: "css-grid-f3c543a css-grid-cols-1-d7c8339 css-md-grid-cols-2-e4d6f34 css-gap-6-0d304f9 css-mb-8-a8b152c",
  crewCard: "css-bg-gradient-to-br-39b2e00 css-from-black-80-029b4f6 css-to-gray-900-0123d10 css-rounded-2xl-68f2db6 css-p-4-8e63407 css-sm-p-8-e91f4cd css-border-ca6bcd4 css-border-red-700-20-a41e2f8 css-shadow-2xl-14e4660 css-text-center-ca6bf63",
  crewHeader: "css-flex-60fbb77 css-items-center-3960ffc css-justify-center-86843cf css-gap-3-1004c0c css-mb-4-da01985",
  crewIcon: "css-h-5-cd0d9c5 css-w-5-7247048 css-text-red-400-a595d86",
  crewTitle: "css-text-xl-d5c9b00 css-sm-text-3xl-b6496eb css-font-bold-69450ef css-text-red-300-1529a70",
  crewContent: "css-flex-60fbb77 css-flex-col-8dddea0 css-items-center-3960ffc",
  crewImageGrid: "css-flex-60fbb77 css-gap-4-0c3bc98 css-sm-gap-6-022e807 css-items-start-60541e1 css-justify-center-86843cf",
  crewImage: "css-w-20-ed831a4 css-h-20-0a76988 css-sm-w-24-2345334 css-sm-h-24-ac9c8a2 css-rounded-full-ac204c1 css-object-cover-7d85d0c css-border-2-65935df css-border-red-600-30-f8bbed7 css-mb-3-1bb8832 css-sm-mb-4-a2ceaee",
  crewName: "css-font-semibold-e83a704 css-text-base-4ee7349 css-sm-text-xl-998e0b2",
  fallbackAvatar: "css-w-20-ed831a4 css-h-20-0a76988 css-sm-w-24-2345334 css-sm-h-24-ac9c8a2 css-rounded-full-ac204c1 css-bg-gray-700-dbc6e26 css-flex-60fbb77 css-items-center-3960ffc css-justify-center-86843cf css-text-xl-d5c9b00 css-text-gray-300-5ed47f3 css-mb-3-1bb8832 css-sm-mb-4-a2ceaee",
  
  // Trailer modal
  modalOverlay: "css-fixed-7bc5559 css-inset-0-7b7df04 css-bg-black-95-b3da6be css-z-50-181b286 css-flex-60fbb77 css-items-center-3960ffc css-justify-center-86843cf css-p-4-8e63407",
  modalContainer: "css-relative-d89972f css-w-full-6da6a3c css-max-w-6xl-1d4402d",
  closeButton: "css-absolute-da4dbfb css-right-0-d8cdcad css-sm-top-10-3d9109e css-top-6-4e9ee1a css-sm-right-4-50ece11 css-text-white-72a4c7c css-hover-text-red-400-2c231af css-z-10-236812d",
  closeIcon: "css-size-36-09ad467",
  videoContainer: "css-w-full-6da6a3c css-aspect-video-826c947 css-rounded-xl-a217b4e css-overflow-hidden-2cd02d1",
  videoIframe: "css-w-full-6da6a3c css-h-full-668b21a css-rounded-xl-a217b4e",
  
  // Not found state
  notFoundContainer: "css-min-h-screen-793346c css-flex-60fbb77 css-items-center-3960ffc css-justify-center-86843cf css-bg-black-0595c69 css-text-white-72a4c7c",
  notFoundContent: "css-text-center-ca6bf63",
  notFoundTitle: "css-text-2xl-3febee0",
  notFoundLink: "css-mt-4-0ab8667 css-inline-block-bb0c4bf css-text-red-400-a595d86 css-underline-c82b67c"
};

// CSS styles for the MovieDetail component
export const movieDetailCSS = "\n  /* hide default scrollbar on small devices for horizontal scrollers while keeping scrolling usable */\n  .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }\n  .scrollbar-hide::-webkit-scrollbar { display: none; }\n  \n  @media (max-width: 640px) {\n    /* compact title spacing on very small screens */\n    h1 { line-height: 1.05; }\n  }\n\n  /* Custom font for titles */\n  @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&display=swap');\n";

// Add to src/assets/dummyStyles.js
export const movieDetailHStyles = {
  // Page container
  pageContainer: "css-min-h-screen-793346c css-bg-gradient-to-b-24a9e3a css-from-black-3d1591f css-to-gray-900-0123d10 css-text-white-72a4c7c css-py-8-a1f611f css-px-4-f0faeb2",
  
  // Main container
  mainContainer: "css-max-w-7xl-726bb2c css-mx-auto-0e12dc7",
  
  // Header
  headerContainer: "css-flex-60fbb77 css-items-center-3960ffc css-gap-4-0c3bc98 css-mb-6-b6777c6 css-sm-mb-8-ed23faa",
  backButton: "css-inline-flex-52083e7 css-items-center-3960ffc css-gap-2-77a2a20 css-text-red-300-1529a70 css-hover-text-white-b5a12a1 css-transition-colors-ceb69a6 css-px-3-0e17f2b css-py-2-03b4dd7 css-rounded-lg-5f22e64 css-hover-bg-red-900-20-c8b1fb7",
  backButtonText: "css-text-sm-fc7473c css-sm-text-base-9bcf466",
  
  // Movie title
  titleContainer: "css-text-center-ca6bf63 css-mb-6-b6777c6 css-sm-mb-12-d7820a7",
  movieTitle: "css-text-2xl-3febee0 css-sm-text-4xl-a8e2faf css-md-text-5xl-2183f54 css-lg-text-7xl-24c011e css-py-1-660d2ef css-font-bold-69450ef css-tracking-wider-09ace3a css-mb-4-da01985 css-bg-gradient-to-r-6ae7db2 css-from-white-5e223df css-to-gray-300-0cefe26 css-bg-clip-text-6c3c24f css-text-transparent-f8c8e86",
  movieInfoContainer: "css-flex-60fbb77 css-flex-col-8dddea0 css-sm-flex-row-020ba68 css-items-center-3960ffc css-justify-center-86843cf css-gap-3-1004c0c css-sm-gap-6-022e807 css-text-sm-fc7473c css-sm-text-lg-12f38ca css-text-gray-300-5ed47f3",
  rating: "css-flex-60fbb77 css-items-center-3960ffc css-gap-2-77a2a20",
  ratingIcon: "css-h-4-11e59c6 css-w-4-dc7972e css-text-yellow-400-ce4daf6",
  duration: "css-flex-60fbb77 css-items-center-3960ffc css-gap-2-77a2a20",
  durationIcon: "css-h-4-11e59c6 css-w-4-dc7972e css-text-red-400-a595d86",
  genre: "css-px-3-0e17f2b css-py-1-660d2ef css-bg-red-900-40-9749472 css-rounded-full-ac204c1 css-text-red-300-1529a70 css-text-xs-359090c css-sm-text-sm-e2327d1 css-border-ca6bcd4 css-border-red-700-30-fcdaa6a",
  
  // Main grid layout
  mainGrid: "css-grid-f3c543a css-grid-cols-1-d7c8339 css-md-grid-cols-2-e4d6f34 css-lg-grid-cols-3-19d9b25 css-gap-6-0d304f9 css-lg-gap-8-c3054b4 css-mb-8-a8b152c",
  
  // Poster section
  posterContainer: "css-lg-col-span-1-e2a179c css-order-1-ea37b42 css-md-order-1-99c4a5a",
  posterCard: "css-bg-gradient-to-br-39b2e00 css-from-black-80-029b4f6 css-to-gray-900-0123d10 css-rounded-2xl-68f2db6 css-p-4-8e63407 css-sm-p-6-59c7996 css-border-ca6bcd4 css-border-red-700-20-a41e2f8 css-shadow-2xl-14e4660",
  posterImageContainer: "css-relative-d89972f css-overflow-hidden-2cd02d1 css-rounded-xl-a217b4e css-mx-auto-0e12dc7 css-w-full-6da6a3c",
  posterImage: "css-w-full-6da6a3c css-h-full-668b21a css-object-cover-7d85d0c css-rounded-xl-a217b4e css-transition-transform-eadef23 css-duration-300-7890552",
  trailerButton: "css-w-full-6da6a3c css-mt-5-fb77735 css-sm-mt-6-98df966 css-flex-60fbb77 css-items-center-3960ffc css-justify-center-86843cf css-gap-3-1004c0c css-px-5-d139dd0 css-py-3-1b2d54a css-rounded-full-ac204c1 css-bg-gradient-to-r-6ae7db2 css-from-red-600-5147d9e css-to-red-700-d6d75ea css-text-white-72a4c7c css-font-semibold-e83a704 css-text-sm-fc7473c css-sm-text-base-9bcf466 css-transition-all-0fe7d7d css-shadow-lg-06bbb43",
  
  // Showtimes section
  showtimesContainer: "css-lg-col-span-2-422d100 css-order-2-ef72121 css-md-order-2-fcd5924",
  showtimesCard: "css-bg-gradient-to-br-39b2e00 css-from-black-80-029b4f6 css-to-gray-900-0123d10 css-rounded-2xl-68f2db6 css-p-4-8e63407 css-sm-p-8-e91f4cd css-border-ca6bcd4 css-border-red-700-20-a41e2f8 css-shadow-2xl-14e4660 css-mb-6-b6777c6",
  showtimesTitle: "css-text-xl-d5c9b00 css-sm-text-2xl-29bf405 css-md-text-3xl-c58992c css-font-bold-69450ef css-mb-4-da01985 css-sm-mb-6-e535848 css-text-red-300-1529a70 css-text-center-ca6bf63 css-flex-60fbb77 css-items-center-3960ffc css-justify-center-86843cf css-gap-2-77a2a20",
  showtimesTitleIcon: "css-h-6-f6fe902 css-w-6-7ec10f8",
  
  // Day selection
  daySelection: "css-flex-60fbb77 css-overflow-x-auto-1384f66 css-gap-2-77a2a20 css-mb-4-da01985 css-pb-2-f4cc511 css-sm-mb-6-e535848 css-sm-pb-0-fc65f41 scrollbar-hide",
  dayButton: "css-flex-shrink-0-2074a75 css-px-3-0e17f2b css-sm-px-5-cc06a65 css-py-2-03b4dd7 css-sm-py-3-aa2253d css-rounded-xl-a217b4e css-font-semibold-e83a704 css-transition-all-0fe7d7d css-duration-300-7890552 css-text-xs-359090c css-sm-text-sm-e2327d1",
  dayButtonSelected: "css-bg-red-600-48b76a4 css-text-white-72a4c7c css-shadow-lg-06bbb43 css-transform-dd8ce13 css-scale-105-3f4c965",
  dayButtonDefault: "css-bg-gray-800-60-3e5f415 css-text-gray-300-5ed47f3 css-hover-bg-gray-700-80-3661986",
  dayName: "css-text-xs-359090c",
  dayDate: "css-text-sm-fc7473c css-sm-text-base-9bcf466",
  
  // Showtimes grid
  showtimesGrid: "css-grid-f3c543a css-grid-cols-2-8e75e3d css-sm-grid-cols-3-ab1b20c css-md-grid-cols-4-d59f314 css-lg-grid-cols-6-76f32b5 css-gap-3-1004c0c css-sm-gap-4-cdaa0b7",
  showtimeButton: "css-px-2-d5eab21 css-sm-px-3-c20c443 css-py-2-03b4dd7 css-sm-py-3-aa2253d css-rounded-xl-a217b4e css-text-xs-359090c css-sm-text-sm-e2327d1 css-md-text-base-cd83ad2 css-font-semibold-e83a704 css-transition-all-0fe7d7d css-duration-300-7890552 css-border-ca6bcd4 css-flex-60fbb77 css-items-center-3960ffc css-justify-center-86843cf css-gap-2-77a2a20 css-text-center-ca6bf63",
  showtimeButtonSelected: "css-bg-red-600-48b76a4 css-text-white-72a4c7c css-border-red-500-50-0b3c316 css-transform-dd8ce13 css-scale-105-3f4c965",
  showtimeButtonDefault: "css-bg-gray-800-40-b06f9cc css-text-gray-200-8aca214 css-border-gray-700-50-a62121c css-hover-bg-red-600-42c2b2c css-hover-text-white-b5a12a1 css-hover-border-red-500-50-f952ff0",
  soldOutBadge: "css-ml-2-c68af99 css-px-2-d5eab21 css-py-0-5-465609a css-rounded-full-ac204c1 css-text-xs-359090c css-bg-red-700-90-c534cc9 css-text-white-72a4c7c css-font-bold-69450ef",
  
  // No showtimes message
  noShowtimes: "css-col-span-full-2c955d1 css-text-center-ca6bf63 css-text-gray-400-a572cdd css-py-6-940911b",
  
  // Book now button
  bookNowContainer: "css-mt-4-0ab8667 css-sm-mt-6-98df966 css-text-center-ca6bf63",
  bookNowButton: "css-px-5-d139dd0 css-py-2-5-e7ee55a css-rounded-full-ac204c1 css-bg-gradient-to-r-6ae7db2 css-from-red-600-5147d9e css-to-red-700-d6d75ea css-text-white-72a4c7c css-font-bold-69450ef css-text-sm-fc7473c css-sm-text-base-9bcf466 css-shadow-2xl-14e4660 css-hover-from-red-700-ad3a3b6 css-hover-to-red-800-8833074 css-transition-transform-eadef23 css-transform-dd8ce13 css-hover-scale-105-d698399",
  
  // Cast section
  castCard: "css-bg-gradient-to-br-39b2e00 css-from-black-80-029b4f6 css-to-gray-900-0123d10 css-rounded-2xl-68f2db6 css-p-4-8e63407 css-sm-p-8-e91f4cd css-border-ca6bcd4 css-border-red-700-20-a41e2f8 css-shadow-2xl-14e4660",
  castTitle: "css-text-lg-42536e6 css-sm-text-2xl-29bf405 css-font-bold-69450ef css-mb-4-da01985 css-text-red-300-1529a70 css-text-center-ca6bf63 css-flex-60fbb77 css-items-center-3960ffc css-justify-center-86843cf css-gap-2-77a2a20",
  castTitleIcon: "css-h-5-cd0d9c5 css-w-5-7247048",
  castGrid: "css-grid-f3c543a css-grid-cols-2-8e75e3d css-sm-grid-cols-3-ab1b20c css-md-grid-cols-3-9a638cf css-lg-grid-cols-4-4558bce css-gap-4-0c3bc98 css-sm-gap-6-022e807",
  castMember: "css-text-center-ca6bf63 css-group-64292b1",
  castImageContainer: "css-relative-d89972f css-mx-auto-0e12dc7 css-mb-3-1bb8832",
  castImage: "css-w-16-baceed3 css-h-16-acaee62 css-sm-w-20-892b58f css-sm-h-20-b15facb css-rounded-full-ac204c1 css-object-cover-7d85d0c css-mx-auto-0e12dc7 css-border-2-65935df css-border-red-600-30-f8bbed7 css-group-hover-border-red-400-0e7c0f8 css-transition-colors-ceb69a6",
  castName: "css-font-semibold-e83a704 css-text-sm-fc7473c css-sm-text-base-9bcf466",
  castRole: "css-text-xs-359090c css-sm-text-sm-e2327d1 css-text-gray-400-a572cdd",
  noCastMessage: "css-text-gray-400-a572cdd css-col-span-full-2c955d1 css-text-center-ca6bf63 css-py-8-a1f611f",
  
  // Story section
  storyCard: "css-bg-gradient-to-br-39b2e00 css-from-black-80-029b4f6 css-to-gray-900-0123d10 css-rounded-2xl-68f2db6 css-p-4-8e63407 css-sm-p-8-e91f4cd css-border-ca6bcd4 css-border-red-700-20-a41e2f8 css-shadow-2xl-14e4660 css-mb-8-a8b152c",
  storyTitle: "css-text-lg-42536e6 css-sm-text-2xl-29bf405 css-md-text-3xl-c58992c css-font-bold-69450ef css-mb-4-da01985 css-text-red-300-1529a70 css-text-center-ca6bf63",
  storyText: "css-text-gray-300-5ed47f3 css-leading-relaxed-6b189c6 css-text-sm-fc7473c css-sm-text-base-9bcf466 css-md-text-lg-e498c70 css-text-center-ca6bf63 css-max-w-4xl-cf3893e css-mx-auto-0e12dc7",
  
  // Director & Producer section
  crewGrid: "css-grid-f3c543a css-grid-cols-1-d7c8339 css-md-grid-cols-2-e4d6f34 css-gap-6-0d304f9 css-mb-8-a8b152c",
  crewCard: "css-bg-gradient-to-br-39b2e00 css-from-black-80-029b4f6 css-to-gray-900-0123d10 css-rounded-2xl-68f2db6 css-p-4-8e63407 css-sm-p-8-e91f4cd css-border-ca6bcd4 css-border-red-700-20-a41e2f8 css-shadow-2xl-14e4660 css-text-center-ca6bf63",
  crewTitle: "css-text-lg-42536e6 css-sm-text-2xl-29bf405 css-md-text-3xl-c58992c css-font-bold-69450ef css-text-red-300-1529a70 css-flex-60fbb77 css-items-center-3960ffc css-justify-center-86843cf css-gap-3-1004c0c css-mb-4-da01985",
  crewIcon: "css-h-5-cd0d9c5 css-w-5-7247048 css-text-red-400-a595d86",
  crewContent: "css-flex-60fbb77 css-flex-col-8dddea0 css-items-center-3960ffc",
  crewGridInner: "css-flex-60fbb77 css-gap-4-0c3bc98 css-sm-gap-6-022e807 css-items-start-60541e1 css-justify-center-86843cf",
  crewImage: "css-w-20-ed831a4 css-h-20-0a76988 css-sm-w-24-2345334 css-sm-h-24-ac9c8a2 css-rounded-full-ac204c1 css-object-cover-7d85d0c css-border-2-65935df css-border-red-600-30-f8bbed7 css-mb-3-1bb8832 css-sm-mb-4-a2ceaee",
  crewName: "css-font-semibold-e83a704 css-text-sm-fc7473c css-sm-text-base-9bcf466",
  fallbackAvatar: "css-w-20-ed831a4 css-h-20-0a76988 css-sm-w-24-2345334 css-sm-h-24-ac9c8a2 css-rounded-full-ac204c1 css-bg-gray-700-dbc6e26 css-flex-60fbb77 css-items-center-3960ffc css-justify-center-86843cf css-text-xl-d5c9b00 css-text-gray-300-5ed47f3 css-mb-3-1bb8832 css-sm-mb-4-a2ceaee",
  
  // Trailer modal
  trailerModal: "css-fixed-7bc5559 css-inset-0-7b7df04 css-bg-black-95-b3da6be css-z-50-181b286 css-flex-60fbb77 css-items-center-3960ffc css-justify-center-86843cf css-p-4-8e63407",
  trailerContainer: "css-relative-d89972f css-w-full-6da6a3c css-max-w-6xl-1d4402d",
  closeButton: "css-absolute-da4dbfb css-right-0-d8cdcad css-sm-top-10-3d9109e css-top-6-4e9ee1a css-sm-right-4-50ece11 css-text-white-72a4c7c css-hover-text-red-400-2c231af css-z-10-236812d",
  trailerIframe: "css-w-full-6da6a3c css-aspect-video-826c947 css-rounded-xl-a217b4e css-overflow-hidden-2cd02d1",
  iframe: "css-w-full-6da6a3c css-h-full-668b21a css-rounded-xl-a217b4e",
  
  // Not found state
  notFoundContainer: "css-min-h-screen-793346c css-flex-60fbb77 css-items-center-3960ffc css-justify-center-86843cf css-bg-black-0595c69 css-text-white-72a4c7c",
  notFoundContent: "css-text-center-ca6bf63",
  notFoundTitle: "css-text-2xl-3febee0",
  notFoundLink: "css-mt-4-0ab8667 css-inline-block-bb0c4bf css-text-red-400-a595d86 css-underline-c82b67c",
  
  // Custom CSS
  customCSS: "\n    /* hide default scrollbar on small devices for horizontal scrollers while keeping scrolling usable */\n    .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }\n    .scrollbar-hide::-webkit-scrollbar { display: none; }\n\n    /* reduce title spacing on very small screens */\n    @media (max-width: 420px) {\n      h1 { line-height: 1.05; font-size: 1.25rem; }\n    }\n  "
};