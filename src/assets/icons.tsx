import React from "react";

const icons = {
  close: (
    <svg viewBox="0 0 413.348 413.348" xmlns="http://www.w3.org/2000/svg">
      <path d="m413.348 24.354-24.354-24.354-182.32 182.32-182.32-182.32-24.354 24.354 182.32 182.32-182.32 182.32 24.354 24.354 182.32-182.32 182.32 182.32 24.354-24.354-182.32-182.32z" />
    </svg>
  ),
  delete: (
    <svg viewBox="0 0 74 74" xmlns="http://www.w3.org/2000/svg">
      <path d="m56.082 72h-38.164a3.079 3.079 0 0 1 -3.05-2.805l-4.36-52.061a1 1 0 0 1 1-1.083h50.992a1 1 0 0 1 1 1.083l-4.36 52.061a3.079 3.079 0 0 1 -3.058 2.805zm-43.49-53.949 4.27 50.977a1.066 1.066 0 0 0 1.056.972h38.164a1.066 1.066 0 0 0 1.057-.972l4.27-50.977z" />
      <path d="m66.172 18.06h-58.344a2.17 2.17 0 0 1 -2.167-2.167v-5.041a2.169 2.169 0 0 1 2.167-2.167h58.344a2.169 2.169 0 0 1 2.167 2.167v5.042a2.17 2.17 0 0 1 -2.167 2.166zm-58.344-7.375a.167.167 0 0 0 -.167.167v5.042a.167.167 0 0 0 .167.167h58.344a.167.167 0 0 0 .167-.167v-5.042a.167.167 0 0 0 -.167-.167z" />
      <path d="m45.812 10.685h-17.624a1 1 0 0 1 -1-1v-5.067a2.621 2.621 0 0 1 2.618-2.618h14.388a2.621 2.621 0 0 1 2.618 2.618v5.067a1 1 0 0 1 -1 1zm-16.624-2h15.624v-4.067a.618.618 0 0 0 -.618-.618h-14.388a.618.618 0 0 0 -.618.618z" />
      <path d="m47.462 56.03c-.029 0-.059 0-.088 0a1 1 0 0 1 -.909-1.083l2.289-26.131a1 1 0 1 1 1.992.175l-2.288 26.127a1 1 0 0 1 -.996.912z" />
      <path d="m37 56.03a1 1 0 0 1 -1-1v-26.13a1 1 0 1 1 2 0v26.13a1 1 0 0 1 -1 1z" />
      <path d="m26.538 56.03a1 1 0 0 1 -1-.913l-2.284-26.13a1 1 0 1 1 1.992-.175l2.289 26.131a1 1 0 0 1 -.909 1.083c-.026.003-.059.004-.088.004z" />
    </svg>
  ),
  dictionary: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 449.653 449.652">
      <path
        d="M78.35,70.451c0,6.904,5.597,12.5,12.5,12.5h239.534v310.521c0,6.902,5.598,12.5,12.5,12.5c6.903,0,12.5-5.598,12.5-12.5
     V70.451c0-6.904-5.597-12.5-12.5-12.5H90.85C83.947,57.951,78.35,63.548,78.35,70.451z"
      />
      <path
        d="M402.042,0H84.557c-4.139,0-8.008,2.048-10.336,5.47L37.305,59.742c-1.41,2.073-2.164,4.522-2.164,7.029L35.11,409.05
     c0,0.299,0.011,0.595,0.031,0.888v27.215c0,6.904,5.597,12.5,12.5,12.5h298.485c1.51,0,2.957-0.269,4.297-0.758
     c1.517-0.426,2.95-1.136,4.223-2.108l54.992-42.067c3.093-2.364,4.905-6.035,4.905-9.928V12.5C414.542,5.596,408.946,0,402.042,0z
      M389.542,388.615l-47.109,36.037H60.14v-15.599c0-0.297-0.011-0.593-0.031-0.885L60.14,70.622L91.172,25h298.37L389.542,388.615
     L389.542,388.615z"
      />
      <path
        d="M167.417,188.772c-0.938-2.749-3.521-4.596-6.426-4.596h-12.553c-2.909,0-5.492,1.851-6.429,4.605l-35.738,105.182
     c-0.702,2.069-0.361,4.364,0.909,6.137c1.271,1.775,3.334,2.836,5.52,2.836h7.711c2.937,0,5.527-1.873,6.447-4.66l10.096-30.575
     h34.874l10.402,30.63c0.936,2.755,3.52,4.605,6.429,4.605h8.225c2.186,0,4.25-1.062,5.522-2.838
     c1.271-1.778,1.609-4.074,0.903-6.145L167.417,188.772z M142.208,249.66l9.467-27.971l0.038-0.116
     c0.866-2.733,1.724-5.609,2.589-8.686c0.816,2.874,1.729,5.868,2.79,8.98l9.455,27.792L142.208,249.66L142.208,249.66z"
      />
      <path
        d="M259.342,213.926c-9.699,0-18.175,3.136-24.39,8.931v-32.174c0-3.744-3.046-6.79-6.789-6.79h-7.686
     c-1.813,0-3.519,0.706-4.801,1.989c-1.282,1.282-1.988,2.987-1.988,4.801l0.006,105.463c0,3.744,3.046,6.789,6.789,6.789h6.098
     c3.743,0,6.789-3.045,6.789-6.789c0-0.086-0.002-0.174-0.005-0.26c6.055,5.896,14.041,8.877,23.814,8.877
     c10.155,0,20.046-4.268,27.136-11.709c8.047-8.446,12.3-20.437,12.3-34.66c0.096-13.981-4.289-26.149-12.347-34.26
     C277.638,217.456,269.016,213.926,259.342,213.926z M271.311,281.33c-3.342,3.406-7.689,5.062-13.291,5.062
     c-5.318,0-9.387-1.563-12.437-4.778c-7.46-7.868-6.817-22.962-6.812-23.091c0.006-0.092,0.009-0.201,0.011-0.29
     c0.019-1.06,0.664-25.935,19.735-25.935c19.158,0,20.52,25.002,20.565,26.006C279.153,262.438,277.885,274.631,271.311,281.33z"
      />
    </svg>
  ),
  leftArrow: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490.787 490.787">
      <path
        d="M362.671,490.787c-2.831,0.005-5.548-1.115-7.552-3.115L120.452,253.006
 c-4.164-4.165-4.164-10.917,0-15.083L355.119,3.256c4.093-4.237,10.845-4.354,15.083-0.262c4.237,4.093,4.354,10.845,0.262,15.083
 c-0.086,0.089-0.173,0.176-0.262,0.262L143.087,245.454l227.136,227.115c4.171,4.16,4.179,10.914,0.019,15.085
 C368.236,489.664,365.511,490.792,362.671,490.787z"
      />
      <path
        d="M362.671,490.787c-2.831,0.005-5.548-1.115-7.552-3.115L120.452,253.006c-4.164-4.165-4.164-10.917,0-15.083L355.119,3.256
 c4.093-4.237,10.845-4.354,15.083-0.262c4.237,4.093,4.354,10.845,0.262,15.083c-0.086,0.089-0.173,0.176-0.262,0.262
 L143.087,245.454l227.136,227.115c4.171,4.16,4.179,10.914,0.019,15.085C368.236,489.664,365.511,490.792,362.671,490.787z"
      />
    </svg>
  ),
  list: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        d="M492,236H144.262c-11.046,0-20,8.954-20,20s8.954,20,20,20H492c11.046,0,20-8.954,20-20C512,244.954,503.046,236,492,236z
     "
      />
      <path d="M492,86H144.262c-11.046,0-20,8.954-20,20s8.954,20,20,20H492c11.046,0,20-8.954,20-20S503.046,86,492,86z" />
      <path
        d="M492,386H144.262c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20H492c11.046,0,20-8.954,20-20
     C512,394.954,503.046,386,492,386z"
      />
      <circle cx="27" cy="106" r="27" />
      <circle cx="27" cy="256" r="27" />
      <circle cx="27" cy="406" r="27" />
    </svg>
  ),
  rightArrow: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490.8 490.8">
      <path
        d="M135.685,3.128c-4.237-4.093-10.99-3.975-15.083,0.262c-3.992,4.134-3.992,10.687,0,14.82
 l227.115,227.136L120.581,472.461c-4.237,4.093-4.354,10.845-0.262,15.083c4.093,4.237,10.845,4.354,15.083,0.262
 c0.089-0.086,0.176-0.173,0.262-0.262l234.667-234.667c4.164-4.165,4.164-10.917,0-15.083L135.685,3.128z"
      />
      <path
        d="M128.133,490.68c-5.891,0.011-10.675-4.757-10.686-10.648c-0.005-2.84,1.123-5.565,3.134-7.571l227.136-227.115
 L120.581,18.232c-4.171-4.171-4.171-10.933,0-15.104c4.171-4.171,10.933-4.171,15.104,0l234.667,234.667
 c4.164,4.165,4.164,10.917,0,15.083L135.685,487.544C133.685,489.551,130.967,490.68,128.133,490.68z"
      />
    </svg>
  ),
  search: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.005 512.005">
      <path
        d="M505.749,475.587l-145.6-145.6c28.203-34.837,45.184-79.104,45.184-127.317c0-111.744-90.923-202.667-202.667-202.667
     S0,90.925,0,202.669s90.923,202.667,202.667,202.667c48.213,0,92.48-16.981,127.317-45.184l145.6,145.6
     c4.16,4.16,9.621,6.251,15.083,6.251s10.923-2.091,15.083-6.251C514.091,497.411,514.091,483.928,505.749,475.587z
      M202.667,362.669c-88.235,0-160-71.765-160-160s71.765-160,160-160s160,71.765,160,160S290.901,362.669,202.667,362.669z"
      />
    </svg>
  ),
  sort: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.02 32.02">
      <path
        d="M32.02,27.26c0,0.274-0.225,0.5-0.5,0.5c-0.004,0.001-0.012,0-0.021,0h-31c-0.185,0-0.353-0.103-0.438-0.261
   c-0.088-0.161-0.08-0.357,0.02-0.512L14.665,4.488c0.09-0.14,0.241-0.225,0.406-0.229c0.172-0.001,0.32,0.071,0.418,0.205
   L31.838,26.87C31.948,26.965,32.02,27.104,32.02,27.26z"
      />
    </svg>
  ),
  speaker: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        d="M296.16,54.142L105.073,170.705H0v169.141h105.032l191.299,118.012L296.16,54.142z M94.253,309.753h-64.16V200.798h64.16
     V309.753z M124.346,316.402V194.198l141.743-86.462l0.124,296.186L124.346,316.402z"
      />
      <path
        d="M445.06,97.169l-20.993,21.563c37.299,36.311,57.839,84.873,57.839,136.741c0,51.672-20.408,100.104-57.465,136.375
     l21.049,21.506C488.38,371.374,512,315.304,512,255.471C512,195.413,488.227,139.193,445.06,97.169z"
      />
      <path
        d="M399.602,136.961l-20.342,22.178c26.984,24.75,42.461,59.863,42.461,96.334c0,36.278-15.342,71.265-42.09,95.986
     l20.426,22.099c32.892-30.401,51.757-73.442,51.757-118.087C451.813,210.591,432.782,167.395,399.602,136.961z"
      />
      <path
        d="M353.386,176.586l-18.691,23.585c17.056,13.517,26.838,33.673,26.838,55.302c0,21.448-9.647,41.499-26.467,55.011
     l18.845,23.462c23.968-19.253,37.715-47.855,37.715-78.472C391.627,224.598,377.69,195.845,353.386,176.586z"
      />
    </svg>
  ),
  trash: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        d="M331,61V0H181v61H31v90h30v361h390V151h30V61H331z M211,30h90v31h-90V30z M421,482H91V151h330V482z M451,121H61V91h390
     V121z"
      />
      <rect x="241" y="181" width="30" height="271" />
      <rect x="151" y="181" width="30" height="271" />
      <rect x="331" y="181" width="30" height="271" />
    </svg>
  ),
};

export default icons;
